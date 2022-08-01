import {
    Bold,
    Flex,
    IJDalignProp,
    JDalign,
    JDavatar,
    Mr,
    Small,
    Tiny,
} from "@janda-com/front";
import React from "react";
import { getCommentSummary, useCommentManage } from "../../hook/useComment";
import { Fcomment } from "../../types/api";
import { DEFAULT_PROFILE_IMG } from "../../types/const";
import { getDateDiffText } from "../../utils/getDateDiffText";

interface IProp extends IJDalignProp {
    comment: Fcomment;
}

export const CommentViewer: React.FC<IProp> = ({ comment }) => {
    const { deleteAb, myComment, updateAb } = getCommentSummary(comment);
    const { handleUpdate, handleDelete } = useCommentManage();
    const { content, writerNickName, writerName, createdAt, writerProfileImg } =
        comment;

    return (
        <JDalign className="commentViewer">
            <Flex vCenter style={{ alignItems: "start" }}>
                <div>
                    <JDavatar
                        img={writerProfileImg?.uri || DEFAULT_PROFILE_IMG}
                    />
                </div>
                <Mr mr="small" />
                <div>
                    <Tiny flex={{ vCenter: true }}>
                        <JDalign mr>{writerNickName || writerName}</JDalign>
                        <Tiny color="grey3" weight={300}>
                            {getDateDiffText(createdAt)}
                        </Tiny>
                    </Tiny>
                    <Flex vCenter>
                        <Small mr>{content}</Small>
                        <Tiny
                            onClick={() => {
                                handleDelete(comment._id);
                            }}
                            hide={!deleteAb}
                            weight={600}
                            hover
                            color="error"
                            mr
                        >
                            삭제하기
                        </Tiny>
                        <Tiny
                            onClick={() => {
                                handleUpdate({
                                    commentId: comment._id,
                                    defaultMessage: comment.content,
                                });
                            }}
                            hide={!updateAb}
                            weight={600}
                            hover
                        >
                            수정하기
                        </Tiny>
                    </Flex>
                </div>
            </Flex>
        </JDalign>
    );
};
