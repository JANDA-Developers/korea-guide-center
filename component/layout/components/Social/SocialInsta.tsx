import React from "react";

const SocialInsta = () => {
    return (
        <div className="col-50 instagram">
            <span className="title">
                <img src="img/sns/instagramIcon.png" width="27" height="27" />
                INSTAGRAM
                <a
                    href="https://www.instagram.com/korea_guide_/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @korea_guide_
                </a>
                <a
                    href="https://www.instagram.com/korea_guide_/"
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
