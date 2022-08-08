import { useRouter } from "next/router";
import { useContext } from "react";
import { Empty } from "../../atom/Empty";
import { AppContext } from "../../context/context";
import { useGlobalKoreaMap } from "../../hook/useKoreaMap";
import { useUserList } from "../../hook/useUser";
import { LANGUAGES, UserRole } from "../../types/api";
import { Locales, MapRegionKr } from "../../types/const";
import { GuideMoviewClipList2 } from "../guideMovieClicp/GuideMovieClipList";
import { mapRegion } from "../koreaMap/KoreaData";
import { ProductViewsLineHeader2 } from "../productViewCard/ProductViewsLineHeader";
import RegionGuidesHeader from "./RegionGuidesHeader";

interface IHyperProductGroupProp {
    hyper: string;
}

const RegionGuides: React.FC<IHyperProductGroupProp> = ({ hyper }) => {
    const globalKoreaHook = useGlobalKoreaMap();
    const { selectedGlobalRegion, onClick: selectGlobalRegion } =
        globalKoreaHook;

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

    const isKr = locale === Locales.ko;

    return (
        <div className="regionGuides__container">
            {selectedGlobalRegion && (
                <div>
                    <RegionGuidesHeader hyper={hyper} />
                    <GuideMoviewClipList2
                        empty={<Empty msg={s("guideNotFoundInArea")} />}
                        guides={guides}
                    />
                </div>
            )}
        </div>
    );
};

export default RegionGuides;
