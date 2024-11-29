import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { ProductList } from '../components/product/ProductList';
import { products } from '../supabase/seed/sampleProducts';

export const Product = () => {
        return (
        <div className="">
            <Navbar />
            <div className="px-20">
                <div className="text-center">
                    <h1 className="my-6 text-2xl font-bold">Product</h1>
                    <p>Explore our fresh, high-quality farm products today.</p>
                </div>
                <ProductList products={products} />
            </div>
            <Footer />
        </div>
    );
};
