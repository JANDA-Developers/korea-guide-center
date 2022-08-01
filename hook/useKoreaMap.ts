import { useState } from "react";
import { mapRegion } from "../component/koreaMap/KoreaData";

export const useKoreaMap = () => {
    const [selectedRegiion, setSelectedMapPart] = useState<mapRegion>(
        mapRegion.seoul
    );

    const onClick = (mapRegion: mapRegion) => {
        setSelectedMapPart(mapRegion);
    };

    return { onClick, selectedRegiion };
};
