import { ProductList } from '../components/product/ProductList';
import { Product } from '../supabase/model/Product';
import { LoadingSpinner } from '../components/Loading';
import { supabase } from '../supabase/supabase';
import { useEffect, useState } from 'react';

export const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('products').select('*');
        if (data && !error) {
            setProducts(data);
            console.log(data);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="px-20">
            <div className="text-center">
                <h1 className="my-6 text-2xl font-bold">Product</h1>
                <p>Explore our fresh, high-quality farm products today.</p>
            </div>
            {loading ? (
                <div className="flex flex-col items-center justify-center">
                    <LoadingSpinner />
                </div>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    );
};
