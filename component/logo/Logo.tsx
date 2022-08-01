import classNames from "classnames";
import React from "react";
import {
    ITS_GUIDE_LOGO,
    ITS_GUIDE_LOGO_KR,
    ITS_GUIDE_LOGO_LONG,
    ITS_GUIDE_LOGO_LONG_KR,
} from "../../types/const";
interface IProp
    extends React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > {
    lang?: "ko" | "en";
    type?: "long";
}

export const Logo: React.FC<IProp> = ({ lang, type, className, ...props }) => {
    const isLongType = type === "long";
    const isKo = lang === "ko";

    let targetLogo = ITS_GUIDE_LOGO;

    if (isLongType) {
        targetLogo = ITS_GUIDE_LOGO_LONG;
    }
    if (isKo) {
        targetLogo = ITS_GUIDE_LOGO_KR;

        if (isLongType) {
            targetLogo = ITS_GUIDE_LOGO_LONG_KR;
        }
    }

    const classnames = classNames("logo", className, {
        "logo--long": isLongType,
        "logo--kr": isKo,
    });

    return (
        <img
            className={classnames}
            {...props}
            width={100}
            height={40}
            style={{ cursor: "pointer", width: 100, height: "auto" }}
            src={targetLogo}
        />
    );
};
