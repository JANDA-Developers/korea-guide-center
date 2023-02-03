import React from "react";
import FooterCities from "./FooterCities";
import FooterContact from "./FooterContact";
import FooterLogo from "./FooterLogo";
import FooterServices from "./FooterServices";

const FooterContents = () => {
    return (
        <div className="col-fluid">
            <FooterLogo />
            <FooterCities />
            <FooterServices />
        </div>
    );
};

export default React.memo(FooterContents);
