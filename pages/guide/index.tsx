import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
const GuideRouter = dynamic(() => import("../../page/GuideRouter"), {
    ssr: false,
});

const MainRouter = () => {
    const router = useRouter();
    if (typeof window === "undefined") return null;

    return (
        <div>
            <GuideRouter />
        </div>
    );
};

export default MainRouter;
