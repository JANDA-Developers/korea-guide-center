import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

interface IDragImageSlider {
    images: {
        url: string;
    }[];
}

const DragImageSlider = ({ images }: IDragImageSlider) => {
    // state should start with the index you want to start the slide on

    return (
        <div className="tour__bgimage">
            <SimpleImageSlider
                width={"100%"}
                height={"80vh"}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                autoPlayDelay={3}
            />
        </div>
    );
};

export default DragImageSlider;
