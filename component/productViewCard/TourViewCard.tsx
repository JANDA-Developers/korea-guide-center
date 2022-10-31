import { Bold, Flex, JDalign, JDcard, Small, Tiny } from "@janda-com/front";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { Img } from "../../atom/Image";
import { LineCutter } from "../../atom/LineCutter";
import { MiniTable } from "../../atom/miniTable/MiniTable";
import { AppContext } from "../../context/context";
import { useTourFindById } from "../../hook/useTour";
import { Ftour } from "../../types/api";
import { DEFAULT_PROFILE_IMG } from "../../types/const";
import { cutStr } from "../../utils/cutStr";
import { yyyymmdd } from "../../utils/dateFormat";
import { getTourStartTimeString } from "../../utils/tour";
import { GuideCircle } from "../guideCircle/GuideCircle";
import { CardHead } from "../modalHead/ModalHead";

interface IProp extends IJDcardProps {
    tour: Ftour;
}

export const TourViewCard: React.FC<IProp> = ({
    tour,
    className,
    ...alignProp
}) => {
    const { l, s } = useContext(AppContext);
    const { code, startDate } = tour;
    const {
        category,
        region,
        thumbNail,
        title,
        shortDecsription,
        guideImage,
        guideNickName,
        guideId,
    } = tour.productInfomation;
    return (
        <JDcard
            mode="border"
            head={
                <CardHead
                    description={s("tourViewCardDescription")}
                    title={s("tourViewCardTitle")}
                />
            }
            className={`tourViewCard ${className}`}
            {...alignProp}
        >
            <div>
                <Tiny color="grey2">
                    {l(category?.label)} · {l(region?.label)}
                </Tiny>
                <Bold>
                    <LineCutter line={1}>{l(title)}</LineCutter>
                </Bold>
                <Small mb>{cutStr(l(shortDecsription) || "", 50)}</Small>

                <Flex>
                    <JDalign className="tourViewCard__imgBox" mr>
                        <Img
                            width={160}
                            height={100}
                            src={thumbNail?.uri || ""}
                        />
                    </JDalign>
                    <div style={{ flex: "1 1" }}>
                        <MiniTable
                            labelWidth={"7.5rem"}
                            valueWidth={"5rem"}
                            data={[
                                [
                                    {
                                        label: s("tourCode"),
                                        value: code,
                                    },
                                    {
                                        label: s("start_time"),
                                        value: getTourStartTimeString(tour),
                                    },
                                    {
                                        label: s("startPoint"),
                                        value:
                                            l(
                                                tour.productInfomation
                                                    .startPoint
                                            ) || "-",
                                    },
                                    {
                                        label: s("startDate"),
                                        value: yyyymmdd(startDate),
                                    },
                                    {
                                        label: s("guide"),
                                        value: (
                                            <Flex vCenter>
                                                <GuideCircle
                                                    hover
                                                    size="small"
                                                    guideId={guideId}
                                                    guideNickName={
                                                        guideNickName || ""
                                                    }
                                                    mr="small"
                                                    guideProfile={
                                                        guideImage?.uri ||
                                                        DEFAULT_PROFILE_IMG
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
                    </div>
                </Flex>
            </div>
        </JDcard>
    );
};

interface ITourViewCardWrapProp {
    tourId: string;
}

export const TourViewCardWrap: React.FC<ITourViewCardWrapProp> = ({
    tourId,
}) => {
    const { item } = useTourFindById(tourId);

    if (!item) return null;
    return <TourViewCard tour={item} />;
};
