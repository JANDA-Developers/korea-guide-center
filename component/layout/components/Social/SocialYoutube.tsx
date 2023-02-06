import React from "react";

const SocialYouTube = () => {
    return (
        <div className="col-66 facebook">
            <span className="title">
                <div className="youtubeChannel">
                    <img
                        src="img/sns/youtubeIcon.png"
                        width="65px"
                        height="60px"
                    />
                    <div>
                        <div className="youtubeChannelName">YOUTUBE</div>
                        {/* <a
                    href="https://www.youtube.com/channel/UCaqfo9iu08Nz53fri_oHmCQ/videos"
                    target="_blank"
                    rel="nofollow noreferrer"
                >
                    Korea Guide
                </a> */}
                        <span className="youtubeSubscribe">구독자 25만명</span>
                    </div>
                </div>
            </span>
            <div className="youtubeContents">
                <div className="youtubeContentsCard">
                    {/* <a
                        target="_blank"
                        href="https://www.instagram.com/p/CaYXZA-v4pQ/"
                        rel="noopener noreferrer"
                    > */}
                    <figure className="mainFitCover">
                        <img
                            src="/img/sns/maxresdefault.jpg"
                            alt=""
                            className="mainFitCoverYoutube"
                        />
                    </figure>
                    {/* </a> */}
                    <div className="youtubeTitle">
                        <span>제목 타이틀</span>
                        <div className="youtubeStatistics">
                            <span>조회수 25만회</span>
                            <span> ∙ 1달전</span>
                        </div>
                    </div>
                </div>
                <div className="youtubeContentsCard">
                    {/* <a
                        target="_blank"
                        href="https://www.instagram.com/p/CgMgsxxP-M3/"
                        rel="noopener noreferrer"
                    > */}
                    <figure className="mainFitCover">
                        <img
                            src="/img/sns/maxresdefault.jpg"
                            alt=""
                            className="mainFitCoverYoutube"
                        />
                    </figure>
                    {/* </a> */}
                    <div className="youtubeTitle">
                        <span>제목 타이틀</span>
                        <div className="youtubeStatistics">
                            <span>조회수 25만회</span>
                            <span> ∙ 1달전</span>
                        </div>
                    </div>
                </div>
                <div className="youtubeContentsCard">
                    {/* <a
                        target="_blank"
                        href="https://www.instagram.com/p/CagutJWlkOO/"
                        rel="noopener noreferrer"
                    > */}
                    <figure className="mainFitCover">
                        <img
                            src="/img/sns/maxresdefault.jpg"
                            alt=""
                            className="mainFitCoverYoutube"
                        />
                    </figure>
                    {/* </a> */}
                    <div className="youtubeTitle">
                        <span>제목 타이틀</span>
                        <div className="youtubeStatistics">
                            <span>조회수 25만회</span>
                            <span> ∙ 1달전</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(SocialYouTube);
