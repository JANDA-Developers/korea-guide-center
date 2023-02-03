import React from "react";

const SocialInsta = () => {
    return (
        <div className="col-50 instagram">
            <div className="title">
                <img
                    src="img/sns/instagramIcon.png"
                    className="instaTitle"
                    width="36"
                    height="36"
                />
                #INSTAGRAM{" "}
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
            </div>
            <div className="instaContents">
                <a
                    target="_blank"
                    href="https://www.instagram.com/korea_guide_/"
                    rel="noopener noreferrer"
                >
                    <figure className="mainFitCover">
                        <img
                            src="/img/sns/instagramImage.jpeg"
                            alt=""
                            width="270"
                            height="270"
                            className="mainFitCoverInsta"
                        />
                    </figure>
                </a>
                <a
                    target="_blank"
                    href="https://www.instagram.com/p/CgMgsxxP-M3/"
                    rel="noopener noreferrer"
                >
                    <figure className="mainFitCover">
                        <img
                            src="/img/sns/instagramImage.jpeg"
                            alt=""
                            width="270"
                            height="270"
                            className="mainFitCoverInsta"
                        />
                    </figure>
                </a>
                <a
                    target="_blank"
                    href="https://www.instagram.com/p/CagutJWlkOO/"
                    rel="noopener noreferrer"
                >
                    <figure className="mainFitCover">
                        <img
                            src="/img/sns/instagramImage.jpeg"
                            alt=""
                            width="270"
                            height="270"
                            className="mainFitCoverInsta"
                        />
                    </figure>
                </a>
            </div>
        </div>
    );
};

export default React.memo(SocialInsta);
