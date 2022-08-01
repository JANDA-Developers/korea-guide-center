import styled from "styled-components";

export interface IRegionSliderItem {
    title: string;
    products?: number; // 혹시 몰라서 만들어둠
    imageUrl: string;
}

interface IRegionSliderItemProps {
    item: IRegionSliderItem[];
    offset: number;
    index: number;
}

const TourSliderItem = ({ item, offset, index }: IRegionSliderItemProps) => {
    return (
        <>
            {item.slice(offset * index, offset * index + offset).map((i) => {
                return (
                    <div
                        className="slider__ShortSliderItems"
                        style={{
                            backgroundImage: `url(${i.imageUrl})`,
                            backgroundSize: "cover",
                        }}
                    >
                        <h5 className="slider__RegionSliderItemTitle">
                            {i.title}
                        </h5>
                        <button className="region__RegionDetailButton">
                            둘러보기
                        </button>
                    </div>
                );
            })}
        </>
    );
};

export default TourSliderItem;
