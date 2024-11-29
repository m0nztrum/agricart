import { Star } from 'lucide-react';

export const Testimonials = () => {
    return (
        <div className="px-20 py-28">
            <div className="grid grid-cols-2 gap-20">
                <div>
                    <img src="/images/placeholder-image-3610342416.png" alt="testimonial" className="rounded-lg" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} />
                        ))}
                    </div>
                    <p className="my-8 text-2xl font-medium leading-relaxed">
                        "The quality of the farm products is exceptional! I couldn't be happier with my purchase."
                    </p>

                    {/* Author Info */}
                    <div>
                        <p>John Doe</p>
                        <p>Farm Manager, Green Acres. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
