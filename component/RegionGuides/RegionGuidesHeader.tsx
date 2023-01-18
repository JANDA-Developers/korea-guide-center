import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Locales, MapRegionKr } from "../../types/const";
import { mapRegion } from "../koreaMap/KoreaData";

interface IHyperProductGroupProp {
    hyper: string;
}

const toUpperFirstChar = (str: string): string => {
    const firstChar = str[0];
    const firstCharUpper = firstChar.toUpperCase();
    const leftChar = str.slice(1, str.length);
    const result = firstCharUpper + leftChar;
    return result;
};

const RegionGuidesHeader: React.FC<IHyperProductGroupProp> = ({ hyper }) => {
    const { locale, push } = useRouter();
    const isKr = locale === Locales.ko;
    const { s } = useContext(AppContext);
    const regionName = toUpperFirstChar(hyper);
    return (
        <div className="regionGuides__header">
            <div className="regionGuides__header--title">
                {(isKr ? MapRegionKr[hyper as mapRegion] : regionName) +
                    " " +
                    s("regionGuide")}
            </div>
            {/* 더보기 부분 23.01.18 더보기 버튼 아래로 옮김 */}
            {/* <div
                className="regionGuides__header--seeMore"
                onClick={() => {
                    push("/guides");
                }}
            >
                {s("seeMore")}
            </div> */}
        </div>
    );
};

export default RegionGuidesHeader;
