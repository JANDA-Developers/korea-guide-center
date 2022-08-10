import { WindowSize } from "@janda-com/front";
import React from "react";
import { BookLayout } from "../component/layout/BookLayout";
import { SelectRegionSector } from "../component/SelectRegionSector/SelectRegionSector";
import { useGlobalKoreaMap, useKoreaMap } from "../hook/useKoreaMap";
import { localGuideData } from "../component/LocalGuideAndPrivateTour/LocalGuideSlider";
import RegionTopImage from "../component/RegionTopImage/RegionTopImage";
import RegionGuides from "../component/RegionGuides/RegionGuides";

interface IProp {}

export const LocationalGuide: React.FC<IProp> = () => {
    // const { locale } = useRouter();
    // const { homepage, s } = useContext(AppContext);
    // const { locationalBannerImgs } = useSortBanner(
    //     homepage?.bannerImages || []
    // );

    const globalKoreaHook = useGlobalKoreaMap();
    const { selectedGlobalRegion, onClick: selectGlobalRegion } =
        globalKoreaHook;

    const imgUrl = `/img/regionBg/${selectedGlobalRegion}.jpg`;

    const containerSize = WindowSize.lg;

    return (
        <BookLayout>
            <div className="locationalGuide">
                <div className="locationalGuide__regionArea">
                    <RegionTopImage
                        onSelectRegion={selectGlobalRegion}
                        region={selectedGlobalRegion}
                    />
                    {selectedGlobalRegion && (
                        <div className="locationalGuide__regionSelectorSectorContainer">
                            <SelectRegionSector
                                onSelectRegion={selectGlobalRegion}
                                region={selectedGlobalRegion}
                                items={localGuideData}
                            />
                        </div>
                    )}
                </div>
                <RegionGuides
                    key={selectedGlobalRegion + "HyperProductViewCardS"}
                    hyper={selectedGlobalRegion}
                />
            </div>
        </BookLayout>
    );
};

export default LocationalGuide;
