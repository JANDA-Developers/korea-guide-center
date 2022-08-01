import _ from "lodash";
import { Ffile, Ftag } from "../types/api";

const fileSortByTagValue = (files: Ffile[], key: string): TfileKeySorted => {
    const sorted: TfileKeySorted = {};
    files.forEach((file) => {
        const targetTag = getTagByTagName(file.tags, key);
        if (targetTag) {
            if (!sorted[targetTag.value]) sorted[targetTag.value] = [];
            sorted[targetTag.value].push(file);
        }
    });
    return sorted;
};

type TfileKeySorted = { [uniqTagKeys: string]: Ffile[] };
const fileSortByTagKeys = (files: Ffile[], keys: string[]): TfileKeySorted => {
    const sorted: TfileKeySorted = {};
    keys.forEach((k) => (sorted[k] = []));

    files.forEach((file) => {
        const targetKey = keys.find((k) => getTagByTagName(file.tags, k));
        if (targetKey) {
            sorted[targetKey].push(file);
        }
    });
    return sorted;
};

type TtagKeySorted = { [key: string]: Ftag[] };
const sortTagByKeys = (tags: Ftag[]): TtagKeySorted => {
    const sorted: TtagKeySorted = {};
    tags.forEach((t) => {
        if (!sorted[t.key]) sorted[t.key] = [];
        sorted[t.key].push(t);
    });
    return sorted;
};

const getValueByTagName = (tags: Ftag[], tagName: string) => {
    return tags.find((t) => t.key === tagName)?.value;
};
const getTagByTagName = (tags: Ftag[], tagName: string) => {
    return tags.find((t) => t.key === tagName);
};
const getTagByTagNameAndValue = (tags: Ftag[], tagName: string, value: any) => {
    return tags.find((t) => t.key === tagName && t.value === value);
};
const getByTagNameArray = (tags: Ftag[], tagName: string) => {
    return tags.filter((t) => t.key === tagName).map((tag) => tag.value);
};

const setTag = (tags: Ftag[], name: string, value: string) => {
    const existtag: Ftag | undefined = tags.find((t) => t.key === name);

    if (!existtag) {
        tags.push({
            __typename: "Tag",
            key: name,
            value,
        });
    } else existtag.value = value;
};

const setTags = (tags: Ftag[], name: string, values: string[]) => {
    tags.filter((tag) => tag.key === name);
    values.forEach((value) =>
        tags.push({
            __typename: "Tag",
            key: name,
            value,
        })
    );
    return tags;
};

const filterFileByTagHas = (
    files: Ffile[],
    key: string,
    value: any
): Ffile[] => {
    return files.filter((f) => !!getTagByTagNameAndValue(f.tags, key, value));
};

const fileTagUtils = {
    setTags,
    setTag,
    sortTagByKeys,
    getValueByTagName,
    getByTagNameArray,
    fileSortByTagKeys,
    getTagByTagNameAndValue,
    filterFileByTagHas,
    fileSortByTagValue,
};

const setTableRowCol = (tags: Ftag[], col: number, row: number) => {
    setTag(tags, "rowCol", `${col},${row}`);
};

const getTableRowColTag = (tags: Ftag[]): [number, number] | undefined => {
    return getValueByTagName(tags, "rowCol")
        ?.split(",")
        .map((numStr) => parseInt(numStr)) as [number, number];
};

export enum TBannerKey {
    "Login" = "Login",
    "TourCircle" = "TourCircle",
    "LocationalBanner" = "LocationalBanner",
    "TopBanner" = "TopBanner",
}

export const FileTagManager = {
    ...fileTagUtils,
    setTableRowCol,
    getTableRowColTag,
};
