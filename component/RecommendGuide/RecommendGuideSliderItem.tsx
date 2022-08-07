import { userList_UserList_items } from "../../types/api";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { motion } from "framer-motion";
import { Paths } from "../../pages/index[depre]";
import { useRouter } from "next/router";

interface IRecommendGuideSliderProps {
    item: userList_UserList_items[];
    offset: number;
    index: number;
}

const RecommendGuideSliderItem = ({
    item,
    offset,
    index,
}: IRecommendGuideSliderProps) => {
    const SliderVariants = {
        hover: {
            y: -5,
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            cursor: "pointer",
        },
    };
    const { l } = useContext(AppContext);
    const router = useRouter();

    return (
        <>
            {item.slice(offset * index, offset * index + offset).map((i) => {
                return (
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
                            <div className="slider__GuideBadge">{i.role}</div>
                            <span className="slider__GuideName">{i.name}</span>
                        </div>
                        <hr />
                        <div className="slider__GuideDesc">
                            {l(i.introduce).length > 90
                                ? l(i.introduce).slice(0, 90) + "..."
                                : l(i.introduce)}
                        </div>
                        <div className="slider__GuideCategoryContainer">
                            {i.guideCategory?.slice(0, 4).map((item, index) => {
                                return (
                                    <span className="slider__GuideCategoryText">
                                        {l(item.label)}
                                        {index === 3 ? null : " · "}
                                    </span>
                                );
                            })}
                        </div>
                    </motion.div>
                );
            })}
        </>
    );
};

export default RecommendGuideSliderItem;
