import {
    opFind,
    useCheckBox,
    useInput,
    useSelect,
    useSwitch,
} from "@janda-com/front";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";
import GuideContext from "../page/context";
import {
    Fproduct,
    FsubPlan,
    LANGUAGES,
    ProductInput,
    ProductType,
} from "../types/api";
import { LanguagesOps } from "../utils/enumToKr";
import { AUTO_OMIT, omits, omitsAuto } from "../utils/omit";
import { useCopy } from "./useCopy";
import { useGlobalInput } from "./useGlobalInput";
import { useMultiSelect } from "./useMultiSelect";
import { useSubPlan } from "./useSubPlan";

export type IUseProductWrite = ReturnType<typeof useProductWrite>;
export const useProductWrite = (defaultProduct?: Fproduct) => {
    const { catOpMap, catMap } = useContext(AppContext);
    const { me, mylangsOps } = useContext(GuideContext);
    const titleHook = useGlobalInput(defaultProduct?.title);
    const startPointHook = useGlobalInput(defaultProduct?.startPoint);
    const startTimeHook = useGlobalInput(defaultProduct?.startTime);
    const includeHook = useGlobalInput(defaultProduct?.include);
    const unIncludeHook = useGlobalInput(defaultProduct?.unInclude);
    const importantNoticehook = useGlobalInput(defaultProduct?.importantNotice);
    const addressDetailHook = useGlobalInput(defaultProduct?.address);
    const extraInfoHook = useGlobalInput(defaultProduct?.extraInfo);
    const adultOnlyHook = useCheckBox(!!defaultProduct?.adultOnly);
    const startTimeHourHook = useState(defaultProduct?.startTimeHour || 9);
    const startTimeMinHook = useState(defaultProduct?.startTimeMin || 0);
    const [type, setType] = useState(defaultProduct?.type || []);
    const [marker, setMarker] = useState(defaultProduct?.marker);
    const amPmHook = useState(defaultProduct?.startTimeAmPm || "NONE");
    const { setSubplanes, subPlanes } = useSubPlan(
        defaultProduct?.subPlanes || []
    );
    const shortDecsriptionhook = useGlobalInput(
        defaultProduct?.shortDecsription
    );
    const largeDescriptionHook = useGlobalInput(
        defaultProduct?.descriptionLarge
    );
    const regionSelectHook = useSelect(
        opFind(
            defaultProduct?.region?._id,
            catOpMap?.REIGION || [],
            window.outerWidth > 500
        ),
        catOpMap?.REIGION
    );
    const categoryHook = useSelect(
        opFind(
            defaultProduct?.category?._id,
            catOpMap?.ITEM || [],
            window.outerWidth > 500
        ),
        catOpMap?.ITEM
    );
    const categoryMiniHook = useMultiSelect(
        defaultProduct?.categoryMini?.map((mini) => mini._id) || [],
        catOpMap?.ITEM_SMALL || []
    );
    const languagesHook = useState<LANGUAGES[]>(
        defaultProduct?.languages || []
    );
    const selectLangs = languagesHook[0];
    const adultPriceHook = useInput(defaultProduct?.priceAdult || 0);
    const kidsPriceHook = useInput(defaultProduct?.priceKid || 0);
    const babyPriceHook = useInput(defaultProduct?.priceBaby || 0);
    const maxMemberHook = useInput(defaultProduct?.maxMember || 0);
    const minMemberHook = useInput(defaultProduct?.minMember || 0);
    const priviateHook = useSwitch(defaultProduct?.isPriviate || false);
    const useMapHook = useSwitch(!!defaultProduct?.marker);
    const [images, setImages] = useCopy(defaultProduct?.images || []);
    const [videos, setVideos] = useCopy(defaultProduct?.videos || []);
    const [thumbNailVide, setThumNailVideo] = useCopy(
        defaultProduct?.thumbNailVideo
    );
    const [rangeDay, setRangeDay] = useState(defaultProduct?.rangeDay || 0);

    const isKpopCulture = type.includes(ProductType.KPOP);
    const isLocalTour = type.includes(ProductType.LOCAL);

    const selectedProductCatId = categoryHook.selectedOption?.value;
    const productCategory = catMap?.ITEM.find(
        (cat) => cat._id === selectedProductCatId
    );

    const nextData: ProductInput = {
        title: omits(titleHook.langs),
        address: omits(addressDetailHook.langs),
        region: omits(
            catMap?.REIGION.find(
                (region) =>
                    region._id === regionSelectHook.selectedOption?.value
            )
        ),
        rangeDay,
        categoryMini: omits(
            catMap?.ITEM_SMALL.filter((itemSmall) =>
                categoryMiniHook.selectedValues?.includes(itemSmall._id)
            )
        ),
        descriptionLarge: omits(largeDescriptionHook.langs),
        category: omits(productCategory),
        images: omits(images, AUTO_OMIT as any),
        shortDecsription: omits(shortDecsriptionhook.langs),
        priceAdult: adultPriceHook.value,
        priceKid: kidsPriceHook.value,
        priceBaby: babyPriceHook.value,
        languages: selectLangs,
        maxMember: maxMemberHook.value,
        minMember: minMemberHook.value,
        isPriviate: priviateHook.checked,
        startPoint: omits(startPointHook.langs),
        startTime: omits(startTimeHook.langs),
        unInclude: omits(unIncludeHook.langs),
        include: omits(includeHook.langs),
        importantNotice: omits(importantNoticehook.langs),
        videos: omitsAuto(videos),
        thumbNailVideo: omits(thumbNailVide),
        startTimeMin: startTimeMinHook[0],
        startTimeHour: startTimeHourHook[0],
        startTimeAmPm: amPmHook[0],
        extraInfo: omits(extraInfoHook.langs),
        subPlanes: omitsAuto(subPlanes),
        type,
        adultOnly: !!adultOnlyHook.checked,
        marker: omitsAuto(marker),
    };

    useEffect(() => {
        if (minMemberHook.value) {
            if (maxMemberHook.value < minMemberHook.value) {
                maxMemberHook.onChange(minMemberHook.value);
            }
        }
    }, [minMemberHook.value, maxMemberHook.value]);

    const selectLangOps = LanguagesOps.filter((op) =>
        selectLangs.includes(op.value)
    );

    return {
        type,
        setType,
        startTimeMinHook,
        startTimeHourHook,
        amPmHook,
        extraInfoHook,
        titleHook,
        addressDetailHook,
        setSubplanes,
        subPlanes,
        shortDecsriptionhook,
        largeDescriptionHook,
        regionSelectHook,
        categoryHook,
        selectLangOps,
        languagesHook,
        adultPriceHook,
        kidsPriceHook,
        babyPriceHook,
        maxMemberHook,
        minMemberHook,
        priviateHook,
        categoryMiniHook,
        adultOnlyHook,
        images,
        marker,
        setMarker,
        setImages,
        videos,
        setVideos,
        thumbNailVide,
        setThumNailVideo,
        nextData,
        rangeDay,
        setRangeDay,
        startPointHook,
        startTimeHook,
        includeHook,
        unIncludeHook,
        isKpopCulture,
        isLocalTour,
        importantNoticehook,
        useMapHook,
    };
};
