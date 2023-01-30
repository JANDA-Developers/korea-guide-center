import React from "react";
import NewestTourTabBar from "./NewestTourTabBar";

const NewestTourTextIntro = () => {
    return (
        <div className="txt-intro">
            <h2>
                BOOK
                <span id="newest-tour">
                    &nbsp;&nbsp;&nbsp;
                    <span
                        style={{
                            color: "#db1a1c",
                            display: "inline",
                        }}
                    >
                        NEWEST
                    </span>{" "}
                    TOUR
                </span>
            </h2>
            <div className="align-btn-right"></div>
        </div>
    );
};

export default React.memo(NewestTourTextIntro);
