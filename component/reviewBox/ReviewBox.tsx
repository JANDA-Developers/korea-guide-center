import {
    Bold,
    Flex,
    JDalign,
    JDbutton,
    JDhorizen,
    JDicon,
    Mr,
    Small,
    Tiny,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { Img } from "../../atom/Image";
import { AppContext } from "../../context/context";
import { Freview } from "../../types/api";
import { TElements } from "../../types/interface";
import { yyyymmdd } from "../../utils/dateFormat";
import { CommentViewer } from "../commentView/CommentView";
import { RatingStar } from "../rating/Rating";

interface IProp {
    review: Freview;
    Controller?: (review: Freview) => TElements | null;
}

export const ReviewBox: React.FC<IProp> = ({ review, Controller }) => {
    const { imgSliderModalHook, l } = useContext(AppContext);
    const {
        images,
        title,
        createdAt,
        contents,
        reviewerName,
        reviewerNickName,
        tourTitle,
        tourCode,
        rating,
    } = review;
    const img = images?.[0];
    const hasMore = (images?.length || 0) > 1;
    return (
        <div className="reviewBox">
            <Small className="reviewBox__tourInfo" weight={600} mb="small">
                {l(tourTitle)} [{tourCode}]
            </Small>
            <Flex vCenter>
                <RatingStar readonly initialRating={rating} />
                <Mr mr="small" />
                <Bold mr size="small">
                    {conceilName(reviewerName)}
                </Bold>
                <Tiny flex={{ vCenter: true }} color="grey3" weight={300}>
                    <JDicon mr="tiny" icon="historyWatch" />
                    {yyyymmdd(createdAt)}
                </Tiny>
            </Flex>
            <Flex vCenter style={{ alignItems: "start" }}>
                {img && (
                    <JDalign className="reviewBox__imgBox" mr>
                        <Img
                            onClick={() => {
                                imgSliderModalHook.openModal({
                                    images: images?.map((img) => img?.uri) || [
                                        img.uri,
                                    ],
                                    width: 400,
                                    height: 300,
                                });
                            }}
                            placeholder="empty"
                            blurDataURL={undefined}
                            objectFit="none"
                            width={50}
                            height={50}
                            src={img.uri || ""}
                        />
                        {hasMore && (
                            <Tiny className="reviewBox__imgHasMore">
                                +{images?.length}
                            </Tiny>
                        )}
                    </JDalign>
                )}
                <Small mr>{contents}</Small>
                {Controller?.(review)}
            </Flex>
            <div>
                {review.recentComment.map((rc) => (
                    <div className={"reviewBox__comment"}>
                        <JDhorizen margin={1} />
                        <CommentViewer key={rc._id} comment={rc} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const conceilName = (name: string) => {
    const first = name.slice(0, 1);
    return first + "**";
};
