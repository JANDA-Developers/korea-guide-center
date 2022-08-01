import { useQuery } from "@apollo/client";
import {
    JDbutton,
    JDcard,
    JDcontainer,
    JDcounter,
    JDselect,
    InputText,
    useDayPicker,
    isLast,
    Mb,
    Flex,
    JDalign,
    useModal,
    JDlabel,
    Bold,
    Mr,
    Tiny,
    JDswitch,
    toast,
    HOURS_SELECT_OP,
    opFind,
    getFromUrl,
    JDcheckBox,
} from "@janda-com/front";
import { CardProps } from "@janda-com/front/dist/components/cards/Card";
import dayjs from "dayjs";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { PRODUCT_FIND_BY_ID } from "../../apollo/gql/product";
import JDdayPicker from "../../atom/dayPicker/DayPicker";
import { Red } from "../../atom/shortCut/Short";
import { BackStepBar } from "../../component/backstepBar/BackstepBar";
import { GlobalInputModal } from "../../component/GlobalInput/GlobalInputModal";
import Header from "../../component/header/Header";
import { RoundRadioBtnWrap } from "../../component/iconRadioBtn/IconRadioBtn";
import { JDicon } from "../../component/icons/Icons";
import ImageCropModal, {
    IImageCropModalInfo,
} from "../../component/imageCropper/ImageCropperModal";
import { InputWithGlobal } from "../../component/InputWithGlobal/InputWithGlobal";
import { CardHead } from "../../component/modalHead/ModalHead";
import { MultiFileInput } from "../../component/multiFileInput/MultiFileInput";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import { PhotoGrider } from "../../component/photoGrider.tsx/PhotoGrider";
import { Head } from "../../component/ProfileForm/ProfileForm";
import { ProductTypeBadges } from "../../component/statusBadges/StatusBadges";
import { StepBox } from "../../component/stepBox/StepBox";
import { SubPlanForms } from "../../component/subPlan/SubPlanForms";
import { Video } from "../../component/video/Video";
import JDsearchGoogleMap from "../../component/googleMap/SearchGoogleMap";
import { AppContext } from "../../context/context";
import { useGlobalModal } from "../../hook/useGlobalModal";
import {
    useProductCreate,
    useProductFindById,
    useProductUpdate,
} from "../../hook/useProduct";
import { useProductWrite } from "../../hook/useProductWrite";
import {
    useTourCreate,
    useTourDelete,
    useTourUpdate,
} from "../../hook/useTour";
import { useUpdateComponent } from "../../hook/useUpdateComponent";
import {
    Fproduct,
    Ftour,
    LANGUAGES,
    productFindById,
    productFindByIdVariables,
    ProductStatus,
    ProductType,
} from "../../types/api";
import { MINUTES_SELECT_OP, START_TIME_TYPE_OPS } from "../../types/const";
import { LanguagesOps, rangeDayKr } from "../../utils/enumToKr";
import { booleanToNum } from "../../utils/hack";
import isEmpty from "../../utils/isEmpty";
import { GuidePath } from "../GuideRouter";
import { getTourSummary } from "../tour/components/TourTable";
import { FromDateToDate } from "./components/FromDateToDate";
import { RoundsViewer } from "./components/RoundViewer";
import {
    IProdcutPreviewModalInfo,
    ProdcutPreviewModal,
} from "./components/ProductDetailPreviewModal";

export const getEveryTourDate = (
    tourStartDates: Date[],
    range: number,
    lastDateInclude = true
) => {
    return (
        tourStartDates?.flatMap((td) => {
            const tourRangeDays = new Array(range + (lastDateInclude ? 1 : 0))
                .fill(null)
                .map((_, i) => {
                    return dayjs(td).add(i, "day").toDate();
                });

            return tourRangeDays;
        }) || []
    );
};

interface ITourDetailProp {
    tour?: Ftour;
    product?: Fproduct;
    step?: string;
    mode?: "tourUpdate" | "addRound";
    updateComponent: any;
    getData?: (pid?: string) => void;
}

const steps = [
    "language",
    "title",
    "category",
    "region",
    "description",
    "price",
    "condition",
    "photo",
    "startDates",
];

export type TMode = "tourUpdate" | "addRound";

