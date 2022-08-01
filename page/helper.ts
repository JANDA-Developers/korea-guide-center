import {
    CategoryType,
    Fcategory,
    systemInfo_SystemInfo,
    systemInfo_SystemInfo_categories,
} from "../types/api";
import { enumToArray } from "../utils/enumToArray";

export const categoryMap = (categories: systemInfo_SystemInfo_categories[]) => {
    const catMap: Record<CategoryType, Fcategory[]> = {
        ITEM: [],
        REIGION: [],
        GUIDE: [],
        ITEM_SMALL: [],
    };

    enumToArray(CategoryType).forEach((key) => {
        const targets = categories?.filter((cat) => cat.type === key);
        catMap[key as CategoryType] = targets;
    });

    return catMap;
};
