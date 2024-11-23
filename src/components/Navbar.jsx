import { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import CarIcon from '../../public/images/car-brands/wagon-car.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the sidebar

  return (
    <div style={{ backgroundColor: '#04203c' }} className="text-white pt-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold ml-8">Cars Karkhana</h1>

        {/* Hamburger icon for all screens */}
        <div className="flex items-center mr-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile and Desktop */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
          {/* Sidebar container on the right */}
          <div className="fixed right-0 top-0 w-1/4 bg-slate-300 p-4 h-full flex flex-col items-center">
            {/* Close button moved to top-left inside sidebar */}
            <button
              className="text-black text-2xl mb-6 self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Centered Car Icon */}
            <div className="h-14 w-14 flex justify-center items-center mb-8">
              <img src={CarIcon} alt="Car Icon" className="h-full w-auto" />
            </div>

            {/* Navigation Links */}
            <ul className="space-y-6 flex items-center flex-col">
              <li>
                <a href="#sell" className="text-lg text-black">Sell used car</a>
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

            {/* Login Button */}
            <button className="mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
