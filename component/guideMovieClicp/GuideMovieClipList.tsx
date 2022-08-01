import { Bold, isEmpty, JDalign } from "@janda-com/front";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Empty } from "../../atom/Empty";
import { AppContext } from "../../context/context";
import { ListInitOptions } from "../../hook/useListQuery";
import { useUserList } from "../../hook/useUser";
import {
    Fuser,
    LANGUAGES,
    userList,
    userListVariables,
    UserRole,
    _IUserFilter,
    _IUserSort,
    _ProductFilter,
    _ProductSort,
} from "../../types/api";
import { Locales, MapRegionKr } from "../../types/const";
import { TElements } from "../../types/interface";
import { genrateOption } from "../../utils/query";
import { randomArraySort } from "../../utils/shuffle";
import {
    HorizenGrider,
    IHorizenGriderProp,
} from "../horizenGrider/HorizenGrider";
import { mapRegion } from "../koreaMap/KoreaData";
import { ProductViewsLineHeader } from "../productViewCard/ProductViewsLineHeader";
import { GuideMovieClip } from "./GuideMovieClip";

interface IProp extends Partial<IHorizenGriderProp<Fuser>> {
    guides: Fuser[];
}

export const GuideMoviewClipList: React.FC<IProp> = ({ guides, ...props }) => {
    return (
        <HorizenGrider
            itemRedner={(item, props) => {
                return <GuideMovieClip user={item} {...props} />;
            }}
            items={guides}
            align={"auto"}
            wrap={props.align === "wrap"}
            {...props}
        />
    );
};

interface IGuideMovieCardsWithApi extends Omit<IProp, "guides"> {
    queryParam?: Partial<ListInitOptions<_IUserFilter, _IUserSort>>;
    queryControl?: genrateOption<userList, userListVariables>;
    randomSort?: boolean;
    Head?: TElements;
    videoRelease?: boolean;
}

export const GuideMovieCardsWithApi: React.FC<IGuideMovieCardsWithApi> = ({
    queryControl,
    queryParam,
    randomSort,
    Head,
    videoRelease,
    ...props
}) => {
    const { locale } = useContext(AppContext);
    const { items: users } = useUserList(
        {
            initialViewCount: 8,
            ...queryParam,
            fixingFilter: {
                isDeleted__not_eq: true,
                profileVideo__notNull: videoRelease ? undefined : "true",
                role__not_in: [UserRole.BUYER],
                langs__in: [(locale as LANGUAGES) || LANGUAGES.ko],
            },
            random: true,
        },
        queryControl
    );

    const randomSorted = randomArraySort([...users]);

    if (isEmpty(users)) return null;
    return (
        <div>
            {Head}
            <GuideMoviewClipList {...props} guides={randomSorted} />
        </div>
    );
};

interface IHyperProductGroupProp {
    hyper: string;
}

export const HyperRegionByGuideViewCarsGroup: React.FC<
    IHyperProductGroupProp
> = ({ hyper }) => {
    const { locale, push } = useRouter();
    const { s } = useContext(AppContext);
    const { items: guides } = useUserList({
        fixingFilter: {
            role__not_in: [UserRole.BUYER],
            isDeleted__not_eq: true,
            regions_hyper__eq: hyper,
            profileVideo__notNull: "true",
            langs__in: [(locale as LANGUAGES) || LANGUAGES.ko],
        },
        random: true,
    });

    const isKr = locale === Locales.ko;

    return (
        <JDalign mb>
            <ProductViewsLineHeader
                title={
                    (isKr ? MapRegionKr[hyper as mapRegion] : hyper) +
                    " " +
                    s("regionGuideTitle")
                }
                onSeeMore={() => {
                    push("/guides");
                }}
                description={s("regionGuideDescribe")}
            />
            <GuideMoviewClipList
                empty={<Empty msg={s("guideNotFoundInArea")} />}
                guides={guides}
            />
        </JDalign>
    );
};
