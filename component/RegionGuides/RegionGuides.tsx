import { useRouter } from "next/router";
import { useContext } from "react";
import { Empty } from "../../atom/Empty";
import { AppContext } from "../../context/context";
import { useGlobalKoreaMap } from "../../hook/useKoreaMap";
import { useUserList } from "../../hook/useUser";
import { LANGUAGES, UserRole } from "../../types/api";
import RegionGuidesBody from "./RegionGuidesBody";
import RegionGuidesHeader from "./RegionGuidesHeader";
interface IHyperProductGroupProp {
    hyper: string;
}

const RegionGuides: React.FC<IHyperProductGroupProp> = ({ hyper }) => {
    const globalKoreaHook = useGlobalKoreaMap();
    const { selectedGlobalRegion } = globalKoreaHook;

    const { locale } = useRouter();
    const { s } = useContext(AppContext);
    const { items: guides } = useUserList({
        fixingFilter: {
            role__not_in: [UserRole.BUYER],
            isDeleted__not_eq: true,
            regions_hyper__eq: hyper,
            profileVideo__notNull: "true",
            langs__in: [(locale as LANGUAGES) || LANGUAGES.ko],
        },
        random: true,
    });

    return (
        <div className="regionGuides__container">
            <div className="regionGuides__guidesContainer">
                {selectedGlobalRegion && (
                    <>
                        <RegionGuidesHeader hyper={hyper} />
                        <div className="regionGuides__bodyContainer">
                            <RegionGuidesBody
                                empty={<Empty msg={s("guideNotFoundInArea")} />}
                                guides={guides}
                            />
                            <div className="regionGuides__bodyRightSection">
                                <div className="regionGuides__popularGuides">
                                    <div
                                        style={{
                                            marginBottom: "10px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontWeight: 600,
                                                fontSize: "24px",
                                            }}
                                        >
                                            인기 가이드
                                        </span>
                                    </div>
                                    <div className="regionGuides__popularGuide--container">
                                        <div className="regionGuides__popularGuide--profileImage" />
                                        <div className="regionGuides__popularGuide--guideInfo">
                                            <span className="regionGuides__popularGuide--guideName">
                                                최미란
                                            </span>
                                            <span className="regionGuides__popularGuide--guideDesc">
                                                부산에 방문 계획은 있지만 무엇을
                                                할지 고민이신가요? 부산에서 영어
                                                가이드로 활동 중입니다. 저는
                                                다양한 국적의 동료와 일을 해왔고
                                                MICE 분야에 근무한 경험이 있어서
                                                부산을 방문하는 여러분이
                                                만족하는 맞춤형 여행을 제안할 수
                                                있을 것 같습니다.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default RegionGuides;
