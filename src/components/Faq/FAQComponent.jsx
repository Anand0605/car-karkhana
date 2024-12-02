import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { faqAccordionData } from './FaqQna.data'
import Accordion from '../Accordion/Accordion';

const middleElement = Math.ceil(faqAccordionData?.length / 2);

export const FAQComponent = () => {
    return (
        <div className="w-full pl-4 pt-5">
            <h2 className="text-2xl font-bold pl-4 pt-5">Customer Support with FAQs </h2>
            <div className='grid grid-cols-2 gap-2 w-full pt-5'>
                <div >
                    {
                        faqAccordionData.slice(0, middleElement)?.map((data) => {
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
                                    <p dangerouslySetInnerHTML={{ __html: data.content }} />
                                </Accordion>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};