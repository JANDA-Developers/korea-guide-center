import { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
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
import { randomArraySort } from "../../utils/shuffle";
import { Paths } from "../../pages/index[depre]";
import { AppContext } from "../../context/context";
import Section from "../MultiCarousel/Section";
import MultiRecommendGuideCarousel from "../MultiCarousel/MultiRecommendGuideCarousel";

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
    const router = useRouter();

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
                role__not_in: [UserRole.BUYER, UserRole.ADMIN],
                langs__in: [(locale as LANGUAGES) || LANGUAGES.ko],
            },
            random: true,
        },
        queryControl
    );

    const data: userList_UserList_items[] = users;

    console.log(data);

    const randomSorted = randomArraySort([...users]);

    console.log(randomSorted);

    const SliderVariants = {
        hover: {
            y: -5,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            cursor: "pointer",
        },
    };

    const ItemContainer = useRef<HTMLDivElement>(null);

    const { l } = useContext(AppContext);

    return (
        <>
            {width <= 1025 ? (
                <motion.div
                    ref={ItemContainer}
                    className="slider__LongSliderContainer"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={ItemContainer}
                        className="slider__LongSliderContentArea"
                    >
                        {data.map((i) => (
                            <motion.div
                                className="slider__LongSliderItems"
                                variants={SliderVariants}
                                whileHover="hover"
                                onClick={() => {
                                    router.push(Paths.profile + "/" + i._id);
                                }}
                            >
                                <div
                                    className="slider__GuideSliderItemImage"
                                    style={{
                                        backgroundImage: `url(${i.profileMediumImage?.uri})`,
                                    }}
                                />
                                <div className="slider__GuideBadgeAndNameContainer">
                                    <div className="slider__GuideBadge">
                                        {i.role}
                                    </div>
                                    <span className="slider__GuideName">
                                        {i.name}
                                    </span>
                                </div>
                                <hr />
                                <div className="slider__GuideDesc">
                                    {l(i.introduce).length > 90
                                        ? l(i.introduce).slice(0, 90) + "..."
                                        : l(i.introduce)}
                                </div>
                                <div className="slider__GuideCategoryContainer">
                                    {i.guideCategory
                                        ?.slice(0, 4)
                                        .map((item, index) => {
                                            return (
                                                <span className="slider__GuideCategoryText">
                                                    {l(item.label)}
                                                    {index === 3 ? null : " · "}
                                                </span>
                                            );
                                        })}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            ) : (
                <Section>
                    <MultiRecommendGuideCarousel items={randomSorted} />
                </Section>
            )}
        </>
    );
};

export default RecommendGuideSlider;
