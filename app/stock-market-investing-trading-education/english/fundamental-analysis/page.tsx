import React from "react";
import Link from "next/link";

export default function FundamentalAnalysisIndiaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <article className="prose lg:prose-xl max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Fundamental Analysis in Indian Markets: A Simple Guide
        </h1>

        <p className="text-gray-800 mb-6">
          Imagine you&apos;re buying a car. You wouldn&apos;t just look at its shiny exterior, right? You&apos;d check the engine, mileage, and history too. That&apos;s what fundamental analysis is like in the stock market - it&apos;s about looking under the hood of a company before investing in it. Let&apos;s explore how this works in the Indian stock market, using simple terms and examples.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Key Numbers to Look At (Think of these as a company&apos;s report card)
        </h2>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800">
            <strong>Price-to-Earnings (P/E) Ratio</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>What it is: How much you&apos;re paying for each rupee of the company&apos;s profit.</li>
              <li>Example: If a stock costs ₹100 and the company earns ₹5 per share, the P/E ratio is 20 (100 ÷ 5).</li>
              <li>Think of it like: The number of years it would take the company to earn back your investment.</li>
            </ul>
          </li>
          <li className="text-gray-800">
            <strong>Price-to-Book (P/B) Ratio</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>What it is: The price of the stock compared to the company&apos;s book value (what it owns minus what it owes).</li>
              <li>Think of it like: Buying a house. Is the market price higher or lower than the actual value of the building and land?</li>
            </ul>
          </li>
          <li className="text-gray-800">
            <strong>Earnings Per Share (EPS)</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>What it is: How much profit the company earns for each share.</li>
              <li>Example: If a company earns ₹100 crore profit and has 10 crore shares, EPS is ₹10.</li>
              <li>Think of it like: Your share of the company&apos;s piggy bank.</li>
            </ul>
          </li>
          <li className="text-gray-800">
            <strong>Debt-to-Equity (D/E) Ratio</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>What it is: How much the company owes compared to what it owns.</li>
              <li>Think of it like: Comparing your home loan to your savings. Too much loan (debt) can be risky.</li>
            </ul>
          </li>
          <li className="text-gray-800">
            <strong>Return on Equity (ROE)</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>What it is: How efficiently the company uses its money to generate profit.</li>
              <li>Think of it like: How good the company is at turning your investment into more money.</li>
            </ul>
          </li>
          <li className="text-gray-800">
            <strong>Dividend Yield</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>What it is: The percentage of the stock price that the company pays as dividends.</li>
              <li>Think of it like: The interest rate on a savings account, but for stocks.</li>
            </ul>
          </li>
          <li className="text-gray-800">
            <strong>Promoter Holding</strong>:
            <ul className="list-disc pl-6 mb-2">
              <li>What it is: How much of the company is owned by its founders or main owners.</li>
              <li>Think of it like: How much skin in the game the owners have. If they own a lot, they&apos;re likely to work hard to make the company successful.</li>
            </ul>
          </li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Where to Find This Information
        </h2>

        <p className="text-gray-800 mb-4">
          It&apos;s like looking for recipes - there are many sources:
        </p>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800">Company websites: Look for &quot;Investor Relations&quot; sections.</li>
          <li className="text-gray-800">Stock exchange websites: BSE and NSE are like the big markets for stocks in India.</li>
          <li className="text-gray-800">Financial websites: Sites like Moneycontrol or Screener.in are like encyclopedias for stock information.</li>
          <li className="text-gray-800">SEBI filings: These are official documents companies have to submit, like submitting your tax returns.</li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          When Companies Share This Information
        </h2>

        <p className="text-gray-800 mb-4">
          Companies have a schedule for sharing their report cards:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800">Every three months (quarterly)</li>
          <li className="text-gray-800">Once a year (annual report)</li>
          <li className="text-gray-800">Twice a year (half-yearly results)</li>
          <li className="text-gray-800">Every three months they also tell who owns how much of the company (shareholding pattern)</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Special Things About Indian Markets
        </h2>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800">
            <strong>Promoter Holding</strong>: In India, we often like it when the founders own a big part of the company. It&apos;s like the chef eating at their own restaurant - a good sign!
          </li>
          <li className="text-gray-800">
            <strong>FII/DII Holdings</strong>: These are like big, professional investors. If they&apos;re buying, it&apos;s often seen as a good sign.
          </li>
          <li className="text-gray-800">
            <strong>Family Businesses</strong>: Many Indian companies are family-owned. It&apos;s important to check if they&apos;re running the company well.
          </li>
          <li className="text-gray-800">
            <strong>Rules and Regulations</strong>: Some industries in India have lots of rules. For example, banks and pharmaceutical companies have to follow strict guidelines.
          </li>
          <li className="text-gray-800">
            <strong>SEBI</strong>: This is like the referee for the stock market. They make sure everyone plays fair.
          </li>
          <li className="text-gray-800">
            <strong>Taxes</strong>: Remember, taxes can take a bite out of company profits. Recent changes like GST have affected how companies operate.
          </li>
          <li className="text-gray-800">
            <strong>NIFTY and SENSEX</strong>: These are like the captains of two teams in the stock market. They give you an idea of how the overall market is doing.
          </li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          How to Do Fundamental Analysis
        </h2>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800">
            <strong>Read Financial Statements</strong>: It&apos;s like checking the company&apos;s bank statements and budget.
          </li>
          <li className="text-gray-800">
            <strong>Look at the Big Picture</strong>: Is the economy doing well? Is the company&apos;s industry growing?
          </li>
          <li className="text-gray-800">
            <strong>Check Out the Management</strong>: Are the people running the company doing a good job?
          </li>
          <li className="text-gray-800">
            <strong>Understand the Company&apos;s Strengths</strong>: What makes this company special compared to others?
          </li>
          <li className="text-gray-800">
            <strong>Study the Industry</strong>: Is this a good time for this type of business?
          </li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Wrapping Up
        </h2>

        <p className="text-gray-800 mb-4">
          Fundamental analysis is like being a detective in the stock market. You&apos;re gathering clues about a company to decide if it&apos;s a good investment. Remember, it&apos;s not just about the numbers - the story behind the numbers is important too.
        </p>

        <p className="text-gray-800 mb-4">
          By understanding these basics, you&apos;re better equipped to make smart investment decisions in the Indian stock market. Happy investigating!
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