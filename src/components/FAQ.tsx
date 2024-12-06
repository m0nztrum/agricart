import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export const FAQ = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="mx-auto px-4 py-8">
            <h2 className="mb-6 text-3xl font-bold">FAQs</h2>
            <p className="mb-2">Find answers to your most common questions about our farm products right here.</p>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="overflow-hidden border-t">
                        <div
                            className="flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-gray-100"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-lg font-semibold">{faq.heading}</h3>
                            {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                        </div>
                        {activeIndex === index && <div className="bg-gray-50 p-4 text-gray-700">{faq.description}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
};
