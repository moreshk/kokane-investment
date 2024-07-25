"use client";

import React from "react";
import Link from "next/link";
import { OptionPayoffChart } from "../components/OptionPayoffChart";
// const OptionPayoffChart = ({ type }: { type: 'call' | 'put' }) => {

export default function OptionTradingExplained() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <article className="prose lg:prose-xl max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Understanding Options Trading: A Beginner&apos;s Guide
        </h1>

        <p className="text-gray-800 mb-6">
          In the world of financial markets, options trading stands out as both
          a powerful tool and a complex puzzle. Whether you&apos;re looking to
          hedge your investments or aiming for high returns, understanding
          options is crucial. Let&apos;s embark on this journey of financial
          discovery, starting with the basics and moving towards more advanced
          concepts.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Futures Contracts: The Foundation
        </h2>

        <p className="text-gray-800 mb-4">
          Before we dive into options, let&apos;s understand futures contracts.
          Imagine you&apos;re a farmer growing wheat. You&apos;re worried about
          the price of wheat dropping by the time your crop is ready. On the
          other hand, a bread company is concerned about wheat prices rising.
          Enter futures contracts.
        </p>

        <p className="text-gray-800 mb-4">
          A futures contract is an agreement to buy or sell an asset at a
          predetermined price on a specific future date. In our example, the
          farmer and the bread company could enter into a futures contract,
          setting a price for wheat delivery in six months. This gives both
          parties certainty – the farmer knows how much they&apos;ll earn, and
          the company knows its costs.
        </p>

        <p className="text-gray-800 mb-4">Futures serve two main purposes:</p>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800">
            Hedging: Protecting against price fluctuations
          </li>
          <li className="text-gray-800">
            Speculation: Betting on future price movements
          </li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Options: Adding Flexibility to the Mix
        </h2>

        <p className="text-gray-800 mb-4">
          Now, let&apos;s step into the world of options. An option is a
          contract that gives the buyer the right, but not the obligation, to
          buy (CALL) or sell (PUT) an asset at a predetermined price within a
          specific timeframe.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          CALL Options: Betting on Rising Prices
        </h3>

        <p className="text-gray-800 mb-4">
          A CALL option is like having a coupon for a discount on future
          purchases. Let&apos;s say you have a coupon to buy a TV for ₹50,000,
          valid for the next month. If the TV&apos;s price rises to ₹55,000,
          your coupon becomes valuable. If it drops to ₹45,000, you simply
          don&apos;t use the coupon.
        </p>

        <OptionPayoffChart type="call" />

        <p className="text-gray-800 mt-4 mb-4">
          The chart above shows the profit/loss profile of a CALL option with a
          strike price of ₹50,000 and a premium of ₹2,000. The blue area
          represents profit, while the area below the red line represents a
          loss. As the stock price increases beyond the strike price, the profit
          potential is unlimited, while the maximum loss is limited to the
          premium paid.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          PUT Options: Insurance Against Falling Prices
        </h3>

        <p className="text-gray-800 mb-4">
          A PUT option is like an insurance policy. Imagine you have insurance
          that guarantees you can sell your car for ₹5 lakhs in the next year.
          If the car&apos;s value drops to ₹4 lakhs, you&apos;re protected. If
          it rises to ₹6 lakhs, you simply don&apos;t use the insurance.
        </p>

        <OptionPayoffChart type="put" />

        <p className="text-gray-800 mt-4 mb-4">
          This chart illustrates the profit/loss profile of a PUT option with a
          strike price of ₹500,000 and a premium of ₹20,000. The green area
          represents profit, while the area above the red line represents a
          loss. As the price decreases below the strike price, the profit
          increases, while the maximum loss is limited to the premium paid if
          the stock price rises.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Practical Uses of Options
        </h2>

        <p className="text-gray-800 mb-4">
          Options serve several practical purposes:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800">
            Hedging: Protecting investments against adverse price movements
          </li>
          <li className="text-gray-800">
            Income Generation: Selling options to collect premiums
          </li>
          <li className="text-gray-800">
            Speculation: Betting on price movements with limited capital
          </li>
        </ul>

        <p className="text-gray-800 mb-4">
          For instance, a mutual fund holding stocks might buy PUT options to
          protect against a market crash. An investor might sell CALL options on
          stocks they own to generate extra income.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          The Allure of Options Trading
        </h2>

        <p className="text-gray-800 mb-4">
          Options trading can be incredibly attractive due to its potential for
          high returns with relatively small capital. Here&apos;s why:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800">
            Leverage: Control a large amount of stock with a small investment
          </li>
          <li className="text-gray-800">
            Limited Risk: You can&apos;t lose more than the premium paid (for
            buyers)
          </li>
          <li className="text-gray-800">
            Flexibility: Profit from rising, falling, or stable markets
          </li>
        </ul>

        <p className="text-gray-800 mb-4">
          Imagine being able to control 100 shares of a ₹1000 stock for just
          ₹5000 instead of ₹100,000. That&apos;s the power of options.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          The Reality Check: High Risk and Retail Losses
        </h2>

        <p className="text-gray-800 mb-4">
          While the potential for high returns is real, it&apos;s crucial to
          understand the risks. In India, nearly 90% of retail traders lose
          money in options trading. Why?
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800">
            Time Decay: Options lose value as they approach expiration
          </li>
          <li className="text-gray-800">
            Volatility: Rapid price changes can lead to quick losses
          </li>
          <li className="text-gray-800">
            Lack of Knowledge: Many trade without fully understanding options
          </li>
          <li className="text-gray-800">
            Overtrading: The ease of trading often leads to excessive
            risk-taking
          </li>
        </ul>

        <p className="text-gray-800 mb-4">
          Options trading is like walking a tightrope. It requires skill,
          knowledge, and a strong stomach for risk. While the rewards can be
          high, the losses can be swift and severe.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Conclusion: Knowledge is Power
        </h2>

        <p className="text-gray-800 mb-4">
          Options trading can be a powerful tool in your investment arsenal, but
          it&apos;s not for everyone. If you decide to venture into this world,
          arm yourself with knowledge. Study, practice with paper trading, and
          start small. Remember, in options trading, slow and steady often wins
          the race.
        </p>

        <p className="text-gray-800 mb-4">
          Whether you use options for hedging, income generation, or carefully
          calculated speculation, always remember: With great power comes great
          responsibility. Trade wisely!
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
