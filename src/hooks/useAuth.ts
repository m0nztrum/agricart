import { useEffect, useState } from 'react';
import { useSupabase } from '../contexts/SupabaseAuth';
import { User } from '@supabase/supabase-js';

export const useAuth = () => {
    const supabase = useSupabase();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchSession = async () => {
            const { data } = await supabase.auth.getSession();
            setUser(data?.session?.user ?? null);
        };

        fetchSession();

        // This line handles the subscription to auth state changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        // Cleanup by unsubscribing when the component unmounts
        return () => {
            subscription?.unsubscribe(); // Call unsubscribe on the subscription object
        };
    }, [supabase]);

    return { user };
};
