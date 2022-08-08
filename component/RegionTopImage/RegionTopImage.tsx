import { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import { regionableData } from "../koreaMap/KoreaData";
import { useGlobalKoreaMap } from "../../hook/useKoreaMap";
import { mapRegion } from "../koreaMap/KoreaData";

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
        <div className="regionTopImage__container">
            {selectedGlobalRegion && (
                <div>
                    <div className="regionTopImage__titleAndDescContainer">
                        <h1 className="regionTopImage__title">{l(title)}</h1>
                        <p className="regionTopImage__desc">{l(description)}</p>
                    </div>
                    <img
                        className="locationalGuide__regionTopImage"
                        src={imgUrl}
                    />
                </div>
            )}
        </div>
    );
};

export default RegionTopImage;
