import { IUseModal, JDmodal, JDmodalConfigProps } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import JDsearchBar from "../../atom/SearchBar";
import { AppContext } from "../../context/context";
import { useTourList } from "../../hook/useTour";
import { TourTable } from "../../page/tour/components/TourTable";
import { Ftour, _TourFilter } from "../../types/api";
import { TableBtn } from "../btns/ModalBtn";

export interface ITourSearchModalInfo extends JDmodalConfigProps {
    onSubmit: (tour: Ftour) => void;
    filter?: _TourFilter;
}

interface IProp {
    modalHook: IUseModal<ITourSearchModalInfo>;
}

export const TourSearchModal: React.FC<IProp> = ({ modalHook }) => {
    const { isMaster, me } = useContext(AppContext);
    const _filter = modalHook.info?.filter;
    const onwerFilter = isMaster
        ? {}
        : {
              productInfomation_guideId__eq: me?._id,
          };

    const tourListHook = useTourList({
        fixingFilter: {
            ...onwerFilter,
            ..._filter,
        },
    });

    const submit = modalHook.info?.onSubmit;

    const { items, paginatorHook, filter, setFilter } = tourListHook;

    return (
        <JDmodal {...modalHook} {...modalHook.info}>
            <JDsearchBar
                mb
                searchOps={[
                    {
                        label: "전체검색",
                        value: "code__not_eq",
                        filter: (value) => {
                            setFilter({
                                ...filter,
                                OR: [
                                    {
                                        productInfomation_title_ko__contains:
                                            value,
                                    },
                                    {
                                        productInfomation_address_ko__contains:
                                            value,
                                    },
                                    {
                                        productInfomation_region_label_chi__contains:
                                            value,
                                    },
                                    {
                                        productInfomation_guideNickName__contains:
                                            value,
                                    },
                                    {
                                        productInfomation_guideName__contains:
                                            value,
                                    },
                                    {
                                        code__eq: value,
                                    },
                                    {
                                        productInfomation_code__eq: value,
                                    },
                                ],
                            });
                        },
                    },
                    {
                        label: "투어이름",
                        value: "productInfomation_title_ko__contains",
                    },
                    {
                        label: "투어코드",
                        value: "productInfomation_code__eq",
                    },
                    {
                        label: "투어지역",
                        value: "productInfomation_region_label_ko__eq",
                    },
                    {
                        label: "투어날짜",
                        value: "productInfomation_tourDates__gte",
                        type: "dateRange",
                    },
                ]}
                listHook={tourListHook}
            />
            <TourTable
                paginationHook={paginatorHook}
                Controller={(tour) => {
                    return (
                        <TableBtn
                            onClick={() => {
                                submit?.(tour);
                            }}
                            thema="primary"
                            label="선택하기"
                        />
                    );
                }}
                tours={items}
            />
        </JDmodal>
    );
};
