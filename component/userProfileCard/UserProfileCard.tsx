import { Bold, Flex, Mb, Tiny } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { Img } from "../../atom/Image";
import { Info } from "../../atom/Info";
import { AppContext } from "../../context/context";
import { useuserFindById } from "../../hook/useUser";
import { Fuser, UserRole } from "../../types/api";
import { DEFAULT_BG_IMG } from "../../types/const";
import { IDiv } from "../../types/interface";
import { yyyymmdd } from "../../utils/dateFormat";
import { GuideCircle } from "../guideCircle/GuideCircle";
import { Badges } from "../statusBadges/StatusBadges";
import { BookerProfileCard } from "./BookerProfileCard";

interface IUserProfileCardProp extends IDiv {
    user: Fuser;
    withOutImg?: boolean;
}

export const UserProfileCard: React.FC<IUserProfileCardProp> = ({
    user,
    className,
    withOutImg,
    ...props
}) => {
    const { s, l } = useContext(AppContext);
    const {
        profileBgImage,
        profileImage,
        nickName,
        langs,
        role,
        guideCategory,
        guideLicenses,
        createdAt,
        regions,
    } = user;
    const isBooker = role === UserRole.BUYER;
    return (
        <div className={`userProfileCard ${className}`} {...props}>
            {isBooker ? (
                <BookerProfileCard booker={user} />
            ) : (
                <div>
                    {!withOutImg && (
                        <div>
                            <Img
                                className="userProfileCard__bgImg"
                                width={270}
                                height={140}
                                src={profileBgImage?.uri || DEFAULT_BG_IMG}
                            />
                            <Mb mb="huge" />
                        </div>
                    )}
                    {!withOutImg && (
                        <div className="userProfileCard__profileZone">
                            <GuideCircle
                                guideNickName={user.nickName || ""}
                                guideId={user._id}
                                mb="tiny"
                                guideProfile={profileImage?.uri}
                            />
                            <Bold>{nickName}</Bold>
                            <Tiny mb color="grey2">
                                {yyyymmdd(createdAt)}
                            </Tiny>
                        </div>
                    )}
                    <Flex mb vCenter center column>
                        <Info
                            mb
                            label={s("workArea")}
                            value={
                                <Badges items={regions || []}>
                                    {(region) => l(region.label)}
                                </Badges>
                            }
                        />
                        <Info
                            mb
                            label={s("useLanguage")}
                            value={
                                <Badges items={langs}>
                                    {(item) => s(item)}
                                </Badges>
                            }
                        />
                        {guideCategory && (
                            <Info
                                mb
                                label={s("guideType")}
                                value={
                                    <Badges items={guideCategory}>
                                        {(guideCat) => l(guideCat.label)}
                                    </Badges>
                                }
                            />
                        )}
                    </Flex>
                </div>
            )}
        </div>
    );
};

interface IUserProfileCardPropWrap extends IDiv {
    userId: string;
}

export const UserProfileCardApi: React.FC<IUserProfileCardPropWrap> = ({
    userId,
    ...props
}) => {
    const { item: user } = useuserFindById(userId);
    if (!user) return null;
    return <UserProfileCard user={user} {...props} />;
};
