import React from "react";
import Footer from "./Footer";

const FooterServices = () => {
    return (
        <div className="col-25">
            <span className="footer-title">Services</span>
            <ul>
                <li>
                    <a href="https://www.neweuropetours.eu/coronavirus-update/">
                        COVID-19 Update
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/guide-with-us/">
                        Guide with us
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/terms-and-conditions/">
                        Terms and Conditions
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/blog/">
                        SANDEMANs Blog
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/faqs/">FAQs</a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/loyalty-program/">
                        Loyalty Program
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/vip-program/">
                        VIP Program
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/gender-equality-at-sandemans/">
                        Gender Equality
                    </a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/press/">Press</a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/about-us/">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="https://sandemansneweurope.recruitee.com/">Jobs</a>
                </li>
                <li>
                    <a href="https://www.neweuropetours.eu/umbrella/">
                        Umbrella
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default React.memo(FooterServices);
