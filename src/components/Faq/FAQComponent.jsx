import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faqAccordionData } from './FaqQna.data'

const middleElement = Math.ceil(faqAccordionData?.length / 2);

export const FAQComponent = () => {
    return (
        <div className="w-full pl-4 pt-5">
            <h2 className="text-2xl font-bold pl-4 pt-5">Customer Support with FAQs </h2>
            <div className='grid grid-cols-2 gap-2 w-full pt-5'>
                <div >
                    {
                        faqAccordionData.slice(0, middleElement)?.map(data => {
                            return (
                                <Accordion key={data.id} title={data.title}>
                                    <p>
                                        {data.content}
                                    </p>
                                </Accordion>
                            )
                        })
                    }
                </div>
                <div>
                    {
                        faqAccordionData.slice(middleElement)?.map(data => {
                            return (
                                <Accordion key={data.id} title={data.title}>
                                    <p>
                                        {data.content}
                                    </p>
                                </Accordion>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex justify-between items-center text-left py-4 px-6 text-base font-medium cursor-pointer transition-all duration-400 border-b`}
            >
                <span>{title}</span>
                <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
            </button>
            {/* Hide or show content based on isOpen, no layout shift */}
            <div
                className={`w-full ${isOpen ? 'block' : 'hidden'} px-6 py-4 bg-white border-t border-gray-300`}
            >
                {children}
            </div>
        </div>
    );
};
