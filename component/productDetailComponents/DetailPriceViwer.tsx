import {
    autoComma,
    Bold,
    Flex,
    JDalign,
    JDcard,
    JDhorizen,
    JDtypho,
    Mr,
    Small,
} from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { Ftour } from "../../types/api";
import { cutStr } from "../../utils/cutStr";
import { IpeopleCnt } from "./DetailPeopleSelecter";

interface IProp {
    tour: Ftour;
    peopleCnt: IpeopleCnt;
}

export const getPriceSummary = (peopleCnt: IpeopleCnt, tour?: Ftour) => {
    const { priceAdult, priceBaby, priceKid } = tour?.productInfomation || {
        priceAdult: 0,
        priceBaby: 0,
        priceKid: 0,
    };
    const totalAdultPrice = (priceAdult || 0) * peopleCnt.adult;
    const totalBabyPrice = (priceBaby || 0) * peopleCnt.baby;
    const totalKidsPrice = (priceKid || 0) * peopleCnt.kids;
    const totalPrice = totalAdultPrice + totalBabyPrice + totalKidsPrice;
    return { totalPrice, totalKidsPrice, totalBabyPrice, totalAdultPrice };
};

interface IPriceLineProp {
    title: TElements;
    cal: string;
    price: number;
}
const PirceLine: React.FC<IPriceLineProp> = ({ cal, price, title }) => {
    return (
        <Small flex={{ between: true, vCenter: true }} color="grey2">
            <JDalign mr>{title}</JDalign>
            <Flex>
                <JDtypho mr="large">{cal}</JDtypho>
                <Bold text={"right"} style={{ width: "5rem" }} color="black">
                    {autoComma(price)}
                </Bold>
            </Flex>
        </Small>
    );
};

const cutLen = 20;
export const DetailPriceViewer: React.FC<IProp> = ({ peopleCnt, tour }) => {
    const { l, s } = useContext(AppContext);
    const { totalAdultPrice, totalBabyPrice, totalKidsPrice, totalPrice } =
        getPriceSummary(peopleCnt, tour);
    const { title, priceAdult, priceKid, priceBaby, adultOnly } =
        tour.productInfomation;
    const { startDate, number } = tour;

    const { adult, baby, kids } = peopleCnt;
    return (
        <JDcard mb mode="border" className="detailPriceViewer">
            <div>
                {adult ? (
                    <div>
                        <PirceLine
                            price={totalAdultPrice}
                            cal={`${peopleCnt.adult} * ${autoComma(
                                priceAdult || 0
                            )}${s("money_unit")}`}
                            title={
                                `[${adultOnly ? "인원" : s("adult")}]` +
                                cutStr(l(title), cutLen)
                            }
                        />
                        <JDhorizen margin={2} />
                    </div>
                ) : (
                    ""
                )}
                {kids ? (
                    <div>
                        <PirceLine
                            price={totalKidsPrice}
                            cal={`${peopleCnt.kids} * ${autoComma(
                                priceKid || 0
                            )}${s("money_unit")}`}
                            title={`[${s("kid")}]` + cutStr(l(title), cutLen)}
                        />
                        <JDhorizen margin={2} />
                    </div>
                ) : (
                    ""
                )}
                {baby ? (
                    <div>
                        <PirceLine
                            price={totalBabyPrice}
                            cal={`${peopleCnt.baby} * ${autoComma(
                                priceBaby || 0
                            )}${s("money_unit")}`}
                            title={`[${s("baby")}]` + cutStr(l(title), cutLen)}
                        />
                        <JDhorizen margin={2} />
                    </div>
                ) : (
                    ""
                )}
                <Bold text="right">
                    {s("sum_price")}: {autoComma(totalPrice)}
                </Bold>
            </div>
        </JDcard>
    );
};
