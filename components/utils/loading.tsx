import React from "react";
import ReactLoading from "react-loading";

type Props = {
    type:
        | "blank"
        | "balls"
        | "bars"
        | "bubbles"
        | "cubes"
        | "cylon"
        | "spin"
        | "spinningBubbles"
        | "spokes";
    color: string;
};
const Loading = ({ type, color }: Props) => (
    <ReactLoading type={type} color={color} height={"20%"} width={"20%"} />
);

export default Loading;
