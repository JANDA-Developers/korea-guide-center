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
                    <div className="slider__ShortSliderItems">
                        <img
                            src={`${i.imageUrl}`}
                            className="region__bgImage"
                        />
                        <div className="region__contents">
                            <h5 className="region__RegionSliderItemTitle">
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
                    </div>
                );
            })}
        </>
    );
};

export default LocalGuideSliderItem;
