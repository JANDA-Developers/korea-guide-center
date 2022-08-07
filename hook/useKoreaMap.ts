import { useState } from "react";
import { useRecoilState } from "recoil";
import { mapRegion } from "../component/koreaMap/KoreaData";
import { globalMapState } from "../recoil/atoms";

export const useKoreaMap = () => {
    const [selectedRegiion, setSelectedMapPart] = useState<mapRegion>(
        mapRegion.seoul
    );

    const onClick = (mapRegion: mapRegion) => {
        setSelectedMapPart(mapRegion);
    };

    return { onClick, selectedRegiion };
};

export const useGlobalKoreaMap = () => {
    const [selectedGlobalRegion, setSelectedGlobalMapPart] =
        useRecoilState(globalMapState);

    const onClick = (mapRegion: mapRegion) => {
        setSelectedGlobalMapPart(mapRegion);
    };

    return { onClick, selectedGlobalRegion };
};
