import React from "react";

type Props = {
    domain: string;
};
const Row = ({ domain }: Props) => {
    const whois = () => {
        console.log("whois");
    };

    const typos = () => {
        console.log("typos");
    };
    return (
        <div className="flex justify-center items-center flex-row gap-4 bg-lightGray rounded-lg py-10">
            <p className="text-2xl font-bold">{domain}</p>
            {"\t|\t"}
            <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0">
                Whois
            </button>
            {"\t|\t"}
            <button
                className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                onClick={typos}
            >
                Typosquatting
            </button>
        </div>
    );
};

export default Row;
