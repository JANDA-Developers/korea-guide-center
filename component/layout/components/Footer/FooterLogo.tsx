import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";
import { Logo } from "../../../logo/Logo";

const FooterLogo = () => {
    const { s } = useContext(AppContext);
    const TitleText = s("itsguide").split(" ");
    return (
        <div
            className="footer-logo"
            style={{
                display: "flex",
            }}
        >
            <Logo className="bookHeader__logo" />
            <div className="logoTextContainer">
                <span
                    className="logoText__top"
                    style={{
                        color: "white",
                    }}
                >
                    {s("joyful")}
                </span>
                <div className="logoText__bottom">
                    <span
                        style={{
                            color: " #D0242B",
                        }}
                    >
                        {TitleText[0]}
                    </span>{" "}
                    <span
                        style={{
                            color: "white",
                        }}
                    >
                        {TitleText[1]}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default React.memo(FooterLogo);
