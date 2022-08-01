import React from "react";
import { JDbutton } from "@janda-com/front";
import { Img } from "../../atom/Image";
interface IProp {
    src: string;
}

export const MainFullBox: React.FC<IProp> = ({ src, children }) => {
    return (
        <div className="mainFullBox" style={{ height: "100vh" }}>
            <Img
                className="mainFullBox__images"
                loading="eager"
                src={src}
                layout="fill"
                objectFit="cover"
                alt="main guide photo"
            />
            <div
                className="mainFullBox__childrens"
                style={{ position: "relative", zIndex: 1 }}
            >
                {children}
            </div>
        </div>
    );
};
