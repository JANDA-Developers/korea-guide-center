import dynamic from "next/dynamic";
import React, { useEffect } from "react";
const GuideRouter = dynamic(() => import("../../page/GuideRouter"), {
    ssr: false,
});

const MainRouter = () => {
    if (typeof window === "undefined") return null;

    return (
        <div>
            <GuideRouter />
        </div>
    );
};

export default MainRouter;
