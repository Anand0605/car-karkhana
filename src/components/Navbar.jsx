import { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import LoginIcon from '../../public/images/car-brands/loginicon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the sidebar
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal

  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData); // Log form data
    toast.success('Login successfully!', {
      position: 'bottom-right',
    });
    setIsLoginModalOpen(false); // Close modal after login
  };

  return (
    <div style={{ backgroundColor: '#04203c' }} className="text-white pt-2">
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-2xl font-bold ml-8">Cars Karkhana</h1>

        {/* Hamburger icon for all screens */}
        <div className="flex items-center mr-4">
          <div
            className="text-white mr-3 cursor-pointer"
            onClick={() => setIsLoginModalOpen(true)} // Show login form on icon click
          >
            <img src={LoginIcon} alt="Login Icon" />
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>
      <div className="mt-2">
        <hr />
      </div>

      {/* Sidebar for Mobile and Desktop */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="fixed right-0 top-0 w-1/4 bg-slate-300 p-4 h-full flex flex-col items-center">
            <button
              className="text-black text-2xl mb-6 self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </button>
            <div className="mb-5 w-full flex justify-center items-center">
              <h1 className="text-xl font-bold text-black">Cars-Karkhana</h1>
            </div>
            <ul className="space-y-6 flex items-center flex-col">
              <li>
                <a href="#insurance" className="text-lg text-black font-semibold">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#loans" className="text-lg text-black font-semibold">
                  Loans
                </a>
              </li>
              <li>
                <a href="#sell" className="text-lg text-black font-semibold">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-lg text-black font-semibold">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-white w-11/12 md:w-1/3 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-black">Login form</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-400"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-400"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-700 font-medium">
                  Mobile
                </label>
                <input
                  type="number"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-400"
                  placeholder="Enter your mobile number"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded  hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
