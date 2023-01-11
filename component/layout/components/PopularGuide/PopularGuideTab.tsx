import { isEmpty } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { ListInitOptions } from "../../../../hook/useListQuery";
import { useUserList } from "../../../../hook/useUser";
import {
    Fuser,
    LANGUAGES,
    userList,
    userListVariables,
    userList_UserList_items,
    UserRole,
    _IUserFilter,
    _IUserSort,
} from "../../../../types/api";
import { genrateOption } from "../../../../utils/query";
import { randomArraySort } from "../../../../utils/shuffle";
import { IHorizenGriderProp } from "../../../horizenGrider/HorizenGrider";
import PopularGuideItem from "./PopularGuideItem";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

interface IProp extends Partial<IHorizenGriderProp<Fuser>> {
    guides: Fuser[];
}

interface IGuideMovieCardsWithApi extends Omit<IProp, "guides"> {
    queryParam?: Partial<ListInitOptions<_IUserFilter, _IUserSort>>;
    queryControl?: genrateOption<userList, userListVariables>;
    randomSort?: boolean;
    Head?: TElements;
    videoRelease?: boolean;
}

const options = {
    stageOuterClass: "owl-stage-outer owl-height",
    responsiveClass: true,
    items: 4,
    dots: false,
    nav: true,
    navText: [
        `<span><svg width="100px" height="100px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
  </svg></span>`,
        `<span><svg width="100px" height="100px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
  </svg></span>`,
    ],
    responsive: {
        0: {
            items: 1,
            margin: -100,
        },
        560: {
            items: 2,
        },
        800: {
            items: 3,
        },
        1200: {
            items: 4,
        },
    },
};

const PopularGuideTab: React.FC<IGuideMovieCardsWithApi> = ({
    queryControl,
    queryParam,
    randomSort,
    Head,
    videoRelease,
    ...props
}) => {
    const { locale } = useRouter();
    const { items: users } = useUserList(
        {
            initialViewCount: 8,
            ...queryParam,
            fixingFilter: {
                isDeleted__not_eq: true,
                profileVideo__notNull: videoRelease ? undefined : "true",
                role__not_in: [UserRole.BUYER, UserRole.ADMIN],
                langs__in: [(locale as LANGUAGES) || LANGUAGES.ko],
            },
            random: true,
        },
        queryControl
    );

    const data: userList_UserList_items[] = users;

    // const randomSorted = randomArraySort([...users]);

    if (isEmpty(data)) return null;

    return (
        <OwlCarousel
            id="tab-AllTours"
            className="owl-carousel owl-theme owl-tours owl-opacify active"
            {...options}
        >
            {data.map((item) => {
                return (
                    <PopularGuideItem
                        key={item?._id!}
                        _id={item?._id!}
                        name={item?.name!}
                        image={item?.profileMediumImage?.uri!}
                        introduce={item?.introduce!}
                        categorys={item?.guideCategory!}
                        role={item?.role!}
                    />
                );
            })}
        </OwlCarousel>
    );
};

export default React.memo(PopularGuideTab);
