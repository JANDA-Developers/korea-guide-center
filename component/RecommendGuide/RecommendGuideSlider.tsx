import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
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
import { userList_UserList_items } from "../../types/api";
import { useRouter } from "next/router";
import RecommendGuideSliderItem from "./RecommendGuideSliderItem";
import RightArrowIcon from "../../icons/RightArrowIcon";
import LeftArrowIcon from "../../icons/LeftArrowIcon";
import { randomArraySort } from "../../utils/shuffle";

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

const offset = 4;

const RecommendGuideSlider: React.FC<IGuideMovieCardsWithApi> = ({
    queryControl,
    queryParam,
    randomSort,
    Head,
    videoRelease,
    ...props
}) => {
    const { width } = useWindowSize();
    const { locale } = useRouter();

    let w = width * 0.75;

    const rowVariants = {
        hidden: (isBack: boolean) => ({
            x: isBack ? -w : w,
        }),
        visible: {
            x: 0,
        },
        exit: (isBack: boolean) => ({ x: isBack ? w : -w }),
    };

    const onClickNext = () => {
        if (leaving) return;
        setLeaving(true);
        setBack(false);
        const maxIndex = Math.ceil(data.length / offset) - 1;
        setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    };

    const onClickPrev = () => {
        if (leaving) return;
        if (index !== 0) {
            setLeaving(true);
            setBack(true);
        }
        setIndex((prev) => (prev === 0 ? 0 : prev - 1));
    };

    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [back, setBack] = useState(false);

    const toggleLeaving = () => setLeaving(false);

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

    const data: userList_UserList_items[] = users;

    // const randomSorted = randomArraySort([...users]);

    return (
        <div className="slider__sliderContainer">
            <div className="slider__LongSliderLeftArrowContainer">
                <button
                    className="slider__LongSliderLeftArrow"
                    onClick={onClickPrev}
                    style={{
                        display: index === 0 ? "none" : "block",
                    }}
                >
                    <LeftArrowIcon />
                </button>
            </div>
            <div className="slider__LongSliderContainer">
                <div className="slider__LongSliderContentArea">
                    <AnimatePresence
                        initial={false}
                        custom={back}
                        onExitComplete={toggleLeaving}
                    >
                        <motion.div
                            className="slider__LongSliderRow"
                            custom={back}
                            key={index}
                            variants={rowVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ type: "tween", duration: 0.5 }}
                        >
                            <RecommendGuideSliderItem
                                item={data}
                                offset={offset}
                                index={index}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div className="slider__LongSliderRightArrowContainer">
                <button
                    onClick={onClickNext}
                    className="slider__LongSliderRightArrow"
                    style={{
                        display:
                            index === Math.ceil(data.length / offset) - 1
                                ? "none"
                                : "block",
                    }}
                >
                    <RightArrowIcon />
                </button>
            </div>
        </div>
    );
};

export default RecommendGuideSlider;
