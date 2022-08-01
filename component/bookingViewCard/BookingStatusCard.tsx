import { Flex, JDcard, JDtypho, Small } from "@janda-com/front";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { BookingStatus, Fbooking } from "../../types/api";
import { JDicon } from "../icons/Icons";

interface IProp extends IJDcardProps {
    booking: Fbooking;
}

export const BookingStatusCard: React.FC<IProp> = ({ booking, ...props }) => {
    const { bookingStatus, paymethod } = booking;
    const isReady = bookingStatus === BookingStatus.READY;
    const isComplete = bookingStatus === BookingStatus.COMPLETE;
    const isCancel = bookingStatus === BookingStatus.CANCEL;
    const { s } = useContext(AppContext);

    if (isCancel) return null;
    return (
        <JDcard {...props}>
            <div style={{ maxWidth: 300, margin: "0 auto" }}>
                <Flex mb="large" around vCenter>
                    <Flex column vCenter center>
                        <JDicon
                            color={isReady ? "primary" : "grey2"}
                            mr="largest"
                            size="large"
                            icon="historyWatch"
                        />
                        <Small color={isReady ? "primary" : "grey2"}>
                            {s("bookingReady")}
                        </Small>
                    </Flex>
                    <JDicon
                        size="small"
                        color="grey2"
                        mr="largest"
                        icon="arrowRight"
                    />
                    <Flex column vCenter center>
                        <JDicon
                            color={isComplete ? "primary" : "grey2"}
                            size="large"
                            icon="bus"
                        />
                        <Small color={isComplete ? "primary" : "grey2"}>
                            {s("bookingConfirmed")}
                        </Small>
                    </Flex>
                </Flex>
                <JDtypho
                    text="center"
                    hide={!isReady}
                    size="small"
                    mb="small"
                    color="primary"
                >
                    {s("guideCheckingThisBooking")}
                </JDtypho>
                <JDtypho
                    text="center"
                    hide={!isComplete}
                    size="small"
                    color="primary"
                >
                    {s("bookingConfirmeCompleted")}
                </JDtypho>
            </div>
        </JDcard>
    );
};
