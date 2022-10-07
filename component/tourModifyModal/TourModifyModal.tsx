import { IUseModal, JDbutton, JDmodal, Small } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Red } from "../../atom/shortCut/Short";
import { useTourList, useTourRpresentiveChange } from "../../hook/useTour";
import GuideContext from "../../page/context";
import { GuidePath } from "../../page/GuideRouter";
import {
    getTourSummary,
    TourTable,
} from "../../page/tour/components/TourTable";
import { Fproduct, Ftour } from "../../types/api";
import { TableBtn } from "../btns/ModalBtn";
import { ModalHead } from "../modalHead/ModalHead";
import { checkEveryTourIsEditable } from "./helper";

export interface ITourModifyModal {
    product?: Fproduct;
}

interface IProp {
    tours?: Ftour[];
    product?: Fproduct;
    modalHook: IUseModal<ITourModifyModal>;
}

export const TourModal: React.FC<IProp> = ({
    modalHook,
    product,
    tours = [],
}) => {
    const context = useContext(GuideContext);
    const history = useHistory();
    history.push;

    const [representiveChangeMu] = useTourRpresentiveChange();
    const handleToRepresentive = (NextRepresentiveTourId: string) => () => {
        representiveChangeMu({
            variables: {
                NextRepresentiveTourId,
            },
        });
    };

    const everyTourIsUpdatable = checkEveryTourIsEditable(tours);

    return (
        <JDmodal
            head={{
                element: (
                    <ModalHead
                        title="어떤 회차의 수정을 원하시나요?"
                        description={
                            <Red weight={600}>
                                <div>
                                    - 예약이 있는 회차는 수정이 불가능합니다.
                                </div>
                            </Red>
                        }
                    />
                ),
            }}
            {...modalHook}
        >
            <JDbutton
                size="long"
                mb
                thema="primary"
                br="square"
                hide={!everyTourIsUpdatable}
                onClick={() => {
                    history.push(GuidePath.productDetail + "/" + product?._id);
                }}
            >
                모든회차 수정하기
            </JDbutton>
            <TourTable
                editMode
                Controller={(tour) => {
                    const { updateAb, hasBooking, isPast } = getTourSummary(
                        context,
                        tour
                    );

                    return (
                        <Small>
                            <div>
                                <div>
                                    {hasBooking &&
                                        "대기 및 완료 상태의 예약이 있습니다"}
                                </div>
                                <div>{isPast && "날짜가 지났습니다"}</div>
                            </div>

                            {updateAb && (
                                <TableBtn
                                    mode="flat"
                                    thema="primary"
                                    onClick={() => {
                                        history.push(
                                            GuidePath.tourDetail +
                                                "/" +
                                                tour?._id
                                        );
                                    }}
                                >
                                    개별수정
                                </TableBtn>
                            )}
                            <TableBtn
                                hide={tour.representive}
                                onClick={handleToRepresentive(tour._id)}
                            >
                                대표회차 지정
                            </TableBtn>
                        </Small>
                    );
                }}
                tours={tours}
            />
        </JDmodal>
    );
};

export const TourModifyModalWrap: React.FC<IProp> = ({ modalHook }) => {
    const product = modalHook.info?.product;
    const productId = modalHook.info?.product?._id;
    const { items: tours, getLoading } = useTourList(
        {
            fixingFilter: {
                productId__eq: productId,
            },
        },
        {
            skip: !productId,
        }
    );

    if (!product || getLoading) return null;

    return (
        <TourModal
            key={tours.length}
            tours={tours}
            product={product}
            modalHook={modalHook}
        />
    );
};
