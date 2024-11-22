import { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the sidebar

  return (
    <div className="bg-blue-600 text-white pt-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold ml-8">Cars Karkhana</h1>
        
        {/* Login button visible only on larger screens */}
        <div className="hidden sm:flex space-x-4">
          <button className="font-semibold mr-6 px-3 py-1 rounded hover:bg-blue-400">
            Login
          </button>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="sm:hidden flex items-center mr-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
          </button>
        </div>
      </div>

      {/* Main Navbar links */}
      <div className="bg-slate-100 font-semibold pt-3 text-black flex justify-center space-x-6 mt-3 h-12 sm:flex hidden">
        <button className="bg-blue-300 p-3 text-black mb-2 rounded-2xl flex items-center space-x-2">
          <span>Gurgaon</span>
          <FaChevronDown /> {/* Dropdown icon */}
        </button>
        <a href="#sell" className="text-lg hover:underline">Sell used car</a>
        <a href="#loans" className="text-lg hover:underline">Loans</a>
        <a href="#insurance" className="text-lg hover:underline">Insurance</a>
        <a href="#contact" className="text-lg hover:underline">Contact us</a>
        <a href="#about" className="text-lg hover:underline">About us</a>
      </div>

      {/* Sidebar for Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="w-2/3 bg-white p-4 h-full">
            <button
              className="text-black text-2xl mb-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>
            <ul className="space-y-6 flex items-center  flex-col">
              <li>
                <a href="#sell" className="text-lg text-black ">Sell used car</a>
              </li>
              <li>
                <a href="#loans" className="text-lg text-black">Loans</a>
              </li>
              <li>
                <a href="#insurance" className="text-lg text-black">Insurance</a>
              </li>
              <li>
                <a href="#contact" className="text-lg text-black">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
