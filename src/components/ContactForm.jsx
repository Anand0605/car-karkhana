import React, { useState } from 'react';
import Lets from '../../public/images/car-brands/lets-talk-chats.png';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="w-full mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left div (Contact form) on desktop it will be on the left, on mobile it will be on top */}
        <div className="w-full md:w-[35%] p-4">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-700 mb-6">
            With years of experience and a portfolio of successful projects, we have the expertise to deliver results-driven solutions.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full border-l-0 border-r-0 border-b-2 border-gray-300 p-2 mb-4 focus:border-blue-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full border-l-0 border-r-0 border-b-2 border-gray-300 p-2 mb-4 focus:border-blue-500 focus:outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full border-l-0 border-r-0 border-b-2 border-gray-300 p-2 mb-4 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Get Started
            </button>
          </form>
        </div>

        {/* Right div (Image) on desktop it will be on the right, on mobile it will be below */}
        <div className="w-full md:w-[65%] p-4 flex justify-center items-center flex-col mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">Let's Talk</h1>
          <img
            src={Lets}
            alt="Contact"
            className="object-cover w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
