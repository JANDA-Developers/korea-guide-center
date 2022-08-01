import {
    Bold,
    Flex,
    IUseModal,
    JDmodal,
    JDselect,
    opFind,
} from "@janda-com/front";
import React from "react";
import { ModalBtn } from "../../../../component/btns/ModalBtn";
import { ModalHead } from "../../../../component/modalHead/ModalHead";
import { TourCard } from "../../../../component/tourInfoCard/TourInfoCard";
import { useBookingWrite } from "../../../../hook/useBookingWrite";
import { useTourSelectList } from "../../../../hook/useTourSelectList";
import { Fbooking } from "../../../../types/api";
import { BookerInfoBlock } from "./BookerInfoBlock";
import { PayInfoBlock } from "./PayInfoBlock";
import { SelectInfoBlock } from "./SelectInfoBlock";

export interface IBookingModalInfo {
    booking?: Fbooking;
}

interface IProp {
    modalHook: IUseModal<IBookingModalInfo>;
}

export const BookingModal: React.FC<IProp> = ({ modalHook }) => {
    const defaultBooking = modalHook.info?.booking;
    const isCreate = !defaultBooking;
    const { ops, items: tours } = useTourSelectList();
    const bookingWriteHook = useBookingWrite(defaultBooking);
    const { tour, tourHook, nextData, handleCreate, handleUpdate } =
        bookingWriteHook;
    const { guideMemo } = nextData;
    const { buyerName, code } = defaultBooking || {};

    const _handleUpdate = () => {
        handleUpdate();
    };

    return (
        <JDmodal
            className="bookingModal"
            fullInMobile
            head={{
                element: (
                    <ModalHead
                        description="예약에대한 상세정보를 확인합니다"
                        title={
                            isCreate
                                ? `수기예약등록하기`
                                : `${buyerName}님의 예약 [${code}]`
                        }
                    />
                ),
            }}
            foot={
                <Flex>
                    <ModalBtn
                        mr
                        hide={!isCreate}
                        thema="primary"
                        onClick={handleCreate}
                    >
                        예약생성
                    </ModalBtn>
                    <ModalBtn
                        mr
                        hide={isCreate}
                        thema="primary"
                        onClick={_handleUpdate}
                    >
                        예약수정
                    </ModalBtn>
                    {/* <ModalBtn
                        hide={isCreate}
                        thema="error"
                        onClick={handleUpdate}
                    >
                        예약삭제
                    </ModalBtn> */}
                </Flex>
            }
            {...modalHook}
        >
            {isCreate && (
                <JDselect
                    selectedOption={opFind(tour?._id, ops, true)}
                    onChange={(op) => {
                        const target = tours.find(
                            (tour) => tour._id === op.value
                        );
                        tourHook[1](target);
                    }}
                    options={ops}
                    label="투어 선택하기"
                    mb
                />
            )}
            {tour && (
                <div>
                    <Bold mb>투어정보</Bold>
                    <TourCard mb alignImg="horizen" mode="border" tour={tour} />
                </div>
            )}
            <Flex oneone>
                <BookerInfoBlock modileViewMode mb mr {...bookingWriteHook} />
                <SelectInfoBlock mb {...bookingWriteHook} />
            </Flex>
            <Flex oneone>
                <PayInfoBlock {...bookingWriteHook} />
                {/* { <RefundInfoBlock {...bookingWriteHook} /> */}
            </Flex>
        </JDmodal>
    );
};
