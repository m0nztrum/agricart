import { Star } from 'lucide-react';

export const Testimonials = () => {
    const testimonial = {
        image: '/assets/images/placeholder-image-3610342416.png',
        quote: "The quality of the farm products is exceptional! I couldn't be happier with my purchase.",
        name: 'John Doe',
        title: 'Farm Manager, Green Acres',
        rating: 5,
    };
    return (
        <div className="container mx-auto px-4 py-16 md:px-20 md:py-28">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
                <div className="relative overflow-hidden">
                    <img src={testimonial.image} alt="testimonial" className="w-full rounded-lg" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="fill-current" />
                        ))}
                    </div>
                    <p className="my-8 text-2xl font-medium leading-relaxed">"{testimonial.quote}"</p>
                    <div className="mt-4 border-t pt-4">
                        <p className="text-lg font-semibold text-gray-800">{testimonial.name}</p>
                        <p className="text-gray-600">{testimonial.title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
