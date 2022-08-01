export const fileExtendDivider = (src: string) => {
    const spliteda = src.split(".");
    const extend = spliteda.pop();
    let namePart = spliteda.join(".");

    return { extend, namePart };
};

export const beforeExtention = (src: string, add: string) => {
    if (!src) return "";
    const { extend, namePart } = fileExtendDivider(src);

    // @ts-ignore
    if (extend?.length > 20) {
        const spliced = src.split("/");
        const last = spliced.pop();
        return spliced.join("/") + "/" + add + "." + last;
    }
    return namePart + add + "." + extend;
};

export function renameFile(originalFile: File, newName: string) {
    return new File([originalFile], newName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified,
    });
}
