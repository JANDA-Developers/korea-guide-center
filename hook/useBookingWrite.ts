import { getFromUrl, useInput } from "@janda-com/front";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { getPriceSummary } from "../component/productDetailComponents/DetailPriceViwer";
import { AppContext } from "../context/context";
import {
    nicePayAuthData,
    purchaseCreatePaymentInfoReader,
} from "../nice/getNiceProperty";
import GuideContext from "../page/context";
import { Paths } from "../pages/index[depre]";
import { marketingDefault } from "../policies/MarketingInformation";
import { PersonalInformation } from "../policies/PersonalInformation";
import { PersonalInformationHandle } from "../policies/PersonalInformationHandle";
import { DomesticTravelStandardTerms } from "../policies/TravelerInformation";
import {
    bookingCreate_BookingCreate,
    bookingCreate_BookingCreate_data,
    BookingInput,
    Fbooking,
    Ftour,
    Gender,
    Paymethod,
} from "../types/api";
import { isPgPayMethod } from "../utils/isPgPayMethod";
import { omits } from "../utils/omits";
import { Validater } from "../utils/Validater";
import { useBankInfo } from "./useBankInfo";
import {
    useBookingCreate,
    useBookingDelete,
    useBookingUpdate,
} from "./useBooking";
import { usePolicyCheckers } from "./usePolicyCheckers";
import { useSelectCounter } from "./useSelectCounter";
import { useTravlerInfo } from "./useTravlerInfo";
import {
    PaymentWidgetInstance,
    loadPaymentWidget,
    ANONYMOUS,
} from "@tosspayments/payment-widget-sdk";
import { SERVER_ORIGIN, SERVER_URI } from "../apollo/uri";
import { ifDev } from "../utils/dev/ifDev";
import { TOSS_ENV } from "../types/toss.env";

type Widget = any;
const useTossPaymentWidget = () => {
    const [widget, setWidget] = useState<null | PaymentWidgetInstance>(null);

    useEffect(() => {
        loadPaymentWidget(TOSS_ENV.TOSS_WIDGET_CLIENT_KEY, ANONYMOUS).then(
            (paymentWidget) => {
                console.log("@@@paymentWidget", paymentWidget);
                setWidget(paymentWidget);
            }
        );
    }, []);
    return widget;
};

const getMoneyChangeRate = async () => {
    const result = await fetch(SERVER_URI + "/money-change").then((r) =>
        r.text()
    );
    return parseFloat(result);
};

const getUSDfromKRW = (rate: number, krw: number) => {
    return Math.floor(krw / (rate / 100)) * 0.01;
};

