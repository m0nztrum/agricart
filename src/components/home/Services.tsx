import { ArrowRight } from 'lucide-react';
import { Box } from 'lucide-react';

const services = [
    {
        icon: <Box className="h-12 w-12 text-green-600" />,
        title: "Delight in Nature's Sweetness with Our Handpicked Seasonal Fruits",
        description: 'Our fruits are grown sustainably, ensuring quality and freshness in every bite.',
        url: '/products',
        color: 'green',
    },
    {
        icon: <Box className="h-12 w-12 text-blue-600" />,
        title: 'Savor the Creaminess of Our Farm-Fresh Dairy Products, Delivered Daily',
        description: 'Indulge in our rich dairy selection, sourced from local farms for optimal taste.',
        url: '/products',
        color: 'blue',
    },
    {
        icon: <Box className="h-12 w-12 text-orange-600" />,
        title: 'Discover the Best of Nature with Our Quality Farm Products',
        description: 'From farm to table, we bring you the freshest produce and dairy.',
        url: '/products',
        color: 'orange',
    },
];

export const Services = () => {
    return (
        <div className="container mx-auto px-4 py-16 md:px-20 md:py-28">
            <h2 className="mb-12 text-center text-3xl font-bold leading-tight text-gray-800 md:mb-20 md:text-4xl">
                Explore Our Fresh and Organic Vegetables, Straight from the Farm to You.
            </h2>
            <section className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                        <div className="mb-6 flex justify-center">{service.icon}</div>
                        <h3 className="group-hover:text-primary-600 mb-4 text-xl font-bold text-gray-800 transition-colors md:text-2xl">
                            {service.title}
                        </h3>
                        <p className="mb-8 text-base text-gray-600 md:text-lg">{service.description}</p>
                        <a
                            href={service.url}
                            className="text-primary-600 hover:text-primary-800 inline-flex items-center justify-center space-x-2 px-4 py-2 transition-colors"
                        >
                            <span>Learn More</span>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                ))}
            </section>
        </div>
    );
};
