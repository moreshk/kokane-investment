'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Kokane Investment
        </Link>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
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
          <li>
            <Link href="/stock-market-investing-trading-education" className="text-white hover:text-gray-300">
              Stock Market Education
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 mt-4">
            <li>
              <Link href="/" className="block text-white hover:text-gray-300" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/why-should-i-invest-in-indian-stock-market" className="block text-white hover:text-gray-300" onClick={toggleMenu}>
                Why Invest in Indian Stock Market
              </Link>
            </li>
            <li>
              <Link href="/why-should-i-invest-in-indian-stock-market-marathi" className="block text-white hover:text-gray-300" onClick={toggleMenu}>
                भारतीय शेअर बाजारात का गुंतवणूक करावी
              </Link>
            </li>
            <li>
              <Link href="/stock-market-investing-trading-education" className="block text-white hover:text-gray-300" onClick={toggleMenu}>
                Stock Market Education
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;