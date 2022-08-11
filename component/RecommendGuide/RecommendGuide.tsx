import { useRouter } from "next/router";
import styled from "styled-components";
import { useUserList } from "../../hook/useUser";
import { IHorizenGriderProp } from "../horizenGrider/HorizenGrider";
import {
    Fuser,
    _IUserSort,
    _IUserFilter,
    userList,
    LANGUAGES,
    UserRole,
    userListVariables,
} from "../../types/api";
import { ListInitOptions } from "../../hook/useListQuery";
import { genrateOption } from "../../utils/query";
import { TElements } from "../../types/interface";
import RecommendGuideSlider from "./RecommendGuideSlider";
import { JDcontainer, WindowSize } from "@janda-com/front";

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

const RecommendGuide: React.FC<IGuideMovieCardsWithApi> = ({
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
                role__not_in: [UserRole.BUYER],
                langs__in: [(locale as LANGUAGES) || LANGUAGES.ko],
            },
            random: true,
        },
        queryControl
    );

    const containerSize = WindowSize.full;

    return (
        <div
            style={{
                marginBottom: "50px",
            }}
        >
            <h1 className="slider__RecommendGuideSectionTitle">
                <span
                    style={{
                        color: "#D0242B",
                    }}
                >
                    Recommend
                </span>{" "}
                Guides
            </h1>
            <RecommendGuideSlider randomSort />
        </div>
    );
};

export default RecommendGuide;
