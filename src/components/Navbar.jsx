import { useRef, useState } from "react";
import { CloseButton } from "../components/ui/close-button"
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';


import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer"
import LoginIcon from '../../public/images/car-brands/loginicon.png';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { firstName, email } = formData;
    if (!firstName || !email) {
      // alert('Please fill in all fields before submitting.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    // if (mobile.length !== 10) {
    //   alert('Mobile number must be 10 digits.');
    //   return;
    // }
    // If all validations pass
    alert('Login successful!');
    setIsLoginModalOpen(false); // Close the modal
  };

  return (
    <div style={{ backgroundColor: '#04203c' }} className="text-white w-full pt-2">
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-2xl font-bold ml-8">Cars Karkhana</h1>
        <div className="flex items-center gap-2 mr-4">
          <div
            className="text-white mr-3 cursor-pointer flex"
            onClick={() => setIsLoginModalOpen(true)}
          >
            <img src={LoginIcon} alt="Login Icon" />
            <p className="mt-1">Login</p>
          </div>
          <DrawerRoot>
            <DrawerBackdrop />
            <DrawerTrigger asChild >
              <CloseButton variant="outline" size="sm"  >
                <button className="flex justify-center items-center gap-2 px-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <FaBars className="text-white text-2xl" /> Menu
                </button>
              </CloseButton>
            </DrawerTrigger>
            <DrawerContent  className="w-64">
              <DrawerHeader >
                <DrawerTitle className="text-xl font-bold pb-2 w-full">Cars-Karkhana
                </DrawerTitle>
                <hr className="h-1 w-full" />
              </DrawerHeader>
              <DrawerBody className="p-4" >
                <ul className="space-y-3 flex flex-col">
                  <li className="flex flex-col justify-start items-start">
                    <a href="#home" className="text-lg text-start text-black font-semibold">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#loans" className="text-lg text-black font-semibold">
                      Loans
                    </a>
                  </li>
                  <li>
                    <a href="#insurance" className="text-lg text-black font-semibold">
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-lg text-black font-semibold">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#FAQs" className="text-lg text-black font-semibold">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#Term of Condition" className="text-lg text-black font-semibold">
                      Term of Condition
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-lg text-black font-semibold">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#Help Support" className="text-lg text-black font-semibold">
                      Help and Support
                    </a>
                  </li>
                </ul>
              </DrawerBody>
              <DrawerCloseTrigger />
            </DrawerContent>
          </DrawerRoot>
        </div>
      </div>
      <hr className="mt-2" />
      {isLoginModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-20">
          <button onClick={() => setIsLoginModalOpen(false)} className='w-full h-full bg-black/40 absolute inset-0' />
          <div className="bg-white z-1 w-11/12 md:w-1/3 rounded-lg p-6 relative">
            <h2 className="text-2xl font-semibold mb-4 text-center text-black">
              Login
            </h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full px-4 py-2 border rounded-lg  text-black"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border rounded-lg  text-black"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg  text-black"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
