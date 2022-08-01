import {
    JDcard,
    JDcontainer,
    JDpageHeader,
    SkipUpdate,
    WindowSize,
} from "@janda-com/front";
import React, { useContext } from "react";
import { useProductList } from "../../hook/useProduct";
import {
    TourStatus,
    _ProductFilter,
    _ProductSort,
    _TourFilter,
} from "../../types/api";
import { useRouteMatch } from "react-router-dom";
import { ItemRadio } from "../../component/itemRadio/ItemRadio";
import { ScrollBox } from "../../component/scrollBox/ScrollBox";
import { useState } from "react";
import GuideContext from "../context";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { TourCalendarWrap } from "./TourCalendar";

interface IProps {}

type IDetailRouteProp = { itemId?: string };

export const exceptMaster =
    <T, A = any>(isMaster?: boolean) =>
    (something: T, instead = {}) => {
        return isMaster ? instead : something;
    };

export const CalendarPage: React.FC<IProps> = () => {
    const {
        params: { itemId },
    } = useRouteMatch<IDetailRouteProp>();
    const { isMaster, me } = useContext(GuideContext);
    const ownerFilter = exceptMaster<_TourFilter>(isMaster)({
        productInfomation_guideId__eq: me?._id,
    });
    const [filter, setFilter] = useState<_TourFilter | undefined>(
        itemId
            ? {
                  ...ownerFilter,
                  productId__eq: itemId,
                  tourStatus__not_eq: TourStatus.CANCEL,
              }
            : {
                  ...ownerFilter,
                  tourStatus__not_eq: TourStatus.CANCEL,
              }
    );

    const handleSelectItem = (item?: IselectedOption) => {
        setFilter({
            productId__eq: item?.value,
        });
    };

    const onwerFilter = isMaster
        ? {}
        : {
              productInfomation_guideId__eq: me?._id,
          };

    return (
        <div>
            <JDcontainer verticalPadding size={WindowSize.full}>
                <ScrollBox scrollSize="small">
                    <ItemRadio
                        itemIdFilter={filter?.productId__eq}
                        handleSelectItem={handleSelectItem}
                    />
                </ScrollBox>
                <JDcard>
                    <TourCalendarWrap
                        key={filter?.productId__eq + "BigCaledar"}
                        listVariables={[
                            {
                                fixingFilter: {
                                    ...onwerFilter,
                                    ...filter,
                                },
                            },
                        ]}
                    />
                </JDcard>
            </JDcontainer>
        </div>
    );
};

export default CalendarPage;
