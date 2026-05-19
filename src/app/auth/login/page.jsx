"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Separator } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';


const LoginPage = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = async (formData) => {
        // console.log(formData)
        const { email, password } = formData;

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: process.env.BETTER_AUTH_URL,
        });
        if (res) {
            toast.success("Login Successful");
            router.push('/')
        }

        if (error) {
            toast.error(error.message)
            console.log(error)
        }

    }
    const handleGoogleLogin = async () => {
        const { data: res, error } = await authClient.signIn.social({
            provider: "google",
        });
        if (res) {
            toast.success("Login Successful");
            router.push('/')
        }

        if (error) {
            toast.error(error.message)
        }

    }

    return (
        <div className='h-screen flex justify-center items-center mx-auto'>
            <div className='bg-white rounded-lg shadow-2xl p-6 sm:w-sm '>
                <h2 className='text-3xl text-center'>Please Login!</h2>
                {/* Google */}
                <Button
                    variant='outline'
                    onClick={handleGoogleLogin}
                    className=" bg-white flex items-center text-black my-5 w-full border-[#e5e5e5]">
                    <FcGoogle></FcGoogle>
                    Login with Google
                </Button>

                <div className='flex items-center w-full'>
                    <Separator className='flex-1'/>
                    <div className='whitespace-nowrap'>Or login with Email</div>
                    <Separator className='flex-1'/>
                </div>
                <form onSubmit={handleSubmit(handleLogin)} className='space-y-2'>


                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input w-full"
                            placeholder="Email"
                            {...register("email", { required: "Email is Required" })} />

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input w-full"
                            placeholder="Password"
                            {...register("password", { required: "Password is required" })} />
                    </fieldset>
                    <Button variant='primary' type='submit' className="mt-4 w-full">Login</Button>
                    <h2>Do not have an account? <Link href={'/auth/register'} className='text-blue-800'>Register</Link></h2>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;