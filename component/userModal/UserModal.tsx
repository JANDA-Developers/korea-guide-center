import {
    autoHypen,
    Bold,
    Flex,
    isEmpty,
    IUseModal,
    JDalign,
    JDavatar,
    JDbox,
    JDcard,
    JDhorizen,
    JDlabel,
    JDmodal,
    Mr,
} from "@janda-com/front";
import React from "react";
import { Info } from "../../atom/Info";
import { getCountryName } from "../../utils/countury";
import { useBookingList } from "../../hook/useBooking";
import { useTourList } from "../../hook/useTour";
import { useuserFindById } from "../../hook/useUser";
import { BookingTable } from "../../page/booking/components/BookingTable";
import { MyChatRooms } from "../../page/my/ChatRooms";
import { TourTable } from "../../page/tour/components/TourTable";
import { Fuser, UserRole } from "../../types/api";
import { DEFAULT_PROFILE_IMG, UserTypeKr } from "../../types/const";
import { yyyymmdd } from "../../utils/dateFormat";
import { GnederToKr, langToKr } from "../../utils/enumToKr";
import { ChatRoomViewCards } from "../chatRoom/ChatRoomViewCard";
import { FileBox } from "../filebox/FileBox";
import { GuideCircle } from "../guideCircle/GuideCircle";
import { CardHead } from "../modalHead/ModalHead";
import { Badges } from "../statusBadges/StatusBadges";
import { UserProfileCard } from "../userProfileCard/UserProfileCard";
import { FilingCabinet } from "./component/FilingCabinet";

export interface IUserModalInfo {
    userId: string;
    item?: Fuser;
}

interface IProp {
    item?: Fuser;
    modalHook: IUseModal<IUserModalInfo>;
}

export const getUserSummary = (user?: Fuser) => {
    const isGuide = user?.role === UserRole.GUIDE;
    const isMaster = user?.role === UserRole.ADMIN;
    const isBooker = user?.role === UserRole.BUYER;

    const itsGuideAppling = user?.applyAt && user?.role === UserRole.BUYER;

    return { isBooker, isMaster, isGuide, itsGuideAppling };
};

export const UserModal: React.FC<IProp> = ({ modalHook, item }) => {
    const infoItem = modalHook.info?.item;
    const Item = item || infoItem;
    if (!Item) return null;

    const { items: tours, paginatorHook: tourPaginatorHook } = useTourList({
        fixingFilter: {
            productInfomation_guideId__eq: Item._id,
        },
    });
    const { items: bookings, paginatorHook: bookingPaginatorHook } =
        useBookingList({
            fixingFilter: {
                buyerId__eq: Item._id,
            },
        });
    const {
        _id,
        introduce,
        adminMemo,
        bankImage,
        chatRoomIds,
        createdAt,
        email,
        guideCategory,
        guideLicenses,
        company,
        isOauth,
        regions,
        resginData,
        profileImage,
        profileBgImage,
        role,
        stop,
        myWishList,
        gender,
        langs,
        location,
        birthDate,
        products,
        chatWiths,
        countryCode,
        name,
        nickName,
        passportNumber,
        myProductInfoes,
        myBookingInfoes,
        myTourInfoes,
        phoneNumber,
    } = Item;
    const { isBooker, isGuide, isMaster, itsGuideAppling } =
        getUserSummary(Item);
    const targetName = nickName || name;
    return (
        <JDmodal
            {...modalHook}
            head={{
                element: <CardHead title={targetName + "님의 정보"} />,
            }}
        >
            {/* 일반 공통정보 */}
            <Info
                mb
                label="유저타입"
                value={<Bold>{UserTypeKr[role || UserRole.BUYER]}</Bold>}
            />
            <Flex oneone mb>
                <JDcard mode="border">
                    <Bold mb>
                        <JDavatar
                            mr
                            img={profileImage?.uri || DEFAULT_PROFILE_IMG}
                        />
                        유저정보
                    </Bold>
                    <Flex wrap>
                        <Info mr="large" mb label="이메일" value={email} />
                        <Info
                            mr="large"
                            mb
                            label="전화번호"
                            value={autoHypen(phoneNumber || "")}
                        />
                        <Info mr="large" mb label="이름" value={name || ""} />
                        <Info
                            mr="large"
                            mb
                            hide={!gender}
                            label="성별"
                            value={gender ? GnederToKr[gender] : ""}
                        />
                        <Info
                            mr="large"
                            mb
                            label="가입일"
                            value={yyyymmdd(createdAt)}
                        />
                        <Info
                            mr="large"
                            mb
                            hide={!countryCode}
                            label="국가정보"
                            value={getCountryName(countryCode)}
                        />
                        <Info
                            mr="large"
                            mb
                            hide={!birthDate}
                            label="생년월일 "
                            value={yyyymmdd(birthDate)}
                        />
                        <Info
                            mr="large"
                            mb
                            hide={!passportNumber}
                            label="여권번호"
                            value={passportNumber || ""}
                        />
                    </Flex>
                </JDcard>

                <JDcard hide={!resginData?.resign}>
                    <Bold mb>탈퇴정보</Bold>
                    <div>
                        <Info
                            mr
                            label="탈퇴일"
                            value={yyyymmdd(resginData?.resignDate)}
                        />
                        <Info
                            hide={!resginData?.resign}
                            label="탈퇴사유"
                            value={resginData?.resignReason}
                        />
                    </div>
                </JDcard>
                <JDcard hide={!isGuide && !itsGuideAppling} mode="border">
                    <Bold mb>가이드정보</Bold>
                    {/* 가이드 정보 */}
                    <Flex>
                        <UserProfileCard user={Item} />
                        <Mr />
                        {/* 투어 상품 정보 */}
                        <FilingCabinet user={Item} />
                    </Flex>
                </JDcard>
            </Flex>
            <JDalign hide={isBooker} mb="huge">
                <Bold mb>작성 투어(회차)정보</Bold>
                <TourTable paginationHook={tourPaginatorHook} tours={tours} />
            </JDalign>

            <JDalign mb="huge">
                <Bold mb>예약 정보</Bold>
                <BookingTable
                    paginationHook={bookingPaginatorHook}
                    bookings={bookings}
                />
            </JDalign>

            <JDalign mb="huge">
                <Bold mb>대화목록</Bold>
                <ChatRoomViewCards
                    queryParam={{
                        fixingFilter: {
                            participantes__in: Item._id,
                        },
                    }}
                />
            </JDalign>
        </JDmodal>
    );
};

export const UserModalWrap: React.FC<IProp> = ({ modalHook }) => {
    const userId = modalHook.info?.userId;
    if (!userId) return null;
    const { item } = useuserFindById(userId);
    return <UserModal item={item} modalHook={modalHook} />;
};
