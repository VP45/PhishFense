"use client";

import React, { useState } from "react";
import { GoCheckCircleFill } from "react-icons/go";
import { TiDelete } from "react-icons/ti";

export default function Dashboard() {
    const [domain, setDomain] = useState("");
    const [phishingData, setPhishingData] = useState<any>({});
    const [loading, setLoading] = useState(false);
    const fetchPhishing = async () => {
        setLoading(true);
        const response = await fetch(`/api/dashboard`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                domain: domain,
            }),
        });
        const data = await response.json();
        setPhishingData(data);
        setLoading(false);
    };

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div
                    className="pt-32 pb-12 md:pt-40 md:pb-20"
                    data-aos="zoom-y-out"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
                        <span className="bg-clip-text uppercase text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                            Phishing Detection
                        </span>
                    </h1>
                    {/* <div className="max-w-3xl mx-auto"> */}
                    {/* <p className="text-gray-600 text-lg mb-6">
                        Enter a domain name to check
                    </p> */}
                    <form className="w-full lg:w-auto flex justify-evenly items-center">
                        <input
                            type="text"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            className="form-input w-full appearance-none bg-gray-300 border border-gray-400 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-800"
                            placeholder="Enter a domain name to check..."
                        />
                        <button
                            className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                            onClick={fetchPhishing}
                        >
                            Check
                        </button>
                    </form>

                    {loading && <p>Loading...</p>}
                </div>

                {phishingData && (
                    <div className="max-w-6xl mx-auto px-3">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Phishing Detection Information
                        </h1>

                        <div className="flex flex-col gap-1 justify-center items-center mt-5">
                            <h1 className="text-2xl font-bold">
                                Domain Safety Score:
                            </h1>
                            <span className="bg-gray-200 border-4 border-blue-400 p-8 text-3xl font-bold rounded-full">
                                {phishingData.SCORE || 180}
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ex, deserunt error.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-14 gap-1 mx-12 bg-sky-50 p-10 rounded-xl my-10">
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    In Top 1 Million :
                                </span>
                                <p className="ml-auto">
                                    {phishingData?.InTop1Million ? (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    ) : (
                                        <TiDelete
                                            className="text-red-500"
                                            size={30}
                                        />
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    In URL Void BlackList :
                                </span>
                                <p className="ml-auto">
                                    {phishingData?.InURLVoidBlackList ? (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    ) : (
                                        <TiDelete
                                            className="text-red-500"
                                            size={30}
                                        />
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    SSL Certificate :
                                </span>
                                <p className="ml-auto">
                                    {phishingData?.hasSSLCertificate ? (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    ) : (
                                        <TiDelete
                                            className="text-red-500"
                                            size={30}
                                        />
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    HTTPS :
                                </span>
                                <p className="ml-auto">
                                    {phishingData?.isHTTPS ? (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    ) : (
                                        <TiDelete
                                            className="text-red-500"
                                            size={30}
                                        />
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    Google Safety Passed :
                                </span>
                                <p className="ml-auto">
                                    {phishingData?.GoogleSafePassed ? (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    ) : (
                                        <TiDelete
                                            className="text-red-500"
                                            size={30}
                                        />
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    Nortan Web Safe Passed :
                                </span>
                                <p className="ml-auto">
                                    {phishingData?.NortanWebSafePassed ? (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    ) : (
                                        <TiDelete
                                            className="text-red-500"
                                            size={30}
                                        />
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    In Mcaffe BlackList :
                                </span>
                                <p className="ml-auto">
                                    {phishingData?.InMcaffeBlackList ? (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    ) : (
                                        <TiDelete
                                            className="text-red-500"
                                            size={30}
                                        />
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    In Sucuri Blacklist :
                                </span>
                                <p className="ml-auto">
                                    {phishingData?.InSucuriBlacklist ? (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    ) : (
                                        <TiDelete
                                            className="text-red-500"
                                            size={30}
                                        />
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    Temporary Domain :
                                </span>
                                <p className="ml-auto">
                                    {phishingData?.isTemporaryDomain ? (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    ) : (
                                        <TiDelete
                                            className="text-red-500"
                                            size={30}
                                        />
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    Older Than 3 Months :
                                </span>
                                <p className="ml-auto">
                                    {phishingData?.isOlderThan3Months ? (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    ) : (
                                        <TiDelete
                                            className="text-red-500"
                                            size={30}
                                        />
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    BlackListed in IpSets :
                                </span>
                                <p className="ml-auto">
                                    {phishingData?.isBlackListedinIpSets ? (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    ) : (
                                        <TiDelete
                                            className="text-red-500"
                                            size={30}
                                        />
                                    )}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    Target URLs :
                                </span>
                                {phishingData?.target_urls?.map((u: string) => {
                                    return <p>{u}</p>;
                                })}
                                {/* <p className="ml-auto">
                                    {phishingData.target_urls ? <GoCheckCircleFill className="text-green-500" size={24} /> : <GoCheckCircleFill className="text-green-500" size={24} />}
                                </p> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
