import { Flangs } from "../../types/api";

interface IRegionableaData {
    title: Omit<Flangs, "__typename">;
    description: Omit<Flangs, "__typename">;
    photos: string[];
}

export enum mapRegion {
    // "dmz" = "dmz",
    "seoul" = "seoul",
    "busan" = "busan",
    "daegu" = "daegu",
    "Incheon" = "Incheon",
    Gwangju = "Gwangju",
    Daejeon = "Daejeon",
    Ulsan = "Ulsan",
    Sejong = "Sejong",
    Jeju = "Jeju",
    SouthGyeongsang = "SouthGyeongsang",
    NorthGyeongsang = "NorthGyeongsang",
    SouthJeolla = "SouthJeolla",
    NorthJeolla = "NorthJeolla",
    SouthChungcheong = "SouthChungcheong",
    NorthChungcheong = "NorthChungcheong",
    Gangwon = "Gangwon",
    Gyeonggi = "Gyeonggi",
}

function RegionMap(
    string: Record<mapRegion, IRegionableaData> | string | undefined
) {
    const region = new Map();

    // 한국어 변환
    region.set("서울", "seoul");
    region.set("부산", "busan");
    region.set("인천", "Incheon");
    region.set("광주", "Gwangju");
    region.set("대전", "Daejeon");
    region.set("울산", "Ulsan");
    region.set("세종", "Sejong");
    region.set("제주", "Jeju");
    region.set("경남", "SouthGyeongsang");
    region.set("경북", "NorthGyeongsang");
    region.set("전남", "SouthJeolla");
    region.set("전북", "NorthJeolla");
    region.set("충남", "SouthChungcheong");
    region.set("충북", "NorthChungcheong");
    region.set("강원", "Gangwon");
    region.set("경기", "Gyeonggi");
    region.set("대구", "daegu");

    // 영어는 그냥 사용

    // 일본어 변환

    return region.get(string);
}

export default RegionMap;
