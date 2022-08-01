export const dupNaming = (originArr: string[], str: string, index: number) => {
    const sliced = originArr.slice(0, index - 1);
    const dupNumber = sliced.filter((s) => s === str).length;

    if (dupNumber) {
        return str + `(${dupNumber})`;
    } else {
        return str;
    }
};
export const hideNamePart = (name: string) => {
    const result = [...name];
    result.splice(1, 1, "*");
    return result;
};
