import { useRouter } from "next/router";
import React, { useContext } from "react";
import { SeeMore } from "../../../../atom/SeeMore";
import { AppContext } from "../../../../context/context";

const PopularGuideTextIntro = () => {
    const { s } = useContext(AppContext);
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
                        {s("Popular")}
                    </span>{" "}
                    {s("GuidesText")}
                </span>
            </h2>

            <div className="align-btn-right"></div>
            <SeeMore onSeeMore={onClick} />
        </div>
    );
};

export default React.memo(PopularGuideTextIntro);
