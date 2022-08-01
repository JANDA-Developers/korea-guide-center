import React, { useContext } from "react";
import { AppContext } from "../../context/context";

export const ImgInfo = () => {
    const { s } = useContext(AppContext);
    [
        {
            title: s("introGuideTourText"),
            detail: s("introGuideTour"),
            src: "/img/intro_body_1.jpg",
        },
        {
            title: s("introPackageText"),
            detail: s("introPackage"),
            src: "/img/intro_body_2.jpg",
        },
        {
            title: s("introCustomText"),
            detail: s("introCustom"),
            src: "/img/intro_body_3.jpg",
        },
    ];
};
