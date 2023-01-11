import React from "react";

// 캐러셀에 들어가는 요소들

const RegionTourSliderItem = () => {
    return (
        <div className="item">
            <a href="https://www.neweuropetours.eu/amsterdam-walking-tours/">
                <figure className="o80">
                    <img
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        data-src="https://www.neweuropetours.eu/wp-content/uploads/2018/08/thio-sandemans-amsterdam-tours-240x260.jpg"
                        alt="Beautiful views of Amsterdam from the canals"
                        width="240"
                        height="260"
                        className="lazy"
                    />
                </figure>
                <div className="caption">
                    <h3>Amsterdam</h3>
                </div>
                <div className="tours-available">
                    <span>
                        <strong>7&nbsp;Tours</strong> Available
                    </span>
                </div>
            </a>
        </div>
    );
};

export default React.memo(RegionTourSliderItem);
