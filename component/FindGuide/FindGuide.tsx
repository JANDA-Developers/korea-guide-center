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
    console.log("isLogin -> " + isLogin);
    console.log("isGuide -> " + isGuide);
    console.log("isMaster -> " + isMaster);

    return (
        <div className="findGuide__Container">
            <div className="findGuide__imageSliderContainer">
                <EmblaCarousel slides={slides} />
            </div>
            <div className="findGuide__textContainer">
                <h1 className="findGuide__title">파트너 가이드를 찾습니다.</h1>
                <p>
                    Korea Guide Center는 전 세계의 현명한 여행자와 연결 할 수
                    있는 무한한 가능성을 열어줍니다. 투어 가이딩은 신선한 공기를
                    마시며 사랑하는 그 지역을 거닐며, 그 지역여행을 즐기는
                    사람들과 매혹적인 지역의 문화, 역사 와 즐거움 발견하는
                    동시에 전 세계 사람들과 공유할 수 있는 가장 보람 있고
                    즐거움을 선사합니다. 도시와 그 역사에 대해 깊은 관심과
                    스토리텔링에 대한 소질, 매력적이고 재미있는 방식으로 정보를
                    전달할 수 있는 능력을 Korea Guide Center에서 펼쳐 보시기
                    바랍니다. Korea Guide Center와 함께 가이드님의 여행을
                    홍보하세요. 우리는 당신의 지역을, 여행을 세계와 공유할
                    것입니다!
                </p>
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
                    가이드 등록하기
                </button>
            </div>
        </div>
    );
};

export default FindGuide;
