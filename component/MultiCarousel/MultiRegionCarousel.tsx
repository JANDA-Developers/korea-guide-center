import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        paritialVisibilityGutter: 60,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30,
    },
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const MultiRegionCarousel = ({ deviceType, items }: any) => {
    const { s, l } = useContext(AppContext);

    return (
        <Carousel
            ssr
            partialVisbile
            deviceType={deviceType}
            responsive={responsive}
            itemClass="w-72 h-72 mr-4 cursor-pointer px-2 !important"
        >
            {items.map((i: any) => {
                return (
                    <div
                        className="slider__ShortSliderItems w-72 h-72 !important"
                        onClick={() => {
                            location.href = `/cities/search?title=${i.queryTitle}`;
                        }}
                    >
                        <img
                            src={`${i.imageUrl}`}
                            className="w-72 h-72 rounded-lg !important region__bgImage"
                        />
                        <div className="region__contents">
                            <h5 className="region__RegionSliderItemTitle">
                                {i.title}
                            </h5>
                            <button className="region__RegionDetailButton">
                                {s("LookAround")}
                            </button>
                        </div>
                    </div>
                );
            })}
        </Carousel>
    );
};

export default MultiRegionCarousel;
