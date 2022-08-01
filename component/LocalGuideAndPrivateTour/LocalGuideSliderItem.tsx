export interface ILocalGuideSliderItem {
    title: string;
    desc: string;
    imageUrl: string;
}

interface ILocalGuideSliderItemProps {
    item: ILocalGuideSliderItem[];
    offset: number;
    index: number;
}

const LocalGuideSliderItem = ({
    item,
    offset,
    index,
}: ILocalGuideSliderItemProps) => {
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
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <span
                                style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    marginBottom: "5px",
                                    textShadow: "2px 2px 2px gray",
                                }}
                            >
                                {i.desc}
                            </span>
                            <button className="region__RegionDetailButton">
                                둘러보기
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default LocalGuideSliderItem;
