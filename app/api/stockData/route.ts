import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol');
  const period = searchParams.get('period') || '30d';
  const interval = searchParams.get('interval') || '1d';

  if (!symbol) {
    return NextResponse.json({ error: 'Symbol is required' }, { status: 400 });
  }

  try {
    const response = await axios.get(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=${period}&interval=${interval}`
    );

    const data = response.data.chart.result[0];
    const timestamps = data.timestamp;
    const quotes = data.indicators.quote[0];

    const formattedData = timestamps.map((timestamp: number, index: number) => ({
      x: new Date(timestamp * 1000).toISOString(),
      y: [
        quotes.open[index],
        quotes.high[index],
        quotes.low[index],
        quotes.close[index],
      ],
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return NextResponse.json({ error: 'Failed to fetch stock data' }, { status: 500 });
  }
}