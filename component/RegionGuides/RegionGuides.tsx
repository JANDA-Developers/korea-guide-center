import { useRouter } from "next/router";
import { useContext } from "react";
import { Empty } from "../../atom/Empty";
import { AppContext } from "../../context/context";
import { useGlobalKoreaMap } from "../../hook/useKoreaMap";
import { useUserList } from "../../hook/useUser";
import { LANGUAGES, UserRole } from "../../types/api";
import PopularGuide from "../PopularGuide/PopularGuide";
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
                                            marginBottom: "20px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontWeight: 600,
                                                fontSize: "24px",
                                            }}
                                        >
                                            {s("locationalGuidePopularGuide")}
                                        </span>
                                    </div>
                                    <PopularGuide />
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
