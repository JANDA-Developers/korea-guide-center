import { Bold, Flex } from "@janda-com/front";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";
import { Paths } from "../../../../pages/index[depre]";

// 법 관련 고지가 들어가는 부분인데 임시로 만들어놓음
// 현재 코리아 가이드에서 뺴올 부분이 없음

const FooterLegal = () => {
    const { s } = useContext(AppContext);

    return (
        <div
            className="menu-legal"
            style={{
                color: "white",
            }}
        >
            <div className="col-fluid">
                <div
                    className="footer-rule"
                    style={{
                        display: "flex",
                        height: "auto",
                    }}
                >
                    <a href={Paths.termsAndConditions} className="menu-link">
                        {s("rule")}
                    </a>
                    <a href={Paths.privacyPolicy} className="menu-link">
                        {" "}
                        {s("privacy_policy")}
                    </a>
                </div>
                <div
                    className="footer-info"
                    style={{
                        color: "#737373",
                    }}
                >
                    {s("footer_ceo")}:{s("itsguide_CEO")}
                    <br />
                    {s("footer_businessNumber")}: 863-86-01971
                    <br />
                    {s("footer_address")}: {s("itsguide_adress")}
                    <br />
                    {s("footer_email")}: kguidecenter@gmail.com
                    <br />
                    {s("footer_fax")}:{s("itsguide_FAX")}
                    <br />
                    {s("footer_transferNum")}: 2020-부산영도-0215 <br />
                    {s("footer_accountNum")}:{`301-0308-0055-81`}
                    <br />
                </div>
                <div className="footer-copyright">
                    <span
                        style={{
                            color: "#737373",
                        }}
                    >
                        COPYRIGHT © 2021 KOREAGUIDECENTER CO., LTD. ALL RIGHTS
                        RESERVED
                    </span>
                </div>
            </div>
        </div>
    );
};

export default React.memo(FooterLegal);
