import Link from "next/link";
import { Home, Search } from "lucide-react";
import { playFair } from "./layout";

export default function NotFound() {
    return (
        <section className="min-h-screen bg-[#F8F7F4] flex items-center justify-center px-6">
            <div className="max-w-6xl mx-auto items-center">
                <div>
                    <p className="text-[#C8A96B] font-semibold tracking-[4px] uppercase mb-4">
                        Error 404
                    </p>

                    <h1
                        className={`text-5xl md:text-7xl font-bold leading-tight text-[#1E1E1E]`}
                    >
                        Page Not <br /> Found
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
                        The page you are looking for may have been removed,
                        renamed, or is temporarily unavailable.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <Link href="/">
                            <button className="flex items-center gap-2 cursor-pointer bg-black text-white px-7 py-4 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300">
                                <Home size={18} />
                                Back Home
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}