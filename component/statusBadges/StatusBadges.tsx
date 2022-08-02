import { Flex, isLast, JDbadge, JDColor } from "@janda-com/front";
import { IJDbadge } from "@janda-com/front/dist/components/badge/Badge";
import React from "react";
import dayjs from "dayjs";
import { getDateDiffText } from "../../utils/getDateDiffText";
import {
    BookingStatus,
    Gender,
    ProductStatus,
    ProductType,
    SettlementStatus,
    Status,
    TourStatus,
} from "../../types/api";
import {
    BookinGStatusColor,
    BookingStatusKr,
    GnederToKr,
    ProductStatusColor,
    ProductStatusKr,
    SettlementStatusColor,
    SettlementStatusKr,
    TourStatusColor,
    TourStatusKr,
} from "../../utils/enumToKr";
import { Circle } from "../circle/Circle";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { QuestionTypes } from "../../types/board";
import { TElements } from "../../types/interface";
import { useS4 } from "../../hook/useUniqkey";
import BadgeDetail from "./BadgeDetail";

interface IProp {
    disabled: boolean | null | undefined;
}

export const DisableBadge: React.FC<IProp> = ({ disabled }) => {
    return (
        <JDbadge
            className="disabledBadge"
            thema={disabled ? "grey2" : "primary"}
        >
            {disabled ? "비활성" : "활성"}
        </JDbadge>
    );
};

interface IStatusBadgeProp<S = Status> extends IJDbadge {
    status?: S | null;
}

interface INewBadgeProp extends IJDbadge {
    createdAt: Date;
    newHours?: number;
}

export const NewBadge: React.FC<INewBadgeProp> = ({
    createdAt,
    newHours = 12,
    ...props
}) => {
    const diffHour = dayjs().diff(createdAt, "hour");
    const isNew = diffHour < newHours;

    if (!isNew) return null;
    return (
        <JDbadge tooltip={getDateDiffText(createdAt)} thema={"new"} {...props}>
            New
        </JDbadge>
    );
};

interface IPropp extends Partial<IJDbadge> {
    status?: ProductStatus | null;
}

export const ProductStatusBadge: React.FC<IPropp> = ({ status, ...props }) => {
    if (!status) return null;
    return (
        <JDbadge thema={ProductStatusColor[status]} {...props}>
            {ProductStatusKr[status]}
        </JDbadge>
    );
};

interface ITourStatusBadge extends Partial<IJDbadge> {
    isPast?: boolean;
    status?: TourStatus | null;
}

export const TourStatusBadge: React.FC<ITourStatusBadge> = ({
    isPast,
    status,
    ...props
}) => {
    if (!status) return null;
    if (isPast) return null;
    return (
        <JDbadge thema={TourStatusColor[status]} {...props}>
            {TourStatusKr[status]}
        </JDbadge>
    );
};

interface ITourStatusBadge extends Partial<IJDbadge> {
    representive?: boolean;
}

export const RepresentiveTourBadge: React.FC<ITourStatusBadge> = ({
    representive,
    ...props
}) => {
    if (!representive) return null;
    return (
        <JDbadge thema={"positive"} {...props}>
            대표회차
        </JDbadge>
    );
};

interface IGenderBadgeProp extends Partial<IJDbadge> {
    gender?: Gender;
}

export const GenderBade: React.FC<IGenderBadgeProp> = ({ gender }) => {
    if (!gender) return null;
    return (
        <Circle className="GenderBadge" padding={1}>
            {GnederToKr[gender]}
        </Circle>
    );
};

interface IBookingStatusBadge extends Partial<IJDbadge> {
    status?: BookingStatus;
}

export const BookingStatusBadge: React.FC<IBookingStatusBadge> = ({
    status,
    ...props
}) => {
    if (!status) return null;
    return (
        <JDbadge {...props} thema={BookinGStatusColor[status]}>
            {BookingStatusKr[status]}
        </JDbadge>
    );
};

interface IStopBadge extends Partial<IJDbadge> {
    stop?: boolean;
}

