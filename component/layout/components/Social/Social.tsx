import React from "react";
import SocialInsta from "./SocialInsta";
import SocialYoutube from "./SocialYoutube";

const Social = () => {
    return (
        <div className="bloc-social-wall homeSocial">
            <SocialYoutube />
            <SocialInsta />
        </div>
    );
};

export default React.memo(Social);
