import Link from 'next/link';

// ... existing imports ...

export default function EnglishEducationPage() {
  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">Stock Market Education (English)</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {topics.map((topic, index) => (
            <TopicCard key={index} title={topic.title} href={topic.href} isReady={index < 7} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TopicCard({ title, href, isReady }: { title: string; href: string; isReady: boolean }) {
  return (
    <Link href={href} className="block w-full">
      <div className={`
        border rounded-lg p-4 hover:shadow-lg transition-shadow h-full
        ${isReady 
          ? 'bg-green-100 border-green-500 shadow-md' 
          : 'bg-gray-50 border-gray-200 shadow-sm'
        }
      `}>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {isReady && <span className="text-sm font-medium text-green-700 mt-2 inline-block">Ready</span>}
      </div>
    </Link>
  );
}

// ... existing topics array ...
const topics = [
  { title: "Why to invest?", href: "/stock-market-investing-trading-education/english/why-invest" },
  { title: "Stock market vs Property vs Gold", href: "/stock-market-investing-trading-education/english/stock-market-vs-property-vs-gold-comparison" },
  { title: "Stock Market Basics", href: "/stock-market-investing-trading-education/english/stock-market-basics" },
  { title: "Stock trading vs Investing", href: "/stock-market-investing-trading-education/english/trading-vs-investing" },
  { title: "Different types of trading, short term vs longterm", href: "/stock-market-investing-trading-education/english/trading-types" },
  { title: "Introduction to Fundamental Analysis for Stocks", href: "/stock-market-investing-trading-education/english/fundamental-analysis" },
  { title: "Futures, Options, PUT and CALL", href: "/stock-market-investing-trading-education/english/futures-options-put-call" },
  { title: "Introduction to Technical Analysis for Stocks", href: "/stock-market-investing-trading-education/english/technical-analysis" },
  { title: "Candlestick patterns", href: "/stock-market-investing-trading-education/english/candlestick-patterns" },
  { title: "Key Technical Indicators", href: "/stock-market-investing-trading-education/english/technical-indicators" },
  { title: "Supply and Demand Zones", href: "/stock-market-investing-trading-education/english/supply-demand-zones" },
  { title: "Mutual funds", href: "/stock-market-investing-trading-education/english/mutual-funds" },
  { title: "SIP: Systematic Investment Plan", href: "/stock-market-investing-trading-education/english/sip" },
  { title: "SWP: Systematic Withdrawal Plan", href: "/stock-market-investing-trading-education/english/swp" },
  { title: "IPO: Initial Public Offering", href: "/stock-market-investing-trading-education/english/ipo" },
  { title: "NFO: New Fund Offering", href: "/stock-market-investing-trading-education/english/nfo" },
  { title: "Currency markets", href: "/stock-market-investing-trading-education/english/currency-markets" },
  { title: "Commodities", href: "/stock-market-investing-trading-education/english/commodities" },
  { title: "Options: A deeper dive", href: "/stock-market-investing-trading-education/english/options-deep-dive" },
];