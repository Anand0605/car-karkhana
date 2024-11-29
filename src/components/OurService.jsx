import React from 'react';
import Carfirst from '../../public/images/car-brands/Carfirst1.png';
import Carsecond from '../../public/images/car-brands/Price-com.png';
import Carthired from '../../public/images/car-brands/Loans.png';
import Whatsapp from '../../public/images/car-brands/whatsapp.png';
import Mic from '../../public/images/car-brands/headphones-with-mic.png';
import Mail from '../../public/images/car-brands/mail.png';
import Chat from '../../public/images/car-brands/chat.png';

function OurService() {
    return (
        <div className="bg-white p-10">
            <div>
                <div className="my-10 text-center">
                    <h2 className="relative text-xl font-bold">
                        <span className="absolute left-0  top-2/4 w-[44%] border-t-2 border-blue-500 mr-12"></span>
                        <span className="relative z-10 px-5 ">Our Services</span>
                        <span className="absolute right-0  top-2/4 w-[44%] border-t-2 border-blue-500"></span>
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
            <div className="mt-16">
                <div className="my-10 text-center">
                    <h2 className="relative text-xl font-bold">
                        <span className="absolute left-0  top-2/4 w-[44%] border-t-2 border-blue-500"></span>
                        <span className="relative z-10 px-5">Assistance</span>
                        <span className="absolute right-0  top-2/4 w-[44%] border-t-2 border-blue-500"></span>
                    </h2>
                </div>

                <div className="flex justify-around gap-8 ">
                    {/* WhatsApp */}
                    <div className="flex items-center gap-4">
                        <img src={Whatsapp} alt="WhatsApp" className="w-8 h-8" />
                        <div>
                            <h3 className="text-lg font-bold">Ask us on WhatsApp!</h3>
                            <p className="text-sm">Get instant support via experts</p>
                        </div>
                    </div>

                    {/* Callback */}
                    <div className="flex items-center gap-4">
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
                        <img src={Mail} alt="Mail us" className="w-8 h-8" />
                        <div>
                            <h3 className="text-lg font-bold">Mail us</h3>
                            <p className="text-sm">Reach out to us</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default OurService;
