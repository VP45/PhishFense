"use client";

import React, { useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { TiDelete } from "react-icons/ti";
import CountUp from "react-countup";
import Loading from "react-loading";

export default function Dashboard() {
    const [domain, setDomain] = useState("");
    const [typoData, setTypoData] = useState<any>({});
    const [loading, setLoading] = useState(false);

    const findTyposquatters = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch(
            "https://deploy-hoga-pls.gigamoksh.repl.co/get_typesquatted_urls",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: domain,
                    max_num: 3,
                }),
            }
        );
        const data = await res.json();
        setTypoData(data);
        setLoading(false);
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
                            Typosquatters
                        </span>
                    </h1>
                    <div className="max-w-6xl mx-auto">
                        <form className="w-full flex justify-evenly items-center">
                            <input
                                type="text"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                                className="form-input w-full appearance-none bg-gray-300 border border-gray-400 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-800"
                                placeholder="Enter a domain."
                            />
                            <button
                                className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                                onClick={findTyposquatters}
                            >
                                Find
                            </button>
                        </form>
                    </div>

                    {loading && <Loading type="balls" color="#008080" />}
                </div>

                {typoData.output && (
                    <div className="max-w-6xl mx-auto px-3 text-center grid grid-cols-3 justify-center items-center gap-4">
                        {typoData.output.allDomains &&
                            typoData.output.allDomains.length > 20 &&
                            typoData.output.allDomains
                                .slice(1, 20)
                                .map((data: any, index: number) => (
                                    <Card
                                        key={index}
                                        registrar={data.registrar}
                                        domain_name={data.domain_name}
                                        country={data.country}
                                        creation_date={data.creation_date}
                                        name_servers={data.name_servers}
                                        status={data.status}
                                    />
                                ))}
                    </div>
                )}
            </div>
        </section>
    );
}

type CardProps = {
    registrar: string;
    domain_name: string;
    country: string;
    creation_date: string;
    name_servers: string;
    status: string;
};

const Card = ({
    registrar,
    domain_name,
    country,
    creation_date,
    name_servers,
    status,
}: CardProps) => {
    return (
        <div className="max-w-sm h-[300px] rounded-xl overflow-hidden shadow-md border p-1 bg-gray-200">
            <div className="h-full w-full bg-white">
                <h1 className="bg-clip-text text-2xl text-transparent bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg lowercase pt-4 font-bold">
                    {domain_name}
                </h1>
                <span>Registrar</span>
                <p className="text-gray-600 text-lg max-w-4xl text-center mb-6">
                    {registrar ? registrar : "Registrar Unknown"}
                </p>
                <div className="px-6 py-2">
                    <span className="font-bold text-xl">Status</span>
                    <p className="text-gray-700 text-base">
                        {status === "VERIFIED ✅" ? "✅" : "❌"}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
                        {creation_date
                            ? creation_date
                            : "Creation Date Unknown"}
                    </span>
                    <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
                        {country ? country : "Country Unknown"}
                    </span>
                </div>
            </div>
        </div>
    );
};
