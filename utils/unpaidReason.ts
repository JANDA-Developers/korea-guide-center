export const unpaidReason = (value: string) => {
    if (value?.includes("JL20")) return "등록된 카드가 없습니다";
    else return value;
};
