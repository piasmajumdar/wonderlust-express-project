'use client'

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SignUpPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = async (formData) => {
        // console.log(formData)
        const { name, email, photo, password } = formData;
        // console.log(name, email, photo, password)

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: process.env.BETTER_AUTH_URL,
        });

        if (error) {
            toast.error(error.message)
        }
        if (res) {
            toast.success("Sign Up Successful. Please login Now..")
            router.push('/auth/login')
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
                <h2 className='text-3xl text-center'>Please Sign Up!</h2>
                {/* Google */}
                <Button
                    variant='outline'
                    onClick={handleGoogleLogin}
                    className=" bg-white flex items-center text-black my-5 w-full border-[#e5e5e5]">
                    <FcGoogle></FcGoogle>
                    Login with Google
                </Button>
                <form onSubmit={handleSubmit(handleRegister)} className='space-y-2'>

                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <small className='text-red-500'>{errors.name.message}</small>}

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input w-full"
                            placeholder="Email"
                            {...register("email", { required: "Email is Required" })} />

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Photo URL</label>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="photo"
                            {...register("photo", { required: "Photo is Required" })} />

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input w-full"
                            placeholder="Password"
                            {...register("password", { required: "Password is required" })} />
                    </fieldset>
                    <Button variant='primary' type="submit" className="mt-4 w-full">Sign Up</Button>
                    <h2>Already have an account? <Link href={'/auth/login'} className='text-blue-800'>Login</Link></h2>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;