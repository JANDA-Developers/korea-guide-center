import React from "react";
import SocialInsta from "./SocialInsta";
import SocialYoutube from "./SocialYoutube";

const Social = () => {
    return (
        <div className="col-wrapper bloc bloc-medium bloc-social-wall">
            <SocialYoutube />
            <SocialInsta />
        </div>
    );
};

export default React.memo(Social);
