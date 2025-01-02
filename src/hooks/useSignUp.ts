import { useState } from 'react';
import { signup } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (email: string, password: string) => {
        setLoading(true);
        try {
            const data = await signup({ email, password });
            console.log('Signup successful', data);
            navigate('/login');
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { handleSignUp, loading };
};