export const StopBadge: React.FC<IStopBadge> = ({ stop }) => {
    if (!status) return null;
    return (
        <JDbadge thema={stop ? "error" : "grey3"}>
            {stop ? " 정지됨" : "활동중"}
        </JDbadge>
    );
};

interface IBdagesProps<T> extends Partial<IJDbadge> {
    items: T[];
    children: (item: T) => TElements;
}

export const Badges = <_, T>({
    // 기존 뱃지 스타일
    items,
    children,
    className,
    ...props
}: IBdagesProps<T>) => {
    const uniqKey = useS4();
    return (
        <Flex vCenter center wrap className={className}>
            {items?.map((item, index) => (
                <JDbadge
                    style={{ opacity: "0.7" }}
                    className="textTransformClear"
                    mb="superTiny"
                    key={uniqKey + index}
                    mr={isLast(index, items) ? "no" : "normal"}
                    thema="point"
                    {...props}
                >
                    {children(item)}
                </JDbadge>
            ))}
        </Flex>
    );
};

// 상품페이지 뱃지 스타일
export const Badges2 = <_, T>({
    items,
    children,
    className,
    ...props
}: IBdagesProps<T>) => {
    return (
        <Flex vCenter wrap className={className} style={{ fontSize: "13px" }}>
            {items?.map((item, index) => (
                <BadgeDetail name={children(item)}></BadgeDetail>
            ))}
        </Flex>
    );
};

interface ITimeBadgeProp {
    tourDate: Date;
}

export const TimeBadge: React.FC<ITimeBadgeProp> = ({ tourDate }) => {
    const Dday = dayjs(tourDate).diff(new Date(), "days");
    const isPast = dayjs(tourDate).isBefore(new Date());
    return (
        <JDbadge thema={isPast ? "grey2" : "new"}>
            {isPast ? "지나간" : `D-${Dday}`}
        </JDbadge>
    );
};

interface ISettlementStatusBadge extends Partial<IJDbadge> {
    status?: SettlementStatus | null;
}

export const SettlementStatusBadge: React.FC<ISettlementStatusBadge> = ({
    status,
    ...props
}) => {
    if (!status) return null;
    return (
        <JDbadge thema={SettlementStatusColor[status]} {...props}>
            {SettlementStatusKr[status]}
        </JDbadge>
    );
};

interface IMaxiMumMemberBadge extends Partial<IJDbadge> {
    minMember: number;
    maxMember: number;
    currentMember: number;
}

export const MaxiMumMemberBadge: React.FC<IMaxiMumMemberBadge> = ({
    currentMember,
    maxMember,
    minMember,
    ...props
}) => {
    const isClosed = maxMember <= currentMember;
    const isClosing = maxMember <= currentMember + maxMember * 0.2; // 80%^
    const under = currentMember < minMember; //

    let BadgeColor: JDColor;
    let BadgeText: string = "";

    if (isClosing) {
        BadgeColor = "warn";
        BadgeText = "마감임박";
    }

    if (isClosed) {
        BadgeColor = "error";
        BadgeText = "인원마감";
    }

    if (under) {
        BadgeColor = "new";
        BadgeText = "인원미달";
    }

    if (!isClosing && !isClosed && !under) {
        BadgeColor = "primary";
        BadgeText = "인원충족";
    }

    return (
        <JDbadge thema={BadgeColor!} {...props}>
            {BadgeText}
        </JDbadge>
    );
};

interface IProductTypeBadges {
    type: ProductType[];
}

export const ProductTypeBadges: React.FC<IProductTypeBadges> = ({ type }) => {
    const isKpop = type.includes(ProductType.KPOP);
    const isLocal = type.includes(ProductType.LOCAL);

    return <Badges items={type}>{(type) => type}</Badges>;
};

interface IQuestionTypeBadge extends Partial<IJDbadge> {
    questionType: QuestionTypes;
}

export const QuestionTypeBadge: React.FC<IQuestionTypeBadge> = ({
    questionType,
    ...props
}) => {
    const { s } = useContext(AppContext);
    const message = s(questionType);
    if (!message) return null;
    return <JDbadge {...props}>{message}</JDbadge>;
};
