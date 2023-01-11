import React from "react";
import FooterContents from "./FooterContents";
import FooterLegal from "./FooterLegal";

const Footer = () => {
    return (
        <footer id="footer">
            <FooterContents />
            <FooterLegal />
        </footer>
    );
};

export default React.memo(Footer);
