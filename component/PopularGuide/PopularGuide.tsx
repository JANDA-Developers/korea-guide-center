import { useContext } from "react";
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
} from "../../types/api";
import { TElements } from "../../types/interface";
import { genrateOption } from "../../utils/query";
import { randomArraySort } from "../../utils/shuffle";
import { IHorizenGriderProp } from "../horizenGrider/HorizenGrider";
import PopularGuideList from "./PopularGuideList";

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

const PopularGuide: React.FC<IGuideMovieCardsWithApi> = ({
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

    return <PopularGuideList guides={randomSorted} />;
};

export default PopularGuide;
