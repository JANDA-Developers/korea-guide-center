import { autoComma, Bold, Flex } from "@janda-com/front";
import classNames from "classnames";
import React from "react";
import { Clip } from "../../atom/clip/Clip";
import { IImgCardProps, ImgCard } from "../../atom/ImgCard";
import { Info } from "../../atom/Info";
import { Red } from "../../atom/shortCut/Short";
import { Ftour } from "../../types/api";
import { cutStr } from "../../utils/cutStr";
import { yyyymmdd } from "../../utils/dateFormat";
import { CardHead } from "../modalHead/ModalHead";
import { TourStatusBadge } from "../statusBadges/StatusBadges";

interface IProp extends IImgCardProps {
    tour: Ftour;
}

export const TourCard: React.FC<IProp> = ({ className, tour, ...props }) => {
    const {
        __typename,
        _id,
        bookings,
        code,
        createdAt,
        number,
        productId,
        productInfomation,
        settlementId,
        settlementStatus,
        startDate,
        totalAdult,
        totalPaidAmt,
        totalBaby,
        totalRefundPrice,
        totalKids,
        totalMember,
        tourStatus,
    } = tour;
    const { thumbNail, title, shortDecsription } = productInfomation;

    const classes = classNames("TourCard", className, {});

    return (
        <ImgCard
            className={classes}
            img={thumbNail}
            head={
                <CardHead
                    title={
                        <Flex between>
                            <div>
                                {title?.ko!} {`[${number}회차]`}
                            </div>
                            <div>
                                <TourStatusBadge status={tourStatus} />
                            </div>
                        </Flex>
                    }
                    description={cutStr(shortDecsription?.ko!, 50)}
                />
            }
            {...props}
        >
            <Flex>
                <Info
                    mb
                    mr="large"
                    label={"투어일"}
                    value={<Bold color="primary">{yyyymmdd(startDate)}</Bold>}
                />
                <Info
                    mb
                    mr="large"
                    label={"코드"}
                    value={<Clip>{code}</Clip>}
                />
            </Flex>
            <Flex>
                <Info
                    mb
                    mr="large"
                    label={"가격"}
                    value={
                        <div>
                            {autoComma(totalPaidAmt || 0)}{" "}
                            {totalRefundPrice ? (
                                <Red>-{autoComma(totalRefundPrice || 0)}</Red>
                            ) : (
                                ""
                            )}
                        </div>
                    }
                />
                <Info
                    mb
                    mr="large"
                    label={"총인원"}
                    value={<div>{totalMember}</div>}
                />
                <Info
                    mb
                    mr="large"
                    label={"총예약수"}
                    value={<div>{bookings?.length || 0}개</div>}
                />
                <Info
                    mb
                    label={"생성일자"}
                    value={<div>{yyyymmdd(createdAt)}</div>}
                />
            </Flex>
        </ImgCard>
    );
};
