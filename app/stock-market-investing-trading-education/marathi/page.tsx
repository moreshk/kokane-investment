import Link from 'next/link';

export default function MarathiEducationPage() {
  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">स्टॉक मार्केट शिक्षण (मराठी)</h1>
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
  { title: "गुंतवणूक का करावी?", href: "/stock-market-investing-trading-education/marathi/why-invest" },
  { title: "स्टॉक मार्केट विरुद्ध प्रॉपर्टी विरुद्ध सोनं", href: "/stock-market-investing-trading-education/marathi/stock-market-vs-property-vs-gold-comparison" },
  { title: "स्टॉक मार्केटची मूलतत्त्वे", href: "/stock-market-investing-trading-education/marathi/stock-market-basics" },
  { title: "स्टॉक ट्रेडिंग विरुद्ध इन्व्हेस्टिंग", href: "/stock-market-investing-trading-education/marathi/trading-vs-investing" },
  { title: "ट्रेडिंगचे विविध प्रकार, शॉर्ट टर्म विरुद्ध लाँग टर्म", href: "/stock-market-investing-trading-education/marathi/trading-types" },
  { title: "स्टॉक्सच्या फंडामेंटल अॅनालिसिसची ओळख", href: "/stock-market-investing-trading-education/marathi/fundamental-analysis" },
  { title: "स्टॉक्सच्या टेक्निकल अॅनालिसिसची ओळख", href: "/stock-market-investing-trading-education/marathi/technical-analysis" },
  { title: "कॅंडलस्टिक पॅटर्न्स", href: "/stock-market-investing-trading-education/marathi/candlestick-patterns" },
  { title: "महत्त्वाचे टेक्निकल इंडिकेटर्स", href: "/stock-market-investing-trading-education/marathi/technical-indicators" },
  { title: "सप्लाय आणि डिमांड झोन्स", href: "/stock-market-investing-trading-education/marathi/supply-demand-zones" },
  { title: "म्युच्युअल फंड्स", href: "/stock-market-investing-trading-education/marathi/mutual-funds" },
  { title: "एसआयपी: सिस्टेमॅटिक इन्व्हेस्टमेंट प्लॅन", href: "/stock-market-investing-trading-education/marathi/sip" },
  { title: "एसडब्ल्यूपी: सिस्टेमॅटिक विथड्रॉल प्लॅन", href: "/stock-market-investing-trading-education/marathi/swp" },
  { title: "आयपीओ: इनिशियल पब्लिक ऑफरिंग", href: "/stock-market-investing-trading-education/marathi/ipo" },
  { title: "एनएफओ: न्यू फंड ऑफरिंग", href: "/stock-market-investing-trading-education/marathi/nfo" },
  { title: "करन्सी मार्केट्स", href: "/stock-market-investing-trading-education/marathi/currency-markets" },
  { title: "कमोडिटीज", href: "/stock-market-investing-trading-education/marathi/commodities" },
  { title: "फ्युचर्स आणि ऑप्शन्स", href: "/stock-market-investing-trading-education/marathi/futures-and-options" },
  { title: "पुट आणि कॉल म्हणजे काय?", href: "/stock-market-investing-trading-education/marathi/put-and-call" },
  { title: "ऑप्शन्स: एक सखोल दृष्टिकोन", href: "/stock-market-investing-trading-education/marathi/options-deep-dive" },
];