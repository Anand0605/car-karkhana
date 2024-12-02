import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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

export default Accordion;