import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";

const AboutSectionQuality = () => {
    const { s } = useContext(AppContext);
    return (
        <div className="bloc-quality">
            <ul>
                <li>
                    <span>
                        <FontAwesomeIcon icon={faCity} />
                    </span>
                    {s("aboutKoreaGuideAmazingCities")}
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon icon={faPlane} />
                    </span>

                    {s("aboutKoreaGuideHighTour")}
                </li>
            </ul>
        </div>
    );
};

export default React.memo(AboutSectionQuality);
