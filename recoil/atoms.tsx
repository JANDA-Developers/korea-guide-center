import { atom } from "recoil";
import { mapRegion } from "../component/koreaMap/KoreaData";

export const menuOpenState = atom({
    key: "menuOpen",
    default: false,
});

export const globalMapState = atom<mapRegion>({
    key: "globalMapState",
    default: mapRegion.seoul,
});

export const citiesMapState = atom<mapRegion>({
    key: "citiesMapState",
    default: mapRegion.seoul,
});
