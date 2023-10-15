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
import { ReactTerminal } from "react-terminal";

import TypewriterText from "@/components/type-effect";

export default function Dashboard() {
    const [domain, setDomain] = useState("");
    const [phishingData, setPhishingData] = useState<any>({});
    const [loader, setLoader] = useState(false);

    const commands = {
        whoami: "jackharper",
        cd: (directory: string) => `changed path to ${directory}`,
        phishing: (name: string) => {
            setDomain(name);
            // fetchPhishing(name);
            return data;
        },
    };

    // showMsg = () => "Hello World";
    function showMsg() {
        return "Hello World";
    }

    function showRaw() {
        // delay for 2sec

        return data;
    }

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

            <div className="grid grid-cols-2 w-full justify-center items-center min-h-screen">
                <div
                    className="h-full w-full flex flex-col justify-center items-center mt-20 mx-auto text-justify "
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <h1
                        className="text-3xl font-bold leading-tighter tracking-tighter mb-4 text-center"
                        data-aos="zoom-y-out"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                            Terminal
                        </span>
                    </h1>
                    {/* <Terminal
                        color="#8feb34"
                        backgroundColor="black"
                        barColor="black"
                        style={{ fontWeight: "bold", fontSize: "1em" }}
                        commands={{
                            "open-google": () =>
                                window.open(
                                    "https://www.google.com/",
                                    "_blank"
                                ),
                            phishing: showRaw, 
                            "phishing paypal" : showRaw,
                            'python hnrd.py -f 2023-10-03 -r .*paypal*.': showRaw,
                            showmsg: showMsg,
                            popup: () => alert("Terminal in React"),
                        }}
                        descriptions={{
                            "open-google": "opens google.com",
                            showmsg: "shows a message",
                            alert: "alert",
                            popup: "alert",
                        }}
                        msg="You can write anything here. Example - phishing domain_name"
                    /> */}

                    <div className="w-full h-full px-4">
                        <ReactTerminal
                            commands={commands}
                            themes={{
                                "my-custom-theme": {
                                    themeBGColor: "#272B36",
                                    themeToolbarColor: "#DBDBDB",
                                    themeColor: "#FFFEFC",
                                    themePromptColor: "#a917a8",
                                },
                            }}
                            theme="my-custom-theme"
                            wellcomeMessage="Welcome to the phishing terminal write a commands phishing domain_name"
                            prompt="phishfence@terminal:~$"
                            errorMessage="Invalid Command: Try - phishing domain_name"
                        />
                    </div>
                </div>
                <div className="max-w-4xl flex flex-col justify-center items-center mt-20 mx-auto text-justify px-4">
                    <h1
                        className="text-3xl font-bold leading-tighter tracking-tighter mb-4 text-center"
                        data-aos="zoom-y-out"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                            Explanation
                        </span>
                    </h1>
                    <br />
                    <TypewriterText text={explanation} />
                </div>
            </div>
        </section>
    );
}

const explanation = `
Retrieving DNS Record(s) Information\n\n
paypalfankuan.com: A record points to IP address 172.65.237.18.\t
paypalsecure.online: No specific DNS records mentioned.\t
paypal2.com: MX record points to mail.paypal2.com, and it has NS records for DNS servers.\n\n
Retrieving IP2ASN Information\n\t
172.65.237.18: Belongs to ASN 13335 (CLOUDFLARENET, US) registered with ARIN.\n\n
Retrieving WHOIS Information\n\t
paypalfankuan.com: Registered via DropCatch.com 1290 LLC, with privacy protection.\n
paypalsecure.online: Registered via GoDaddy.com, LLC, with privacy protection.\n
paypal2.com: Registered via NameSilo, LLC, with privacy protection.\n\n
Retrieving Reverse WHOIS Information\n\n
Information about domain owners (redacted for privacy) with no specific details provided.\n\n
Retrieving Certificates\n\n
Certificate details for paypalsecure.online and paypalfankuan.com, including issuer information, common names, and validity period.\n\t
Retrieving VirusTotal Information\n\n
No specific information provided, but it seems that there might be an issue retrieving data from\n\n VirusTotal for the mentioned domains.\n\n
Check domains against QUAD9 service\n\n
Indications of whether the domains are blocked (or not) by the QUAD9 service.\n
paypal2.com and paypalsecure.online are blocked, whereas paypalfankuan.com is not blocked.\n\n
Calculate Shannon Entropy Information\n\n
Shannon entropy values calculated for each domain. Shannon entropy is a measure of the randomness or disorder within a set of data. Higher entropy values suggest more randomness.\n\n
Calculate Levenshtein Ratio\n\n
Levenshtein ratio calculated for each domain name compared to "paypal." \n
Levenshtein ratio measures the similarity between two strings. Higher values indicate greater similarity.`;

const data = `
[*]-Retrieving DNS Record(s) Information\n
  \_ vnpaypal.online\n
    \_ A 162.55.110.21\n
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
