import { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import { regionableData } from "../koreaMap/KoreaData";
import { useGlobalKoreaMap } from "../../hook/useKoreaMap";
import { mapRegion } from "../koreaMap/KoreaData";
import { SelectRegionSector } from "../SelectRegionSector/SelectRegionSector";
import { localGuideData } from "../LocalGuideAndPrivateTour/LocalGuideSlider";

interface IProp {
    region: mapRegion;
    onSelectRegion: (region: mapRegion) => void;
}

const RegionTopImage: React.FC<IProp> = ({ region, onSelectRegion }) => {
    const globalKoreaHook = useGlobalKoreaMap();
    const { selectedGlobalRegion, onClick: selectGlobalRegion } =
        globalKoreaHook;
    const [viewMoreText, setViewMoreText] = useState(false);
    const { l } = useContext(AppContext);
    const data = regionableData[region];
    const { title, description, photos } = data;

    const imgUrl = `/img/regionBg/${selectedGlobalRegion}.jpg`;

    return (
        <>
            {selectedGlobalRegion && (
                <div className="regionTopImage__container">
                    <div
                        className="regionTopImage__titleAndDescContainer"
                        style={{
                            backgroundImage: `url(${imgUrl})`,
                        }}
                    >
                        <h1 className="regionTopImage__title">{l(title)}</h1>
                        <p className="regionTopImage__desc">{l(description)}</p>
                    </div>
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
            )}
        </>
    );
};

export default RegionTopImage;
