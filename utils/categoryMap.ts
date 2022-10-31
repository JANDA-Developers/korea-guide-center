import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { CategoryType, Fcategory, Fgroup, Fproduct, Fuser } from "../types/api";
import { arrayOrderSink } from "./arrayOrderSink";
import { cloneObject } from "./clone";

export const defaultCatsOpMap: Record<CategoryType, IselectedOption[]> = {
    ITEM: [],
    ITEM_SMALL: [],
    REIGION: [],
    GUIDE: [],
};

export const defaultCatsMap: Record<CategoryType, Fcategory[]> = {
    ITEM: [],
    ITEM_SMALL: [],
    REIGION: [],
    GUIDE: [],
};

export const categoryMap = (catList: Fcategory[]) => {
    const catsMap = cloneObject(defaultCatsMap);

    catList?.forEach((cat) => {
        catsMap[cat.type]?.push(cat);
    });

    return catsMap;
};

interface IGroupWithProducts extends Fgroup {
    products: Fproduct[];
}

export const groupProductMap = (
    products: Fproduct[],
    group: Fgroup[]
): IGroupWithProducts[] => {
    group.sort((a, b) => (a?.order || 0) - (b?.order || 0));
    return group.map((g) => ({
        ...g,
        products: arrayOrderSink(
            products.filter((p) => g.members.includes(p._id)),
            "_id",
            g.members
        ),
    }));
};

export const categoryMapToOpMap = (
    catsMap: Record<CategoryType, Fcategory[]>,
    l: any
) => {
    const catsOpMap = cloneObject(defaultCatsOpMap);
    // need current language;;
    for (const [key, val] of Object.entries(catsMap)) {
        catsOpMap[key as CategoryType] = val.map((v) => ({
            label: l(v.label),
            value: v._id,
        }));
    }
    return catsOpMap;
};

export enum GroupTypes {
    Main1 = "Main1",
    Main2 = "Main2",
    tourMain1 = "tourMain1",
    tourMain2 = "tourMain2",
    guideMain1 = "guideMain1",
    guideMain2 = "guideMain2",
    guideMain3 = "guideMain3",
}
