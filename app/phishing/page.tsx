"use client";

import React, { useState } from "react";
import Loading from "@/components/utils/loading";
import { GoCheckCircleFill } from "react-icons/go";
import { TiDelete } from "react-icons/ti";
import CountUp from "react-countup";
import PaginationButtons from "@/components/pagination/buttons";
import useDataFetcher from "@/components/pagination/useDataFetcher";
import Row from "@/components/pagination/row";
import Terminal from "terminal-in-react";

export default function Dashboard() {
    const [domain, setDomain] = useState("");
    const [phishingData, setPhishingData] = useState<any>({});
    const [loader, setLoader] = useState(false);

    // showMsg = () => "Hello World";
    function showMsg() {
        return "Hello World";
    }

    function showRaw() {
        return data;
    }

    const fetchPhishing = async (e) => {
        e.preventDefault();
        setLoader(true);
        const response = await fetch(
            `https://8550-103-246-224-137.ngrok-free.app/predict`,
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
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <Terminal
                    color="blue"
                    backgroundColor="black"
                    barColor="black"
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        "open-google": () =>
                            window.open("https://www.google.com/", "_blank"),
                        phishing: showRaw,
                        showmsg: showMsg,
                        popup: () => alert("Terminal in React"),
                    }}
                    descriptions={{
                        "open-google": "opens google.com",
                        showmsg: "shows a message",
                        alert: "alert",
                        popup: "alert",
                    }}
                    msg="You can write anything here. Example - Hello! My name is Foo and I like Bar."
                />
            </div>
        </section>
    );
}

