import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaRegIdCard, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo & Accreditation */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">THE INDIAN AGENCY</h1>
          <div className="flex items-center gap-4 mt-4">
            <img src="img url" alt="Leading" className="w-20" />
            <img src="" alt="LPI" className="w-20" />
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="uppercase font-semibold text-lg mb-4 border-b border-gray-600 inline-block">Contact Us</h3>
          <p>The Indian Agency<br />1st Floor, South Extension Market, Delhi - 110049</p>
          <div className="mt-3 space-y-1">
            <p className="flex items-center gap-2"><FaPhoneAlt /> +91 123456789</p>
            <p className="flex items-center gap-2"><FaEnvelope /> info@indianagency.in</p>
            <p className="flex items-center gap-2"><FaRegIdCard /> RERA ID: xyz12345678</p>
          </div>
          <div className="flex gap-3 mt-4">
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Navigate */}
        <div>
          <h3 className="uppercase font-semibold text-lg mb-4 border-b border-gray-600 inline-block">Navigate</h3>
          <ul className="space-y-2">
            <li>Our Story</li>
            <li>Associates</li>
            <li>Exclusive Properties</li>
            <li>Search All Homes</li>
            <li>Media</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Membership / Design Credit */}
        <div className="space-y-4">
          <p className="text-xs uppercase text-gray-400">Custom Website Design By</p>
          <h3 className="text-xl font-semibold tracking-wide">The Indian Agency Design</h3>
          <p className="text-sm uppercase text-gray-400">Proud Member of</p>
          <img src="" alt="CREDAI" className="w-24" />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs mt-8">
        © 2025 The Indian Agency Real Estate. All Rights Reserved | Sitemap | Privacy Policy | Terms
      </div>
    </footer>
  );
};

export default Footer;
