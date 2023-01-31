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
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

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
    margin: 40,
    items: 4,
    dots: false,
    nav: true,
    navText: [
        `<span><svg width="50px" height="100px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
  </svg></span>`,
        `<span><svg width="50px" height="100px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
  </svg></span>`,
    ],
    responsive: {
        0: {
            items: 2,
            margin: 200,
        },
        300: {
            items: 2,
            margin: 250,
        },
        400: {
            items: 2,
            margin: 200,
        },
        560: {
            items: 2,
            margin: -100,
        },
        600: {
            items: 2,
            margin: 5,
        },
        688: {
            items: 2,
            margin: -100,
        },
        700: {
            items: 2,
            margin: -200,
        },
        800: {
            items: 3,
            margin: 20,
        },
        1024: {
            items: 3,
            margin: -100,
        },
        1280: {
            items: 4,
            margin: -50,
        },
        1400: {
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
            initialViewCount: 20,
            ...queryParam,
            fixingFilter: {
                isDeleted__not_eq: true,
                profileVideo__notNull: "true",
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
