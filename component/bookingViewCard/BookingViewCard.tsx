import { Flex, IJDalignProp, JDalign, JDcard, JDtypho } from "@janda-com/front";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { Img } from "../../atom/Image";
import { MiniTable } from "../../atom/miniTable/MiniTable";
import { AppContext } from "../../context/context";
import { Fbooking } from "../../types/api";
import { yyyymmdd } from "../../utils/dateFormat";
import { CardBtn } from "../btns/ModalBtn";
import { GuideCircle } from "../guideCircle/GuideCircle";
import { CardHead } from "../modalHead/ModalHead";

interface IProp extends IJDalignProp {
    booking: Fbooking;
    handleViewDetail?: () => void;
    handleViewTour?: () => void;
}

export const BookingViewCard: React.FC<IProp> = ({
    booking,
    className,
    handleViewDetail,
    handleViewTour,
    ...alignProp
}) => {
    const { locale } = useRouter();
    const { l, s } = useContext(AppContext);
    const {
        guideImage,
        guideNickName,
        tourCode,
        tourThumbNail,
        tourStart,
        tourTitle,
        code,
        bookingStatus,
        createdAt,
        cancelDate,
        cancelReason,
        adultCount,
        babyCount,
        kidsCount,
        guideId,
    } = booking;

    return (
        <JDcard
            foot={
                <div>
                    <CardBtn
                        mode="border"
                        thema="primary"
                        onClick={handleViewDetail}
                        mr
                    >
                        {s("bookDetail")}
                    </CardBtn>
                    <CardBtn
                        mode="border"
                        thema="primary"
                        hide={!handleViewTour}
                        onClick={() => {
                            handleViewTour?.();
                        }}
                    >
                        {s("tourView")}
                    </CardBtn>
                </div>
            }
            head={
                <CardHead
                    title={
                        <Flex onClick={handleViewDetail} between>
                            {l(tourTitle)}
                        </Flex>
                    }
                    description={
                        <Flex>
                            {s("createdAtTime")}
                            <JDtypho color="primary">
                                {yyyymmdd(createdAt)}
                            </JDtypho>
                        </Flex>
                    }
                />
            }
            {...alignProp}
            className={`productViewCard ${className}`}
        >
            <div>
                <Flex>
                    <JDalign mr>
                        <Img
                            width={160}
                            height={100}
                            src={tourThumbNail?.uri}
                        />
                    </JDalign>
                    <Flex wrap>
                        <MiniTable
                            labelWidth="6.125rem"
                            valueWidth="6.125rem"
                            data={[
                                [
                                    {
                                        label: s("bookingCode"),
                                        value: code,
                                    },
                                    {
                                        label: s("tourCode"),
                                        value: tourCode,
                                    },
                                ],
                                [
                                    {
                                        label: s("personnel"),
                                        value: (
                                            <span>
                                                {adultCount +
                                                    babyCount +
                                                    kidsCount}{" "}
                                                {s("person_unit")}
                                            </span>
                                        ),
                                    },
                                    {
                                        label: s("start_time"),
                                        value: (
                                            <span>{yyyymmdd(tourStart)}</span>
                                        ),
                                    },
                                ],
                                [
                                    {
                                        valueWidth: "auto",
                                        label: s("guide"),
                                        value: (
                                            <Flex vCenter>
                                                <GuideCircle
                                                    mr
                                                    guideId={guideId}
                                                    guideProfile={
                                                        guideImage?.uri
                                                    }
                                                    className="productViewCard__avatar"
                                                />
                                                {guideNickName}
                                            </Flex>
                                        ),
                                    },
                                ],
                            ]}
                        />
                        {/* <Info mr label="예약번호" value={code} />
                        <Info mr label="출발일" value={yyyymmdd(tourStart)} />
                        <Info
                            mr
                            label="가이드님"
                            value={
                                <Flex vCenter>
                                    <GuideCircle
                                        mr
                                        guideId={guideId}
                                        guideProfile={guideImage?.uri}
                                        className="productViewCard__avatar"
                                    />
                                    {guideNickName}
                                </Flex>
                            }
                        /> */}
                    </Flex>
                </Flex>
            </div>
        </JDcard>
    );
};
