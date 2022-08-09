import { ListInitOptions } from "../../hook/useListQuery";
import {
    Fuser,
    userList,
    userListVariables,
    _IUserFilter,
    _IUserSort,
} from "../../types/api";
import { TElements } from "../../types/interface";
import { genrateOption } from "../../utils/query";
import { IHorizenGriderProp } from "../horizenGrider/HorizenGrider";

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

const RegionGuidesPopular: React.FC<IGuideMovieCardsWithApi> = ({
    queryControl,
    queryParam,
    randomSort,
    Head,
    videoRelease,
    ...props
}) => {
    return null;
};

export default RegionGuidesPopular;
