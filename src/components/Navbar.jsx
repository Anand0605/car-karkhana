// components/Navbar.js
import { FaChevronDown } from 'react-icons/fa'; // Importing a dropdown icon

export default function Navbar() {
  return (
    <div className="bg-blue-600 text-white pt-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold ml-8">♦ Cars Karkhana</h1>
        <div className="flex space-x-4">
          <button className="bg- font-semibold mr-6 px-3 py-1 rounded hover:bg-blue-400">
            Login
          </button>
         
        </div>
      </div>
      <div className="bg-slate-100 font-semibold pt-3 text-black flex justify-center space-x-6 mt-3 h-12">
      <button className="bg-blue-300 p-3 text-black mb-2 rounded-2xl flex items-center space-x-2 ">
            <span>Gurgaon</span>
            <FaChevronDown /> {/* Dropdown icon */}
          </button>
        <a href="#sell" className="text-lg hover:underline">Sell used car</a>
        <a href="#loans" className="text-lg hover:underline">Loans</a>
        <a href="#insurance" className="text-lg hover:underline">Insurance</a>
        <a href="#contact" className="text-lg hover:underline">Contact us</a>
        <a href="#about" className="text-lg hover:underline">About us</a>
      </div>
    </div>
  );
}
