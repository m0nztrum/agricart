import { supabase } from '../supabase/supabase';

type AuthProps = {
    email: string;
    password: string;
    name?: string;
};

export const login = async ({ email, password }: AuthProps) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) throw new Error(error.message);
    console.log(data);
    return data;
};

export const signup = async ({ email, password, name }: AuthProps) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
            },
        },
    });
    if (error) throw new Error(error.message);
    console.log(data);
    return data;
};
