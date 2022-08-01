import { autoHypen, Flex, JDbutton, JDcard, JDtypho } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Info } from "../../atom/Info";
import { AppContext } from "../../context/context";
import { getBookingSummary } from "../../hook/useBookingManage";
import GuideContext from "../../page/context";
import { bookingFindById_BookingFindById, Paymethod } from "../../types/api";
import { isPast } from "../../utils/bookingStatusChecker";
import { yyyymmdd } from "../../utils/dateFormat";
import { AgePerPeopleCnt } from "../../utils/enumToKr";
import { withWon } from "../../utils/formatter";
import { KGCBankHolderViewer } from "../bankHolderViewer/BankHolderViewer";
import { CardHead } from "../modalHead/ModalHead";
import { TourViewCard } from "../productViewCard/TourViewCard";
import { BookingRecipt } from "../recipt/BookingRecipt";
import { BookingStatusCard } from "./BookingStatusCard";
import { MyReviewAbout } from "./MyReviewAbout";

interface IProp {
    booking: bookingFindById_BookingFindById;
    modalViewMode?: boolean;
}

export const BookingViweDetail: React.FC<IProp> = ({
    booking,
    modalViewMode,
}) => {
    const [reciptOpen, setReciptOpen] = useState(false);
    const {
        code,
        tourCode,
        tour,
        tourId,
        cancelDate,
        cancelReason,
        travlers,
        paymethod,
        paidPrice,
        pendingPrice,
        createdAt,
        buyerEmail,
        bookingStatus,
        buyerMessage,
        buyerName,
        buyerPhone,
        adultCount,
        kidsCount,
        babyCount,
        bankTranferName,
    } = booking;
    const pastBooking = isPast(booking);
    const Appcontext = useContext(AppContext);
    const { bookingCacnelModalHook, travlerFormModalHook, s } = Appcontext;
    const { isGuide } = useContext(GuideContext);
    const { cancelAb, completeAb, isCacnel, reviewAb, isReady } =
        getBookingSummary(booking, Appcontext);
    const isBankPay = paymethod === Paymethod.BANK_TRANSFER;

    return (
        <div>
            <TourViewCard
                head={
                    isGuide ? (
                        <CardHead
                            description={
                                <JDtypho color="primary">
                                    {s("chcekSimilarTours")}
                                </JDtypho>
                            }
                            title={s("tourViewCardTitle")}
                        />
                    ) : undefined
                }
                mb
                tour={tour}
            />
            {isBankPay && isReady && (
                <KGCBankHolderViewer price={pendingPrice} mb />
            )}
            <JDcard
                mb
                hide={!isCacnel}
                mode="border"
                head={
                    <CardHead title={<Flex between>{s("cancelInfo")}</Flex>} />
                }
            >
                <Flex>
                    <Info mr value={yyyymmdd(cancelDate)} label={s("sum")} />
                    <Info
                        value={cancelReason || ""}
                        label={s("cancelReason")}
                    />
                </Flex>
            </JDcard>

            <JDcard
                hide={!reviewAb || modalViewMode}
                mb
                mode="border"
                head={<CardHead title={s("myReviews")} />}
            >
                <MyReviewAbout tourCode={tourCode} tourId={tourId} />
            </JDcard>
            <BookingStatusCard mb mode="border" booking={booking} />
            <JDcard
                mode="border"
                mb
                head={
                    <CardHead
                        title={
                            <Flex between>
                                {s("bookDetail")}
                                <JDbutton
                                    onClick={() => {
                                        bookingCacnelModalHook.openModal({
                                            booking,
                                        });
                                    }}
                                    padding="small"
                                    size="small"
                                    hide={!cancelAb}
                                    br="square"
                                    mode="border"
                                >
                                    {s("cancel")}
                                </JDbutton>
                            </Flex>
                        }
                    />
                }
            >
                <Flex oneone mb>
                    <div>
                        <Info
                            mb
                            value={code}
                            label={s("reservationNumber")}
                        ></Info>
                        <Info
                            mb
                            value={yyyymmdd(createdAt)}
                            label={s("bookDate")}
                        ></Info>
                        <Info mb value={buyerName} label={s("booker")}></Info>
                        <Info
                            value={
                                <JDbutton
                                    size="small"
                                    padding="tiny"
                                    onClick={() => {
                                        travlerFormModalHook.openModal({
                                            defaultTravlersInput:
                                                travlers || [],
                                        });
                                    }}
                                    br="square"
                                    mode="border"
                                    label={s("travelerDetailView")}
                                />
                            }
                            label={s("travler")}
                        />
                    </div>
                    <div>
                        <Info mb value={buyerEmail} label={s("email")}></Info>
                        <Info
                            mb
                            value={autoHypen(buyerPhone)}
                            label={s("phoneNumber")}
                        />
                        <Info
                            mb
                            value={
                                <AgePerPeopleCnt
                                    adult={adultCount}
                                    baby={babyCount}
                                    kids={kidsCount}
                                />
                            }
                            label={s("personnel")}
                        ></Info>
                        <Info
                            value={buyerMessage || ""}
                            label={s("bookingMemoLabel")}
                        ></Info>
                    </div>
                </Flex>
            </JDcard>
            <JDcard
                mb
                mode="border"
                head={
                    <CardHead
                        title={
                            <Flex between>
                                {s("payAmount")}
                                <span>
                                    <JDbutton
                                        onClick={() => {
                                            setReciptOpen(true);
                                        }}
                                        padding="small"
                                        size="small"
                                        br="square"
                                        mode="border"
                                    >
                                        {s("reciept")}
                                    </JDbutton>
                                </span>
                            </Flex>
                        }
                    />
                }
            >
                <Flex>
                    <Info
                        mr
                        value={s(paymethod as any)}
                        label={s("payMethod")}
                    />
                    <Info
                        mr
                        value={withWon(paidPrice || pendingPrice)}
                        label={s("sum")}
                    />
                    <Info
                        mr
                        hide={!bankTranferName}
                        value={bankTranferName || ""}
                        label={"입금자"}
                    />
                </Flex>
            </JDcard>

            {booking && (
                <BookingRecipt
                    setOpen={setReciptOpen}
                    isOpen={reciptOpen}
                    booking={booking}
                />
            )}
        </div>
    );
};
