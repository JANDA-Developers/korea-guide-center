import { useInput } from "@janda-com/front";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { AppContext } from "../context/context";
import { Freview, Ftour, LANGUAGES, ReviewInput } from "../types/api";
import { omits } from "../utils/omits";
import { completeMsg } from "../utils/onCompletedMessage";
import { Validater } from "../utils/Validater";
import { useReviewCreate, useReviewDelete, useReviewUpdate } from "./useReview";
import { useMultiUpload } from "./useUpload";

export const getReviewSummary = (review?: Freview) => {
    const { me, isMaster } = useContext(AppContext);

    const myReview = me?._id === review?.reviewerId;
    const iamTarget = review?.guideId === me?._id;

    const writeAb = true; //
    const deleteAb = isMaster || myReview;
    const updateAb = myReview;
    const replayAb = isMaster || iamTarget;

    return { writeAb, deleteAb, myReview, updateAb, replayAb, iamTarget };
};

export const useReviewControl = (
    tour: Ftour,
    review?: Freview,
    onSucess?: () => void
) => {
    const { s, isMaster } = useContext(AppContext);
    const { locale } = useRouter();
    const { guideId } = tour.productInfomation;
    const [deleteMu] = useReviewDelete({
        onCompleted: ({ ReviewDelete }) => {
            if (completeMsg(ReviewDelete, s("reviewDeleteComplete"))) {
                onSucess?.();
            }
        },
    });
    const [updateMu] = useReviewUpdate({
        onCompleteSucess: onSucess,
        onCompleted: ({ ReviewUpdate }) => {
            if (completeMsg(ReviewUpdate, s("reviewUpdateComplete"))) {
                onSucess?.();
            }
        },
    });
    const [createMu] = useReviewCreate({
        onCompleteSucess: onSucess,
        onCompleted: ({ ReviewCreate }) => {
            if (completeMsg(ReviewCreate, s("reviewCreateComplete"))) {
                onSucess?.();
            }
        },
    });
    const [rating, setRating] = useState(5);
    const reviewerNameHook = useInput(review?.reviewerName || "");
    const reviewContentHook = useInput("");
    const imagesHook = useMultiUpload(review?.images || []);

    const { validate } = new Validater([
        {
            failMsg: s("reviewAtLesat10Plz"),
            value: reviewContentHook.value.length > 10,
            id: "ReviewContentInput",
        },
    ]);

    const nextData: ReviewInput = {
        rating: rating,
        contents: reviewContentHook.value,
        images: omits(imagesHook.files),
        language: locale as LANGUAGES,
    };

    const handleCreate = () => {
        if (validate()) {
            createMu({
                variables: {
                    guideId,
                    input: nextData,
                    tourId: tour._id,
                    reviewerName: isMaster ? reviewerNameHook.value : null,
                },
            });
        }
    };

    const handleUpdate = () => {
        if (!review) return;
        if (validate())
            updateMu({
                variables: {
                    ReviewId: review._id,
                    input: nextData,
                },
            });
    };

    const handleDelete = () => {
        if (!review) return;
        deleteMu({
            variables: {
                reviewId: review._id,
            },
        });
    };

    return {
        reviewerNameHook,
        reviewContentHook,
        rating,
        setRating,
        handleCreate,
        handleDelete,
        handleUpdate,
        imagesHook,
    };
};
