import {
    Bold,
    Flex,
    IJDalignProp,
    isEmpty,
    IUseModal,
    JDalign,
    JDbutton,
    JDcard,
    JDhorizen,
    JDtypho,
    Tiny,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { Empty } from "../../atom/Empty";
import { Red } from "../../atom/shortCut/Short";
import { AppContext } from "../../context/context";
import { useCommentManage } from "../../hook/useComment";
import { ListInitOptions } from "../../hook/useListQuery";
import { useReviewDelete, useReviewList } from "../../hook/useReview";
import {
    getReviewSummary,
    useReviewControl,
} from "../../hook/useReviewControl";
import {
    CommentTarget,
    Freview,
    Ftour,
    reviewList,
    reviewListVariables,
    _ReviewFilter,
    _ReviewSort,
} from "../../types/api";
import { TElements } from "../../types/interface";
import { genrateOption } from "../../utils/query";
import { JDicon } from "../icons/Icons";
import {
    IReviewModalInfo,
    IReviewModalWrapInfo,
} from "../ReviewModal/ReviewModal";
import { ReviewBox } from "./ReviewBox";

interface IProp extends IJDalignProp {
    reviews: Freview[];
    onViewMore?: () => void;
    hasMore?: boolean;
    tour?: Ftour;
    cardView?: boolean;
    reviewControlModalHook?: IUseModal<IReviewModalWrapInfo>;
}

export const ReviewBoxs: React.FC<IProp> = ({
    tour,
    reviews,
    hasMore,
    onViewMore,
    cardView,
    reviewControlModalHook,
    ...props
}) => {
    const { handleCreate: handleCommentWrite } = useCommentManage();
    const [deleteReviewMu] = useReviewDelete();
    const { l, s, confirmModalHook, isMaster, promptModalHook } =
        useContext(AppContext);

    const Controller = (review: Freview) => {
        const { deleteAb, updateAb, myReview, replayAb, writeAb, iamTarget } =
            getReviewSummary(review);
        const onEdit = () => {
            reviewControlModalHook?.openModal({
                tour,
                tourId: review.tourId,
                review,
            });
        };

        const handleDelte = () => {
            confirmModalHook.openModal({
                title: `정말로 삭제하시겠습니까?`,
                content: (
                    <Red>
                        <JDicon icon="triWarn" /> 정말로 리뷰를 삭제하십니까?
                    </Red>
                ),
                onContinue: () => {
                    deleteReviewMu({
                        variables: {
                            reviewId: review._id,
                        },
                    });
                },
            });
        };

        return (
            <Flex>
                <Tiny
                    mr="small"
                    hover
                    size="small"
                    hide={!deleteAb}
                    onClick={handleDelte}
                    color="error"
                >
                    삭제하기
                </Tiny>
                <Tiny
                    mr
                    size="small"
                    hover
                    hide={!replayAb}
                    onClick={() => {
                        handleCommentWrite({
                            target: CommentTarget.REVIEW,
                            targetId: review._id,
                        });
                    }}
                >
                    답변하기
                </Tiny>
                <Tiny
                    size="small"
                    hover
                    hide={!updateAb || !reviewControlModalHook}
                    onClick={onEdit}
                >
                    {s("tomodify")}
                </Tiny>
            </Flex>
        );
    };

    const CardWrap = (props: any) => {
        return <JDcard mb {...props} />;
    };

    const DivWrap = (props: any) => {
        return <div {...props} />;
    };

    const TargetWrap = cardView ? CardWrap : DivWrap;

    return (
        <JDalign {...props}>
            {reviews.map((review) => (
                <TargetWrap>
                    <ReviewBox
                        Controller={Controller}
                        key={review._id}
                        review={review}
                    />
                    {cardView || <JDhorizen margin={3} />}
                </TargetWrap>
            ))}
            <JDbutton
                hide={!onViewMore || !hasMore}
                mode="border"
                br="square"
                onClick={onViewMore}
                iconProp={{ icon: "arrowDown" }}
                label="후기 더 보기"
            />
        </JDalign>
    );
};

interface IReviewBoxWithApi extends Partial<IProp> {
    queryParam?: Partial<ListInitOptions<_ReviewFilter, _ReviewSort>>;
    queryControl?: genrateOption<reviewList, reviewListVariables>;
}


export const ReviewBoxsWithApi: React.FC<IReviewBoxWithApi> = ({
    queryControl,
    queryParam,
    ...props
}) => {
    const { s } = useContext(AppContext);
    const {
        items: reviews,
        setViewCount,
        viewCount,
        getLoading,
    } = useReviewList(queryParam, queryControl);

    if (!getLoading && isEmpty(reviews))
        return <Empty msg={s("non_review")} />;

    return (
        <div>
            {isEmpty(reviews) && Empty}
            <ReviewBoxs
                reviews={reviews}
                hasMore={reviews.length === viewCount}
                onViewMore={() => {
                    setViewCount(viewCount + 4);
                }}
                mb="huge"
                {...props}
            />
        </div>
    );
};
