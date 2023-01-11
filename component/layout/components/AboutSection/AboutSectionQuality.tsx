import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faPlane } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const AboutSectionQuality = () => {
    return (
        <div className="bloc-quality">
            <ul>
                <li>
                    <span>
                        <FontAwesomeIcon icon={faCity} />
                    </span>
                    대한민국의 놀라운 도시들
                </li>
                <li>
                    <span>
                        <FontAwesomeIcon icon={faPlane} />
                    </span>
                    현지 가이드와 함께하는 최고급 투어
                </li>
            </ul>
        </div>
    );
};

export default React.memo(AboutSectionQuality);
