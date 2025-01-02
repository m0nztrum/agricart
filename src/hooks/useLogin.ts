import { useState } from 'react';
import { login } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        try {
            const data = await login({ email, password });
            console.log('Login successful', data);
            navigate('/products');
        } catch (error) {
            console.error('Login Failed', error.message);
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, loading };
};
