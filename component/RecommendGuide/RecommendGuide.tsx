import { IHorizenGriderProp } from "../horizenGrider/HorizenGrider";
import {
    Fuser,
    _IUserSort,
    _IUserFilter,
    userList,
    userListVariables,
} from "../../types/api";
import { ListInitOptions } from "../../hook/useListQuery";
import { genrateOption } from "../../utils/query";
import { TElements } from "../../types/interface";
import RecommendGuideSlider from "./RecommendGuideSlider";
import { useContext } from "react";
import { AppContext } from "../../context/context";

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
    const { s } = useContext(AppContext);
    return (
        <div className="mb-40">
            <h5 className="slider__RecommendGuideSectionTitle">
                {s("mainRecommendGuides")}
            </h5>
            <RecommendGuideSlider randomSort />
        </div>
    );
};

export default RecommendGuide;
