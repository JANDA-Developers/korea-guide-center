import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import LocalGuideSlider from "./LocalGuideSlider";

const LocalGuideAndPrivateTour = () => {
    const { s } = useContext(AppContext);
    return (
        <div
            style={{
                marginBottom: "50px",
            }}
        >
            <h5 className="tour__sectionTitle">{s("mainLocalGuides")}</h5>
            <LocalGuideSlider />
        </div>
    );
};

export default LocalGuideAndPrivateTour;
