import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";

const AboutSectionDetailText = () => {
    const { s } = useContext(AppContext);
    return (
        <div className="bloc-texte">
            <h2>
                <span>{s("aboutKoreaGuideTop")}</span>
            </h2>
            <p>{s("aboutKoreaGuideBottom")}</p>
        </div>
    );
};

export default React.memo(AboutSectionDetailText);
