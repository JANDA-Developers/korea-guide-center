import { Bold, Flex } from "@janda-com/front";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";
import { Logo } from "../../../logo/Logo";

const FooterContact = () => {
    const BottomInfo = ({ label, value }: { label: string; value: string }) => {
        return (
            <Flex vCenter mr>
                <Bold mr="tiny">{label}</Bold> {value}
            </Flex>
        );
    };
    const { s } = useContext(AppContext);
    const TitleText = s("itsguide").split(" ");
    return (
        <div className="col-50 footer-contact">
            <span className="footer-title">Contact</span>
            <div
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
            <div className="footer__infoDetail">
                <BottomInfo label={s("footer_ceo")} value={s("itsguide_CEO")} />
                <BottomInfo
                    label={s("footer_transferNum")}
                    value={"2020-부산영도-0215"}
                />
                <BottomInfo
                    label={s("footer_businessNumber")}
                    value={"863-86-01971"}
                />
                <div className="textTransformClear">
                    <BottomInfo
                        label={s("footer_email")}
                        value={"kguidecenter@gmail.com"}
                    />
                </div>
                <BottomInfo label={s("footer_fax")} value={s("itsguide_FAX")} />
                <BottomInfo
                    label={s("footer_address")}
                    value={s("itsguide_adress")}
                />
                <BottomInfo
                    label={s("footer_accountNum")}
                    value={`301-0308-0055-81`}
                />
            </div>
        </div>
    );
};

export default React.memo(FooterContact);
