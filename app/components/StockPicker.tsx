'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'

export default function StockPicker() {
  const [stocks, setStocks] = useState<string[]>([])
  const [message, setMessage] = useState<{ text: string; type: 'error' | 'success' } | null>(null)
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const addStock = (symbol: string) => {
    const trimmedSymbol = symbol.trim().toUpperCase()
    if (trimmedSymbol && stocks.length < 3 && !stocks.includes(trimmedSymbol)) {
      setStocks([...stocks, trimmedSymbol])
      setInputValue('')
      setMessage(null)
    } else if (stocks.length >= 3) {
      setMessage({ text: 'You can only pick up to 3 stocks per day', type: 'error' })
    } else if (stocks.includes(trimmedSymbol)) {
      setMessage({ text: 'This stock is already in your picks', type: 'error' })
    }
  }

  const removeStock = (symbol: string) => {
    setStocks(stocks.filter(s => s !== symbol))
    setMessage(null)
  }

  const savePicks = async () => {
    console.log('savePicks function called')
    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      console.log('User:', user)

      if (!user) {
        setMessage({ text: 'User not authenticated', type: 'error' })
        return
      }

      const today = new Date().toISOString().split('T')[0]

      console.log('Attempting to save picks:', stocks)

      const { data, error } = await supabase.from('stock_picks').insert(
        stocks.map(stock => ({
          user_id: user.id,
          stock_symbol: stock,
          pick_date: today
        }))
      )

      if (error) {
        console.error('Supabase error:', error)
        throw error
      }

      console.log('Picks saved successfully:', data)

      setStocks([])
      setMessage({ text: 'Picks saved successfully!', type: 'success' })
    } catch (error) {
        console.error('Error in savePicks:', error)
        setMessage({ text: `Error saving picks: ${(error as Error).message || 'Unknown error'}`, type: 'error' })
      } finally {
        setLoading(false)
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
      <div className="flex mb-4">
        <input 
          type="text" 
          placeholder="Enter stock symbol"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow border border-gray-300 rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addStock(inputValue)
            }
          }}
        />
        <button 
          onClick={() => addStock(inputValue)}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
      <ul className="mb-4">
        {stocks.map(stock => (
          <li key={stock} className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
            {stock}
            <button 
              onClick={() => removeStock(stock)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
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
      {/* Debug output */}
      <pre className="mt-4 text-xs text-gray-500 overflow-auto">
        {JSON.stringify({ stocks, loading, message, inputValue }, null, 2)}
      </pre>
    </div>
  )
}