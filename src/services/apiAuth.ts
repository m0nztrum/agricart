import { supabase } from '../supabase/supabase';

export const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) throw new Error(error.message);
    console.log(data);
    return data;
};

export const signup = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });
    if (error) throw new Error(error.message);
    console.log(data);
    return data;
};
