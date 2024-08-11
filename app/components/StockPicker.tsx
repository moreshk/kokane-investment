'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

type Stock = {
    name: string;
    symbol: string;
    openPrice?: number;
  }
  

type Props = {
  existingPicks: string[]
}

export default function StockPicker({ existingPicks }: Props) {
  const [stocks, setStocks] = useState<Stock[]>([])
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' } | null>(null)
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState<Stock[]>([])
  const [allStocks, setAllStocks] = useState<Stock[]>([])

  useEffect(() => {
    fetch('/NSE200.csv')
      .then(response => response.text())
      .then(async (data) => {
        const parsedStocks = data.split('\n').slice(1).map(line => {
          const [name, , symbol] = line.split(',')
          return { name, symbol }
        }).filter(stock => stock.name && stock.symbol)
        setAllStocks(parsedStocks)
        
        // Set existing picks with prices
        const existingStocks = await Promise.all(
          parsedStocks
            .filter(stock => existingPicks.includes(stock.symbol))
            .map(async (stock) => {
              const openPrice = await fetchStockPrice(stock.symbol);
              return { ...stock, openPrice };
            })
        );
        setStocks(existingStocks);
      })
  }, [existingPicks])

  const addStock = async (stock: Stock) => {
    if (stocks.length < 3 && !stocks.some(s => s.symbol === stock.symbol)) {
      const openPrice = await fetchStockPrice(stock.symbol);
      const stockWithPrice = { ...stock, openPrice };
      setStocks([...stocks, stockWithPrice]);
      setInputValue('');
      setSuggestions([]);
      setMessage(null);
    } else if (stocks.length >= 3) {
      setMessage({ text: 'You can only pick up to 3 stocks per day', type: 'error' });
    } else {
      setMessage({ text: 'This stock is already in your picks', type: 'error' });
    }
  }

  const removeStock = (symbol: string) => {
    setStocks(stocks.filter(s => s.symbol !== symbol))
    setMessage(null)
  }

  const savePicks = async () => {
    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        setMessage({ text: 'User not authenticated', type: 'error' })
        return
      }

      const today = new Date().toISOString().split('T')[0]

      // Delete existing picks for today
      await supabase
        .from('stock_picks')
        .delete()
        .eq('user_id', user.id)
        .eq('pick_date', today)

         // Fetch current prices and insert new picks
    const picksWithPrices = await Promise.all(stocks.map(async (stock) => {
        const openPrice = await fetchStockPrice(stock.symbol);
        return {
          user_id: user.id,
          stock_symbol: stock.symbol,
          pick_date: today,
          open_price: openPrice
        };
      }));
  
      // Insert new picks
    //   const { error } = await supabase.from('stock_picks').insert(
    //     stocks.map(stock => ({
    //       user_id: user.id,
    //       stock_symbol: stock.symbol,
    //       pick_date: today
    //     }))
    //   )
    const { error } = await supabase.from('stock_picks').insert(picksWithPrices);


      if (error) throw error

      setMessage({ text: 'Picks saved successfully!', type: 'success' })
    } catch (error) {
      setMessage({ text: `Error saving picks: ${(error as Error).message || 'Unknown error'}`, type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  const fetchStockPrice = async (symbol: string): Promise<number> => {
    try {
      const response = await fetch(`/api/stockData?symbol=${symbol}`);
      const data = await response.json();
      return data.price;
    } catch (error) {
      console.error(`Error fetching price for ${symbol}:`, error);
      return 0; // Return 0 if unable to fetch price
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    if (value.length > 1) {
      const filtered = allStocks.filter(stock => 
        stock.name.toLowerCase().includes(value.toLowerCase()) ||
        stock.symbol.toLowerCase().includes(value.toLowerCase())
      )
      setSuggestions(filtered.slice(0, 5))
    } else {
      setSuggestions([])
    }
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Pick up to 3 stocks for today</h2>
      {message && (
        <div className={`mb-4 px-4 py-3 rounded relative ${
          message.type === 'error' ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'
        }`} role="alert">
          <span className="block sm:inline">{message.text}</span>
        </div>
      )}
      <div className="relative mb-4">
        <input 
          type="text" 
          placeholder="Search for a stock"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
        />
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
            {suggestions.map(stock => (
              <li 
                key={stock.symbol}
                className="p-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0 text-gray-800"
                onClick={() => addStock(stock)}
              >
                {stock.name} ({stock.symbol})
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <ul className="mb-4">
        {stocks.map(stock => (
          <li key={stock.symbol} className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2 text-base text-gray-800">
            <span>{stock.name}</span>
          </li>
        ))}
      </ul> */}

<ul className="mb-4">
  {stocks.map(stock => (
    <li key={stock.symbol} className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2 text-base text-gray-800">
      <span>{stock.name}</span>
      {stock.openPrice !== undefined && (
        <span className="font-semibold">₹{stock.openPrice.toFixed(2)}</span>
      )}
    </li>
  ))}
</ul>
      <button 
        onClick={savePicks}
        className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
        disabled={loading || stocks.length === 0}
      >
        {loading ? 'Saving...' : 'Save Picks'}
      </button>
    </div>
  )
}