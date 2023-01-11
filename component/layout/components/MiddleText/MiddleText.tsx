import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";

const MiddleText = () => {
    const { s } = useContext(AppContext);
    return (
        <div className="content-wrapper bloc bloc-small bloc-texte bloc-texte-homepage aligncenter">
            <h2>{s("MiddleTextTop")}</h2>
            <p>
                <strong>{s("MiddleTextMd")}</strong>
                <br />
                {s("MiddleTextBottom")}
            </p>
        </div>
    );
};

export default React.memo(MiddleText);
