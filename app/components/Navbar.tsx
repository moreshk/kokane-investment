import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Kokane Investment
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/why-should-i-invest-in-indian-stock-market" className="text-white hover:text-gray-300">
              Why Invest in Indian Stock Market
            </Link>
          </li>
          <li>
            <Link href="/why-should-i-invest-in-indian-stock-market-marathi" className="text-white hover:text-gray-300">
              भारतीय शेअर बाजारात का गुंतवणूक करावी
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;