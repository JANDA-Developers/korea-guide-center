import React from "react";

interface IimgProps {
    title: string;
    detail: any;
    src: string;
    index: number;
}

export const ImgList: React.FC<IimgProps> = ({ title, detail, src, index }) => {
    return (
        <div
            className="introSection__imgBlock"
            key={`introSection__imgBlock${index}`}
        >
            <div
                className="introSection__img"
                key={`introSection__img${index}`}
            >
                <img src={src} />
                <div className="introSection__imgBlur" />
            </div>
            <div className="introSection__imgTextWrap">
                <div className="introSection__imgTitle">
                    <span>{title}</span>
                </div>
                <div className="introSection__imgDetail">
                    <p>{detail}</p>
                </div>
            </div>
        </div>
    );
};
