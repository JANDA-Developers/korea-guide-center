import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Location({ location }) {
    return (
        <div className="ProductDetail__location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <div className="ProductDetail__locationMargin">{location}</div>
        </div>
    );
}

export default Location;
