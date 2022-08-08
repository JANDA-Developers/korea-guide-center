import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Locales, MapRegionKr } from "../../types/const";
import { mapRegion } from "../koreaMap/KoreaData";

interface IHyperProductGroupProp {
    hyper: string;
}

const RegionGuidesHeader: React.FC<IHyperProductGroupProp> = ({ hyper }) => {
    const { locale, push } = useRouter();
    const isKr = locale === Locales.ko;
    const { s } = useContext(AppContext);

    return (
        <div className="regionGuides__header">
            <div className="regionGuides__header--title">
                {(isKr ? MapRegionKr[hyper as mapRegion] : hyper) +
                    " " +
                    s("regionGuide")}
            </div>
            <div
                className="regionGuides__header--seeMore"
                onClick={() => {
                    push("/guides");
                }}
            >
                {s("seeMore")}
            </div>
        </div>
    );
};

export default RegionGuidesHeader;
