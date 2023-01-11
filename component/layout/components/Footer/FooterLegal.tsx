import React from "react";

// 법 관련 고지가 들어가는 부분인데 임시로 만들어놓음
// 현재 코리아 가이드에서 뺴올 부분이 없음

const FooterLegal = () => {
    return (
        <div className="menu-legal">
            <div className="col-fluid">
                <div>
                    <div>
                        <a href="https://thuria.com">
                            Made with love by Thuria
                        </a>
                        <a href="#rgpd">Cookies management</a>
                        <a href="https://www.neweuropetours.eu/privacy-policy/">
                            Privacy Policy
                        </a>
                        <a href="https://www.neweuropetours.eu/legal-information/">
                            Legal
                        </a>
                        <span>
                            © 2004-2019 SANDEMANs NEW Europe - All rights
                            reserved
                        </span>
                    </div>
                </div>
                <div className="security">
                    <p>
                        ssl encryption<span>secure payment</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(FooterLegal);
