export const mergeArray = <T>(arr1: T[], arr2: T[]): T[] =>
    arr1.map((item, i) => Object.assign({}, item, arr2[i] || {}));
