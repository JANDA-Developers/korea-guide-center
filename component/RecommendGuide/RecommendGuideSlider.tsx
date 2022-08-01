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

    const rowVariants = {
        hidden: (isBack: boolean) => ({
            x: isBack ? -width : width,
        }),
        visible: {
            x: 0,
        },
        exit: (isBack: boolean) => ({ x: isBack ? width : -width }),
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

    return (
        <>
            <div className="slider__LongSliderContainer">
                <div className="slider__LongSliderLeftArrowContainer">
                    <button
                        className="slider__LongSliderLeftArrow"
                        onClick={onClickPrev}
                        style={{
                            display: index === 0 ? "none" : "block",
                        }}
                    >
                        <svg
                            width="40"
                            height="40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                </div>
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
                        <div className="slider__LongSliderEmptyBox" />
                        <RecommendGuideSliderItem
                            item={data}
                            offset={offset}
                            index={index}
                        />
                        <div className="slider__LongSliderEmptyBox" />
                    </motion.div>
                </AnimatePresence>
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
                        <svg
                            width="40"
                            height="40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div style={{ width: "100%", height: "35rem" }}></div>
        </>
    );
};

export default RecommendGuideSlider;
