import { useContext } from "react";
import { AppContext } from "../../context/context";

export interface IRegionSliderItem {
    title: string;
    queryTitle: string;
    products?: number; // 혹시 몰라서 만들어둠
    imageUrl: string;
}

interface IRegionSliderItemProps {
    item: IRegionSliderItem[];
    offset?: number;
    index?: number;
}

const TourSliderItem = ({ item, offset, index }: IRegionSliderItemProps) => {
    const { s } = useContext(AppContext);
    return (
        <>
            {item
                .slice(offset! * index!, offset! * index! + offset!)
                .map((i) => {
                    return (
                        <div className="slider__ShortSliderItems">
                            <img
                                src={`${i.imageUrl}`}
                                className="region__bgImage"
                            />
                            <div className="region__contents">
                                <h5 className="region__RegionSliderItemTitle">
                                    {i.title}
                                </h5>
                                <button
                                    className="region__RegionDetailButton"
                                    onClick={() => {
                                        location.href = `/cities/search?title=${i.queryTitle}`;
                                    }}
                                >
                                    {s("LookAround")}
                                </button>
                            </div>
                        </div>
                    );
                })}
        </>
    );
};

export default TourSliderItem;
