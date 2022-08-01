export const twoDigit = (num: number | null = 0) => {
    try {
        if (10 > (num || 0)) {
            return "0" + num;
        } else {
            return num;
        }
    } catch {
        return num;
    }
};

export const underDigit = (num: number, under: number) => {
    const underVal = num % 1;
    const upperValue = num - underVal;
    let underStr = underVal.toString();

    if (!underVal) {
        underStr = new Array(under).fill("0").join("");
    }
    return upperValue + "." + underStr;
};
