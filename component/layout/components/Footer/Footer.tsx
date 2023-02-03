import React from "react";
import FooterContents from "./FooterContents";
import FooterLegal from "./FooterLegal";
import FooterLogo from "./FooterLogo";

const Footer = () => {
    return (
        <footer id="footer">
            <FooterContents />
            <FooterLegal />
        </footer>
    );
};

export default React.memo(Footer);
