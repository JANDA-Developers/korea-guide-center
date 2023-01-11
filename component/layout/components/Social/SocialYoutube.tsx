import React from "react";

const SocialYouTube = () => {
    return (
        <div className="col-50 facebook">
            <span className="title">
                <img src="img/sns/youtubeIcon.png" width="35px" height="25px" />
                YOUTUBE
                <a
                    href="https://www.youtube.com/channel/UCaqfo9iu08Nz53fri_oHmCQ/videos"
                    target="_blank"
                    rel="nofollow noreferrer"
                >
                    Korea Guide
                </a>
            </span>
            <a
                target="_blank"
                href="https://www.youtube.com/channel/UCaqfo9iu08Nz53fri_oHmCQ/videos"
                rel="noopener noreferrer"
            >
                <figure className="fit-cover">
                    <img
                        src="/img/sns/youtubeImage.jpeg"
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

export default React.memo(SocialYouTube);
