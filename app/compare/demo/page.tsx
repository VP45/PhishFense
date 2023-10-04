"use client";
import IframeScroll from "@/components/iframe-scroll";
import { useState } from "react";

export default function Newsletter() {
    const url1 = "https://archit-rathod.vercel.app/";
    const url2 = "https://prateekv.vercel.app/";

    const [image1, setImage1] = useState("https://picsum.photos/200/300");
    const [image2, setImage2] = useState("https://picsum.photos/200/300");

    const [score, setScore] = useState(10);

    return (
        <section className="relative">
            <div
                // left-1/2 transform -translate-x-1/2 bottom-0
                className="absolute left-1/2 transform bottom-32 -translate-x-1/2 pointer-events-none -z-1"
                aria-hidden="true"
            >
                <svg
                    width="1360"
                    height="578"
                    viewBox="0 0 1360 578"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient
                            x1="50%"
                            y1="0%"
                            x2="50%"
                            y2="100%"
                            id="illustration-01"
                        >
                            <stop stopColor="#FFF" offset="0%" />
                            <stop stopColor="#EAEAEA" offset="77.402%" />
                            <stop stopColor="#DFDFDF" offset="100%" />
                        </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                        <circle cx="1232" cy="128" r="128" />
                        <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-20 pb-12 md:pt-40 md:pb-20 flex flex-col justify-center items-center">
                    <h1
                        className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-center"
                        data-aos="zoom-y-out"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                            TypoSquatters Demo Comparison
                        </span>
                    </h1>
                    {/* <div className="max-w-3xl mx-auto"> */}
                    {/* <p className="text-gray-600 text-lg max-w-4xl text-center mb-6">
                        Typosquatting is the malicious practice of registering
                        domain names that are similar to popular websites but
                        contain typographical errors or slight variations in
                        order to deceive users and potentially engage in
                        fraudulent activities.
                    </p> */}
                </div>
                <div className="flex justify-center items-center gap-4">
                    <div className="w-full">
                        <p className="text-gray-600 text-lg max-w-4xl text-center mb-6">
                            Website 1 - {url1}
                        </p>
                        <IframeScroll src={url1} />
                    </div>
                    <div className="w-full">
                        <p className="text-gray-600 text-lg max-w-4xl text-center mb-6">
                            Website 2 - {url2}
                        </p>
                        <IframeScroll src={url2} />
                    </div>
                </div>

                {image1 && image2 && score && (
                    <>
                        <div className="flex flex-col justify-center items-center gap-4 pt-12">
                            <div className="flex flex-row justify-center items-center gap-4">
                                <img
                                    // src={`data:image/png;base64,${image1}`}
                                    src={image1}
                                    alt="domain1"
                                    className="w-full"
                                />
                                <img
                                    // src={`data:image/png;base64,${image1}`}
                                    src={image2}
                                    alt="domain1"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <p className="text-2xl text-gray-600 pt-6">
                            Similarity Score: {score}%
                        </p>
                    </>
                )}
            </div>
        </section>
    );
}
