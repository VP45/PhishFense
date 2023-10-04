"use client";
import React, { useRef } from "react";
type Props = {
    src: string;
};
const IframeScroll = ({ src }: Props) => {
    return (
        <div className="relative2 w-full h-screen border border-gray-500 overflow-hidden bg-gradient-to-r from-blue-500 to-teal-400 rounded-md">
            <iframe
                src={src}
                className="w-full h-full rounded-md p-1"
                style={{ border: "none" }}
                title="Embedded Website"
                sandbox="allow-scripts"
            ></iframe>
        </div>
    );
};

export default IframeScroll;
