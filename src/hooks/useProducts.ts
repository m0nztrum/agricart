import { supabase } from '../supabase/supabase';
import { useState, useEffect } from 'react';
import { Product } from '../supabase/model/Product';

export const useProducts = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const { data, error } = await supabase.from('products').select('*');
            if (data && !error) {
                setProducts(data);
                console.log(data);
            } else {
                console.log('Error fetching products', error.message);
            }
            setLoading(false);
        };
        fetchProducts();
    }, []);

    return { loading, products };
};
