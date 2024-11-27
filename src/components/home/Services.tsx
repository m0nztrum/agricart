import { ArrowRight } from 'lucide-react';
import { Box } from 'lucide-react';
const services = [
    {
        title: ' Delight in Natures Sweetness with Our Handpicked Seasonal Fruits',
        description: 'Our fruits are grown sustainably, ensuring quality and freshness in every bite.',
        url: '/products',
    },
    {
        title: 'Savor the Creaminess of Our Farm-Fresh Dairy Products, Delivered Daily',
        description: ' Indulge in our rich dairy selection, sourced from local farms for optimal taste.',
        url: '/products',
    },
    {
        title: '  Discover the Best of Nature with Our Quality Farm Products',
        description: 'From farm to table, we bring you the freshest produce and dairy.',
        url: '/products',
    },
];
export const Services = () => {
    return (
        <div className="px-16 py-28">
            <h2 className="mb-20 text-4xl font-bold">Explore Our Fresh and Organic Vegetables, Straight from the Farm to You</h2>
            <section className="grid grid-cols-3 gap-12 text-center">
                {services.map((service, index) => (
                    <div className="p-5" key={index}>
                        <div className="mb-6 flex justify-center">
                            <Box />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                        <p className="mb-8 text-lg">{service.description}</p>
                        <a href={service.url} className="flex justify-center hover:underline">
                            Learn More
                            <ArrowRight />
                        </a>
                    </div>
                ))}
            </section>
        </div>
    );
};
