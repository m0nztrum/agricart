import { FAQ } from '../components/FAQ';

const faqs = [
    {
        heading: 'What is your return policy?',
        description:
            "We offer a 30-day return policy on unopened products. If you're not satisfied, please contact our support team for assistance. Your satisfaction is our priority.",
    },
    {
        heading: 'How do I track my order?',
        description: 'You can track your order using the tracking number sent to your email.',
    },
    {
        heading: 'Are your products organic?',
        description:
            'Yes, many of our products are certified organic. We prioritize sustainable farming practices to ensure the health of our consumers and the environment.',
    },
];

export const About = () => {
    return (
        <div className="px-16">
            <h1>About Us.</h1>
            <FAQ faqs={faqs} />
        </div>
    );
};
