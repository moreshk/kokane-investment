import React from "react";
import Link from "next/link";

export default function TypesOfTradingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <article className="prose lg:prose-xl max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Types of Trading in Stock Markets: A Comprehensive Guide
        </h1>

        <p className="text-gray-800 mb-6">
          The stock market offers various trading strategies to suit different investor profiles, risk appetites, and financial goals. Let&apos;s explore three main types of trading: long-term value investing, momentum or swing trading, and intraday trading.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          1. Long-Term Value Investing
        </h2>

        <p className="text-gray-800 mb-4">
          Long-term value investing is often considered the simplest and most conservative approach to stock market trading. It involves buying good quality stocks that are undervalued and holding them for a relatively long period until they reach or exceed their fair market value.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Key Characteristics:
        </h3>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800">Focus on fundamental analysis to determine good picks</li>
          <li className="text-gray-800">Lowest amount of risk among trading strategies</li>
          <li className="text-gray-800">Can take longer to deliver returns</li>
          <li className="text-gray-800">Relies on the market correcting price discrepancies</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          2. Momentum or Swing Trading
        </h2>

        <p className="text-gray-800 mb-4">
          Momentum or swing trading is a more active approach that aims to capitalize on short to medium-term price movements. Traders identify stocks that are potentially oversold or overbought and take an opposite position.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Key Characteristics:
        </h3>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800">Places more emphasis on technical analysis</li>
          <li className="text-gray-800">Uses various indicators to determine good trades</li>
          <li className="text-gray-800">Can bet on both sides of market movement (long and short)</li>
          <li className="text-gray-800">Higher risk and potential returns compared to value investing</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Understanding Short Selling:
        </h3>

        <p className="text-gray-800 mb-4">
          Short selling allows traders to profit from falling stock prices. Here&apos;s how it works:
        </p>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800">Borrow shares from a broker</li>
          <li className="text-gray-800">Sell the borrowed shares at the current high price</li>
          <li className="text-gray-800">Wait for the stock price to fall</li>
          <li className="text-gray-800">Buy back the shares at a lower price</li>
          <li className="text-gray-800">Return the borrowed shares to the lender</li>
          <li className="text-gray-800">Profit from the difference between sell and buy prices</li>
        </ol>

        <p className="text-gray-800 mb-4">
          <strong>Note:</strong> Shorting can be very risky because if the price goes up rather than down, you can suffer huge losses which are, in theory, unlimited.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          3. Intraday Trading
        </h2>

        <p className="text-gray-800 mb-4">
          Intraday trading has the highest risk among the three types. Traders buy and sell within the same day (or maximum a couple of days).
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Key Characteristics:
        </h3>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800">Often involves option trading</li>
          <li className="text-gray-800">Allows for high returns with relatively low amounts of capital</li>
          <li className="text-gray-800">Considered extremely difficult to master successfully</li>
          <li className="text-gray-800">Highest risk among the three types of trading</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Choosing Your Trading Strategy
        </h2>

        <p className="text-gray-800 mb-4">
          It&apos;s important to understand your appetite for risk and your personality before determining what is a good trading strategy for you. Consider the following factors:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800">Your risk tolerance</li>
          <li className="text-gray-800">Available time for market analysis and trading</li>
          <li className="text-gray-800">Your personality (patient vs. action-oriented)</li>
          <li className="text-gray-800">Financial goals and investment horizon</li>
          <li className="text-gray-800">Level of trading knowledge and experience</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Conclusion
        </h2>

        <p className="text-gray-800 mb-4">
          Understanding different trading strategies is crucial for success in the stock market. Whether you choose long-term value investing, momentum trading, or intraday trading, it&apos;s essential to align your strategy with your personal goals and risk tolerance.
        </p>

        <p className="text-gray-800 mb-4">
          <strong>Remember:</strong> Never trade more than your ability to lose. Start with a conservative approach and gradually increase your risk exposure as you gain experience and confidence in your trading abilities.
        </p>
      </article>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}