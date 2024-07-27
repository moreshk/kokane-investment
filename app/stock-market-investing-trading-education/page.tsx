import Link from 'next/link';

export default function EducationPage() {
  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">Stock Market Education</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <LanguageCard 
            title="English" 
            href="/stock-market-investing-trading-education/english"
          />
          <LanguageCard 
            title="Marathi" 
            href="/stock-market-investing-trading-education/marathi"
          />
        </div>
      </div>
    </div>
  );
}

function LanguageCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="block w-full">
      <div className="bg-white border border-gray-200 shadow-md rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h2>
      </div>
    </Link>
  );
}