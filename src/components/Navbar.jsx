export default function Navbar() {
    return (
      <div className="bg-blue-600 text-white px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold">♦ Cars Karkhana</h1>
  
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#sell" className="text-sm hover:underline">Sell used car</a>
            <a href="#loans" className="text-sm hover:underline">Loans</a>
            <a href="#insurance" className="text-sm hover:underline">Insurance</a>
            <a href="#contact" className="text-sm hover:underline">Contact us</a>
            <a href="#about" className="text-sm hover:underline">About us</a>
          </div>
  
          {/* Button */}
          <div>
            <button className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-400">
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
  