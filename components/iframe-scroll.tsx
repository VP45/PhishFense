"use client";
import React, { useRef } from "react";

const IframeScroll = ({ src }) => {
    const iframeRef = useRef(null);

    const handleMouseEnter = () => {
        iframeRef.current.contentWindow.postMessage("start-scrolling", "*");
    };

    const handleMouseLeave = () => {
        iframeRef.current.contentWindow.postMessage("stop-scrolling", "*");
    };

    return (
        <div
            className="relative2 w-full h-screen border border-gray-500 overflow-hidden bg-gradient-to-r from-blue-500 to-teal-400 rounded-md"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <iframe
                src={src}
                ref={iframeRef}
                className="w-full h-full rounded-md p-1"
                style={{ border: "none" }}
                title="Embedded Website"
                sandbox="allow-scripts"
            ></iframe>
        </div>
    );
};

export default IframeScroll;
