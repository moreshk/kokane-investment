'use client'

import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';

const mapContainerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 18.892903, // Replace with your business latitude
  lng: 73.198360 // Replace with your business longitude
};
export default function Home() {
  const [mapError, setMapError] = useState(false);

  const handleMapError = () => {
    setMapError(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 text-center">Kokane Investment</h1>
      <div className="my-4">
        <Image
          src="/jayaram.png"
          alt="Jayaram Kokane"
          width={200}
          height={200}
          className="rounded-full object-cover border-2 border-gray-300"
        />
      </div>

      {/* Our Services in English */}
      <div className="mt-8 max-w-4xl text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-4">
          Since 2005, Kokane Investment has been a trusted name in the financial market, offering a comprehensive suite of services to meet all your investment needs. We specialize in buying and selling equities, mutual funds, and equity derivatives, as well as providing expert guidance in option trading. Our team of seasoned professionals is dedicated to helping you navigate the complex world of finance and maximize your investment potential.
        </p>
        <p className="text-gray-600 mb-4">
          At Kokane Investment, we go beyond just transactions. We offer valuable education and training programs on investing and share market trading, empowering you with the knowledge to make informed decisions. Our services also include facilitating IPOs and assisting with the dematerialization (DEMAT) of physical shares, ensuring a seamless transition to modern, electronic trading. Whether you're a seasoned investor or just starting out, Kokane Investment is your partner in achieving financial success.
        </p>
      </div>

      {/* Map */}
      <div className="w-full max-w-4xl mt-12">
        {!mapError ? (
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
            onError={handleMapError}
          >
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={14}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        ) : (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> Unable to load the map. Please try again later.</span>
          </div>
        )}
      </div>

      {/* Contact Details */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <div className="space-y-2">
          <p className="text-gray-600 flex items-center justify-center">
            <PhoneIcon className="h-5 w-5 mr-2 text-blue-600" />
            <a href="tel:+919890089727" className="text-blue-600 hover:underline">+91 9890089727</a>
          </p>
          <p className="text-gray-600 flex items-center justify-center">
            <PhoneIcon className="h-5 w-5 mr-2 text-blue-600" />
            <a href="tel:+919130027600" className="text-blue-600 hover:underline">+91 9130027600</a>
          </p>
          <p className="text-gray-600 flex items-center justify-center">
            <PhoneIcon className="h-5 w-5 mr-2 text-blue-600" />
            <a href="tel:+919130027601" className="text-blue-600 hover:underline">+91 9130027601</a>
          </p>
          <p className="text-gray-600 flex items-center justify-center">
            <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-600" />
            <a href="mailto:jayaramkokane@gmail.com" className="text-blue-600 hover:underline">jayaramkokane@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Our Services in Marathi */}
      <div className="mt-12 max-w-4xl text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">आमच्या सेवा</h2>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          २००५ पासून, कोकणे इन्व्हेस्टमेंट हे शेअर बाजारातलं एक विश्वासू नाव आहे. आम्ही तुमच्या सगळ्या गुंतवणुकीच्या गरजा पूर्ण करतो. आम्ही शेअर्स, म्युच्युअल फंड्स आणि इक्विटी डेरिव्हेटिव्हज विकत घेणं आणि विकणं यात तज्ञ आहोत. शिवाय ऑप्शन ट्रेडिंगमध्ये चांगलं मार्गदर्शन देतो. आमचा अनुभवी टीम तुम्हाला पैशाच्या जगात मदत करतो आणि तुमची गुंतवणूक वाढवायला मदत करतो.
        </p>
        <p className="text-sm md:text-base text-gray-600 mb-4">
          कोकणे इन्व्हेस्टमेंटमध्ये, आम्ही फक्त व्यवहार करत नाही. आम्ही गुंतवणूक आणि शेअर बाजारावर शिकवणी आणि ट्रेनिंग देतो, ज्यामुळे तुम्हाला चांगले निर्णय घेता येतील. आम्ही IPO मध्ये मदत करतो आणि physical शेअर्सचं DEMAT करण्यात मदत करतो, जेणेकरून तुम्ही सहज ऑनलाइन ट्रेडिंग करू शकाल. तुम्ही जुने गुंतवणूकदार असा किंवा नवीन असा, पैसे कमवायला कोकणे इन्व्हेस्टमेंट तुमच्या पाठीशी आहे.
        </p>
      </div>
    </main>
  );
}