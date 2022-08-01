import React from "react";
import { JDalign, JDbadge, JDtypho } from "@janda-com/front";
import { JDicon } from "../../icons/Icons";
import dayjs from "dayjs";
import { TElements } from "@janda-com/front/dist/types/interface";
import { getDateDiffText } from "../../../utils/getDateDiffText";
import { FsystemNoti } from "../../../types/api";

export interface INotiLineProp extends FsystemNoti {}

export const NotiLine: React.FC<INotiLineProp> = ({
    content,
    createdAt,
    type,
}) => {
    return (
        <JDalign
            flex={{
                vCenter: true,
                between: true,
            }}
            className="JDnotiLine"
        >
            <JDalign
                className="JDnotiLine__contentWrap"
                flex={{
                    vCenter: true,
                }}
            >
                <JDicon mr="normal" size="small" icon="bell" />
                <div>
                    <JDtypho mr="normal" size="small">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        />
                    </JDtypho>
                </div>
            </JDalign>
            <JDtypho style={{ whiteSpace: "nowrap" }} size="tiny">
                {getDateDiffText(createdAt)}
            </JDtypho>
        </JDalign>
    );
};
