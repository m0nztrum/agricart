import { z } from 'zod';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { useSignUp } from '../hooks/useSignUp';

export const SignUp = () => {
    const { handleSignUp, loading } = useSignUp();
    const schemaValidation = z
        .object({
            name: z.string().min(5, { message: 'Name must be at least 5 characters long.' }),
            email: z.string().min(1, { message: 'Email is required' }).email('Invalid Email.'),
            password: z.string().min(6, { message: 'Password must be at least 6 characters long.' }),
            confirmPassword: z.string().min(1, { message: 'Confirm Password is required.' }),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: "Passwords don't match.",
            path: ['confirmPassword'],
        });

    type FormData = z.infer<typeof schemaValidation>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schemaValidation),
    });

    const onSignupSubmit = (data: FormData) => {
        handleSignUp(data.email, data.password, data.name);
        console.log('logged in.', data);
    };

    const form = useRef<HTMLFormElement>(null);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="w-full max-w-md text-center">
                <h2>Welcome back!</h2>
                <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="text-green-500">
                        Log In
                    </Link>
                </p>
            </div>
            <form
                ref={form}
                className="mt-6 w-full max-w-md rounded-lg border p-6 shadow-lg"
                onSubmit={handleSubmit(onSignupSubmit)}
            >
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <label>Name</label>
                        <input
                            type="text"
                            id="name"
                            {...register('name')}
                            placeholder="John Doe"
                            className="rounded border p-2"
                        />
                        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    </div>

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

                    <div className="flex flex-col">
                        <label>Confirm Password*</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            {...register('confirmPassword')}
                            placeholder="Confirm your password"
                            className="rounded border p-2"
                        />
                        {errors.confirmPassword && (
                            <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full rounded-lg bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
                >
                    {loading ? 'Signing up...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};
