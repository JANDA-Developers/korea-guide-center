import { Bold, Excel, IUseModal, JDbutton, JDmodal } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { useTourFindById } from "../../hook/useTour";
import { BookingTable } from "../../page/booking/components/BookingTable";
import GuideContext from "../../page/context";
import { tourFindById_TourFindById } from "../../types/api";
import { getExcelByBookings } from "../../utils/getExcelData";
import { ModalHead } from "../modalHead/ModalHead";
import { TourViewCard } from "../productViewCard/TourViewCard";

export interface ITourModalInfo {
    tourId: string;
    item?: tourFindById_TourFindById;
}

interface IProp {
    item?: tourFindById_TourFindById;
    modalHook: IUseModal<ITourModalInfo>;
}

export const TourModal: React.FC<IProp> = ({ modalHook, item }) => {
    const {} = useContext(GuideContext);
    const infoItem = modalHook.info?.item;
    const Item = item || infoItem;
    if (!Item) return null;
    const { productInfomation, Bookings, guide } = Item;
    return (
        <JDmodal
            head={{
                element: <ModalHead title="투어 및 예약정보 확인하기" />,
            }}
            {...modalHook}
        >
            <Bold mb>투어정보</Bold>
            <TourViewCard head={undefined} mb tour={Item} />
            <Bold mb>
                예약현황{" "}
                <span>
                    <Excel
                        element={
                            <JDbutton
                                mode="flat"
                                size="small"
                                br="square"
                                padding="small"
                                className="ExcelBtn"
                            >
                                엑셀받기
                            </JDbutton>
                        }
                        data={getExcelByBookings(Bookings)}
                    />
                </span>
            </Bold>
            <BookingTable bookings={Bookings} />
        </JDmodal>
    );
};

export const TourModalWrap: React.FC<IProp> = ({ modalHook }) => {
    const tourId = modalHook.info?.tourId;
    if (!tourId) return null;
    const { item } = useTourFindById(tourId);
    if (!item) return null;
    return <TourModal item={item} modalHook={modalHook} />;
};
