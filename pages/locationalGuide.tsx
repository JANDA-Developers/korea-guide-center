import { WindowSize } from "@janda-com/front";
import React from "react";
import { BookLayout } from "../component/layout/BookLayout";
import { useGlobalKoreaMap, useKoreaMap } from "../hook/useKoreaMap";
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
