import { useContext } from "react";
import { AppContext } from "../../context/context";

const SNS = () => {
    const { s } = useContext(AppContext);
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
                            {s("SNSYoutube")}
                        </span>
                    </div>
                    <a
                        className="sns__subButton"
                        href="https://www.youtube.com/channel/UCaqfo9iu08Nz53fri_oHmCQ/videos"
                        target="_blank"
                    >
                        {s("youtubeSubscribe")}
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
                            {s("SNSInstagram")}
                        </span>
                    </div>
                    <a
                        className="sns__followButton"
                        href="https://www.instagram.com/korea_guide_/"
                        target="_blank"
                    >
                        {s("instaFollow")}
                    </a>
                </div>
                <img className="sns__image" src="img/sns/instagramImage.jpeg" />
            </div>
        </div>
    );
};

export default SNS;
