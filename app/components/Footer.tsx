import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center mb-2">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <a href="tel:+919890089727">+91 9890089727</a>
            </p>
            <p className="flex items-center mb-2">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <a href="tel:+919130027600">+91 9130027600</a>
            </p>
            <p className="flex items-center mb-2">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <a href="tel:+919130027601">+91 9130027601</a>
            </p>
            <p className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              <a href="mailto:jayaramkokane@gmail.com">jayaramkokane@gmail.com</a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p>Mukund Niwas, Rees, Behind ICICI Bank,</p>
            <p>Khalapur, Raigad, Maharashtra</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href="/why-should-i-invest-in-indian-stock-market" className="hover:text-gray-300">
                  Why Invest in Indian Stock Market
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/why-should-i-invest-in-indian-stock-market-marathi" className="hover:text-gray-300">
                  भारतीय शेअर बाजारात का गुंतवणूक करावी
                </Link>
              </li>
              <li>
                <Link href="/options-for-beginners" className="hover:text-gray-300">
                  Options Trading for Beginners
                </Link>
              </li>
              <li>
                <Link href="/options-for-beginners-marathi" className="hover:text-gray-300">
                    ऑप्शन्स ट्रेडिंग समजून घेणे: नवशिक्यांसाठी मार्गदर्शन
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Kokane Investment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;