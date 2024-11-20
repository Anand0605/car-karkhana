import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="container mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Cars Karkhana</h3>
            <p className="text-sm">
              Your trusted partner for selling, buying, and insuring cars. Providing excellent service since 2023.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sell" className="hover:underline">Sell Your Car</a>
              </li>
              <li>
                <a href="#loans" className="hover:underline">Car Loans</a>
              </li>
              <li>
                <a href="#insurance" className="hover:underline">Insurance</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">Contact Us</a>
              </li>
              <li>
                <a href="#about" className="hover:underline">About Us</a>
              </li>
            </ul>
          </div>

          {/* Section 3: Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:text-gray-400">
                <FaFacebookF />
              </a>
              <a href="#twitter" className="hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="#instagram" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#linkedin" className="hover:text-gray-400">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm">
          <p>&copy; 2024 Cars Karkhana. All rights reserved.</p>
          <ul className="flex space-x-4 mt-2 md:mt-0">
            <li>
              <a href="#privacy" className="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms" className="hover:underline">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
