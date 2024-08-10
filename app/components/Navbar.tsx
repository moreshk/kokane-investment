"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import Image from "next/image";

interface NavbarProps {
  session: Session | null;
}

const Navbar: React.FC<NavbarProps> = ({ session: initialSession }) => {
  const [session, setSession] = useState<Session | null>(initialSession);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    setIsMenuOpen(false);
  };

  const authLinks = session ? (
    <>
      <li>
        <Link
          href="/dashboard"
          className="text-white hover:text-gray-300"
          onClick={toggleMenu}
        >
          My Account
        </Link>
      </li>
      <li>
        <button
          onClick={handleSignOut}
          className="text-white hover:text-gray-300"
        >
          Sign Out
        </button>
      </li>
    </>
  ) : (
    <li>
      <Link
        href="/login"
        className="text-white hover:text-gray-300"
        onClick={toggleMenu}
      >
        Login
      </Link>
    </li>
  );

  return (
    <nav className="bg-gray-800 py-2"> {/* Changed p-4 to py-2 */}
      <div className="container mx-auto flex justify-between items-center h-12"> {/* Added fixed height */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Kokane Investment"
            width={50}
            height={50}
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              href="/why-should-i-invest-in-indian-stock-market"
              className="text-white hover:text-gray-300"
            >
              Why Invest in Indian Stock Market
            </Link>
          </li>
          <li>
            <Link
              href="/why-should-i-invest-in-indian-stock-market-marathi"
              className="text-white hover:text-gray-300"
            >
              भारतीय शेअर बाजारात का गुंतवणूक करावी
            </Link>
          </li>
          <li>
            <Link
              href="/stock-market-investing-trading-education"
              className="text-white hover:text-gray-300"
            >
              Stock Market Education
            </Link>
          </li>
          {authLinks}
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 mt-4">
            <li>
              <Link
                href="/"
                className="block text-white hover:text-gray-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/why-should-i-invest-in-indian-stock-market"
                className="block text-white hover:text-gray-300"
                onClick={toggleMenu}
              >
                Why Invest in Indian Stock Market
              </Link>
            </li>
            <li>
              <Link
                href="/why-should-i-invest-in-indian-stock-market-marathi"
                className="block text-white hover:text-gray-300"
                onClick={toggleMenu}
              >
                भारतीय शेअर बाजारात का गुंतवणूक करावी
              </Link>
            </li>
            <li>
              <Link
                href="/stock-market-investing-trading-education"
                className="block text-white hover:text-gray-300"
                onClick={toggleMenu}
              >
                Stock Market Education
              </Link>
            </li>
            {authLinks}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
