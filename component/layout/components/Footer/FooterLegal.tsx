import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";
import { Paths } from "../../../../pages/index[depre]";

// 법 관련 고지가 들어가는 부분인데 임시로 만들어놓음
// 현재 코리아 가이드에서 뺴올 부분이 없음

const FooterLegal = () => {
    const { s } = useContext(AppContext);
    return (
        <div className="menu-legal">
            <div className="col-fluid">
                <div>
                    <div>
                        <a href={Paths.termsAndConditions}>{s("rule")}</a>
                        <a href={Paths.privacyPolicy}> {s("privacy_policy")}</a>
                        <a href="https://www.neweuropetours.eu/legal-information/"></a>
                        <span>
                            Copyright © 2021 koreaguidecenter Co., Ltd. All
                            rights reserved
                        </span>
                    </div>
                </div>
                {/* <div className="security">
                    <p>
                        ssl encryption<span>secure payment</span>
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default React.memo(FooterLegal);
