import { createContext, ReactNode, useContext } from 'react';
import { supabase } from '../supabase/supabase';
import { SupabaseClient } from '@supabase/supabase-js';

const supabaseContext = createContext<SupabaseClient | null>(null);

export const SupabaseProvider = ({ children }: { children: ReactNode }) => {
    return <supabaseContext.Provider value={supabase}>{children}</supabaseContext.Provider>;
};

export const useSupabase = () => {
    const context = useContext(supabaseContext);
    if (!context) {
        throw new Error('useSupabase must be used within a SupabaseProvider');
    }
    return context;
};
