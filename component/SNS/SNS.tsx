const SNS = () => {
    return (
        <div className="sns__Container">
            <div>
                <div className="sns__Title">
                    <div className="sns__LogoAndTextBox">
                        <img
                            src="img/sns/youtubeIcon.png"
                            width="45px"
                            height="35px"
                        />
                        <span className="sns__TitleText">
                            코리아 가이드 유튜브
                        </span>
                    </div>
                    <a
                        className="sns__subButton"
                        href="https://www.youtube.com/channel/UCaqfo9iu08Nz53fri_oHmCQ/videos"
                        target="_blank"
                    >
                        구독하기
                    </a>
                </div>
                <img className="sns__image" src="img/sns/youtubeImage.jpeg" />
            </div>
            <div>
                <div className="sns__Title">
                    <div className="sns__LogoAndTextBox">
                        <img
                            src="img/sns/instagramIcon.png"
                            width="50px"
                            height="50px"
                        />
                        <span className="sns__TitleText">
                            코리아 가이드 인스타그램
                        </span>
                    </div>
                    <a
                        className="sns__followButton"
                        href="https://www.instagram.com/korea_guide_/"
                        target="_blank"
                    >
                        팔로우
                    </a>
                </div>
                <img className="sns__image" src="img/sns/instagramImage.jpeg" />
            </div>
        </div>
    );
};

export default SNS;
