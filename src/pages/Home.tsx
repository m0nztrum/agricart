import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { ProductPreview } from '../components/home/ProductPreview';
import { Testimonials } from '../components/home/Testimonials';

export const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <ProductPreview />
            <Testimonials />
        </div>
    );
};
