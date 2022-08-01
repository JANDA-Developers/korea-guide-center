export const enumToOp = (enumm: any, record: any) => {
    return Object.keys(enumm).map((key) => ({
        label: record[key],
        value: enumm[key],
    }));
};
