'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface StockData {
  x: Date;
  y: [number, number, number, number];
}

const timePeriods = [
  { value: 1, label: '1 Day' },
  { value: 3, label: '3 Days' },
  { value: 7, label: '7 Days' },
  { value: 14, label: '14 Days' },
  { value: 30, label: '30 Days' },
  { value: 60, label: '60 Days' },
  { value: 90, label: '90 Days' },
  { value: 180, label: '180 Days' },
  { value: 365, label: '1 Year' },
];

const candlePeriods = [
  { value: '1min', label: '1 Minute' },
  { value: '5min', label: '5 Minutes' },
  { value: '15min', label: '15 Minutes' },
  { value: '30min', label: '30 Minutes' },
  { value: '1hour', label: '1 Hour' },
  { value: '1day', label: '1 Day' },
];

const StockChart: React.FC = () => {
    const [ticker, setTicker] = useState('');
    const [stockData, setStockData] = useState<StockData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [timePeriod, setTimePeriod] = useState(30);
    const [candlePeriod, setCandlePeriod] = useState('1day');
    const [currentTicker, setCurrentTicker] = useState('');
  
    const fetchStockData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/stockData?symbol=${ticker}&period=${timePeriod}&interval=${candlePeriod}`);
        if (!response.ok) {
          throw new Error('Failed to fetch stock data');
        }
        const data = await response.json();
        setStockData(data);
        setCurrentTicker(ticker);
      } catch (err) {
        setError('Error fetching stock data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      fetchStockData();
    };

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'candlestick' as const,
      height: '80vh', // Increased height
    },
    title: {
      text: `${ticker} Stock Price`,
      align: 'left',
    },
    xaxis: {
      type: 'category' as const,
      tickAmount: 10,
      labels: {
        rotate: -45,
        rotateAlways: true,
        formatter: function(val) {
          return val && typeof val === 'string' ? val : '';
        }
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '12px',
      },
      x: {
        formatter: function(val) {
          return val && typeof val === 'string' ? val : '';
        }
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#3C90EB',
          downward: '#DF7D46'
        }
      }
    },
  };

  const series = [{
    data: stockData.map((item) => ({
      x: item.x instanceof Date ? item.x.toLocaleDateString() : item.x,
      y: item.y
    }))
  }];


  return (
    <div className="mt-8 w-full max-w-4xl mx-auto px-4 h-screen">
      <form onSubmit={handleSubmit} className="mb-4 flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="Enter ticker symbol"
          className="border border-gray-300 rounded px-2 py-1 flex-grow text-gray-800 placeholder-gray-500"
        />
        <select
          value={timePeriod}
          onChange={(e) => setTimePeriod(Number(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 text-gray-800"
        >
          {timePeriods.map((period) => (
            <option key={period.value} value={period.value}>
              {period.label}
            </option>
          ))}
        </select>
        <select
          value={candlePeriod}
          onChange={(e) => setCandlePeriod(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-gray-800"
        >
          {candlePeriods.map((period) => (
            <option key={period.value} value={period.value}>
              {period.label}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 w-full sm:w-auto"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {stockData.length > 0 && (
        <div className="w-full h-[calc(100vh-200px)] overflow-x-auto">
          <Chart
            options={{
              ...options,
              title: { ...options.title, text: `${currentTicker} Stock Price` },
            }}
            series={series}
            type="candlestick"
            width="100%"
          />
        </div>
      )}
    </div>
  );
};
export default StockChart;