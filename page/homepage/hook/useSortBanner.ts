import { useMemo } from "react";
import { Ffile } from "../../../types/api";
import { enumToArray } from "../../../utils/enumToArray";
import { FileTagManager, TBannerKey } from "../../../utils/tagManager";

export const useSortBanner = (files: Ffile[]) => {
    const sortedFiles = useMemo(
        () => FileTagManager.fileSortByTagValue(files, "BannerKey"),
        [files.length]
    );

    const locationalBannerImgs = sortedFiles[TBannerKey.LocationalBanner] || [];
    const loginBannerImgs = sortedFiles[TBannerKey.Login] || [];
    const tourCircleBannerImgs = sortedFiles[TBannerKey.TourCircle] || [];
    const topBannerImgs = sortedFiles[TBannerKey.TopBanner] || [];

    return {
        topBannerImgs,
        locationalBannerImgs,
        loginBannerImgs,
        tourCircleBannerImgs,
    };
};
