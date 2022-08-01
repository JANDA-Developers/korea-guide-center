import { Fproduct, LANGUAGES, ProductStatus } from "../types/api";

export const getRangeStringByNumber = (len: number, s: any) => {
    const rangeString = `${len - 1}${s("nightUnit")}${len}${s("dayUnit")}`;

    if (len === 1) {
        return s("singleDay");
    }

    return rangeString;
};

export const 박일 = getRangeStringByNumber;

export const filterVisibleProduct = (
    products: Fproduct[],
    locale?: LANGUAGES
) => {
    return products.map((pd) => {
        return (
            pd?.languages?.includes(locale || LANGUAGES.ko) &&
            pd.status === ProductStatus.OPEN
        );
    });
};
