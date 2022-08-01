import { userList_UserList_items } from "../../types/api";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import styled from "styled-components";
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
    const { l } = useContext(AppContext);
    const router = useRouter();
    const onClickGuide = () => {
        router.push("/");
    };

    return (
        <>
            {item.slice(offset * index, offset * index + offset).map((i) => {
                return (
                    <div className="slider__LongSliderItems">
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
                            {i.guideCategory?.slice(0, 4).map((item) => {
                                return (
                                    <span className="slider__GuideCategoryText">
                                        {l(item.label)}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default RecommendGuideSliderItem;
