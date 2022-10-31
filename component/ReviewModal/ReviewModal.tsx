import {
    InputText,
    Flex,
    IUseModal,
    JDlabel,
    JDmodal,
    Large,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { LineCutter } from "../../atom/LineCutter";
import { AppContext } from "../../context/context";
import { useReviewControl } from "../../hook/useReviewControl";
import { useTourFindById } from "../../hook/useTour";
import { Freview, Ftour } from "../../types/api";
import { ModalBtn } from "../btns/ModalBtn";
import { ModalHead } from "../modalHead/ModalHead";
import { PhotoGrider } from "../photoGrider.tsx/PhotoGrider";
import { RatingStar } from "../rating/Rating";

export interface IReviewModalInfo {
    tour?: Ftour;
    review?: Freview;
}

interface IProp {
    modalHook: IUseModal<IReviewModalInfo>;
}

export const ReviewModal: React.FC<IProp> = ({ modalHook }) => {
    if (typeof window === "undefined") return null;
    const tour = modalHook.info?.tour!;
    const defaultReview = modalHook.info?.review;
    const isCreate = !defaultReview;
    if (!tour) return null;
    const { l, s, isMaster } = useContext(AppContext);
    const { productInfomation } = tour;
    const { title } = productInfomation;
    const {
        reviewerNameHook,
        reviewContentHook,
        handleDelete,
        handleCreate,
        handleUpdate,
        rating,
        setRating,
        imagesHook,
    } = useReviewControl(tour, defaultReview, modalHook.closeModal);

    return (
        <JDmodal
            fullInMobile
            className="ReviewModal"
            foot={
                <Flex>
                    <ModalBtn mr hide={!isCreate} onClick={handleCreate}>
                        {s("write")}
                    </ModalBtn>
                    <ModalBtn mr hide={isCreate} onClick={handleUpdate}>
                        {s("modify")}
                    </ModalBtn>
                    <ModalBtn
                        thema="error"
                        onClick={handleDelete}
                        hide={isCreate}
                    >
                        {s("delete")}
                    </ModalBtn>
                </Flex>
            }
            head={{
                element: (
                    <ModalHead
                        title={
                            <Large>
                                <LineCutter line={2}>{l(title)}</LineCutter>
                            </Large>
                        }
                        description={s("thanksForYourReview")}
                    />
                ),
            }}
            {...modalHook}
        >
            <Flex column center vCenter>
                <JDlabel txt={s("reviewStarLabel")} />
                <Large size="h2">
                    <RatingStar onChange={setRating} initialRating={rating} />
                </Large>
                {/* <Red mb>
                    ({rating}/{5})
                </Red> */}
            </Flex>
            {isMaster && (
                <InputText
                    {...reviewerNameHook}
                    placeholder={s("plesaeWriteReview")}
                    mb
                    max={200}
                    label={"이름 (마스터 계정만 변경가능)"}
                />
            )}
            <InputText
                {...reviewContentHook}
                id="ReviewContentInput"
                placeholder={s("plesaeWriteReview")}
                textarea
                mb
                max={200}
                label={s("reviewText")}
            />
            <JDlabel txt={s("reviewImage")} />
            <div style={{ margin: "-0.4rem" }}>
                <PhotoGrider
                    files={imagesHook.files || []}
                    onChange={imagesHook.setFiles}
                />
            </div>
        </JDmodal>
    );
};

export interface IReviewModalWrapInfo extends Partial<IReviewModalInfo> {
    tourId?: string;
    review?: Freview;
}

interface IWrapProp {
    modalHook: IUseModal<IReviewModalWrapInfo>;
}

export const ReviewModalWrap: React.FC<IWrapProp> = ({ modalHook }) => {
    const { tour, tourId } = modalHook.info || {};
    const { item } = useTourFindById(tourId);
    const Tour = item || tour;
    if (!Tour) return null;
    return (
        <ReviewModal
            modalHook={{
                ...modalHook,
                info: { ...modalHook.info, tour: Tour },
            }}
        />
    );
};
