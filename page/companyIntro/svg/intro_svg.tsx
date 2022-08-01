import React from "react";
import { pathProps } from './path';
import { TSVG } from "./path";

export type MySVG = "intro";

interface SvgProps extends TSVG {
    className: string;
    viewBox: string;
    path: MySVG;
}
export const Intro_svg: React.FC<SvgProps> = ({
    className,
    viewBox,
    path,
    ...props
}) => {
    return (
        <svg
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox={viewBox}
            
            {...pathProps[path]}
            {...props}
        />
    )
}