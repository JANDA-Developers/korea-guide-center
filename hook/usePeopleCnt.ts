import { useState } from "react";
import { IpeopleCnt } from "../component/productDetailComponents/DetailPeopleSelecter";

export const usePeopleCnt = (
    defaultPeopleCnt: IpeopleCnt = {
        adult: 0,
        baby: 0,
        kids: 0,
    }
) => {
    const [peopleCnt, setPeopleCnt] = useState<IpeopleCnt>(defaultPeopleCnt);
    const totalPeopleCnt = peopleCnt.adult + peopleCnt.baby + peopleCnt.kids;
    return { peopleCnt, setPeopleCnt, totalPeopleCnt };
};
