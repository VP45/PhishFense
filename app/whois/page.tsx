"use client";
import React, { useState, useEffect } from "react";
import { TbWorldWww } from "react-icons/tb";
import Loading from "@/components/utils/loading";
import {
    BsFillPersonFill,
    BsPersonLinesFill,
    BsPersonFillGear,
} from "react-icons/bs";

export default function Whois() {
    const [domain, setDomain] = useState("");
    // const [domainData, setDomainData] = useState<any>({
    //     domain_name: ["GOOGLE.COM", "google.com"],
    //     registrar: "MarkMonitor, Inc.",
    //     whois_server: "whois.markmonitor.com",
    //     referral_url: null,
    //     updated_date: ["2019-09-09T15:39:04", "2019-09-09T15:39:04+00:00"],
    //     creation_date: ["1997-09-15T04:00:00", "1997-09-15T07:00:00+00:00"],
    //     expiration_date: ["2028-09-14T04:00:00", "2028-09-13T07:00:00+00:00"],
    //     name_servers: [
    //         "NS1.GOOGLE.COM",
    //         "NS2.GOOGLE.COM",
    //         "NS3.GOOGLE.COM",
    //         "NS4.GOOGLE.COM",
    //         "ns3.google.com",
    //         "ns2.google.com",
    //         "ns4.google.com",
    //         "ns1.google.com",
    //     ],
    //     status: [
    //         "clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited",
    //         "clientTransferProhibited https://icann.org/epp#clientTransferProhibited",
    //         "clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited",
    //         "serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited",
    //         "serverTransferProhibited https://icann.org/epp#serverTransferProhibited",
    //         "serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited",
    //         "clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited)",
    //         "clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited)",
    //         "clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited)",
    //         "serverUpdateProhibited (https://www.icann.org/epp#serverUpdateProhibited)",
    //         "serverTransferProhibited (https://www.icann.org/epp#serverTransferProhibited)",
    //         "serverDeleteProhibited (https://www.icann.org/epp#serverDeleteProhibited)",
    //     ],
    //     emails: [
    //         "abusecomplaints@markmonitor.com",
    //         "whoisrequest@markmonitor.com",
    //     ],
    //     dnssec: "unsigned",
    //     name: null,
    //     org: "Google LLC",
    //     address: null,
    //     city: null,
    //     state: "CA",
    //     registrant_postal_code: null,
    //     country: "US",
    // });
    const [domainData, setDomainData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const fetchWhois = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch(
            `https://deploy-hoga-pls.gigamoksh.repl.co/whois?domain=${domain}`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    domain: domain,
                }),
            }
        );
        const data = await response.json();
        setDomainData(data);
        setLoading(false);
    };
    return (
        <section className="relative">
            {/* illustartion */}
            <div
                // left-1/2 transform -translate-x-1/2 bottom-0
                className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none -z-1"
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
                            WHOIS
                        </span>
                    </h1>
                    {/* <div className="max-w-3xl mx-auto"> */}
                    <p className="text-gray-600 text-lg mb-6">
                        Enter a domain name to lookup
                    </p>
                    <form className="w-full lg:w-auto flex justify-evenly items-center">
                        <input
                            type="text"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                            className="form-input w-full appearance-none bg-gray-300 border border-gray-400 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-black placeholder-gray-800"
                            placeholder="www.doogle.com"
                        />
                        <button
                            className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                            onClick={fetchWhois}
                        >
                            Lookup
                        </button>
                    </form>

                    {loading && <Loading type="balls" color="#008080" />}
                </div>

                {/* if domainData is not null or {} */}

                {/* {domainData && (
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="relative flex flex-row justify-start items-center px-4 gap-6 bg-white rounded shadow-md pb-2 mb-4">
                            <TbWorldWww className="w-14 h-14 p-2 bg-blue-600 rounded-full text-white " />
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Domain Information
                            </h4>
                        </div>
                        <ul>
                            {domainData.Domain && (
                                <li>
                                    <strong>Domain:</strong> {domainData.Domain}
                                </li>
                            )}
                            {domainData.Registrar && (
                                <li>
                                    <strong>Registrar:</strong>{" "}
                                    {domainData.Registrar}
                                </li>
                            )}
                            {domainData["Registered On"] && (
                                <li>
                                    <strong>Registered On:</strong>{" "}
                                    {domainData["Registered On"]}
                                </li>
                            )}
                            {domainData["Expires On"] && (
                                <li>
                                    <strong>Expires On:</strong>{" "}
                                    {domainData["Expires On"]}
                                </li>
                            )}
                            {domainData["Updated On"] && (
                                <li>
                                    <strong>Updated On:</strong>{" "}
                                    {domainData["Updated On"]}
                                </li>
                            )}
                            {domainData.Status && (
                                <li>
                                    <strong>Status:</strong> {domainData.Status}
                                </li>
                            )}
                            {domainData["Name Servers"] && (
                                <li>
                                    <strong>Name Servers:</strong>{" "}
                                    {domainData["Name Servers"].join(", ")}
                                </li>
                            )}
                        </ul>

                        <div className="relative flex flex-row justify-start items-center px-4 gap-6 bg-white rounded shadow-md pb-2 mb-4">
                            <BsFillPersonFill className="w-14 h-14 p-2 bg-blue-600 rounded-full text-white " />
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Registrant Contact
                            </h4>
                        </div>
                        <ul>
                            {domainData["Registrant Contact"] && (
                                <li>
                                    <strong>Organization:</strong>{" "}
                                    {
                                        domainData["Registrant Contact"]
                                            .Organization
                                    }
                                </li>
                            )}
                            {domainData["Registrant Contact"] && (
                                <li>
                                    <strong>State:</strong>{" "}
                                    {domainData["Registrant Contact"].State}
                                </li>
                            )}
                            {domainData["Registrant Contact"] && (
                                <li>
                                    <strong>Country:</strong>{" "}
                                    {domainData["Registrant Contact"].Country}
                                </li>
                            )}
                            {domainData["Registrant Contact"] && (
                                <li>
                                    <strong>Email:</strong>{" "}
                                    {domainData["Registrant Contact"].Email}
                                </li>
                            )}
                        </ul>

                        <div className="relative flex flex-row justify-start items-center px-4 gap-6 bg-white rounded shadow-md pb-2 mb-4">
                            <BsPersonLinesFill className="w-14 h-14 p-2 bg-blue-600 rounded-full text-white " />
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Administrative Contact
                            </h4>
                        </div>
                        <ul>
                            {domainData["Administrative Contact"] && (
                                <li>
                                    <strong>Organization:</strong>{" "}
                                    {
                                        domainData["Administrative Contact"]
                                            .Organization
                                    }
                                </li>
                            )}
                            {domainData["Administrative Contact"] && (
                                <li>
                                    <strong>State:</strong>{" "}
                                    {domainData["Administrative Contact"].State}
                                </li>
                            )}
                            {domainData["Administrative Contact"] && (
                                <li>
                                    <strong>Country:</strong>{" "}
                                    {
                                        domainData["Administrative Contact"]
                                            .Country
                                    }
                                </li>
                            )}
                            {domainData["Administrative Contact"] && (
                                <li>
                                    <strong>Email:</strong>{" "}
                                    {domainData["Administrative Contact"].Email}
                                </li>
                            )}
                        </ul>

                        <div className="relative flex flex-row justify-start items-center px-4 gap-6 bg-white rounded shadow-md pb-2 mb-4">
                            <BsPersonFillGear className="w-14 h-14 p-2 bg-blue-600 rounded-full text-white " />
                            <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                Technical Contact
                            </h4>
                        </div>
                        <ul>
                            {domainData["Technical Contact"] && (
                                <li>
                                    <strong>Organization:</strong>{" "}
                                    {
                                        domainData["Technical Contact"]
                                            .Organization
                                    }
                                </li>
                            )}
                            {domainData["Technical Contact"] && (
                                <li>
                                    <strong>State:</strong>{" "}
                                    {domainData["Technical Contact"].State}
                                </li>
                            )}
                            {domainData["Technical Contact"] && (
                                <li>
                                    <strong>Country:</strong>{" "}
                                    {domainData["Technical Contact"].Country}
                                </li>
                            )}
                            {domainData["Technical Contact"] && (
                                <li>
                                    <strong>Email:</strong>{" "}
                                    {domainData["Technical Contact"].Email}
                                </li>
                            )}
                        </ul>
                    </div>
                )} */}
                {domainData && (
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
                        {/* Domain Information */}
                        <div>
                            <div className="relative flex flex-row justify-start items-center px-4 gap-6 bg-white rounded shadow-md pb-2 mb-4">
                                <TbWorldWww className="w-14 h-14 p-2 bg-blue-600 rounded-full text-white" />
                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                    Domain Information
                                </h4>
                            </div>
                            <ul>
                                {domainData.domain_name &&
                                    Array.isArray(domainData.domain_name) &&
                                    domainData.domain_name.map(
                                        (name: string, index: number) => (
                                            <li className="" key={index}>
                                                <strong>Domain:</strong> {name}
                                            </li>
                                        )
                                    )}
                                {domainData.registrar && (
                                    <li>
                                        <strong>Registrar:</strong>{" "}
                                        {domainData.registrar}
                                    </li>
                                )}
                                {domainData.creation_date &&
                                    domainData.creation_date.map(
                                        (date: string, index: number) => (
                                            <li key={index}>
                                                <strong>Creation Date:</strong>{" "}
                                                {date}
                                            </li>
                                        )
                                    )}
                                {domainData.expiration_date &&
                                    domainData.expiration_date.map(
                                        (date: any, index: number) => (
                                            <li key={index}>
                                                <strong>
                                                    Expiration Date:
                                                </strong>{" "}
                                                {date}
                                            </li>
                                        )
                                    )}
                                {domainData.updated_date &&
                                    Array.isArray(domainData.updated_date) &&
                                    domainData.updated_date.map(
                                        (date: any, index: number) => (
                                            <li key={index}>
                                                <strong>Updated Date:</strong>{" "}
                                                {date}
                                            </li>
                                        )
                                    )}
                                {domainData.status &&
                                    domainData.status.map(
                                        (status: string, index: number) => (
                                            <li key={index}>
                                                <strong>Status:</strong>{" "}
                                                {status}
                                            </li>
                                        )
                                    )}
                                {domainData.name_servers &&
                                    domainData.name_servers.map(
                                        (server: string, index: number) => (
                                            <li key={index}>
                                                <strong>
                                                    Name Server {index + 1}:
                                                </strong>{" "}
                                                {server}
                                            </li>
                                        )
                                    )}
                            </ul>
                        </div>

                        {/* Registrant Contact */}
                        <div>
                            <div className="relative flex flex-row justify-start items-center px-4 gap-6 bg-white rounded shadow-md pb-2 mb-4">
                                <BsFillPersonFill className="w-14 h-14 p-2 bg-blue-600 rounded-full text-white" />
                                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                    Registrant Contact
                                </h4>
                            </div>
                            <ul>
                                {domainData.org && (
                                    <li>
                                        <strong>Organization:</strong>{" "}
                                        {domainData.org}
                                    </li>
                                )}
                                {domainData.state && (
                                    <li>
                                        <strong>State:</strong>{" "}
                                        {domainData.state}
                                    </li>
                                )}
                                {domainData.country && (
                                    <li>
                                        <strong>Country:</strong>{" "}
                                        {domainData.country}
                                    </li>
                                )}
                                {domainData.emails &&
                                    domainData.emails.map(
                                        (email: string, index: number) => (
                                            <li key={index}>
                                                <strong>
                                                    Email {index + 1}:
                                                </strong>{" "}
                                                {email}
                                            </li>
                                        )
                                    )}
                            </ul>
                        </div>

                        {/* Administrative Contact */}
                        <div>
                            {domainData["Administrative Contact"] && (
                                <div className="relative flex flex-row justify-start items-center px-4 gap-6 bg-white rounded shadow-md pb-2 mb-4">
                                    <BsPersonLinesFill className="w-14 h-14 p-2 bg-blue-600 rounded-full text-white" />
                                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                        Administrative Contact
                                    </h4>
                                </div>
                            )}
                            <ul>
                                {domainData["Administrative Contact"] && (
                                    <>
                                        {domainData["Administrative Contact"]
                                            .Organization && (
                                            <li>
                                                <strong>Organization:</strong>{" "}
                                                {
                                                    domainData[
                                                        "Administrative Contact"
                                                    ].Organization
                                                }
                                            </li>
                                        )}
                                        {domainData["Administrative Contact"]
                                            .State && (
                                            <li>
                                                <strong>State:</strong>{" "}
                                                {
                                                    domainData[
                                                        "Administrative Contact"
                                                    ].State
                                                }
                                            </li>
                                        )}
                                        {domainData["Administrative Contact"]
                                            .Country && (
                                            <li>
                                                <strong>Country:</strong>{" "}
                                                {
                                                    domainData[
                                                        "Administrative Contact"
                                                    ].Country
                                                }
                                            </li>
                                        )}
                                        {domainData["Administrative Contact"]
                                            .Email && (
                                            <li>
                                                <strong>Email:</strong>{" "}
                                                {
                                                    domainData[
                                                        "Administrative Contact"
                                                    ].Email
                                                }
                                            </li>
                                        )}
                                    </>
                                )}
                            </ul>
                        </div>

                        <div>
                            {/* Technical Contact */}
                            {domainData["Technical Contact"] && (
                                <div className="relative flex flex-row justify-start items-center px-4 gap-6 bg-white rounded shadow-md pb-2 mb-4">
                                    <BsPersonFillGear className="w-14 h-14 p-2 bg-blue-600 rounded-full text-white" />
                                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                                        Technical Contact
                                    </h4>
                                </div>
                            )}
                            <ul>
                                {domainData["Technical Contact"] && (
                                    <>
                                        {domainData["Technical Contact"]
                                            .Organization && (
                                            <li>
                                                <strong>Organization:</strong>{" "}
                                                {
                                                    domainData[
                                                        "Technical Contact"
                                                    ].Organization
                                                }
                                            </li>
                                        )}
                                        {domainData["Technical Contact"]
                                            .State && (
                                            <li>
                                                <strong>State:</strong>{" "}
                                                {
                                                    domainData[
                                                        "Technical Contact"
                                                    ].State
                                                }
                                            </li>
                                        )}
                                        {domainData["Technical Contact"]
                                            .Country && (
                                            <li>
                                                <strong>Country:</strong>{" "}
                                                {
                                                    domainData[
                                                        "Technical Contact"
                                                    ].Country
                                                }
                                            </li>
                                        )}
                                        {domainData["Technical Contact"]
                                            .Email && (
                                            <li>
                                                <strong>Email:</strong>{" "}
                                                {
                                                    domainData[
                                                        "Technical Contact"
                                                    ].Email
                                                }
                                            </li>
                                        )}
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