export const ProductDetail: React.FC<ITourDetailProp> = ({
    tour: defaultTour,
    product,
    step: startStep,
    getData,
    mode: defaultMode,
    updateComponent,
}) => {
    console.log({ product });
    const urlMode = getFromUrl("mode");
    const context = useContext(AppContext);
    const { confirmModalHook } = context;
    const mode = urlMode || defaultMode;
    const isTourUpdate = mode === "tourUpdate";
    const isAddRoundMode = mode === "addRound";

    const isReady = product?.status === ProductStatus.READY;
    const isCreate = !product || isReady;
    const history = useHistory();
    const startDatePicker = useDayPicker(
        defaultTour?.startDate,
        defaultTour?.startDate
    );
    const dummyDayPickerHook = useDayPicker(null, null);
    const [_dates, setDates] = useState<Date[]>([]);
    const dates = _dates.sort((a, b) => a.valueOf() - b.valueOf());

    const [step, setStep] = useState<number>(parseInt(startStep || "0"));
    const stepStr = steps[step];
    const [tourDelete] = useTourDelete({
        skipMessage: true,
        onCompleteSucess: () => {
            history.push(GuidePath.tour);
        },
    });
    const [tourCreateMu] = useTourCreate({
        skipMessage: true,
        onCompleteSucess: () => {
            toast.success("투어가 성공적으로 등록 되었습니다");
            history.push(GuidePath.product);
        },
    });
    const [tourUpdateMu] = useTourUpdate({
        skipMessage: true,
        onCompleteSucess: () => {
            history.push(GuidePath.tour);
        },
    });

    const [createMu] = useProductCreate({
        onCompleted: (result) => {
            const newProductId = result.ProductCreate.data?._id;
            if (newProductId) {
                history.push(
                    GuidePath.productDetail + "/" + newProductId + "/1"
                );
                getData?.(newProductId);
                updateComponent();
            }
        },
    });

    const handleUpdateTour = () => {
        if (!defaultTour) throw Error("product must exsit");
        return tourUpdateMu({
            variables: {
                TourId: defaultTour._id,
                input: {
                    startDate: startDatePicker.from,
                },
                producInput: nextData,
            },
        });
    };

    const [updateMu] = useProductUpdate({
        onCompleted: () => {},
    });
    const [mobileOpen, setMobileOpen] = useState(false);
    const mapHook = useModal();
    const productPreviewModalHook = useModal<IProdcutPreviewModalInfo>();
    const cropperModalHook = useModal<IImageCropModalInfo>();
    const globalModalHook = useGlobalModal();
    const {
        type,
        setType,
        rangeDay,
        setRangeDay,
        addressDetailHook,
        adultPriceHook,
        babyPriceHook,
        categoryHook,
        images,
        videos,
        setVideos,
        thumbNailVide,
        setThumNailVideo,
        setImages,
        kidsPriceHook,
        languagesHook,
        selectLangOps,
        priviateHook,
        maxMemberHook,
        minMemberHook,
        nextData,
        titleHook,
        regionSelectHook,
        shortDecsriptionhook,
        largeDescriptionHook,
        startPointHook,
        startTimeHook,
        importantNoticehook,
        startTimeHourHook,
        amPmHook,
        isKpopCulture,
        isLocalTour,
        extraInfoHook,
        startTimeMinHook,
        includeHook,
        marker,
        setMarker,
        unIncludeHook,
        categoryMiniHook,
        setSubplanes,
        subPlanes,
        useMapHook,
        adultOnlyHook,
    } = useProductWrite(product);
    const adultOnly = nextData.adultOnly;

    const handleCreate = () => {
        createMu({
            variables: {
                input: nextData,
            },
        });
    };

    const update = () => {
        if (!product) throw Error("product must exsit");
        return updateMu({
            variables: {
                ProductId: product._id,
                input: nextData,
            },
        });
    };

    const handleTypeToggle = (_type: ProductType) => () => {
        if (type.includes(_type)) {
            setType([...type.filter((t) => t !== _type)]);
        } else {
            setType([...type, _type]);
        }
    };

    const handlePreview = () => {
        productPreviewModalHook.openModal({
            pid: product?._id,
            product: {
                ...(nextData as Partial<Fproduct>),
            },
        });
    };

    const handleSaveAndNext = () => {
        update().then(() => {
            setStep(step + 1);
        });
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    const handleFinish = () => {
        if (!product) return;

        const unClearStep = stepArray.findIndex((step) => !step.clear);
        if (unClearStep !== -1) {
            toast("완료되지 않은 단계를 처리 해주세요.");
            setStep(unClearStep);
            return;
        }

        if (isTourUpdate) handleUpdateTour();
        else {
            update().then(() => {
                tourCreateMu({
                    variables: {
                        productId: product?._id,
                        input: dates.map((date) => ({ startDate: date })),
                    },
                });
            });
        }
    };

    const handleSaveAndBack = () => {
        update().then(() => {
            history.push(GuidePath.product);
        });
    };

    const handleDeleteTour = () => {
        confirmModalHook.openModal({
            title: `정말로 삭제하시겠습니까?`,
            content: (
                <Red>
                    <JDicon icon="triWarn" /> 예약된 내용이 있다면 해당 회차를
                    삭제하실 수 없습니다.
                </Red>
            ),
            onContinue: () => {
                tourDelete({
                    variables: {
                        TourId: defaultTour?._id,
                    },
                });
            },
        });
    };

    const commonSectionWrapProp: CardProps = {
        mr: true,
        mb: true,
        className: "productConfig__stepCard",
    };

    const eachStepCardProp: CardProps[] = [
        {
            ...commonSectionWrapProp,
            id: "TourStep1",
            hide: isTourUpdate || stepStr !== "language",
            head: (
                <CardHead
                    title="지원 언어 선택하기"
                    description="사용하실 언어를 선택해주세요. 여러 언어를 선택하시면 진행 과정에서 모든 언어에 대해서 입력하게 됩니다"
                />
            ),
        },
        {
            ...commonSectionWrapProp,
            id: "TourStep2",
            hide: !isTourUpdate && stepStr !== "category",
            head: (
                <CardHead
                    title="상품 카테고리 선택하기"
                    description="작성하시는 상품에 가장가까운 카테고리를 선택해주세요."
                />
            ),
        },
        {
            ...commonSectionWrapProp,
            id: "TourStep3",
            hide: !isTourUpdate && stepStr !== "title",
            head: (
                <CardHead
                    title="투어제목 입력하기"
                    description="투어의 제목을 입력해주세요. 10글자 ~ 20글자가 가장 적합합니다"
                />
            ),
        },
        {
            ...commonSectionWrapProp,
            id: "TourStep4",
            hide: !isTourUpdate && stepStr !== "region",
            head: (
                <CardHead
                    title="지역 선택하기"
                    description="투어 지역을 선택해주세요. 여러곳을 방문하실 예정이라면 대표지역 하나와 자세한 지역에 지역들을 순차적으로 적어주세요."
                />
            ),
        },

        {
            ...commonSectionWrapProp,
            id: "TourStep5",
            hide: !isTourUpdate && stepStr !== "description",
            head: (
                <CardHead
                    title="투어내용 작성하기"
                    description="투어의 내용을 작성해주세요. 투어내용은 100글자 ~ 200글자 사이가 적합합니다"
                />
            ),
        },
        {
            ...commonSectionWrapProp,
            id: "TourStep6",
            hide: !isTourUpdate && stepStr !== "price",
            head: (
                <CardHead
                    title="투어가격 지정하기"
                    description="연령별 가격을 지정해주세요. 가격은 원화단위로 측정됩니다"
                />
            ),
        },
        {
            ...commonSectionWrapProp,
            id: "TourStep7",
            hide: !isTourUpdate && stepStr !== "condition",
            head: (
                <CardHead
                    title="투어조건 작성하기"
                    description="최소인원 미달시 수수료없이 투어가 취소됩니다. 최대인원 이상은 코리아가이드 연락을 통해서 예약이 진행됩니다"
                />
            ),
        },
        {
            ...commonSectionWrapProp,
            id: "TourStep8",
            hide: !isTourUpdate && stepStr !== "photo",
            head: (
                <CardHead
                    title="투어 사진올리기"
                    description="투어 사진을 올려주세요 첫번쨰 사진은 대표사진이 됩니다. 사진대신에 동영상을 사용해도 좋습니다. 동영상의 경우에 크기를 잘 조절해 주시길 바랍니다. (가로가 넓은 사진이 좋습니다. 비율 16 * 9)"
                />
            ),
        },
        {
            ...commonSectionWrapProp,
            id: "TourStep9",
            className: `${commonSectionWrapProp.className} productConfig__stepCard--datePick`,
            hide: !isTourUpdate && stepStr !== "startDates",
            head: (
                <CardHead
                    title={
                        isTourUpdate ? "투어날짜 변경하기" : "투어날짜 선택하기"
                    }
                    description={
                        isTourUpdate ? (
                            <div>변경하실 투어일을 선택 해주세요.</div>
                        ) : (
                            <div>
                                투어를 진행할 날짜들을 선택합니다. 먼저 투어가
                                몇박인지 선택한후 달령에 출발일을{" "}
                                <Red component="span">복수선택</Red> 합니다.
                            </div>
                        )
                    }
                />
            ),
        },
    ];

    useEffect(() => {
        if (isAddRoundMode) {
            setStep(eachStepCardProp.length - 1);
        }
    }, []);

    const everyTourDates = getEveryTourDate(product?.tourDates || [], rangeDay);
    const processingTourDates = getEveryTourDate(dates, rangeDay);
    const fullDates = [...processingTourDates, ...everyTourDates];

    const everyTourDatesDisable = getEveryTourDate(
        product?.tourDates || [],
        rangeDay,
        false
    );
    const processingTourDatesDisable = getEveryTourDate(dates, rangeDay, false);
    const fullDatesDisable = [
        ...everyTourDatesDisable,
        ...processingTourDatesDisable,
    ].filter(
        (date) => !dates.find((_date) => dayjs(_date).isSame(date, "date"))
    );

    const handleStepClick = (index: number) => () => {
        const target = document.getElementById("TourStep" + (index + 1));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
        setStep(index);
    };

    const stepArray = [
        {
            title: "언어",
            onClick: handleStepClick(0),
            clear: languagesHook[0].length > 0,
            skip: isTourUpdate,
        },
        {
            title: "제목",
            onClick: handleStepClick(1),
            clear: !!nextData.title?.ko,
        },
        {
            title: "카테고리",
            onClick: handleStepClick(2),
            clear: !!nextData.category,
        },
        {
            title: "지역",
            onClick: handleStepClick(3),
            clear: !!nextData.region,
        },
        {
            title: "소개",
            onClick: handleStepClick(4),
            clear: !!nextData.shortDecsription?.ko,
        },
        {
            title: "가격",
            onClick: handleStepClick(5),
            clear: !!nextData.priceAdult,
        },
        {
            title: "조건",
            onClick: handleStepClick(6),
            clear: !!nextData.maxMember,
        },
        {
            title: "사진",
            onClick: handleStepClick(7),
            clear: !!nextData.images?.length,
        },
        {
            title: "날짜",
            onClick: handleStepClick(8),
            clear: !!fullDates.length || isTourUpdate,
        },
    ].filter((node) => node.skip !== true);

    const handleDelete = () => {};

    const { bookingCnt = 0, updateAb: tourUpdateAb = false } = defaultTour
        ? getTourSummary(context, defaultTour)
        : {};

    const sortedRangeDays = [...(product?.tourDates || []), ...dates].sort(
        (a, b) => a.valueOf() - b.valueOf()
    );

    return (
        <div
            className={`productConfig  ${
                isAddRoundMode ? "productConfig--addRoundMode" : ""
            }`}
        >
            <JDcontainer verticalPadding>
                {!isTourUpdate ? (
                    <PageHeader
                        pageName="투어작성"
                        description={"나만의 투어를 만들어보세요."}
                        title={"코리아가이드에 등록될 투어를 작성합니다"}
                    />
                ) : (
                    <PageHeader
                        pageName={
                            isAddRoundMode
                                ? "투어 회차 추가하기"
                                : "투어 수정하기"
                        }
                        description={
                            isAddRoundMode ? (
                                <div>
                                    해당 회차들을 수정합니다. 회차를 삭제/날짜
                                    이동하시려면 "회차목록"으로 이동해주세요.
                                </div>
                            ) : (
                                <div>
                                    {`회차[${defaultTour?.code}]에 대해서 수정합니다. 다른 회차들에게 영향이 가지 않습니다`}
                                </div>
                            )
                        }
                        title={
                            bookingCnt ? (
                                <Red>
                                    해당 회차에 예약이{bookingCnt}건 있습니다.
                                    회차를 수정하실려면 예약이 없거나, 모두
                                    취소하여야 합니다.
                                </Red>
                            ) : (
                                "코리아가이드에 등록된 투어 회차를 수정합니다"
                            )
                        }
                    />
                )}
                <Flex oneone>
                    <BackStepBar
                        className="productConfig__mbStepBtn"
                        go={GuidePath.product}
                        mode="border"
                        mb
                        label="투어목록"
                    />
                </Flex>
                <Flex className="productConfig__body">
                    <JDalign
                        className="productConfig__bodyIn"
                        style={{ flex: 1 }}
                    >
                        <JDcard {...eachStepCardProp[0]}>
                            <JDswitch
                                mb="tiny"
                                {...priviateHook}
                                label="상품 숨기기"
                            />
                            <Tiny mb color="grey3">
                                ※비공개 상품을 등록하면 상품이 홈페이지에
                                노출되지 않습니다.
                            </Tiny>
                            <JDselect
                                mb="tiny"
                                isMulti
                                onChanges={(ops) => {
                                    if (
                                        !ops.find(
                                            (op) => op.value === LANGUAGES.ko
                                        )
                                    ) {
                                        ops.push(
                                            LanguagesOps.find(
                                                (op) =>
                                                    op.value === LANGUAGES.ko
                                            )!
                                        );
                                    }
                                    languagesHook[1](
                                        ops?.map((op) => op.value) || []
                                    );
                                }}
                                selectedOptions={selectLangOps}
                                options={LanguagesOps}
                                label={
                                    <span>
                                        언어 선택{" "}
                                        <Red component="span">(한국어필수)</Red>
                                    </span>
                                }
                            />
                            <Tiny color="grey3">
                                지원하시는 언어를 모두 선택해주세요.
                            </Tiny>
                        </JDcard>
                        <JDcard {...eachStepCardProp[1]}>
                            <div>
                                {!isCreate && <ProductTypeBadges type={type} />}
                                <div>
                                    <Head
                                        title="만드려는 상품은 KPOP 컬쳐 관련 이라면"
                                        description="KPOP 컬쳐 관련 상품 이라면 해당 사항에 동의하여 주세요."
                                        require={false}
                                    />
                                    <JDcheckBox
                                        onChange={handleTypeToggle(
                                            ProductType.KPOP
                                        )}
                                        checked={isKpopCulture}
                                        mb
                                        label="K-POP 컬쳐상품"
                                    />
                                </div>
                            </div>

                            <JDselect
                                mb
                                require
                                {...categoryHook}
                                label="대분류 카테고리 선택 (단일선택)"
                            />
                            <JDselect
                                {...categoryMiniHook}
                                label="소분류 카테고리 선택 (다중선택)"
                            />
                        </JDcard>
                        <JDcard {...eachStepCardProp[2]}>
                            <InputWithGlobal
                                require
                                required
                                globalModalHook={globalModalHook}
                                label={"투어제목"}
                                {...titleHook}
                            />
                        </JDcard>
                        <JDcard {...eachStepCardProp[3]}>
                            <JDselect
                                mb
                                {...regionSelectHook}
                                label="지역 선택"
                                require
                            />
                            <InputWithGlobal
                                mb
                                label="자세한지역"
                                {...addressDetailHook}
                                globalModalHook={globalModalHook}
                            />
                            <InputWithGlobal
                                mb
                                label="출발장소"
                                {...startPointHook}
                                globalModalHook={globalModalHook}
                            />
                            <Flex wrap>
                                <div>
                                    <JDselect
                                        mb
                                        selectedOption={opFind(
                                            nextData.startTimeAmPm || "NONE",
                                            START_TIME_TYPE_OPS
                                        )}
                                        mr={
                                            nextData.startTimeAmPm !== "NONE"
                                                ? true
                                                : "no"
                                        }
                                        label="출발시간"
                                        onChange={(op) => {
                                            amPmHook[1](op.value);
                                        }}
                                        options={START_TIME_TYPE_OPS}
                                    />
                                </div>
                                <div>
                                    {nextData.startTimeAmPm !== "NONE" && (
                                        <Flex wrap>
                                            <JDselect
                                                mb
                                                selectedOption={opFind(
                                                    nextData.startTimeHour,
                                                    HOURS_SELECT_OP
                                                )}
                                                options={HOURS_SELECT_OP.filter(
                                                    (op) => op.value < 13
                                                )}
                                                mr
                                                onChange={(op) => {
                                                    startTimeHourHook[1](
                                                        op.value
                                                    );
                                                }}
                                                label="출발시간(시)"
                                            />
                                            <JDselect
                                                mb
                                                selectedOption={opFind(
                                                    nextData.startTimeMin,
                                                    MINUTES_SELECT_OP
                                                )}
                                                onChange={(op) => {
                                                    startTimeMinHook[1](
                                                        op.value
                                                    );
                                                }}
                                                options={MINUTES_SELECT_OP}
                                                label="출발시간(분)"
                                            />
                                        </Flex>
                                    )}
                                </div>
                            </Flex>
                            <JDswitch
                                mb
                                onChange={() => {
                                    if (!useMapHook.checked) {
                                        setMarker(undefined);
                                    }
                                    useMapHook.onChange(!useMapHook.checked);
                                }}
                                checked={useMapHook.checked}
                                label="지도 사용하기"
                            />
                            <div>
                                {useMapHook.checked && (
                                    <JDsearchGoogleMap
                                        mapContainerStyle={{
                                            width: "100%",
                                            height: 500,
                                        }}
                                        marker={marker as any}
                                        setMarker={setMarker as any}
                                        key={
                                            mapHook.isOpen
                                                ? "opendMap"
                                                : "closedMap"
                                        }
                                        googleMapsApiKey="AIzaSyCltTSNIJ-zystzs_1G_LEBP-S5L1B3fYk"
                                    />
                                )}
                            </div>
                        </JDcard>

                        <JDcard {...eachStepCardProp[4]}>
                            <InputWithGlobal
                                mb
                                globalModalHook={globalModalHook}
                                textarea
                                required
                                require
                                label={"투어소개 (100자 정도권장)"}
                                {...shortDecsriptionhook}
                            />
                            <InputWithGlobal
                                mb
                                globalModalHook={globalModalHook}
                                textarea
                                require
                                required
                                label={"포함사항"}
                                {...includeHook}
                            />
                            <InputWithGlobal
                                mb
                                globalModalHook={globalModalHook}
                                textarea
                                require
                                required
                                label="불포함사항"
                                {...unIncludeHook}
                            />
                            <InputWithGlobal
                                mb
                                globalModalHook={globalModalHook}
                                textarea
                                required
                                require
                                label="필수 안내"
                                {...importantNoticehook}
                            />
                            {/* <InputWithGlobal
                                mb
                                globalModalHook={globalModalHook}
                                textarea
                                label="자세한 투어내용 입력 (250자 이상권장)"
                                {...largeDescriptionHook}
                            /> */}
                            <Head
                                require={false}
                                title="일정기입(생략가능)"
                                description="시간별 일정을 간략하게 적어주세요."
                            />
                            <SubPlanForms
                                globalModalHook={globalModalHook}
                                subPlanes={subPlanes}
                                onChange={setSubplanes}
                            />
                            {/* <InputWithGlobal
                                label="기타정보"
                                {...startPointHook}
                                globalModalHook={globalModalHook}
                            /> */}
                        </JDcard>
                        <JDcard {...eachStepCardProp[5]}>
                            <JDcheckBox
                                {...adultOnlyHook}
                                label="나이 구분을 두지 않습니다."
                                mb
                            />
                            <InputText
                                comma
                                mb
                                require
                                label={
                                    adultOnly
                                        ? "인당가격"
                                        : "성인가격 (대표가격)"
                                }
                                {...adultPriceHook}
                            />
                            <JDalign hide={!!adultOnly}>
                                <InputText
                                    comma
                                    mb
                                    require
                                    label="소인 가격"
                                    {...kidsPriceHook}
                                />
                                <InputText
                                    comma
                                    require
                                    label="유아 가격"
                                    {...babyPriceHook}
                                />
                            </JDalign>
                        </JDcard>
                        <JDcard {...eachStepCardProp[6]}>
                            <JDcounter
                                label="최소인원"
                                maxCount={100}
                                count={minMemberHook.value}
                                onCount={booleanToNum(
                                    minMemberHook.value,
                                    minMemberHook.onChange
                                )}
                            />
                            <Mb />
                            <JDcounter
                                label="최대인원"
                                maxCount={100}
                                count={maxMemberHook.value}
                                onCount={booleanToNum(
                                    maxMemberHook.value,
                                    maxMemberHook.onChange
                                )}
                            />
                        </JDcard>
                        <JDcard {...eachStepCardProp[7]}>
                            {/* <ImageOptimiser
                                cropSize={{ height: 400, width: 500 }}
                            /> */}
                            <JDlabel txt="사진목록 (1개이상 필수)" require />
                            <PhotoGrider
                                cropSize={{
                                    width: 425,
                                    height: 300,
                                }}
                                imageCroperHook={cropperModalHook}
                                key={images.length + "photoGrider"}
                                files={images}
                                onChange={setImages}
                            />
                            <Mb />
                            <div>
                                <Head
                                    require={false}
                                    title="비디오 업로드"
                                    description={
                                        <span>
                                            100MB 이하만 올려주세요. 동영상
                                            길이는 5분정도가 적당합니다.
                                            <Flex
                                                vCenter
                                                typho={{ color: "error" }}
                                            >
                                                <JDicon
                                                    mr="tiny"
                                                    icon="triWarn"
                                                />
                                                업로드시 시간이 소요될 수
                                                있습니다.
                                            </Flex>
                                        </span>
                                    }
                                />
                                <MultiFileInput
                                    onChange={setVideos}
                                    files={videos}
                                    mb
                                />
                                {!isEmpty(videos) && (
                                    <JDalign>
                                        <Bold>미리보기</Bold>
                                        <Video src={videos[0].uri} />
                                    </JDalign>
                                )}
                                {/* <VideoThumbNailGenerator
                                    onChange={() => {
                                        // todo
                                    }}
                                /> */}
                            </div>
                        </JDcard>
                        <JDcard {...eachStepCardProp[8]}>
                            <div>
                                <Red mb hide={isCreate}>
                                    <JDicon icon="triWarn" /> 투어 박수는
                                    수정하실 수 없습니다. (
                                    {rangeDayKr(rangeDay)})
                                </Red>
                                <JDlabel
                                    txt="몇박 투어인가요?"
                                    hide={!isCreate}
                                />
                                <RoundRadioBtnWrap mb hide={!isCreate}>
                                    <JDbutton
                                        mode="border"
                                        disabled={!isCreate}
                                        onClick={() => {
                                            setRangeDay(0);
                                        }}
                                        thema={
                                            rangeDay === 0
                                                ? "primary"
                                                : undefined
                                        }
                                    >
                                        당일투어
                                    </JDbutton>
                                    <JDbutton
                                        mode="border"
                                        disabled={!isCreate}
                                        onClick={() => {
                                            if (rangeDay > 1) return;
                                            setRangeDay(1);
                                        }}
                                        thema={
                                            rangeDay !== 0
                                                ? "primary"
                                                : undefined
                                        }
                                    >
                                        연일투어
                                    </JDbutton>
                                </RoundRadioBtnWrap>
                                <Flex vCenter mb hide={rangeDay === 0}>
                                    <JDcounter
                                        maxCount={99}
                                        onCount={(flag) => {
                                            const add = flag ? 1 : -1;
                                            if (!isCreate) return;
                                            setRangeDay(rangeDay + add);
                                        }}
                                        count={rangeDay || 1}
                                        label={"몇박 인가요?"}
                                    />
                                    <Mr />
                                    <Bold mr>박</Bold>
                                    <Bold>{rangeDay + 1}일</Bold>
                                </Flex>

                                {isTourUpdate && (
                                    <JDdayPicker
                                        mb
                                        isRange={false}
                                        {...startDatePicker}
                                    />
                                )}

                                {!isTourUpdate && (
                                    <div>
                                        <JDlabel txt="출발일자를 선택해주세요. (복수선택)" />
                                        <JDdayPicker
                                            mb
                                            multiDays
                                            disabledDays={(day) => {
                                                const hasAlready =
                                                    !!fullDatesDisable.find(
                                                        (ed) =>
                                                            dayjs(ed).isSame(
                                                                day,
                                                                "date"
                                                            )
                                                    );
                                                return (
                                                    hasAlready ||
                                                    dayjs(day).isBefore(
                                                        new Date(),
                                                        "day"
                                                    )
                                                );
                                            }}
                                            renderDay={(date, props) => {
                                                const onGoingDate =
                                                    fullDates?.find((td) =>
                                                        dayjs(td).isSame(
                                                            date,
                                                            "date"
                                                        )
                                                    );
                                                const alreadyInDate =
                                                    everyTourDates?.find((td) =>
                                                        dayjs(td).isSame(
                                                            date,
                                                            "date"
                                                        )
                                                    );

                                                return (
                                                    <div
                                                        className={
                                                            "ProductDetail__daypikcerInDate" +
                                                            (onGoingDate
                                                                ? " ProductDetail__daypikcerInDate--ongoing"
                                                                : "")
                                                        }
                                                    >
                                                        <Flex
                                                            vCenter
                                                            center
                                                            column
                                                        >
                                                            <div>
                                                                {date.getDate()}
                                                            </div>
                                                            <div>
                                                                {alreadyInDate && (
                                                                    <Tiny>
                                                                        투어있음
                                                                    </Tiny>
                                                                )}
                                                            </div>
                                                        </Flex>
                                                    </div>
                                                );
                                            }}
                                            {...dummyDayPickerHook}
                                            days={dates}
                                            setDays={(days) => {
                                                if (days.length > 30) {
                                                    alert(
                                                        "최대 선택 가능한 날짜는 30개입니다"
                                                    );
                                                    return;
                                                }
                                                setDates(days as Date[]);
                                            }}
                                        />
                                    </div>
                                )}
                                {isTourUpdate ? (
                                    <>
                                        <JDlabel txt="출발일 변경" />
                                        <FromDateToDate
                                            from={defaultTour?.startDate}
                                            to={startDatePicker.from}
                                        />
                                    </>
                                ) : (
                                    <RoundsViewer
                                        mb
                                        key={
                                            sortedRangeDays.length +
                                            "RoundViewer"
                                        }
                                        range={rangeDay}
                                        startDates={sortedRangeDays}
                                    />
                                )}
                            </div>
                        </JDcard>
                        <JDbutton
                            mr
                            br="square"
                            hide={!product}
                            onClick={handlePreview}
                            thema="grey4"
                            label="미리보기"
                        />
                        <JDbutton
                            mr
                            br="square"
                            hide={step === 0 || isTourUpdate || isAddRoundMode}
                            onClick={handlePrev}
                            thema="grey4"
                            label="이전"
                        />
                        <JDbutton
                            hide={!isTourUpdate}
                            mr
                            br="square"
                            onClick={() => {
                                history.push(GuidePath.tour);
                            }}
                            thema="grey4"
                            label="수정취소(초기화)"
                        />

                        <JDbutton
                            mr
                            br="square"
                            disabled={!tourUpdateAb}
                            hide={!isTourUpdate}
                            onClick={handleFinish}
                            thema="primary"
                            label="회차 수정완료"
                        />
                        <JDbutton
                            mr
                            br="square"
                            disabled={!tourUpdateAb}
                            hide={!isTourUpdate}
                            onClick={handleDeleteTour}
                            thema="error"
                            label="회차 삭제하기"
                        />
                        <JDbutton
                            mr
                            br="square"
                            thema="grey4"
                            hide={isTourUpdate || isAddRoundMode}
                            onClick={handleSaveAndBack}
                            label="저장후 끝내기"
                        />
                        <JDbutton
                            hide={
                                isTourUpdate ||
                                isLast(step, steps) ||
                                isAddRoundMode
                            }
                            thema="primary"
                            onClick={product ? handleSaveAndNext : handleCreate}
                            label={
                                <Flex vCenter>
                                    저장후 다음 <Red>*</Red>
                                </Flex>
                            }
                        />
                        <JDbutton
                            hide={isTourUpdate || !isLast(step, steps)}
                            onClick={handleFinish}
                            br="square"
                            thema="primary"
                            label={
                                isAddRoundMode
                                    ? "회차추가 완료하기"
                                    : "완료 판매 시작하기"
                            }
                        />
                    </JDalign>
                    <div>
                        <BackStepBar
                            className="productConfig__pcStepBtn"
                            go={GuidePath.product}
                            mode="border"
                            mb
                            label="투어목록"
                        />
                        <StepBox
                            className="productConfig__stepBox"
                            mobileOpen={mobileOpen}
                            setMobileOpen={setMobileOpen}
                            steps={stepArray}
                        />
                    </div>
                </Flex>
            </JDcontainer>
            <ImageCropModal {...cropperModalHook} />
            <GlobalInputModal targets={languagesHook[0]} {...globalModalHook} />
            {productPreviewModalHook.isOpen && (
                <ProdcutPreviewModal modalHook={productPreviewModalHook} />
            )}
        </div>
    );
};

type IDetailRouteProp = { productId?: string; step: string };

interface IProductDetailWrapProp {
    mode?: TMode;
}
export const ProductDetailWrap: React.FC<IProductDetailWrapProp> = ({
    mode,
}) => {
    const { updateComponent } = useUpdateComponent();
    const routeMatch = useRouteMatch<IDetailRouteProp>();
    const {
        params: { productId, step },
    } = routeMatch;

    const { data: item, refetch } = useQuery<
        productFindById,
        productFindByIdVariables
    >(PRODUCT_FIND_BY_ID, {
        variables: {
            productId: productId,
        },
        fetchPolicy: "no-cache",
        skip: !productId,
    });

    const product = item?.ProductFindById;

    return (
        <ProductDetail
            mode={mode}
            updateComponent={updateComponent}
            getData={(productId) => {
                refetch({ productId });
            }}
            step={step}
            product={product || undefined}
            key={product?._id}
        />
    );
};

export default ProductDetailWrap;
