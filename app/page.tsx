'use client'

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const mapContainerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 18.892903, // Replace with your business latitude
  lng: 73.198360 // Replace with your business longitude
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-8">Kokane Investment</h1>
      <div className="w-full max-w-4xl">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="mt-8 text-center">
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
      <div className="mt-12 max-w-3xl text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-4">
          Since 2005, Kokane Investment has been a trusted name in the financial market, offering a comprehensive suite of services to meet all your investment needs. We specialize in buying and selling equities, mutual funds, and equity derivatives, as well as providing expert guidance in option trading. Our team of seasoned professionals is dedicated to helping you navigate the complex world of finance and maximize your investment potential.
        </p>
        <p className="text-gray-600 mb-4">
          At Kokane Investment, we go beyond just transactions. We offer valuable education and training programs on investing and share market trading, empowering you with the knowledge to make informed decisions. Our services also include facilitating IPOs and assisting with the dematerialization (DEMAT) of physical shares, ensuring a seamless transition to modern, electronic trading. Whether you&apos;re a seasoned investor or just starting out, Kokane Investment is your partner in achieving financial success.
        </p>
      </div>
    </main>
  );
}