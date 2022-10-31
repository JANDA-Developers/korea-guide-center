import {
    Bold,
    isLast,
    JDalign,
    JDhorizen,
    JDtypho,
    Mr,
} from "@janda-com/front";
import { IDiv, TElements } from "@janda-com/front/dist/types/interface";
import React from "react";
import { cutStr } from "../../utils/cutStr";
import { stripHtml } from "../../utils/stripHtml";
import { NewBadge } from "../statusBadges/StatusBadges";

export interface ISummaryBlogLinsProp extends Omit<IDiv, "title"> {
    title: TElements;
    description: TElements;
    isLast?: boolean;
    key?: string;
    createdAt?: Date;
    strCut?: number;
    strCutMb?: number;
}

export const SummaryBlogLine: React.FC<ISummaryBlogLinsProp> = ({
    description,
    title,
    createdAt,
    isLast,
    strCut = 220,
    strCutMb = 100,
    ...props
}) => {
    const renderDescripton =
        typeof description === "string"
            ? cutStr(stripHtml(description), true ? strCutMb : strCut)
            : description;
    return (
        <JDalign className="SummaryBlogLine" {...props}>
            <Bold flex mb>
                {title} <Mr /> {createdAt && <NewBadge createdAt={createdAt} />}
            </Bold>
            <JDtypho size="small">{renderDescripton}</JDtypho>
            {isLast || <JDhorizen margin={3} />}
        </JDalign>
    );
};

export interface ISummaryBlogLinesProps {
    lines: ISummaryBlogLinsProp[];
    viewMore?: TElements;
    onViewMore?: () => void;
}

export const SumamryBlogLines: React.FC<ISummaryBlogLinesProps> = ({
    lines,
    viewMore,
    onViewMore,
}) => {
    return (
        <div>
            {lines.map((line, index) => (
                <SummaryBlogLine
                    isLast={isLast(index, lines)}
                    {...line}
                    key={(line.key || "") + index}
                />
            ))}
            {viewMore}
        </div>
    );
};
