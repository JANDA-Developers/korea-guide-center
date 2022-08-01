import { IIcons } from "../icons/declation";
import { Fsns } from "../../types/api";

export type SnsKeys = keyof Omit<Fsns, "__typename">;
export const SnsKeyToIcon: Record<SnsKeys, IIcons> = {
    facebook: "facebook",
    insta: "insta",
    line: "line",
    twitter: "twitter",
    youtube: "youtube",
};

export const SnsKeyToKr: Record<SnsKeys, string> = {
    facebook: "페이스북",
    insta: "인스타",
    line: "라인",
    twitter: "트위터",
    youtube: "유튜브",
};
