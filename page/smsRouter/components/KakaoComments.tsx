import React from "react";
import {
    FkakaoTemplate_comments,
    KakaoTemplateInspStatus,
} from "../../../types/api";
import dayjs from "dayjs";
import { Tiny } from "@janda-com/front";
import { SummaryBlogLine } from "../../../component/summaryLine/SummaryBlogLines";
import { KAKAOTemplateInspStatusKr } from "../../../types/const";

interface IProp {
    comments: FkakaoTemplate_comments[];
}

export const KakaoComments: React.FC<IProp> = ({ comments }) => {
    return (
        <div>
            {comments.map((comment) => (
                <div>
                    <Tiny mb="small">{comment.cdate}</Tiny>
                    <SummaryBlogLine
                        strCut={9999}
                        strCutMb={9999}
                        description={comment.commentContent}
                        title={
                            KAKAOTemplateInspStatusKr[
                                comment.status as KakaoTemplateInspStatus
                            ]
                        }
                        createdAt={dayjs(comment.cdate).toDate()}
                    />
                </div>
            ))}
        </div>
    );
};
