import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";
import { Paths } from "../../../../pages/index[depre]";
import { mapRegion } from "../../../koreaMap/KoreaData";
import { ILocalGuideSliderItem } from "../../../LocalGuideAndPrivateTour/LocalGuideSliderItem";

interface RegionalGuideItemProps {
    item: ILocalGuideSliderItem;
    onSelectRegion: (region: mapRegion) => void;
    region: mapRegion;
    selectedRegion: string;
}

// 캐러셀에 들어가는 요소들
const RegionalGuideItem = ({
    item,
    onSelectRegion,
    selectedRegion,
}: RegionalGuideItemProps) => {
    const router = useRouter();
    const { s, locale } = useContext(AppContext);
    const handleSelectRegion = (region: any) => {
        onSelectRegion(region);
    };

    return (
        <div className="item">
            <a
                onClick={() => {
                    handleSelectRegion(selectedRegion);
                    router.push(Paths.locationalGuide);
                }}
            >
                <figure className="o80">
                    <img
                        src={item.imageUrl}
                        data-src="https://www.neweuropetours.eu/wp-content/uploads/2018/08/thio-sandemans-amsterdam-tours-240x260.jpg"
                        alt="Beautiful Cities"
                        width="240"
                        height="260"
                        className="lazy"
                    />
                </figure>
                <div className="caption">
                    <h3>{item.title}</h3>
                </div>
                <div className="tours-available">
                    <span>{s("LookAround")}</span>
                </div>
            </a>
        </div>
    );
};

export default React.memo(RegionalGuideItem);
