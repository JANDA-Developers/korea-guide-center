import { Flex, JDcard, JDcontainer, WindowSize } from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import dayjs from "dayjs";
import React from "react";
import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import JDsearchBar from "../../atom/SearchBar";
import { TableBtn } from "../../component/btns/ModalBtn";
import { ItemRadio } from "../../component/itemRadio/ItemRadio";
import { CardHead } from "../../component/modalHead/ModalHead";
import {
    IPageHeaderProps,
    PageHeader,
} from "../../component/pageHeader/PageHeader";
import { ScrollBox } from "../../component/scrollBox/ScrollBox";
import { SortSelect } from "../../component/sortSelect/SortSelect";
import { useSettlementManage } from "../../hook/useSettlement";
import { useTourList, useTourManage } from "../../hook/useTour";
import { TourStatus, _TourFilter, _TourSort } from "../../types/api";
import { TourSortKr } from "../../types/const";
import GuideContext from "../context";
import { GuidePath } from "../GuideRouter";
import { getTourSummary, TourTable } from "./components/TourTable";

type Tmode = "will" | "past" | "cancel" | "all";
const modeTitle: Record<Tmode, IPageHeaderProps> = {
    cancel: {
        pageName: "취소 회차목록",
        title: "취소된 투어 회차목록 🍂",
        description: "취소된 투어들의 목록입니다",
    },
    past: {
        pageName: "과거 투어들의 목록입니다",
        title: "과거 투어 회차목록 🖼️",
        description: "출발일이 지난 투어회차들의 목록입니다",
    },
    will: {
        pageName: "진행될 투어들의 목록입니다",
        title: "진행할 투어 회차목록 🚌",
        description: "출발일이 지나지않은 투어회차들의 목록입니다",
    },
    all: {
        title: "회차별 살펴보기",
        pageName: "투어",
        description: "회차별 금액, 참여인원, 등을 확인 하실 수 있습니다",
    },
};

interface IProp {
    mode: Tmode;
}

export const Tour: React.FC<IProp> = ({ mode }) => {
    const isWill = mode === "will";
    const isPast = mode === "past";
    const isCancel = mode === "cancel";
    const history = useHistory();
    const guideContextHook = useContext(GuideContext);
    const { tourModalHook, me, isMaster } = guideContextHook;
    const { productId } = useParams<{ productId: string }>();
    const { handleTourCancel } = useTourManage();
    const { handleCreate: handleSettlementCreate } = useSettlementManage();

    const onwerFilter = isMaster
        ? {}
        : {
              productInfomation_guideId__eq: me?._id,
          };

    let modeFilter: _TourFilter = {};

    if (isPast) {
        modeFilter = {
            startDate__lte: dayjs(new Date()).startOf("month").toDate(),
            tourStatus__not_eq: TourStatus.CANCEL,
        };
    }

    if (isWill) {
        modeFilter = {
            startDate__gte: dayjs(new Date()).startOf("month").toDate(),
            tourStatus__not_eq: TourStatus.CANCEL,
        };
    }

    if (isCancel) {
        modeFilter = {
            tourStatus__eq: TourStatus.CANCEL,
        };
    }

    const tourListHook = useTourList({
        fixingFilter: {
            ...modeFilter,
            ...onwerFilter,
        },
        initialFilter: productId
            ? {
                  productId__eq: productId,
              }
            : undefined,
    });
    const { items, paginatorHook, pageInfo, filter, setFilter, setSort, sort } =
        tourListHook;

    const handleSelectItem = (item?: IselectedOption) => {
        setFilter({
            productId__eq: item?.value,
        });
    };

    const handleEditTour = (tourId: string) => () => {
        history.push(GuidePath.tourDetail + "/" + tourId);
    };

    const modeTitlePorps = modeTitle[mode];

    return (
        <div>
            <JDcontainer size={WindowSize.full} verticalPadding>
                <PageHeader {...modeTitlePorps} />

                <JDcard mb head="회차목록 필터">
                    <ScrollBox mb scrollSize="small">
                        <ItemRadio
                            itemIdFilter={filter?.productId__eq}
                            handleSelectItem={handleSelectItem}
                        />
                    </ScrollBox>
                    <JDsearchBar
                        searchOps={[
                            {
                                label: "투어이름",
                                value: "productInfomation_title_ko__contains",
                            },
                            {
                                label: "회차코드",
                                value: "code__eq",
                            },
                            {
                                label: "투어코드",
                                value: "productInfomation_code__eq",
                            },
                            {
                                label: "투어지역",
                                value: "productInfomation_region_label_ko__eq",
                            },
                        ]}
                        listHook={tourListHook}
                    />
                </JDcard>
                <JDcard
                    head={
                        <CardHead
                            title={
                                <Flex vCenter between>
                                    투어 회차별 목록
                                    <div>
                                        <SortSelect
                                            SORT={_TourSort}
                                            SortLang={TourSortKr}
                                            {...tourListHook}
                                        />
                                    </div>
                                </Flex>
                            }
                            description="투어 회차별 목록입니다. 필터를 사용하여 제어 하실 수 있습니다"
                        />
                    }
                >
                    <TourTable
                        Controller={(tour) => {
                            const { cancelAb, settlementRequestAb, updateAb } =
                                getTourSummary(guideContextHook, tour);
                            return (
                                <div>
                                    <TableBtn
                                        mb="small"
                                        onClick={() => {
                                            tourModalHook.openModal({
                                                tourId: tour._id,
                                            });
                                        }}
                                    >
                                        자세히보기
                                    </TableBtn>
                                    <TableBtn
                                        hide={!cancelAb}
                                        onClick={() => {
                                            handleTourCancel(tour);
                                        }}
                                    >
                                        투어 취소하기
                                    </TableBtn>
                                    <TableBtn
                                        hide={!updateAb}
                                        onClick={handleEditTour(tour._id)}
                                    >
                                        투어 수정하기
                                    </TableBtn>

                                    <TableBtn
                                        hide={!settlementRequestAb}
                                        thema="primary"
                                        onClick={() => {
                                            handleSettlementCreate(tour);
                                        }}
                                    >
                                        정산신청
                                    </TableBtn>
                                </div>
                            );
                        }}
                        pageInfo={pageInfo}
                        paginationHook={paginatorHook}
                        tours={items}
                    />
                </JDcard>
            </JDcontainer>
        </div>
    );
};
