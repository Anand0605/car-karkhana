import React from 'react';
import Carfirst from '../../public/images/car-brands/car11.png'
import Carsecond from '../../public/images/car-brands/car11.png'
import Carthired from '../../public/images/car-brands/car11.png'
import Whatsapp from '../../public/images/car-brands/whatsapp.png'
import Mic from '../../public/images/car-brands/headphones-with-mic.png'
import Mail from '../../public/images/car-brands/mail.png'
import Chat from '../../public/images/car-brands/chat.png'


function OurService() {
    return (
        <div className="bg-white p-10">
            <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <img src={Carfirst} alt="Insurance" className="w-40 h-auto mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Insurance</h3>
                </div>

                <div className="text-center">
                    <img src={Carsecond} alt="Price Compare" className="w-40 h-auto mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Price Compare</h3>
                </div>

                <div className="text-center">
                    <img src={Carthired} alt="Loans" className="w-40 h-auto mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Loans</h3>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-bold text-center mb-8">Assistance</h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <img src={Whatsapp} alt="WhatsApp" className="w-10 h-auto mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Ask us on WhatsApp!</h3>
                        <p className="text-sm">Get instant support via experts</p>
                    </div>

                    <div className="text-center">
                        <img src={Mic} alt="Callback" className="w-10 h-auto mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Request a callback</h3>
                        <p className="text-sm">Our team will contact you shortly</p>
                    </div>

                    <div className="text-center">
                        <img src={Chat} alt="FAQs" className="w-10 h-auto mx-auto mb-4" />
                        <h3 className="text-xl font-bold">FAQs</h3>
                        <p className="text-sm">Get your doubts cleared</p>
                    </div>

                    <div className="text-center">
                        <img src={Mail} alt="Mail us" className="w-10 h-auto mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Mail us</h3>
                        <p className="text-sm">Reach out to us</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurService;