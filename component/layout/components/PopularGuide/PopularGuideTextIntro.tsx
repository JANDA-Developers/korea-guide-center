import { useRouter } from "next/router";
import React from "react";
import { SeeMore } from "../../../../atom/SeeMore";
import NewestTourTabBar from "../NewestTour/NewestTourTabBar";

const PopularGuideTextIntro = () => {
    const router = useRouter();
    const onClick = () => {
        router.push("/guides");
    };
    return (
        <div className="txt-intro">
            <h2>
                <span id="popular-guides">
                    <span
                        style={{
                            color: "#db1a1c",
                            display: "inline",
                        }}
                    >
                        POPULAR
                    </span>{" "}
                    GUIDES
                </span>
            </h2>

            <div className="align-btn-right"></div>
            <SeeMore onSeeMore={onClick} />
        </div>
    );
};

export default React.memo(PopularGuideTextIntro);
