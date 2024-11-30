import { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import LoginIcon from '../../public/images/car-brands/loginicon.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the sidebar
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal

  const modalRef = useRef(null); // Ref for modal content

  // Handle form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  });

  // Close modal on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsLoginModalOpen(false);
      }
    };
    if (isLoginModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isLoginModalOpen]);

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
    const { firstName, lastName, email, mobile } = formData;
    if (!firstName || !lastName || !email || !mobile) {
      alert('Please fill in all fields before submitting.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (mobile.length !== 10) {
      alert('Mobile number must be 10 digits.');
      return;
    }
    console.log('Login Data:', formData);
    // alert('Login successfully!');
    setIsLoginModalOpen(false); // Close modal after login
  };

  return (
    <div style={{ backgroundColor: '#04203c' }} className="text-white w-full pt-2">
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-2xl font-bold ml-8">Cars Karkhana</h1>
        <div className="flex items-center gap-2 mr-4">
          <div className="text-white mr-3 cursor-pointer flex" onClick={() => setIsLoginModalOpen(true)}>
            <img src={LoginIcon} alt="Login Icon" />
            <p className="mt-1">Login</p>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
          </button>
          <p>Menu</p>
        </div>
      </div>
      <hr className="mt-2" />
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
          <div className="fixed right-0 top-0 w-1/4 bg-slate-300 p-4 h-full flex flex-col items-center">
            <button className="text-black text-2xl mb-6 self-start" onClick={() => setIsMenuOpen(false)}>
              <FaTimes />
            </button>
            <h1 className="text-xl font-bold text-black mb-5">Cars-Karkhana</h1>
            <ul className="space-y-6 flex items-center flex-col">
              <li><a href="#insurance" className="text-lg text-black font-semibold">Insurance</a></li>
              <li><a href="#loans" className="text-lg text-black font-semibold">Loans</a></li>
              <li><a href="#sell" className="text-lg text-black font-semibold">About</a></li>
              <li><a href="#contact" className="text-lg text-black font-semibold">Contact us</a></li>
            </ul>
          </div>
        </div>
      )}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div ref={modalRef} className="bg-white w-11/12 md:w-1/3 rounded-lg p-6 relative">
            <h2 className="text-2xl font-semibold mb-4 text-center text-black">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                  {/* <label htmlFor="firstName" className="block text-gray-700 font-medium">First Name</label> */}
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-400" placeholder="Enter your first name" />
                </div>
                {/* <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium">Last Name</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-400" placeholder="Enter your last name" />
                </div> */}
              </div>
              <div className="mb-4">
                {/* <label htmlFor="email" className="block text-gray-700 font-medium">Email</label> */}
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-400" placeholder="Enter your email" />
              </div>
              {/* <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-700 font-medium">Mobile</label>
                <input type="number" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-400" placeholder="Enter your mobile number" />
              </div> */}
              <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
