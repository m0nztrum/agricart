import { Contact } from '../components/home/Contact';
import { Hero } from '../components/home/Hero';
import { ProductPreview } from '../components/home/ProductPreview';

export const Home = () => {
    return (
        <div>
            <Hero />
            <ProductPreview />
            <Contact />
        </div>
    );
};
