import {
    Bold,
    getAllFromUrl,
    JDbutton,
    JDcard,
    JDcontainer,
    Small,
    InputText,
} from "@janda-com/front";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { BankInfoInput } from "../../component/bankComponents/BankInfoInput";
import { PaymethodRadios } from "../../component/PaymethodRadio";
import { PolicyCheckers } from "../../component/policyViewer/PolicyChecker";
import { DetailPriceViewer } from "../../component/productDetailComponents/DetailPriceViwer";
import { TourViewCard } from "../../component/productViewCard/TourViewCard";
import { Head } from "../../component/ProfileForm/ProfileForm";
import { TravelersForm } from "../../component/traveler/TravlerForm";
import { AppContext } from "../../context/context";
import { useBookingWrite } from "../../hook/useBookingWrite";
import { useTourFindById } from "../../hook/useTour";
import { PaypalButtonLoader } from "../../paypal/PaypalButtonLoader";
import { payMethodKr } from "../../types/const";
import { withWon } from "../../utils/formatter";
import { BookerInfoBlock } from "../booking/components/bookingModal/BookerInfoBlock";

export interface IBuyPageQuery {
    tourId?: string;
    adult?: string;
    kids?: string;
    baby?: string;
}

export const getPayPageQuery = () => {
    return getAllFromUrl() as IBuyPageQuery;
};

interface IProp {}

export const Pay: React.FC<IProp> = () => {
    if (typeof window === "undefined") return null;
    const { adult, baby, kids, tourId } = getPayPageQuery();
    const bookingWriteInputs = useBookingWrite({
        babyCount: parseInt(baby || "0"),
        adultCount: parseInt(adult || "0"),
        kidsCount: parseInt(kids || "0"),
    });
    const { item: tour } = useTourFindById(tourId);

    useEffect(() => {
        if (tour) bookingWriteInputs.tourHook[1](tour);
    }, [tour?._id]);

    if (!tour || !adult || !baby || !kids) return null;
    const { title } = tour.productInfomation;
    const { l, s } = useContext(AppContext);

    const {
        isPGpay,
        isPayPal,
        totalPrice,
        bookerContactHook,
        bookerEmailHook,
        bookerNameHook,
        handleCreate,
        handleDelete,
        handleUpdate,
        paymethodHook,
        niceAuthData,
        travlers,
        bankInfoHook,
        isBankPay,
        setTravlers,
        bookingCreatePolicy,
        bankTransferNameHook,
    } = bookingWriteInputs;

    return (
        <JDcontainer verticalPadding>
            <TourViewCard mb tour={tour} />
            <DetailPriceViewer
                tour={tour}
                peopleCnt={{
                    adult: parseInt(adult),
                    baby: parseInt(baby),
                    kids: parseInt(kids),
                }}
            />
            <BookerInfoBlock mb {...bookingWriteInputs} />
            <JDcard mb mode="border">
                <Bold>{s("travelerInfo")}</Bold>
                <Small mb>{s("bookerInfoDesc")}</Small>
                <TravelersForm
                    setTravlersInput={setTravlers}
                    travlersInput={travlers}
                />
            </JDcard>
            <JDcard mb mode="border">
                <Bold>{s("rule")}</Bold>
                <Small mb>{s("pleaseAgreeWithPolicies")}</Small>
                <PolicyCheckers {...bookingCreatePolicy} />
            </JDcard>
            <JDcard mb mode="border">
                <Bold mb>{s("payMethod")}</Bold>
                <div>
                    <PaymethodRadios
                        mb
                        selectedOption={{
                            label: payMethodKr[paymethodHook[0]!],
                            value: paymethodHook[0],
                        }}
                        onChange={(op) => {
                            paymethodHook[1](op.value);
                        }}
                    />
                    {isBankPay && (
                        <div>
                            <InputText
                                label="입금자명"
                                mb
                                require
                                onChange={(val) => {
                                    bankTransferNameHook[1](val);
                                }}
                                id="BankTranferNameInput"
                                value={bankTransferNameHook[0] || ""}
                            />
                            <Head
                                require
                                title={s("refundAccount")}
                                description={s("refundAccountDesc")}
                                mb
                            ></Head>
                            <BankInfoInput
                                bankInfo={bankInfoHook.nextBankInfo}
                                onChange={bankInfoHook.handleChange}
                            />
                        </div>
                    )}
                    {isPayPal && (
                        <PaypalButtonLoader
                            amount={totalPrice}
                            callBackApprove={handleCreate}
                        />
                    )}
                </div>
            </JDcard>
            <div
                style={{
                    display: isPGpay ? undefined : "none",
                }}
                id="payment-widget"
            ></div>
            <div id="agreement"></div>
            {/* <NiceElments
                {...getNiceProperty({
                    email: bookerEmailHook.value,
                    goodsName: l(title),
                    name: bookerNameHook.value,
                    phoneNumber: bookerContactHook.value,
                    niceAuthData: niceAuthData!,
                    paymethod: paymethodHook[0] || Paymethod.CARD,
                })}
                logo={location.origin + ITS_GUIDE_LOGO_LONG}
            /> */}

            <JDbutton
                br="square"
                hide={isPayPal}
                size="large"
                onClick={handleCreate}
                thema="primary"
                mode="flat"
            >
                {withWon(totalPrice)} {s("doPay")}
            </JDbutton>
        </JDcontainer>
    );
};

export default Pay;
