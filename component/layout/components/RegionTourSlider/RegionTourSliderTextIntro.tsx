import React from "react";

const RegionTourSliderTextIntro = () => {
    return (
        <div className="txt-intro" style={{
            margin: 0,
            marginBottom: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
        }}>
            <h2 style={{
                width: "fit-content"
            }}>
                <strong>KOREA GUIDE</strong>
            </h2>
        </div>
    );
};

export default React.memo(RegionTourSliderTextIntro);
