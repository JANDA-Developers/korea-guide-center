import {
    autoComma,
    Bold,
    Flex,
    JDcard,
    JDcounter,
    Small,
    Thin,
} from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { Ftour } from "../../types/api";
import { booleanToNum } from "../../utils/hack";
import { JDicon } from "../icons/Icons";
import { InfoBox } from "../infoBox/InfoBox";
import { CardHead } from "../modalHead/ModalHead";

export interface IpeopleCnt {
    adult: number;
    kids: number;
    baby: number;
}

interface IProp {
    setPeopleCnt: (cnt: IpeopleCnt) => void;
    peopleCnt: IpeopleCnt;
    tour?: Ftour;
    withOutPrice?: boolean;
}

export const DetailPeopleSelecter: React.FC<IProp> = ({
    tour,
    peopleCnt,
    setPeopleCnt,
    withOutPrice,
}) => {
    const { s } = useContext(AppContext);
    const {
        totalAdult,
        totalBaby,
        totalKids,
        totalMember: alreadyBookedTotalMember,
    } = tour || {
        totalMember: 0,
    };

    const { maxMember, minMember, priceAdult, priceBaby, priceKid, adultOnly } =
        tour?.productInfomation || {
            maxMember: 999,
            minMember: 0,
            priceAdult: 0,
            priceBaby: 0,
            priceKid: 0,
        };

    const PriceViewer = ({ price }: { price: number }) => (
        <Flex vCenter>
            <Thin mr="tiny" size="tiny" color="grey3">
                1{s("person_unit")}
            </Thin>
            <Bold mr="tiny">{autoComma(price)}</Bold>
            <div>{s("money_unit")}</div>
        </Flex>
    );

    const handleChange = (key: keyof IpeopleCnt) => (num: number) => {
        peopleCnt[key] = num;
        setPeopleCnt({ ...peopleCnt });
    };

    const selectingTotalMember =
        peopleCnt.adult + peopleCnt.baby + peopleCnt.kids;

    let maxCount = (maxMember || 0) - alreadyBookedTotalMember;
    const reachMaximum = (maxCount || 0) <= selectingTotalMember;

    return (
        <JDcard
            head={
                <CardHead
                    title={s("peopleSelectTitle")}
                    description={s("peopleSelectDesc")}
                />
            }
            foot={
                reachMaximum ? (
                    <InfoBox>{s("ifOverPeople")}</InfoBox>
                ) : undefined
            }
            mode="border"
            mb
        >
            <Flex mb vCenter between>
                {!withOutPrice && <PriceViewer price={priceAdult || 0} />}
                <JDcounter
                    onCount={booleanToNum(
                        peopleCnt.adult,
                        handleChange("adult")
                    )}
                    count={peopleCnt.adult}
                    maxCount={maxCount - peopleCnt.kids}
                    label={
                        (
                            <span>
                                {adultOnly ? "인원선택" : s("adult")}{" "}
                                <JDicon
                                    hide={!!adultOnly}
                                    tooltip="만 14세 이상"
                                    icon="info"
                                />{" "}
                            </span>
                        ) as any
                    }
                />
            </Flex>
            <Flex hide={!!adultOnly} mb vCenter between>
                {!withOutPrice && <PriceViewer price={priceKid || 0} />}
                <JDcounter
                    onCount={booleanToNum(peopleCnt.kids, handleChange("kids"))}
                    count={peopleCnt.kids}
                    maxCount={maxCount - peopleCnt.adult}
                    label={
                        (
                            <span>
                                {s("kid")}{" "}
                                <JDicon tooltip="만 14세 미만" icon="info" />{" "}
                            </span>
                        ) as any
                    }
                />
            </Flex>
            <Flex hide={!!adultOnly} vCenter between>
                {!withOutPrice && <PriceViewer price={priceBaby || 0} />}
                <JDcounter
                    onCount={booleanToNum(peopleCnt.baby, handleChange("baby"))}
                    count={peopleCnt.baby}
                    maxCount={maxCount}
                    label={
                        (
                            <span>
                                {s("baby")}{" "}
                                <JDicon tooltip="만 2세 미만" icon="info" />{" "}
                            </span>
                        ) as any
                    }
                />
            </Flex>
        </JDcard>
    );
};
