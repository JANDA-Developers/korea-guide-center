import {
    Bold,
    Flex,
    isLast,
    JDavatar,
    JDbadge,
    JDcard,
    Mb,
    Small,
    Tiny,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { Img } from "../../atom/Image";
import { Info } from "../../atom/Info";
import { AppContext } from "../../context/context";
import { Fuser } from "../../types/api";
import { DEFAULT_BG_IMG, DEFAULT_PROFILE_IMG } from "../../types/const";
import { yyyymmdd } from "../../utils/dateFormat";
import { GuideCircle } from "../guideCircle/GuideCircle";
import { GenderBade } from "../statusBadges/StatusBadges";

interface IProp {
    booker: Fuser;
}

export const BookerProfileCard: React.FC<IProp> = ({ booker }) => {
    const { s, l } = useContext(AppContext);
    const {
        name,
        createdAt,
        gender,
        nationality,
        myBookingInfoes,
        profileBgImage,
        profileImage,
    } = booker;
    return (
        <div>
            <Img
                className="userProfileCard__bgImg"
                width={270}
                height={140}
                src={profileBgImage?.uri || DEFAULT_BG_IMG}
            />
            <Mb />
            <div className="userProfileCard__profileZone">
                <GuideCircle
                    mb="tiny"
                    guideProfile={profileImage?.uri || DEFAULT_PROFILE_IMG}
                />
                <Bold>{name}</Bold>
                <Tiny mb color="grey2">
                    {yyyymmdd(createdAt)}
                </Tiny>
            </div>
            <Flex mb vCenter center column>
                <Info
                    mb
                    label={s("country")}
                    value={nationality || "정보없음"}
                />
                <Info
                    mb
                    label={s("gender")}
                    value={
                        gender ? (
                            <GenderBade mr="no" gender={gender} />
                        ) : (
                            "정보없음"
                        )
                    }
                />
                {myBookingInfoes && (
                    <Info
                        mb
                        label={s("bookerInfo")}
                        value={
                            <div style={{ maxHeight: 200, overflow: "auto" }}>
                                {myBookingInfoes.map((mybookInfo) => (
                                    <Small key={mybookInfo.tourCode} mb>
                                        {l(mybookInfo.tourTitle)}[
                                        {mybookInfo.tourCode}]
                                    </Small>
                                ))}
                            </div>
                        }
                    />
                )}
            </Flex>
        </div>
    );
};
