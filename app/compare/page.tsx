"use client";
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/slider";
import CountUp from "react-countup";
import Loading from "@/components/utils/loading";

const ComparePage = () => {
    const [domain1, setDomain1] = useState("");
    const [domain2, setDomain2] = useState("");

    const [loading, setLoading] = useState(false);

    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");

    const [score, setScore] = useState(10);

    const compareDomains = (e: any) => {
        e.preventDefault();
        // make to api calls first api call returns two images that are two be displayed here, second api call returns a similarity score fo the two domains in each api call i have to pass the domain names as body parameter

        // api call 1
        setLoading(true);
        fetch(
            `https://deploy-hoga-pls.gigamoksh.repl.co/post_images?url1=${encodeURIComponent(
                domain1
            )}&url2=${encodeURIComponent(domain2)}`,
            // "https://deploy-hoga-pls.gigamoksh.repl.co/post_images?url1=https%3A%2F%2Fgithub.com%2FMokshitSurana&url2=https%3A%2F%2Fgithub.com%2FArchit1706",
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify({
                //     domain1: domain1,
                //     domain2: domain2,
                // }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                return data;
            })
            .then((data) => {
                console.log(data);
                setImage1(data?.image1);
                console.log(image1);
                setImage2(data?.image2);
                setImage3(data?.image3);
                setImage4(data?.image4);
                setScore(data?.ssim_score);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });

        // api call 2

        // fetch("http://localhost:5000/api/score", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         domain1: domain1,
        //         domain2: domain2,
        //     }),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setScore(data.score);
        //         setLoading(false);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         setLoading(false);
        //     });

        // setLoading(false);
    };
    return (
        <section className="relative">
            <div
                // left-1/2 transform -translate-x-1/2 bottom-0
                className="absolute left-1/2 transform rotate-180 -translate-x-1/2 pointer-events-none -z-1"
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

                    {loading && <Loading type="balls" color="#008080" />}

                    {image1 && image2 && score && (
                        <>
                            <div className="flex flex-col justify-center items-center gap-4 pt-12">
                                <div className="flex flex-row justify-center items-center gap-4">
                                    <Slider
                                        image={`data:image/png;base64,${image1}`}
                                        ogImage={`data:image/png;base64,${image3}`}
                                    />
                                    <Slider
                                        image={`data:image/png;base64,${image2}`}
                                        ogImage={`data:image/png;base64,${image4}`}
                                    />
                                </div>
                            </div>
                            <p className="text-2xl text-gray-600 pt-6">
                                Similarity Score:{" "}
                                <CountUp
                                    start={0}
                                    end={score}
                                    duration={2}
                                    decimals={1}
                                    suffix={"%"}
                                />
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
