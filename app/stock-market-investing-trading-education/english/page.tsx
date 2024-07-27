import Link from 'next/link';

export default function EnglishEducationPage() {
  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">Stock Market Education (English)</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {topics.map((topic, index) => (
            <TopicCard key={index} title={topic.title} href={topic.href} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TopicCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="block w-full">
      <div className="bg-white border border-gray-200 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow h-full">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
    </Link>
  );
}

const topics = [
  { title: "Why to invest?", href: "/education/english/why-invest" },
  { title: "Stock market vs Property vs Gold", href: "/education/english/investment-comparison" },
  { title: "Stock Market Basics", href: "/education/english/stock-market-basics" },
  { title: "Stock trading vs Investing", href: "/education/english/trading-vs-investing" },
  { title: "Different types of trading, short term vs longterm", href: "/education/english/trading-types" },
  { title: "Introduction to Fundamental Analysis for Stocks", href: "/education/english/fundamental-analysis" },
  { title: "Introduction to Technical Analysis for Stocks", href: "/education/english/technical-analysis" },
  { title: "Candlestick patterns", href: "/education/english/candlestick-patterns" },
  { title: "Key Technical Indicators", href: "/education/english/technical-indicators" },
  { title: "Supply and Demand Zones", href: "/education/english/supply-demand-zones" },
  { title: "Mutual funds", href: "/education/english/mutual-funds" },
  { title: "SIP: Systematic Investment Plan", href: "/education/english/sip" },
  { title: "SWP: Systematic Withdrawal Plan", href: "/education/english/swp" },
  { title: "IPO: Initial Public Offering", href: "/education/english/ipo" },
  { title: "NFO: New Fund Offering", href: "/education/english/nfo" },
  { title: "Currency markets", href: "/education/english/currency-markets" },
  { title: "Commodities", href: "/education/english/commodities" },
  { title: "Futures and Options", href: "/education/english/futures-and-options" },
  { title: "What are PUT and CALL", href: "/education/english/put-and-call" },
  { title: "Options: A deeper dive", href: "/education/english/options-deep-dive" },
];