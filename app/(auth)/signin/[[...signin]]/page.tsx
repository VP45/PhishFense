import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
    return (
        <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 pb-6 md:pt-20 md:pb-20">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-6 md:pb-20">
                        <h1 className="h1">
                            Welcome back. We exist to make entrepreneurism
                            easier.
                        </h1>
                    </div>

                    <div className="flex justify-center items-center">
                        <SignIn />
                    </div>
                </div>
            </div>
        </section>
    );
}
