import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#04203c] text-white py-10 mt-10 ">
      <div className="max-w-6xl mx-auto flex justify-evenly  flex-wrap ">
        <div className="w-2/5">
          <h3 className="text-xl font-bold mb-4 text-wrap">Car Karkhana</h3>
          <p>Your trusted Partner for Selling, buying and insuring Cars Providing excellent service since 2023</p>
        </div>
        <div className='flex gap-10 '>
          {/* Left Section: Links */}
          <div className="w-1/3 ml-12">
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul>
              <li className="mb-0.5">
                <a href="#about" className="hover:underline">About us</a>
              </li>
              <li className="mb-0.5">
                <a href="#compare" className="hover:underline">Compare</a>
              </li>
              <li className="mb-0.5">
                <a href="#loans" className="hover:underline">Loans</a>
              </li>
              <li className="mb-0.5">
                <a href="#insurance" className="hover:underline">Insurance</a>
              </li>
              <li className="mb-0.5">
                <a href="#contact" className="hover:underline">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Center Section: Popular Searches */}
          <div className="w-1/3  ">
            <h3 className="text-xl font-semibold mb-2">Popular Search</h3>
            <ul>
              <li className="mb-0.5">
                <a href="#used-car-quote" className="hover:underline">Get used car Quote</a>
              </li>
              <li className="mb-0.5">
                <a href="#used-car-loan" className="hover:underline">Used car loan</a>
              </li>
              <li className="mb-0.5">
                <a href="#insurance" className="hover:underline">Get Insurance</a>
              </li>
              <li>
                <a href="#new-car-price" className="hover:underline">New car Price</a>
              </li>
            </ul>
          </div>

          {/* Right Section: Social Media and App Links */}
          <div className="w-1/3 ">
            <h3 className="text-xl font-semibold mb-4">Keep us close</h3>
            <div className="flex space-x-6 mb-6">
              <a href="https://www.instagram.com" target="_blank" className="text-white hover:underline">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://www.facebook.com" target="_blank" className="text-white hover:underline">
                <FaFacebookF className="text-2xl" />
              </a>
            </div>

            {/* App Store & Google Play Links */}
            <div className="flex space-x-4">
              <a href="https://www.apple.com/app-store/" target="_blank">
                <SiAppstore className="text-2xl" />
              </a>
              <a href="https://play.google.com" target="_blank">
                <SiGoogleplay className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='pt-16'><hr/></div>
        <div className='flex justify-between px-5 mt-2 '>
          <h2>@2024 Car-Karkhana. All right Reseverd</h2>
          <h2>Privacy Policy Term of service</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
