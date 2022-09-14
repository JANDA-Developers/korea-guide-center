import React from "react";
import { useWindowSize } from "usehooks-ts";
import SimpleImageSlider from "react-simple-image-slider";

interface IDragImageSlider {
    images: {
        url: string;
    }[];
}

const DragImageSlider = ({ images }: IDragImageSlider) => {
    const { width } = useWindowSize();
    // state should start with the index you want to start the slide on

    return (
        <div className="tour__bgimage">
            <SimpleImageSlider
                width={"100%"}
                height={width <= 415 ? "30vh" : "80vh"}
                images={images}
                showBullets={true}
                showNavs={width <= 415 ? false : true}
                autoPlay={true}
                autoPlayDelay={3}
            />
        </div>
    );
};

export default DragImageSlider;
