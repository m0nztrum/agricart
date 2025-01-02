import { z } from 'zod';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

export const Login = () => {
    const { handleLogin, loading } = useLogin();
    const schemaValidation = z.object({
        email: z.string().min(1, { message: 'Email is required' }).email('Invalid Email.'),
        password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
    });

    type FormData = z.infer<typeof schemaValidation>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schemaValidation),
    });

    const onLoginSubmit = (data: FormData) => {
        handleLogin(data.email, data.password);
    };

    const form = useRef<HTMLFormElement>(null);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="w-full max-w-md text-center">
                <h2>Welcome back!</h2>
                <p className="text-gray-600">
                    Don’t have an account yet?{' '}
                    <Link to="/signup" className="text-green-500">
                        Sign up
                    </Link>
                </p>
            </div>
            <form
                ref={form}
                className="mt-6 w-full max-w-md rounded-lg border p-6 shadow-lg"
                onSubmit={handleSubmit(onLoginSubmit)}
            >
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <label>Email*</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email')}
                            placeholder="john@doe.com"
                            className="rounded border p-2"
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label>Password*</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password')}
                            placeholder="password"
                            className="rounded border p-2"
                        />
                        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full rounded-lg bg-green-500 px-6 py-3 text-white hover:bg-green-600"
                    disabled={loading}
                >
                    {loading ? 'Login In..' : 'Login'}
                </button>
            </form>
        </div>
    );
};
