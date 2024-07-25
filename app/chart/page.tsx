import React from 'react';
import StockChart from '../components/StockChart';

export default function StockChartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold mb-6">Stock Chart</h1> */}
      <StockChart />
    </div>
  );
}