import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 pb-6 md:pt20 md:pb-20">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">
                            Welcome. We exist to make entrepreneurism easier.
                        </h1>
                    </div>

                    {/* Form */}
                    <div className="flex justify-center items-center">
                        <SignUp />
                    </div>
                </div>
            </div>
        </section>
    );
}
