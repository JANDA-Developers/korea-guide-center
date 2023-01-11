import React from "react";

const PopularTourItem = () => {
    return (
        <div className="item bloc-card free" data-linkall="a">
            <figure className="fit-cover o100">
                <img
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    data-src="https://www.neweuropetours.eu/wp-content/uploads/2018/08/ams-ft-25-335x335.jpg"
                    alt="Discovering the Red Light District in Amsterdam with SANDEMANs"
                    width="335"
                    height="335"
                    className="lazy"
                />
            </figure>
            <div className="content">
                <span className="category">Free Tour - Tips-based</span>
                <a href="https://www.neweuropetours.eu/sandemans-tours/amsterdam/red-light-district-tour/">
                    <h3>Red Lights and Dark Amsterdam Free Tour</h3>
                </a>
                <p>
                    Experience the fascinating Amsterdam Red Light District with
                    an expert local guide
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

export default React.memo(PopularTourItem);
