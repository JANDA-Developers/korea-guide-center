import React from "react";
import FooterCities from "./FooterCities";
import FooterContact from "./FooterContact";
import FooterOurTours from "./FooterOurTours";
import FooterServices from "./FooterServices";

const FooterContents = () => {
    return (
        <div className="col-fluid">
            <FooterCities />
            <FooterServices />
            <FooterContact />
        </div>
    );
};

export default React.memo(FooterContents);
