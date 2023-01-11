import React from "react";

const SocialInsta = () => {
    return (
        <div className="col-50 instagram">
            <span className="title">
                <img
                    data-
                    src="https://static.neweuropetours.eu/wp-content/themes/sandemans/assets/images/ico/ico-instagram.png"
                    data-srcSet="https://www.neweuropetours.eu/wp-content/themes/sandemans/assets/images/ico/ico-instagram-2x.png 2x"
                    width="27"
                    height="27"
                    alt="Instagram's Logo"
                    className="lazy"
                />
                INSTAGRAM
                <a
                    href="https://www.instagram.com/sandemansneweurope/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @korea_guide_
                </a>
                <a
                    href="https://www.instagram.com/sandemansneweurope/"
                    target="_blank"
                    className="btn-insta"
                    rel="noopener noreferrer"
                >
                    Follow
                </a>
            </span>
        </div>
    );
};

export default React.memo(SocialInsta);
