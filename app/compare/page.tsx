"use client";
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/slider";

const ComparePage = () => {
    const [domain1, setDomain1] = useState("");
    const [domain2, setDomain2] = useState("");

    const [loading, setLoading] = useState(false);

    const [image1, setImage1] = useState("https://picsum.photos/200/300");
    const [image2, setImage2] = useState("https://picsum.photos/200/300");

    const [score, setScore] = useState(10);

    const compareDomains = () => {
        // make to api calls first api call returns two images that are two be displayed here, second api call returns a similarity score fo the two domains in each api call i have to pass the domain names as body parameter

        // api call 1
        setLoading(true);
        fetch("http://localhost:5000/api/compare", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                domain1: domain1,
                domain2: domain2,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setImage1(data.image1);
                setImage2(data.image2);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });

        // api call 2

        fetch("http://localhost:5000/api/score", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                domain1: domain1,
                domain2: domain2,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setScore(data.score);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });

        setLoading(false);
    };
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-20 pb-12 md:pt-40 md:pb-20 flex flex-col justify-center items-center">
                    <h1
                        className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4 text-center"
                        data-aos="zoom-y-out"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                            Compare TypoSquatters
                        </span>
                    </h1>
                    {/* <div className="max-w-3xl mx-auto"> */}
                    <p className="text-gray-600 text-lg max-w-4xl text-center mb-6">
                        Typosquatting is the malicious practice of registering
                        domain names that are similar to popular websites but
                        contain typographical errors or slight variations in
                        order to deceive users and potentially engage in
                        fraudulent activities.
                    </p>
                    <form className="w-full lg:w-auto flex flex-col justify-evenly items-center gap-4">
                        <div className="w-full lg:w-auto flex justify-center items-center">
                            <input
                                type="text"
                                value={domain1}
                                onChange={(e) => setDomain1(e.target.value)}
                                className="form-input w-full appearance-none bg-gray-300 border border-gray-400 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
                                placeholder="www.github.com"
                            />
                            <input
                                type="text"
                                value={domain2}
                                onChange={(e) => setDomain2(e.target.value)}
                                className="form-input w-full appearance-none bg-gray-300 border border-gray-400 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-500"
                                placeholder="www.lithub.com"
                            />
                        </div>
                        <button
                            className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                            onClick={compareDomains}
                        >
                            Compare
                        </button>
                    </form>

                    {loading && <p>Loading...</p>}

                    {image1 && image2 && score && (
                        <>
                            <div className="flex flex-col justify-center items-center gap-4 pt-12">
                                <div className="flex flex-row justify-center items-center gap-4">
                                    {/* <img
                                        // src={`data:image/png;base64,${image1}`}
                                        src={image1}
                                        alt="domain1"
                                        className="w-1/2"
                                    /> */}
                                    <Slider image={image1} ogImage={image2} />
                                    <Slider image={image1} ogImage={image2} />
                                </div>
                            </div>
                            <p className="text-2xl text-gray-600 pt-6">
                                Similarity Score: {score}%
                            </p>
                        </>
                    )}
                </div>
            </div>

            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pb-12 md:pb-20">
                        {/* CTA box */}
                        <div
                            className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
                            data-aos="zoom-y-out"
                        >
                            {/* Background illustration */}
                            <div
                                className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
                                aria-hidden="true"
                            >
                                <svg
                                    width="428"
                                    height="328"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <radialGradient
                                            cx="35.542%"
                                            cy="34.553%"
                                            fx="35.542%"
                                            fy="34.553%"
                                            r="96.031%"
                                            id="ni-a"
                                        >
                                            <stop
                                                stopColor="#DFDFDF"
                                                offset="0%"
                                            />
                                            <stop
                                                stopColor="#4C4C4C"
                                                offset="44.317%"
                                            />
                                            <stop
                                                stopColor="#333"
                                                offset="100%"
                                            />
                                        </radialGradient>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <g fill="#FFF">
                                            <ellipse
                                                fillOpacity=".04"
                                                cx="185"
                                                cy="15.576"
                                                rx="16"
                                                ry="15.576"
                                            />
                                            <ellipse
                                                fillOpacity=".24"
                                                cx="100"
                                                cy="68.402"
                                                rx="24"
                                                ry="23.364"
                                            />
                                            <ellipse
                                                fillOpacity=".12"
                                                cx="29"
                                                cy="251.231"
                                                rx="29"
                                                ry="28.231"
                                            />
                                            <ellipse
                                                fillOpacity=".64"
                                                cx="29"
                                                cy="251.231"
                                                rx="8"
                                                ry="7.788"
                                            />
                                            <ellipse
                                                fillOpacity=".12"
                                                cx="342"
                                                cy="31.303"
                                                rx="8"
                                                ry="7.788"
                                            />
                                            <ellipse
                                                fillOpacity=".48"
                                                cx="62"
                                                cy="126.811"
                                                rx="2"
                                                ry="1.947"
                                            />
                                            <ellipse
                                                fillOpacity=".12"
                                                cx="78"
                                                cy="7.072"
                                                rx="2"
                                                ry="1.947"
                                            />
                                            <ellipse
                                                fillOpacity=".64"
                                                cx="185"
                                                cy="15.576"
                                                rx="6"
                                                ry="5.841"
                                            />
                                        </g>
                                        <circle
                                            fill="url(#ni-a)"
                                            cx="276"
                                            cy="237"
                                            r="200"
                                        />
                                    </g>
                                </svg>
                            </div>

                            <div className="relative flex flex-col lg:flex-row justify-between items-center">
                                {/* CTA content */}
                                <div className="text-center lg:text-left lg:max-w-xl">
                                    <h3 className="h3 text-white mb-2">
                                        Don't know any domain names?
                                    </h3>
                                    <p className="text-gray-300 text-lg mb-6">
                                        Click on the demo button to see how our
                                        Typosquatter Comparer Works
                                    </p>

                                    {/* CTA form */}
                                    <form className="w-full lg:w-auto">
                                        <div className="flex flex-col sm:flex-row justify-start max-w-xs mx-auto sm:max-w-md lg:mx-0">
                                            <a
                                                className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                                                href="/compare/demo"
                                            >
                                                Demo
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ComparePage;
