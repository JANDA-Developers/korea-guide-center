import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";
import { GuidePath } from "../../../../page/GuideRouter";
import { Paths } from "../../../../pages/index[depre]";

const BecomeGuideText = () => {
    const context = useContext(AppContext);
    const router = useRouter();
    const { isLogin, isGuide, isMaster } = context;
    const { s } = useContext(AppContext);

    return (
        <div className="bloc-texte">
            <div
                style={{
                    position: "relative",
                }}
            >
                <span
                    className="about-small-title"
                    style={{
                        lineHeight: "1rem",
                        color: "#DB1A1C",
                    }}
                >
                    KOREA GUIDE
                </span>
                <h2
                    className="find-guides-title"
                    style={{
                        fontWeight: 600,
                        marginTop: 0,
                        marginBottom: "30px",
                    }}
                >
                    {s("findGuidesTitle")}
                </h2>
                <p className="find-guide-desc">{s("findGuidesDesc")}</p>
                <a
                    onClick={() => {
                        if (isLogin || isMaster) {
                            router.push(
                                Paths.guide + "/#" + GuidePath.join,
                                undefined,
                                { locale: "ko" }
                            );
                        } else {
                            alert("로그인을 먼저 해주세요!");
                        }
                    }}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {s("findGuidesButton")}
                </a>
            </div>
        </div>
    );
};

export default React.memo(BecomeGuideText);
