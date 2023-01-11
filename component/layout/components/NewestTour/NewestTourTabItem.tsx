import React from "react";

const NewestTourItem = () => {
    return (
        <div className="item bloc-card free" data-linkall="a">
            <figure className="fit-cover">
                <img
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-src="https://www.neweuropetours.eu/wp-content/uploads/2018/08/amsterdam-walking-tours-05-335x335.jpg"
                    alt="amsterdam's famous canals and bridges during the amsterdam free walking tour"
                    width="335"
                    height="335"
                    className="lazy"
                />
            </figure>
            <div className="content">
                <span className="category">Free Tour - Tips-based</span>
                <a href="https://www.neweuropetours.eu/sandemans-tours/amsterdam/free-tour-of-amsterdam/">
                    <h3>Free Tour of Amsterdam</h3>
                </a>
                <p>
                    Book the original Amsterdam free walking tour and visit many
                    of the citys highlights with a local g ...
                </p>
            </div>
            <div className="info-bottom">
                <span className="btn gtm-event-info-booking">
                    Info & Booking
                </span>
                <span className="price">Free</span>
            </div>
        </div>
    );
};

export default React.memo(NewestTourItem);
