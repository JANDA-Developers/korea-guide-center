import {
    Bold,
    Flex,
    JDalign,
    JDbadge,
    JDtypho,
    Small,
    Thin,
} from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React from "react";
import { LineCutter } from "../../../../atom/LineCutter";
import { boardDocList_BoardDocList_items } from "../../../../types/api";
import { yyyymmddHHmm } from "../../../../utils/dateFormat";
import { hideNamePart } from "../../../../utils/name";
import { getDateDiffText } from "../../../../utils/getDateDiffText";
import { QuestionTypeBadge } from "../../../../component/statusBadges/StatusBadges";
import { yyyymmdd } from "../../../../utils/yyyymmdd";

interface IProp {
    withName?: boolean;
    items: boardDocList_BoardDocList_items[];
    handleView: (item: boardDocList_BoardDocList_items) => void;
    ContentRender?: (item: boardDocList_BoardDocList_items) => TElements;
}

export const BoardDocLines: React.FC<IProp> = ({
    withName,
    items,
    handleView,
    ContentRender,
}) => {
    return (
        <JDalign mb="huge">
            {items.map((item) => (
                <Flex
                    onClick={() => {
                        handleView(item);
                    }}
                    className="boardDocLine"
                    vCenter
                    key={item._id}
                >
                    <div className="boardDocLine__inner">
                        <Thin
                            size="tiny"
                            className="boardDocLine__createdAt"
                            mr="large"
                            flex
                        >
                            <Flex>
                                <QuestionTypeBadge
                                    size="tiny"
                                    thema="grey3"
                                    questionType={item.type as any}
                                    mr
                                />
                                {yyyymmdd(item.createdAt)}
                            </Flex>
                        </Thin>
                        <JDtypho
                            className="textTransformClear"
                            flex={{ between: true }}
                            hover
                            mr="large"
                        >
                            <div>
                                {ContentRender ? (
                                    ContentRender(item)
                                ) : (
                                    <LineCutter line={2}>
                                        {item.title || "타이틀 없음"}
                                    </LineCutter>
                                )}
                            </div>
                            {withName && (
                                <Small color="grey2">
                                    {hideNamePart(item.authorName)}
                                </Small>
                            )}
                        </JDtypho>
                    </div>
                </Flex>
            ))}
        </JDalign>
    );
};
