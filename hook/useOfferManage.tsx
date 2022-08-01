import {
    isEmpty,
    Language,
    opFind,
    toast,
    useDayPicker,
    useInput,
    useSelect,
    Validater,
} from "@janda-com/front";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Red } from "../atom/shortCut/Short";
import { JDicon } from "../component/icons/Icons";
import { InfoBox } from "../component/infoBox/InfoBox";
import { ModalHead } from "../component/modalHead/ModalHead";
import { AppContext } from "../context/context";
import GuideContext from "../page/context";
import { Paths } from "../pages/index[depre]";
import { Foffer, TourStatus, WishTourInput } from "../types/api";
import { omitTypeName } from "../utils/omit";
import { omits } from "../utils/omits";
import { completeMsg } from "../utils/onCompletedMessage";
import { useMultiSelect } from "./useMultiSelect";
import { useOfferCreate, useOfferDelete, useOfferSend } from "./useOffer";
import { usePeopleCnt } from "./usePeopleCnt";

export const getOfferSummary = (offer: Foffer) => {
    const { me, isMaster, s } = useContext(AppContext);
    const isMyOffer = offer.offerId === me?._id;
    const deleteAb = isMaster || isMyOffer;
    return { isMyOffer, deleteAb };
};

export const useOfferManage = (defaultOffer?: Foffer) => {
    const { s } = useContext(AppContext);
    const router = useRouter();
    const {
        me,
        catOpMap,
        catMap,
        promptModalHook,
        confirmModalHook,
        travlerFormModalHook,
        languageOps,
    } = useContext(AppContext);
    const { tourModalHook, tourSearchModalHook } = useContext(GuideContext);
    const [createOffer] = useOfferCreate({
        onCompleted: ({ OfferCreate }) => {
            completeMsg(OfferCreate, s("customTourCreateCompleted"));
            router.push(Paths.myoffer);
        },
    });
    const [offerSend] = useOfferSend({
        onCompleteSucess: () => {
            toast.success(s("customTourRequestSucessed"));
        },
    });
    const [deleteMu] = useOfferDelete({});
    const [travlers, setTravlers] = useState(defaultOffer?.wishTour.travlers);
    const wishDateHook = useDayPicker(
        defaultOffer?.wishTour.startDate,
        defaultOffer?.wishTour.endDate
    );
    const { peopleCnt, setPeopleCnt } = usePeopleCnt({
        adult: defaultOffer?.wishTour.adultCnt || 0,
        baby: defaultOffer?.wishTour.babyCnt || 0,
        kids: defaultOffer?.wishTour.kidsCnt || 0,
    });
    const [price, setPrice] = useState(0);
    const contentHook = useInput(defaultOffer?.wishTour.contents || "");
    const memoHook = useInput(defaultOffer?.wishTour.wishMemeo || "");
    const regionSelectHook = useSelect(
        opFind(defaultOffer?.wishTour.region, catOpMap?.REIGION || [], true),
        catOpMap?.REIGION
    );

    const [travelTiem, setTravelTime] = useState(
        defaultOffer?.wishTour.travelStartTime || ""
    );
    const reigionDetail = useInput(defaultOffer?.wishTour.regionDetail || "");
    const categoryHook = useSelect(
        opFind(
            defaultOffer?.wishTour.category?._id,
            catOpMap?.ITEM || [],
            true
        ),
        catOpMap?.ITEM
    );
    const defaultCategoryMini = defaultOffer?.wishTour?.categoryMini || [];
    const categoryMiniHook = useMultiSelect(
        defaultCategoryMini?.map((mini) => mini._id) || [],
        catOpMap?.ITEM_SMALL || []
    );
    const customLanguage = useInput("");
    const langHook = useSelect(
        opFind(defaultOffer?.wishTour.lang, catOpMap?.ITEM || [], true),
        [...languageOps, { label: "직접입력", value: "SELF" }]
    );
    const isSelfWriteLanguage = langHook.selectedOption?.value === "SELF";

    const { validate } = new Validater([
        {
            value: !!price,
            failMsg: s("enterPricePls"),
        },
    ]);

    const region = catMap?.REIGION.find(
        (region) => region._id === regionSelectHook.selectedOption?.value
    );

    const category = catMap?.ITEM.find(
        (icat) => icat._id === categoryHook.selectedOption?.value
    );

    const nextData: WishTourInput = {
        region,
        category,
        adultCnt: peopleCnt.adult,
        babyCnt: peopleCnt.baby,
        kidsCnt: peopleCnt.kids,
        contents: contentHook.value,
        price,
        lang: isSelfWriteLanguage ? undefined : langHook.selectedOption?.value,
        money: price,
        regionDetail: reigionDetail.value,
        travlers,
        totalCnt: peopleCnt.kids + peopleCnt.baby + peopleCnt.adult,
        endDate: wishDateHook.to || wishDateHook.from,
        startDate: wishDateHook.from,
        travelStartTime: travelTiem,
        wishMemeo: memoHook.value,
        categoryMini: catMap?.ITEM_SMALL.filter((itemSmall) =>
            categoryMiniHook.selectedValues?.includes(itemSmall._id)
        ),
        langCustom: customLanguage.value || "",
    };

    const handleAddTravelrs = () => {
        travlerFormModalHook.openModal({
            defaultTravlersInput: travlers || [],
            onSubmit: (travlers) => {
                setTravlers(omits(travlers) as any);
                nextData.travlers = omits(travlers);
                createOffer({
                    variables: {
                        input: omitTypeName(nextData),
                    },
                });
            },
        });
    };

    const handleDelete = (OfferId: string) => {
        confirmModalHook.openModal({
            title: s("reallyWantToDeleteCustomTour"),
            content: <InfoBox>{s("reallyWantToDeleteCustomTour")}</InfoBox>,
            onContinue: () => {
                deleteMu({
                    variables: {
                        OfferId,
                    },
                });
            },
        });
    };

    const handleOfferSend = (OfferId: string) => {
        tourSearchModalHook.openModal({
            filter: {
                tourStatus__eq: TourStatus.READY,
                startDate__gte: new Date(),
            },
            head: {
                element: (
                    <ModalHead
                        title="발신할 투어 회차를 선택해주세요."
                        description="아래 회차 목록에서 원하는 회차를 찾으시어 선택하시면 문자에 해당 투어의 예약링크를 담아 보내드립니다"
                    />
                ),
            },
            onSubmit: (tour) => {
                tourSearchModalHook.closeModal();
                promptModalHook.openModal({
                    callBack: (message) => {
                        promptModalHook.closeModal();
                        offerSend({
                            variables: {
                                OfferId,
                                TourId: tour._id,
                                message,
                            },
                        });
                    },
                    messageLabel: "전달 메세지(100자제한)",
                    inputProps: {
                        placeholder:
                            "문자 포함 메세지 (제안자의 언어로 부탁드립니다.)",
                    },
                    titleElement: (
                        <ModalHead
                            title={"투어 제안을 사용자에게 보냅니다"}
                            description={`투어 [${tour.code}] ${tour.productInfomation.title?.ko}의 예약링크를 아래 메세지를 담아서 보냅니다`}
                        />
                    ),
                });
            },
        });
    };

    const handleCreate = () => {
        if (isEmpty(travlers)) {
            handleAddTravelrs();
        } else {
            createOffer({
                variables: {
                    input: omitTypeName(nextData),
                },
            });
        }
    };

    return {
        price,
        setPrice,
        memoHook,
        contentHook,
        regionSelectHook,
        travelTiem,
        setTravelTime,
        reigionDetail,
        categoryHook,
        langHook,
        nextData,
        peopleCnt,
        setPeopleCnt,
        handleDelete,
        handleOfferSend,
        categoryMiniHook,
        travlerFormModalHook,
        isSelfWriteLanguage,
        customLanguage,
        wishDateHook,
        travlers,
        handleCreate,
        handleAddTravelrs,
    };
};
