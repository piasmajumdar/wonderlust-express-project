"use client";

import Link from "next/link";
import { MdOutlineErrorOutline } from "react-icons/md";

export default function Error({
    error,
    reset,
}) {
    return (
        <section className="min-h-screen bg-[#f8f7f4] flex items-center justify-center px-4">
            <div className="max-w-2xl w-full bg-white rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-10 md:p-14 text-center border border-gray-100">

                {/* Icon */}
                <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-8">
                    <MdOutlineErrorOutline className="text-red-500 text-6xl" />
                </div>

                {/* Heading */}
                <h1 className="text-5xl md:text-6xl font-bold text-[#1e1e1e] leading-tight">
                    Something Went Wrong
                </h1>

                {/* Description */}
                <p className="text-gray-500 text-lg leading-8 mt-6 max-w-xl mx-auto">
                    We encountered an unexpected issue while loading this page.
                    Please try again or return to the homepage.
                </p>

                {/* Error Message */}
                {/* {error?.message && (
                    <div className="mt-8 bg-red-50 border border-red-100 rounded-2xl p-5">
                        <p className="text-red-500 text-sm break-words">
                            {error.message}
                        </p>
                    </div>
                )} */}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

                    <button
                        onClick={() => reset()}
                        className="h-[56px] px-10 rounded-full bg-black hover:bg-[#b08244] text-white text-base font-semibold transition-all duration-300"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="h-[56px] px-10 rounded-full border border-gray-200 hover:bg-black hover:text-white text-black text-base font-semibold transition-all duration-300 flex items-center justify-center"
                    >
                        Back To Home
                    </Link>
                </div>
            </div>
        </section>
    );
}