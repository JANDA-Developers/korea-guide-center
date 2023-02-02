import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";

const AboutSectionDetailText = () => {
    const { s } = useContext(AppContext);
    return (
        <div className="bloc-texte">
            <h2 className="about-text">{s("aboutKoreaGuideTop")}</h2>
            <p
                style={{
                    marginBottom: "10px",
                }}
            >
                {s("aboutKoreaGuideBottom")}
            </p>
        </div>
    );
};

export default React.memo(AboutSectionDetailText);
