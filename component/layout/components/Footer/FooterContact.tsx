import React from "react";

const FooterContact = () => {
    return (
        <div className="col-50 footer-contact">
            <span className="footer-title">Contact</span>
            <a href="https://www.neweuropetours.eu/">
                <figure>
                    <img
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        data-src="https://www.neweuropetours.eu/wp-content/uploads/2018/06/logo-sandemans-white-2x-170x28.png"
                        alt=""
                        width="170"
                        height="28"
                        data-srcSet="https://www.neweuropetours.eu/wp-content/uploads/2018/06/logo-sandemans-white-2x-170x28.png 1x, https://www.neweuropetours.eu/wp-content/uploads/2018/06/logo-sandemans-white-2x-340x56.png 2x"
                        className="lazy"
                    />
                </figure>
            </a>
            <div>
                <p>SANDEMANs NEW Europe</p>
                <a href="tel:+447447293760" className="tel">
                    Tel: +44 7447293760
                </a>
            </div>
            <a
                href="https://www.neweuropetours.eu/contact-us/"
                className="btn gtm-event-button-contact"
            >
                Contact us
            </a>
        </div>
    );
};

export default React.memo(FooterContact);
