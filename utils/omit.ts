const omitDeep = require("omit-deep-lodash");

type Primitive =
    | string
    | Function
    | number
    | boolean
    | Symbol
    | undefined
    | null;
type DeepOmitHelper<T, K extends keyof T> = {
    [P in K]: T[P] extends infer TP //extra level of indirection needed to trigger homomorhic behavior // distribute over unions
        ? TP extends Primitive
            ? TP // leave primitives and functions alone
            : TP extends any[]
            ? DeepOmitArray<TP, K> // Array special handling
            : DeepOmit<TP, K>
        : never;
};
type DeepOmit<T, K> = T extends Primitive
    ? T
    : DeepOmitHelper<T, Exclude<keyof T, K>>;

type DeepOmitArray<T extends any[], K> = {
    [P in keyof T]: DeepOmit<T[P], K>;
};
type Input = {
    __typename: string;
    a: string;
    nested: {
        __typename: string;
        b: string;
    };
    nestedArray: Array<{
        __typename: string;
        b: string;
    }>;
    nestedTuple: [
        {
            __typename: string;
            b: string;
        }
    ];
};

function omit<T, K>(obj: T, key: K): DeepOmit<T, K> {
    return omitDeep(obj, key);
}

export const AUTO_OMIT = [
    "__typename",
    "isDelete",
    "createdAt",
    "updatedAt",
    "_id",
];
const defaultOmits = ["__typename", "isDelete"];

export function omitsAuto<T>(
    obj: T,
    keys?: T extends (infer U)[] ? (keyof U)[] : (keyof T)[]
) {
    // @ts-ignore
    return omitDeep(obj, ...AUTO_OMIT, ...(keys || ""));
}

export function omits<T>(
    obj: T,
    keys?: T extends (infer U)[] ? (keyof U)[] : (keyof T)[]
) {
    // @ts-ignore
    return omitDeep(obj, ...defaultOmits, ...(keys || ""));
}
export const omitTypeName = omits;
