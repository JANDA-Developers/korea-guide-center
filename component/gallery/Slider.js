import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export const Example = (props) => {
    return (
        <Carousel navButtonsAlwaysVisible={true}>
            {props.imgs.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
};

export const Item = (props) => {
    return (
        <div>
            <img src={props.item} className="gallery__sliderImg"></img>
        </div>
    );
};
