import React from "react";

export default function BuyingService() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
        Property Buying Assistance
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-5 md:mb-6 px-2 leading-relaxed">
        Our expert team guides you through every step of your property purchase journey, 
        from finding the best property to completing legal documentation.
      </p>
      <ul className="list-disc pl-6 sm:pl-8 md:pl-10 text-sm sm:text-base md:text-lg text-gray-700 space-y-2 px-2">
        <li>Personalized property search</li>
        <li>Expert negotiation support</li>
        <li>Legal documentation and verification</li>
        <li>Home loan assistance</li>
      </ul>
    </div>
  );
}