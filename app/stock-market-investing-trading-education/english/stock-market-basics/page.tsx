import React from "react";
import Link from "next/link";

export default function StockMarketBasicsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <article className="prose lg:prose-xl max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Stock Market Basics: Understanding Shares, Ownership, and Capital Formation
        </h1>

        <p className="text-gray-800 mb-6">
          Have you ever wondered how businesses raise money to start or expand their operations? Or perhaps you&apos;ve heard terms like &quot;shares,&quot; &quot;stock market,&quot; and &quot;IPO&quot; but weren&apos;t quite sure what they meant? This article breaks down the basics of the stock market and explains how it plays a crucial role in business growth and economic development. We&apos;ll follow the journey of Rajesh Patel, an ambitious entrepreneur from Mumbai, to illustrate these concepts.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          The Need for Capital: Rajesh&apos;s Dream
        </h2>

        <p className="text-gray-800 mb-4">
          Rajesh Patel has a brilliant idea for a new chai cafe chain called &quot;ChaiTech.&quot; He envisions a modern twist on traditional chai shops, catering to young professionals. Rajesh is confident it&apos;ll be a hit, but there&apos;s one big problem: he needs money to get started. This money, used to launch or grow a business, is called &quot;capital.&quot;
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Rajesh&apos;s Options for Capital
        </h3>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800"><strong>Personal Savings</strong>: Rajesh has some savings, but not enough to fully fund his venture.</li>
          <li className="text-gray-800"><strong>Bank Loans</strong>: He approaches several banks, but they&apos;re hesitant due to the risks involved in a new business.</li>
          <li className="text-gray-800"><strong>Investors</strong>: Rajesh considers seeking individuals or companies willing to invest in his idea.</li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          The Concept of Shares
        </h2>

        <p className="text-gray-800 mb-4">
          Realizing he doesn&apos;t have enough personal savings and facing reluctance from banks, Rajesh explores the concept of shares.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          What are Shares?
        </h3>

        <p className="text-gray-800 mb-4">
          Shares represent fractional ownership in a company. When Rajesh offers shares, he&apos;s essentially saying, &quot;I&apos;ll give you a piece of my ChaiTech business in exchange for your money.&quot;
        </p>

        <h4 className="text-lg md:text-xl font-semibold text-gray-800 mt-4 mb-2">
          Example:
        </h4>

        <p className="text-gray-800 mb-4">
          Rajesh calculates that ChaiTech needs ₹50,00,000 to get started. He decides to divide ownership into 50,000 shares, each valued at ₹100. If someone buys 500 shares for ₹50,000, they now own 1% of ChaiTech.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Benefits of Owning Shares
        </h3>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800"><strong>Ownership</strong>: Shareholders become part-owners of the company.</li>
          <li className="text-gray-800"><strong>Appreciation</strong>: If the company grows in value, so do the shares.</li>
          <li className="text-gray-800"><strong>Dividends</strong>: Shareholders may receive a portion of the company&apos;s profits.</li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          The Birth of Stock Markets
        </h2>

        <p className="text-gray-800 mb-4">
          Initially, if a shareholder wanted to sell their shares, they had to find a buyer themselves. This process was inefficient and time-consuming. To solve this problem, centralized exchanges called stock markets were created.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Functions of Stock Markets
        </h3>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800"><strong>Liquidity</strong>: Makes it easy to buy and sell shares quickly.</li>
          <li className="text-gray-800"><strong>Price Discovery</strong>: The constant buying and selling helps determine a fair price for shares.</li>
          <li className="text-gray-800"><strong>Capital Formation</strong>: Helps companies raise money by selling shares to the public.</li>
        </ol>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          The Importance of Liquidity
        </h3>

        <p className="text-gray-800 mb-4">
          Liquidity is a crucial aspect of stock markets that makes investing more attractive:
        </p>

        <ol className="list-decimal pl-6 mb-4">
          <li className="text-gray-800"><strong>Easy Entry and Exit</strong>: Allows investors to buy or sell shares whenever they want.</li>
          <li className="text-gray-800"><strong>Reduced Risk</strong>: Investors can sell their shares quickly without significant loss in value.</li>
          <li className="text-gray-800"><strong>Better Price Discovery</strong>: High liquidity leads to more accurate and fair pricing of shares.</li>
          <li className="text-gray-800"><strong>Increased Investor Confidence</strong>: Knowing they can easily sell their shares gives investors more confidence to buy.</li>
          <li className="text-gray-800"><strong>Attracting More Investors</strong>: The ease of buying and selling attracts more investors, potentially increasing the company&apos;s value and access to capital.</li>
          <li className="text-gray-800"><strong>Lower Transaction Costs</strong>: In a liquid market, the difference between the buying and selling price is usually smaller.</li>
        </ol>

        <h4 className="text-lg md:text-xl font-semibold text-gray-800 mt-4 mb-2">
          Example of Liquidity&apos;s Impact:
        </h4>

        <p className="text-gray-800 mb-4">
          Imagine two scenarios for a ChaiTech investor named Priya:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800"><strong>Low Liquidity</strong>: It takes Priya two weeks to find buyers for her 1,000 shares, selling at various prices, some lower than desired.</li>
          <li className="text-gray-800"><strong>High Liquidity</strong>: Priya can sell all 1,000 shares almost instantly on the stock market at the current market price.</li>
        </ul>

        <p className="text-gray-800 mb-4">
          The high liquidity scenario is clearly more attractive, making investments more appealing and easier for businesses to raise capital.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Valuing Shares
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Face Value vs. Book Value vs. Market Value
        </h3>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800">
            <strong>Face Value</strong>: The initial price at which shares are issued.
            <p className="ml-4">Example: ChaiTech issues 50,000 shares at ₹100 each, so the face value is ₹100 per share.</p>
          </li>
          <li className="text-gray-800">
            <strong>Book Value</strong>: The company&apos;s total assets minus liabilities, divided by the number of shares.
            <p className="ml-4">Example: If ChaiTech&apos;s assets are worth ₹60,00,000 and it has ₹10,00,000 in liabilities, with 50,000 shares, the book value is ₹100 per share. This can change over time due to factors like depreciation of assets or increase in goodwill.</p>
          </li>
          <li className="text-gray-800">
            <strong>Market Value</strong>: The price at which shares are currently trading in the stock market.
            <p className="ml-4">Example: As ChaiTech becomes popular and profitable, people might be willing to pay ₹150 for a share that has a face value of ₹100.</p>
          </li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Market Capitalization
        </h3>

        <p className="text-gray-800 mb-4">
          Market capitalization (or &quot;market cap&quot;) is the total value of a company&apos;s outstanding shares.
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800"><strong>Formula</strong>: Market Cap = Number of Shares × Current Share Price</li>
          <li className="text-gray-800"><strong>Example</strong>: If ChaiTech has 50,000 shares trading at ₹150 each, the market cap is ₹75,00,000.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Going Public: The Initial Public Offering (IPO)
        </h2>

        <p className="text-gray-800 mb-4">
          After several years of successful private operations, Rajesh decides to take ChaiTech public. When a company first lists its shares on a stock market for public purchase, it&apos;s called an Initial Public Offering or IPO. This significant event allows the company to raise large amounts of capital from the public.
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-4">
          Conclusion
        </h2>

        <p className="text-gray-800 mb-4">
          The stock market, while seemingly complex, is essentially a system that connects businesses needing capital with individuals looking to invest. At its core, it&apos;s a powerful mechanism for creating liquidity, which is vital for encouraging investment and driving economic growth.
        </p>

        <p className="text-gray-800 mb-4">
          By providing a platform where shares can be bought and sold quickly and easily, stock markets significantly reduce the risks associated with investing in businesses. This reduction in risk and increase in liquidity makes investors more willing to put their money into companies like ChaiTech, thereby providing the capital that fuels innovation, expansion, and economic development.
        </p>

        <p className="text-gray-800 mb-4">
          Understanding these basics, particularly the critical role of liquidity, is the first step towards financial literacy and potentially participating in the growth of businesses and the economy. The stock market&apos;s ability to create liquidity transforms the investment landscape, making it possible for a wider range of people to invest and for more businesses to access the capital they need to grow.
        </p>

        <p className="text-gray-800 mb-4">
          Remember, while investing in stocks can be rewarding and the increased liquidity makes it more accessible, it still comes with risks. Always do thorough research or consult with a financial advisor before making investment decisions. The stock market&apos;s liquidity makes it easier to invest, but it&apos;s still crucial to invest wisely and with a clear understanding of both the opportunities and the risks involved.
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