import { Leaf, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
export const ProductPreview = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        {
            src: '/assets/images/homepage/large-red-tomatoes.jpg',
            alt: 'Fresh red tomatoes in a farm setting',
        },
        {
            src: '/assets/images/homepage/mesh-basket-with-fresh-eggs.jpg',
            alt: 'Mesh basket filled with farm-fresh eggs',
        },
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };
    return (
        <div className="container mx-auto px-4 py-16 md:px-20 md:py-28">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
                <div>
                    <h2 className="mb-6 text-3xl">
                        Discover the Freshest Farm Products Delivered Right to Your Doorstep
                    </h2>
                    <p className="mb-8 leading-relaxed">
                        Experience the difference with our farm-fresh products that are sourced locally. Enjoy the peace
                        of mind that comes with our organic certification.
                    </p>
                    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {[
                            {
                                icon: <Leaf className="h-8 w-8 text-apple-600" />,
                                title: 'Freshness Guaranteed',
                                description: 'Taste the vibrant flavours of produce picked at peak ripeness.',
                            },
                            {
                                icon: <MapPin className="h-8 w-8 text-blue-600" />,
                                title: 'Locally Sourced',
                                description: 'Support your community by choosing products from nearby farms.',
                            },
                        ].map(({ icon, title, description }, index) => (
                            <div key={index} className="flex flex-col items-start">
                                {icon}
                                <h3 className="my-4 text-lg font-semibold text-gray-800">{title}</h3>
                                <p className="text-gray-600">{description}</p>
                            </div>
                        ))}
                    </section>
                </div>
                <div className="group relative">
                    <div className="overflow-hidden shadow-lg">
                        <img
                            className="h-96 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            src={images[currentImage].src}
                            alt={images[currentImage].alt}
                        />
                    </div>

                    <div className="absolute inset-x-0 bottom-4 flex justify-between px-4">
                        <button
                            onClick={prevImage}
                            className="rounded-full bg-gray-300 p-2 shadow-md transition-colors hover:bg-gray-400"
                        >
                            <span className="sr-only">Previous image</span>
                            <ChevronLeft />
                        </button>
                        <button
                            onClick={nextImage}
                            className="rounded-full bg-gray-300 p-2 shadow-md transition-colors hover:bg-gray-400"
                        >
                            <span className="sr-only">Next image</span>
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
