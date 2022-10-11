import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useGlobalKoreaMap } from "../../hook/useKoreaMap";
import { useRouter } from "next/router";
import { Paths } from "../../pages/index[depre]";
import { mapRegion } from "../koreaMap/KoreaData";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
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

interface MultiGuideCarousel {
    onSelectRegion: (region: mapRegion) => void;
    region: mapRegion;
    selectedRegion: string;
}

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const MultiGuideCarousel = ({
    deviceType,
    items,
    onSelectRegion,
    selectedRegion,
}: any) => {
    const { s, l } = useContext(AppContext);
    const router = useRouter();
    const handleSelectRegion = (region: any) => {
        onSelectRegion(region);
    };

    return (
        <Carousel
            ssr
            partialVisbile
            deviceType={deviceType}
            responsive={responsive}
            itemClass="px-2"
            containerClass="w-10/12"
        >
            {items.map((i: any) => {
                return (
                    <div>
                        <div
                            className="slider__ShortSliderItems"
                            onClick={() => {
                                handleSelectRegion(i.region);
                                router.push(Paths.locationalGuide);
                            }}
                        >
                            <img
                                src={`${i.imageUrl}`}
                                className="region__bgImage"
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
                    </div>
                );
            })}
        </Carousel>
    );
};

export default MultiGuideCarousel;
