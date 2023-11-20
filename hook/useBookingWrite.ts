import { getFromUrl, useInput } from "@janda-com/front";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
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
    BookingInput,
    Fbooking,
    Ftour,
    Gender,
    Paymethod,
} from "../types/api";
import { isNicePayMethod } from "../utils/isNicePayMethod";
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

export type IUseBookingWrite = ReturnType<typeof useBookingWrite>;
export const useBookingWrite = (defaultBooking?: Partial<Fbooking>) => {
    const router = useRouter();
    const { locale } = router;
    const offerId = getFromUrl("offerId");
    const { me, catOpMap, catMap, mylangsOps, confirmModalHook } =
        useContext(GuideContext);
    const { s } = useContext(AppContext);
    const [createMu] = useBookingCreate({
        onCompleted: ({ BookingCreate }) => {
            const bookingId = BookingCreate.data?._id;
            if (BookingCreate.ok)
                if (isNCpay && BookingCreate.data?.niceAuthStr) {
                    openNicePayModal(BookingCreate);
                } else if (isPayPal && bookingId) {
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
    const bookerNameHook = useInput(defaultBooking?.buyerName || "");
    const bookerContactHook = useInput(defaultBooking?.buyerPhone || "");
    const bookerEmailHook = useInput(defaultBooking?.buyerEmail || "");
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
    const isNCpay = isNicePayMethod(nextData.paymethod as any);
    const isPayPal = nextData.paymethod === Paymethod.PAY_PAL;
    const paymethodSelected = isBankPay || isNCpay || isPayPal;

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
        isNCpay,
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
