"use client";

import React, { useState } from "react";
import Loading from "@/components/utils/loading";
import { GoCheckCircleFill } from "react-icons/go";
import { TiDelete } from "react-icons/ti";
import CountUp from "react-countup";
import PaginationButtons from "@/components/pagination/buttons";
import useDataFetcher from "@/components/pagination/useDataFetcher";
import Row from "@/components/pagination/row";

export default function Dashboard() {
    const [domain, setDomain] = useState("");
    const [phishingData, setPhishingData] = useState<any>({});
    const [loader, setLoader] = useState(false);
    const { loading, pages, totalPages, currentPage, setCurrentPage } =
        useDataFetcher();
    const fetchPhishing = async (e: any) => {
        e.preventDefault();
        setLoader(true);
        const response = await fetch(
            `https://deploy-hoga-pls.gigamoksh.repl.co/predict`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    url: domain,
                }),
            }
        );
        const data = await response.json();
        console.log(data);
        setPhishingData(data);
        console.log(phishingData);
        console.log(phishingData?.prediction?.SCORE);
        setLoader(false);
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
                            Phishing Detection
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
                                onClick={fetchPhishing}
                            >
                                Check
                            </button>
                        </form>
                    </div>

                    {loader && <Loading type="balls" color="#008080" />}
                </div>

                {phishingData && (
                    <div className="max-w-6xl mx-auto px-3 text-center flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Phishing Detection Information
                        </h1>

                        <div className="flex flex-col gap-1 justify-center items-center mt-5">
                            <h1 className="text-2xl font-bold">
                                Domain Safety Score:
                            </h1>
                            <span className="bg-gray-200 border-4 border-blue-400 p-8 text-3xl font-bold rounded-full">
                                <CountUp
                                    start={0}
                                    end={phishingData?.prediction?.SCORE}
                                    duration={2}
                                    decimals={0}
                                    suffix={""}
                                />
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-x-14 gap-1 mx-12 bg-sky-50 p-10 rounded-xl my-10">
                            <div className="flex items-center">
                                <span className="text-lg text-gray-700 font-bold">
                                    In Top 1 Million :
                                </span>
                                <p className="ml-auto">
                                    {phishingData?.prediction?.InTop1Million ? (
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
                                    {phishingData?.prediction
                                        ?.InURLVoidBlackList ? (
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
                                    {phishingData?.prediction
                                        ?.hasSSLCertificate ? (
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
                                    {phishingData?.prediction?.isHTTPS ? (
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
                                    {phishingData?.prediction
                                        ?.GoogleSafePassed ? (
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
                                    {phishingData?.prediction
                                        ?.NortanWebSafePassed ? (
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
                                    {phishingData?.prediction
                                        ?.InMcaffeBlackList ? (
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
                                    {phishingData?.prediction
                                        ?.InSucuriBlacklist ? (
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
                                    {phishingData?.prediction
                                        ?.isTemporaryDomain ? (
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
                                    {phishingData?.prediction
                                        ?.isOlderThan3Months ? (
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
                                    {phishingData?.prediction
                                        ?.isBlackListedinIpSets ? (
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
                                {phishingData?.prediction?.target_urls?.map(
                                    (u: string) => {
                                        return (
                                            <p className="bg-blue-500 p-1 text-white rounded-full mx-1">
                                                {u}
                                            </p>
                                        );
                                    }
                                )}
                                {/* <p className="ml-auto">
                                    {phishingData?.prediction?.target_urls ? (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    ) : (
                                        <GoCheckCircleFill
                                            className="text-green-500"
                                            size={24}
                                        />
                                    )}
                                </p> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
