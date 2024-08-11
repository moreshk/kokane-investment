import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol');

  if (!symbol) {
    return NextResponse.json({ error: 'Symbol is required' }, { status: 400 });
  }

  // Add '.NS' suffix to the symbol
  const symbolWithSuffix = `${symbol}.NS`;

  try {
    console.log(`Fetching data for symbol: ${symbolWithSuffix}`);
    const response = await axios.get(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbolWithSuffix}`
    );


    console.log('Response received:', response.data);
    const price = response.data.chart.result[0].meta.regularMarketPrice;
    return NextResponse.json({ price });
  } catch (error) {
    console.error('Detailed error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Failed to fetch stock data', details: errorMessage }, { status: 500 });
  }
}