export type IUseBookingWrite = ReturnType<typeof useBookingWrite>;
export const useBookingWrite = (defaultBooking?: Partial<Fbooking>) => {
    const router = useRouter();
    const { locale } = router;
    const PaymentWidget = useTossPaymentWidget();
    const offerId = getFromUrl("offerId");
    const { me, catOpMap, catMap, mylangsOps, confirmModalHook } =
        useContext(GuideContext);
    const { s, l } = useContext(AppContext);
    const isTossPay = getFromUrl("toss") === "1";
    const paymentMethodsWidgetRef = useRef<ReturnType<
        PaymentWidgetInstance["renderPaymentMethods"]
    > | null>(null);

    const isKo = locale === "ko";
    const requestTossPayment = async (
        booking: bookingCreate_BookingCreate_data
    ) => {
        try {
            console.log(
                "l?.(tour?.productInfomation?.title)",
                l(tour?.productInfomation?.title)
            );

            // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
            // @docs https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보

            const rate = await getMoneyChangeRate();

            const totalCnt =
                (adultCountHook.selectedOption?.value || 0) +
                (babyCountHook.selectedOption?.value || 0) +
                (kidCountHook.selectedOption?.value || 0);

            const paypalAdditionalObject = {
                products: [
                    {
                        name: tour?.productInfomation?.title?.en,
                        quantity: totalCnt,
                        unitAmount: getUSDfromKRW(rate, totalPrice),
                        currency: "USD",
                        description: "Travel Guide, By Korea guide center Inc.",
                    },
                ],
                shipping: {
                    fullName: bookerNameHook?.value,
                    address: {
                        country: me?.countryCode || "US",
                        line1: "This is Travel Guide, By Korea guide center Inc.",
                        line2: "This is Travel Guide, By Korea guide center Inc.",
                        area1: "This is Travel Guide, By Korea guide center Inc.",
                        area2: "This is Travel Guide, By Korea guide center Inc.",
                        postalCode: "16328",
                    },
                },
                paymentMethodOptions: {
                    // PayPal에서 요구하는 추가 파라미터
                    paypal: {
                        setTransactionContext: {
                            // PayPal STC 파라미터 예시 (구매자의 로그인 정보)
                            sender_account_id: me?._id || "kimToss01",
                            sender_first_name: bookerEmailHook?.value || "Toss",
                            sender_last_name: bookerNameHook?.value || "Kim",
                            sender_email:
                                bookerEmailHook?.value || "toss@sample.com",
                            sender_phone:
                                bookerContactHook?.value || "(1) 562 254 5591",
                            sender_country_code: me?.countryCode || "US",
                            sender_create_date: "2012-12-09T 19:14:55.277-0:00",
                        },
                    },
                },
            };

            const result = await PaymentWidget?.requestPayment({
                orderId: booking._id,
                orderName: l(tour?.productInfomation?.title) || "travel",
                customerName: bookerNameHook?.value,
                customerEmail: bookerEmailHook?.value,
                customerMobilePhone: bookerContactHook?.value,
                successUrl: `${SERVER_ORIGIN}/toss-payment/sucess${
                    locale ? "/" + locale : ""
                }`,
                failUrl: `${SERVER_ORIGIN}/toss-payment/failure${
                    locale ? "/" + locale : ""
                }`,
                useInternationalCardOnly: !isKo,
                ...(isPayPal ? paypalAdditionalObject : {}),
            }).catch(function (error) {
                if (error.code === "USER_CANCEL") {
                    alert("결제창이 닫혔습니다.");
                } else if (error.code === "INVALID_CARD_COMPANY") {
                    alert("유효하지 않은 카드 입니다.");
                }
            });
            console.log("requestPayment result", result);
        } catch (error) {
            // 에러 처리하기
            console.error("RequestPaymentError", error);
        }
    };

    const tossUiHolder = document.getElementById("payment-widget");

    const [createMu] = useBookingCreate({
        onCompleted: ({ BookingCreate }) => {
            const booking = BookingCreate.data;
            const bookingId = BookingCreate.data?._id;
            if (!booking || !BookingCreate.data) return;

            if (isPGpay && BookingCreate.data?.niceAuthStr) {
                requestTossPayment(booking);
                // openNicePayModal(BookingCreate);
            } else if (isPayPal && bookingId) {
                // requestTossPayment(booking);
                router.push(Paths.paySucess + `?bookingId=${bookingId}`);
            } else if (isBankPay) {
                router.push(Paths.paySucess + `?bookingId=${bookingId}`);
            }
        },
    });
    const bookingCreatePolicy = usePolicyCheckers({
        config: [
            {
                Policy: DomesticTravelStandardTerms,
                label: s("travelerPolicy"),
                require: true,
            },
            {
                Policy: PersonalInformation,
                label: s("footer_privacy_policy"),
                require: true,
            },
            {
                Policy: PersonalInformationHandle,
                label: s("useInfo"),
                require: true,
            },
            {
                Policy: marketingDefault,
                label: s("marketingInfo"),
                require: true,
            },
        ],
    });
    const [updateMu] = useBookingUpdate();
    const [deleteMu] = useBookingDelete();
    const [niceAuthData, setNiceAuthData] = useState<nicePayAuthData>();

    const tourHook = useState<Ftour>();
    const { setTravlers, travlers, travelrValidateNodes, travlerValidate } =
        useTravlerInfo(defaultBooking?.travlers || []);

    const bankInfoHook = useBankInfo(
        defaultBooking?.refundBankInfo || undefined
    );
    const paymethodHook = useState(defaultBooking?.paymethod);
    const adultCountHook = useSelectCounter(defaultBooking?.adultCount);
    const babyCountHook = useSelectCounter(defaultBooking?.babyCount);
    const kidCountHook = useSelectCounter(defaultBooking?.kidsCount);
    const bookerNameHook = useInput(
        defaultBooking?.buyerName || ifDev("테스트") || ""
    );
    const bookerContactHook = useInput(
        defaultBooking?.buyerPhone || ifDev("01052374492") || ""
    );
    const bookerEmailHook = useInput(
        defaultBooking?.buyerEmail || ifDev("colton950901@gmail.com") || ""
    );
    const bookerGenderHook = useState<Gender>(
        defaultBooking?.buyerGender || Gender.MALE
    );
    const bankTransferNameHook = useState(
        defaultBooking?.bankTranferName || me?.name || ""
    );
    const refundMethodHook = useState(defaultBooking?.refundMethod || "");
    const messageHook = useInput(defaultBooking?.buyerMessage || "");
    const priceHook = useState(defaultBooking?.paidPrice || 0);

    const adminMemoHook = useInput(defaultBooking?.adminMemo || "");
    const guideMemoHook = useInput(defaultBooking?.guideMemo || "");
    const tour = tourHook[0];

    const nextData: BookingInput = {
        refundBankInfo: omits(bankInfoHook.nextBankInfo),
        paidPrice: priceHook[0],
        adminMemo: adminMemoHook.value,
        adultCount: adultCountHook.selectedOption?.value,
        babyCount: babyCountHook.selectedOption?.value,
        kidsCount: kidCountHook.selectedOption?.value,
        buyerEmail: bookerEmailHook.value,
        buyerGender: bookerGenderHook[0],
        buyerMessage: messageHook.value,
        buyerName: bookerNameHook.value,
        buyerPhone: bookerContactHook.value,
        guideMemo: guideMemoHook.value,
        paymethod: paymethodHook[0],
        refundMethod: refundMethodHook[0],
        travlers: omits(travlers),
        bankTranferName: bankTransferNameHook[0],
        locale,
    };

    const isBankPay = nextData.paymethod === Paymethod.BANK_TRANSFER;
    const isPGpay = isPgPayMethod(nextData.paymethod as any);
    const isPayPal = nextData.paymethod === Paymethod.PAY_PAL;
    const paymethodSelected = isBankPay || isPGpay || isPayPal;

    const { validate: bookingValidate } = new Validater([
        ...bookingCreatePolicy.policyCheckNodes,
        {
            value: !isBankPay || bankTransferNameHook[0],
            id: "BankTranferNameInput",
            failMsg: "입금자명을 입력 해주세요.",
        },
        {
            value: nextData.buyerName,
            id: "BuyerNameInput",
            failMsg: "성함을 입력 해주세요.",
        },
        {
            value: nextData.buyerPhone,
            id: "BuyerContactInput",
            failMsg: "핸드폰 번호를 입력 해주세요.",
        },
        {
            value: nextData.buyerEmail,
            id: "BuyerEmailInput",
            failMsg: "이메일 정보를 입력 해주세요.",
        },
        {
            value: (nextData.adultCount || 0) + (nextData.kidsCount || 0) > 0,
            failMsg: "선택인원에 문제가 있습니다",
        },
        {
            value: paymethodSelected,
            failMsg: "결제방법을 선택 해주세요.",
        },
        ...travelrValidateNodes,
        ...(isBankPay ? bankInfoHook.bankInfoNodes : []),
    ]);

    const { totalPrice } = getPriceSummary(
        {
            adult: nextData.adultCount || 0,
            baby: nextData.babyCount || 0,
            kids: nextData.kidsCount || 0,
        },
        tour
    );

    nextData.pendingPrice = totalPrice;

    useEffect(() => {
        const paymentMethodsWidget = paymentMethodsWidgetRef.current;

        if (paymentMethodsWidget == null) {
            return;
        }
        // ------ 금액 업데이트 ------
        // @docs https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
        paymentMethodsWidget.updateAmount(priceHook[0]);
    }, [totalPrice]);

    useEffect(() => {
        if (!tossUiHolder) return;
        if (PaymentWidget == null) {
            return;
        }

        // ------  결제위젯 렌더링 ------
        // @docs https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션

        getMoneyChangeRate().then((rate) => {
            const paypalParameter = {
                value: getUSDfromKRW(rate, totalPrice),
                currency: "USD" as any, // USD 통화만 지원
                country: me?.countryCode || "US", // ISO-3166의 두 자리 국가 코드 모두 지원
            };

            //       <JDselect
            //       id="CountrySelecter"
            //       autoComplete="off"
            //       mb
            //       options={counturyOps}
            //       onChange={(cc) => {
            //           counturyCodeHook[1](cc.value);
            //       }}
            //       selectedOption={opFind(countryCode, counturyOps)}
            //       label={s("country")}
            //   />
            // 렌더링하고 싶은 결제 UI의 variantKey
            // 아래 variantKey는 문서용 테스트키와 연동되어 있습니다. 멀티 UI를 직접 만들고 싶다면 계약이 필요해요.
            // https://docs.tosspayments.com/guides/payment-widget/admin#멀티-결제-ui

            const paymentMethodsWidget = PaymentWidget.renderPaymentMethods(
                "#payment-widget",
                isPayPal ? paypalParameter : { value: totalPrice },
                isPayPal ? { variantKey: "PAYPAL" } : undefined
            );
            paymentMethodsWidgetRef.current = paymentMethodsWidget;
        });

        // ------  이용약관 렌더링 ------
        // @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자
        // PaymentWidget.renderAgreement("#agreement", {
        //     variantKey: "AGREEMENT",
        // });
    }, [PaymentWidget, tossUiHolder, isPayPal]);

    const openNicePayModal = (data: Required<bookingCreate_BookingCreate>) => {
        const result = purchaseCreatePaymentInfoReader(
            data.data?.niceAuthStr!,
            data.data!._id
        );
        setNiceAuthData(result);
        setTimeout(() => {
            window.nicePay();
        }, 100);
    };

    const handleCreate = () => {
        if (bookingValidate())
            createMu({
                variables: {
                    tourId: tour?._id,
                    input: nextData,
                },
            });
    };

    const handleUpdate = () => {
        updateMu({
            variables: {
                BookingId: defaultBooking?._id,
                input: nextData,
            },
        });
    };

    const handleDelete = () => {
        const remove = () => {
            deleteMu({
                variables: {
                    BookingId: defaultBooking?._id,
                },
            });
        };
        confirmModalHook?.openModal({
            title: "정말로 예약을 삭제하시겠습니까?",
            content: `예약 [${defaultBooking?.code}]를 삭제합니다`,
            onContinue: remove,
        });
    };

    return {
        isPGpay,
        isPayPal,

        isBankPay,
        tourHook,
        paymethodHook,
        adultCountHook,
        babyCountHook,
        kidCountHook,
        bookerNameHook,
        bookerContactHook,
        bookerEmailHook,
        bookerGenderHook,
        refundMethodHook,
        messageHook,
        travelrValidateNodes,
        travlerValidate,
        priceHook,
        bankInfoHook,
        totalPrice,
        adminMemoHook,
        guideMemoHook,
        handleDelete,
        tour,
        nextData,
        handleCreate,
        handleUpdate,
        niceAuthData,
        travlers,
        setTravlers,
        bookingValidate,
        bookingCreatePolicy,
        bankTransferNameHook,
    };
};
