import React, { useState } from 'react';
import Carfirst from '../../public/images/car-brands/Carfirst1.png';
import Carsecond from '../../public/images/car-brands/Price-com.png';
import Carthired from '../../public/images/car-brands/Loans.png';
import Whatsapp from '../../public/images/car-brands/whatsapp.png';
import Mic from '../../public/images/car-brands/headphones-with-mic.png';
import Mail from '../../public/images/car-brands/mail.png';
import Chat from '../../public/images/car-brands/chat.png';

function OurService() {
    // State to control the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [language, setLanguage] = useState('English');

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Handle form submission (example placeholder)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Mobile Number:', mobileNumber);
        console.log('Language:', language);
        alert(`Request submitted! Mobile: ${mobileNumber}, Language: ${language}`);
        closeModal();
    };

    return (
        <div className="bg-white w-full px-5 py-6">
            <div>
            <div className="my-5 text-center">
                    <h2 className="relative text-xl font-bold">
                        <span className="absolute left-0  top-2/4 w-[43%] border-t-2 border-blue-500"></span>
                        <span className="relative px-5">Our Services</span>
                        <span className="absolute right-0  top-2/4 w-[43%] border-t-2 border-blue-500"></span>
                    </h2>
                </div>

                {/* Services Section */}
                <div className="flex justify-around space-x-8 mt-10">
                    {/* Insurance Card */}
                    <div className="text-center">
                        <img
                            src={Carfirst}
                            alt="Insurance"
                            className="w-40 h-40 mx-auto"
                        />
                        <h3 className="text-lg font-semibold mt-4">Insurance</h3>
                    </div>

                    {/* Price Compare Card */}
                    <div className="text-center">
                        <img
                            src={Carsecond}
                            alt="Price Compare"
                            className="w-40 h-40 mx-auto"
                        />
                        <h3 className="text-lg font-semibold mt-4">Price Compare</h3>
                    </div>

                    {/* Loans Card */}
                    <div className="text-center">
                        <img
                            src={Carthired}
                            alt="Loans"
                            className="w-40 h-40 mx-auto"
                        />
                        <h3 className="text-lg font-semibold mt-4">Loans</h3>
                    </div>
                </div>
            </div>

            {/* Assistance Section */}
            <div className="mt-8">
                <div className="my-10 text-center">
                    <h2 className="relative text-xl font-bold">
                        <span className="absolute left-0  top-2/4 w-[44%] border-t-2 border-blue-500"></span>
                        <span className="relative  px-5 ">Assistance</span>
                        <span className="absolute right-0  top-2/4 w-[44%] border-t-2 border-blue-500"></span>
                    </h2>
                </div>

                <div className="flex justify-around gap-8 ">
                    {/* WhatsApp */}
                    <div className="flex items-center gap-4">
                        <a
                            href={`https://wa.me/11234567890`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Whatsapp} alt="WhatsApp" className="w-8 h-8" />
                        </a>
                        <div>
                            <h3 className="text-lg font-bold">Ask us on WhatsApp!</h3>
                            <p className="text-sm">Get instant support via experts</p>
                        </div>
                    </div>

                    {/* Callback */}
                    <div className="flex items-center gap-4 cursor-pointer" onClick={openModal}>
                        <img src={Mic} alt="Callback" className="w-8 h-8" />
                        <div>
                            <h3 className="text-lg font-bold">Request a callback</h3>
                            <p className="text-sm">Our team will contact you shortly</p>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className="flex items-center gap-4">
                        <img src={Chat} alt="FAQs" className="w-8 h-8" />
                        <div>
                            <h3 className="text-lg font-bold">FAQs</h3>
                            <p className="text-sm">Get your doubts cleared</p>
                        </div>
                    </div>

                    {/* Mail */}
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:example@example.com?subject=Subject&body=I%20would%20like%20to%20know%20more%20about%20your%20services."
                            className="flex items-center gap-4"
                        >
                            <img src={Mail} alt="Mail us" className="w-8 h-8" />
                            <div>
                                <h3 className="text-lg font-bold">Mail us</h3>
                                <p className="text-sm">Reach out to us</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal for Callback Request */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                        <h3 className="text-xl font-semibold mb-4">Request a Callback</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Mobile Number</label>
                                <input
                                    type="tel"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    placeholder="Enter your mobile number"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">Language</label>
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                >
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-300 text-sm text-gray-700 rounded-md"
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-sm text-white rounded-md"
                                >
                                    Call Me
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default OurService;
