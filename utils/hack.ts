export const booleanToNum = (add: number, fn: any) => (flag: boolean) =>
    fn(flag ? add + 1 : add - 1);
