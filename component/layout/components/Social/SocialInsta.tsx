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
                {/* <a
                    href="https://www.instagram.com/korea_guide_/"
                    target="_blank"
                    className="btn-insta"
                    rel="noopener noreferrer"
                >
                    Follow
                </a> */}
            </span>
            <a
                target="_blank"
                href="https://www.instagram.com/korea_guide_/"
                rel="noopener noreferrer"
            >
                <figure className="fit-cover">
                    <img
                        src="/img/sns/instagramImage.jpeg"
                        alt=""
                        width="680"
                        height="680"
                        className="lazy"
                    />
                </figure>
            </a>
        </div>
    );
};

export default React.memo(SocialInsta);
