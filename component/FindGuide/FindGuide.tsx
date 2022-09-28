import { useContext } from "react";

import { useRouter } from "next/router";
import { Paths } from "../../pages/index[depre]";
import { GuidePath } from "../../page/GuideRouter";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import { AppContext } from "../../context/context";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const FindGuide = () => {
    const context = useContext(AppContext);
    const router = useRouter();
    const { isLogin, isGuide, isMaster } = context;
    const { s } = useContext(AppContext);

    return (
        <div className="findGuide__Container">
            <div className="findGuide__imageSliderContainer">
                <EmblaCarousel slides={slides} />
            </div>
            <div className="findGuide__textContainer">
                <h1 className="findGuide__title">{s("findGuidesTitle")}</h1>
                <p>{s("findGuidesDesc")}</p>
                <button
                    className="findGuide__button"
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
                >
                    {s("findGuidesButton")}
                </button>
            </div>
        </div>
    );
};

export default FindGuide;