const data = `
[*]-Retrieving DNS Record(s) Information
  \_ vnpaypal.online
    \_ A 162.55.110.21
    \_ MX vnpaypal.online
    \_ NS ns1.apexhosting.in,ns2.apexhosting.in
    \_ SOA ns1.apexhosting.in
  \_ vnpaypal.online
    \_ A 162.55.110.21
    \_ MX vnpaypal.online
    \_ NS ns2.apexhosting.in,ns1.apexhosting.in
    \_ SOA ns1.apexhosting.in
  \_ main-prelive-paypal.online
    \_ A 74.208.236.131
    \_ MX mx00.ionos.mx,mx01.ionos.mx
    \_ NS ns1047.ui-dns.com,ns1051.ui-dns.biz,ns1097.ui-dns.de,ns1026.ui-dns.org
    \_ AAAA 2607:f1c0:100f:f000::200
    \_ SOA ns1047.ui-dns.com
  \_ mainprelivepaypal.com
    \_ A 74.208.236.247
    \_ MX mx01.ionos.mx,mx00.ionos.mx
    \_ NS ns1097.ui-dns.de,ns1047.ui-dns.com,ns1051.ui-dns.biz,ns1026.ui-dns.org
    \_ AAAA 2607:f1c0:100f:f000::200
    \_ SOA ns1047.ui-dns.com
  \_ main-prelive-paypal.online
    \_ A 74.208.236.131
    \_ MX mx01.ionos.mx,mx00.ionos.mx
    \_ NS ns1051.ui-dns.biz,ns1097.ui-dns.de,ns1026.ui-dns.org,ns1047.ui-dns.com
    \_ AAAA 2607:f1c0:100f:f000::200
    \_ SOA ns1047.ui-dns.com
  \_ mainprelivepaypal.com
    \_ A 74.208.236.247
    \_ MX mx01.ionos.mx,mx00.ionos.mx
    \_ NS ns1051.ui-dns.biz,ns1026.ui-dns.org,ns1097.ui-dns.de,ns1047.ui-dns.com
    \_ AAAA 2607:f1c0:100f:f000::200
    \_ SOA ns1047.ui-dns.com
  \_ paypalsecure.online
  \_ paypalsecure.online
  \_ paypalfankuan.com
    \_ A 172.65.237.18
  \_ paypalfankuan.com
    \_ A 172.65.237.18
  \_ paypal2.com
    \_ MX mail.paypal2.com
    \_ NS ns2.dnsowl.com,ns3.dnsowl.com,ns1.dnsowl.com
    \_ SOA ns1.dnsowl.com
  \_ paypal2.com
    \_ MX mail.paypal2.com
    \_ NS ns1.dnsowl.com,ns2.dnsowl.com,ns3.dnsowl.com
    \_ SOA ns1.dnsowl.com
[*]-Retrieving IP2ASN Information
  \_ 74.208.236.131
    \_ asn_registry arin
    \_ asn 8560
    \_ asn_cidr 74.208.0.0/16
    \_ asn_country_code US
    \_ asn_date 2006-11-22
    \_ asn_description IONOS-AS This is the joint network for IONOS, Fasthosts, Arsys, 1&1 Mail and Media and 1&1 Telecom. Formerly known as 1&1 Internet SE., DE
  \_ 74.208.236.247
    \_ asn_registry arin
    \_ asn 8560
    \_ asn_cidr 74.208.0.0/16
    \_ asn_country_code US
    \_ asn_date 2006-11-22
    \_ asn_description IONOS-AS This is the joint network for IONOS, Fasthosts, Arsys, 1&1 Mail and Media and 1&1 Telecom. Formerly known as 1&1 Internet SE., DE
  \_ 172.65.237.18
    \_ asn_registry arin
    \_ asn 13335
    \_ asn_cidr 172.65.224.0/20
    \_ asn_country_code US
    \_ asn_date 2015-02-25
    \_ asn_description CLOUDFLARENET, US
  \_ 162.55.110.21
    \_ asn_registry ripencc
    \_ asn 24940
    \_ asn_cidr 162.55.0.0/16
    \_ asn_country_code DE
    \_ asn_date 1992-08-03
    \_ asn_description HETZNER-AS, DE
  \_ 162.55.110.21
    \_ asn_registry ripencc
    \_ asn 24940
    \_ asn_cidr 162.55.0.0/16
    \_ asn_country_code DE
    \_ asn_date 1992-08-03
    \_ asn_description HETZNER-AS, DE
  \_ 74.208.236.247
    \_ asn_registry arin
    \_ asn 8560
    \_ asn_cidr 74.208.0.0/16
    \_ asn_country_code US
    \_ asn_date 2006-11-22
    \_ asn_description IONOS-AS This is the joint network for IONOS, Fasthosts, Arsys, 1&1 Mail and Media and 1&1 Telecom. Formerly known as 1&1 Internet SE., DE
  \_ 74.208.236.131
    \_ asn_registry arin
    \_ asn 8560
    \_ asn_cidr 74.208.0.0/16
    \_ asn_country_code US
    \_ asn_date 2006-11-22
    \_ asn_description IONOS-AS This is the joint network for IONOS, Fasthosts, Arsys, 1&1 Mail and Media and 1&1 Telecom. Formerly known as 1&1 Internet SE., DE
  \_ 172.65.237.18
    \_ asn_registry arin
    \_ asn 13335
    \_ asn_cidr 172.65.224.0/20
    \_ asn_country_code US
    \_ asn_date 2015-02-25
    \_ asn_description CLOUDFLARENET, US
[*]-Retrieving WHOIS Information
  \_ mainprelivepaypal.com
    \_ Created Date 2023-10-02 15:13:23
    \_ Updated Date 2023-10-02 15:13:25
    \_ Expiration Date 2024-10-02 15:13:23
    \_ DateDiff 3
    \_ Name REDACTED FOR PRIVACY
    \_ Email abuse@ionos.com,dataprivacyprotected@ionos.de
    \_ Registrar IONOS SE
  \_ mainprelivepaypal.com
    \_ Created Date 2023-10-02 15:13:23
    \_ Updated Date 2023-10-02 15:13:25
    \_ Expiration Date 2024-10-02 15:13:23
    \_ DateDiff 3
    \_ Name REDACTED FOR PRIVACY
    \_ Email abuse@ionos.com,dataprivacyprotected@ionos.de
    \_ Registrar IONOS SE
  \_  main-prelive-paypal.online
    \_ Created Date 2023-10-02 15:13:24
    \_ Updated Date 2023-10-02 15:13:26
    \_ Expiration Date 2024-10-02 23:59:59
    \_ DateDiff 3
    \_ Name None
    \_ Email None
    \_ Registrar IONOS SE
  \_  paypalsecure.online
    \_ Created Date 2023-10-02 13:16:25
    \_ Updated Date [datetime.datetime(2023, 10, 4, 11, 52, 35), datetime.datetime(2023, 10, 2, 13, 16, 26)]
    \_ Expiration Date 2024-10-02 23:59:59
    \_ DateDiff 3
    \_ Name None
    \_ Email None
    \_ Registrar GoDaddy.com, LLC
  \_  main-prelive-paypal.online
    \_ Created Date 2023-10-02 15:13:24
    \_ Updated Date 2023-10-02 15:13:26
    \_ Expiration Date 2024-10-02 23:59:59
    \_ DateDiff 3
    \_ Name None
    \_ Email None
    \_ Registrar IONOS SE
  \_  paypalsecure.online
    \_ Created Date 2023-10-02 13:16:25
    \_ Updated Date [datetime.datetime(2023, 10, 4, 11, 52, 35), datetime.datetime(2023, 10, 2, 13, 16, 26)]
    \_ Expiration Date 2024-10-02 23:59:59
    \_ DateDiff 3
    \_ Name None
    \_ Email None
    \_ Registrar GoDaddy.com, LLC
  \_ paypalfankuan.com
    \_ Created Date 2023-10-02 18:01:44
    \_ Updated Date [datetime.datetime(2023, 10, 3, 2, 41, 12), datetime.datetime(2023, 10, 3, 2, 28, 5, 212000)]
    \_ Expiration Date 2024-10-02 18:01:44
    \_ DateDiff 3
    \_ Name Redacted for GDPR privacy
    \_ Email support@namebright.com,abuse@NameBright.com,PaypalFanKuAn.com@NameBrightPrivacy.com
    \_ Registrar DropCatch.com 1290 LLC
  \_ paypalfankuan.com
    \_ Created Date 2023-10-02 18:01:44
    \_ Updated Date [datetime.datetime(2023, 10, 3, 2, 41, 12), datetime.datetime(2023, 10, 3, 2, 28, 5, 212000)]
    \_ Expiration Date 2024-10-02 18:01:44
    \_ DateDiff 3
    \_ Name Redacted for GDPR privacy
    \_ Email support@namebright.com,abuse@NameBright.com,PaypalFanKuAn.com@NameBrightPrivacy.com
    \_ Registrar DropCatch.com 1290 LLC
  \_  vnpaypal.online
    \_ Created Date 2023-10-02 18:30:20
    \_ Updated Date [datetime.datetime(2023, 10, 2, 18, 30, 22), datetime.datetime(2023, 10, 2, 18, 35, 22)]
    \_ Expiration Date 2024-10-02 23:59:59
    \_ DateDiff 3
    \_ Name None
    \_ Email None
    \_ Registrar Hostinger, UAB
  \_ paypal2.com
    \_ Created Date 2023-10-02 13:24:57
    \_ Updated Date 2023-10-02 13:24:57
    \_ Expiration Date 2024-10-02 13:24:57
    \_ DateDiff 3
    \_ Name REDACTED FOR PRIVACY
    \_ Email abuse@namesilo.com,pw-25c73106da7c518875148ee3a11a35f3@privacyguardian.org
    \_ Registrar NameSilo, LLC
  \_ paypal2.com
    \_ Created Date 2023-10-02 13:24:57
    \_ Updated Date 2023-10-02 13:24:57
    \_ Expiration Date 2024-10-02 13:24:57
    \_ DateDiff 3
    \_ Name REDACTED FOR PRIVACY
    \_ Email abuse@namesilo.com,pw-25c73106da7c518875148ee3a11a35f3@privacyguardian.org
    \_ Registrar NameSilo, LLC
  \_  vnpaypal.online
    \_ Created Date 2023-10-02 18:30:20
    \_ Updated Date [datetime.datetime(2023, 10, 2, 18, 30, 22), datetime.datetime(2023, 10, 2, 18, 35, 22)]
    \_ Expiration Date 2024-10-02 23:59:59
    \_ DateDiff 3
    \_ Name None
    \_ Email None
    \_ Registrar Hostinger, UAB
[*]-Retrieving Reverse WHOIS (by Name) Information [Source https://domainbigdata.com]
  \_ Redacted for GDPR privacy
    \_ 0 domain(s) have been created in the past
  \_ REDACTED FOR PRIVACY
    \_ 0 domain(s) have been created in the past
[*]-Retrieving Certficates [Source https://crt.sh]
  \_ paypalsecure.online
    \_ issuer_ca_id 180753
    \_ issuer_name C=US, O=Google Trust Services LLC, CN=GTS CA 1P5
    \_ common_name *.paypalsecure.online
    \_ name_value *.paypalsecure.online
paypalsecure.online
    \_ id 10572872295
    \_ entry_timestamp 2023-10-02T15:56:35.759
    \_ not_before 2023-10-02T14:55:18
    \_ not_after 2023-12-31T14:55:17
    \_ serial_number 339863476bff48140dcbc9395dd3cd38
    \_ issuer_ca_id 105484
    \_ issuer_name C=GB, ST=Greater Manchester, L=Salford, O=Sectigo Limited, CN=Sectigo ECC Domain Validation Secure Server CA
    \_ common_name paypalsecure.online
    \_ name_value *.paypalsecure.online
paypalsecure.online
    \_ id 10572861822
    \_ entry_timestamp 2023-10-02T15:55:11.339
    \_ not_before 2023-10-02T00:00:00
    \_ not_after 2024-10-01T23:59:59
    \_ serial_number 4e42f2fe61e52eb5d53d13f8f50de74a
    \_ issuer_ca_id 105484
    \_ issuer_name C=GB, ST=Greater Manchester, L=Salford, O=Sectigo Limited, CN=Sectigo ECC
`;