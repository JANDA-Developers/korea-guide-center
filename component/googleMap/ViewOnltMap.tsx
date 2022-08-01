import React from "react";
import {
    GoogleMap,
    useJsApiLoader,
    GoogleMapProps,
    Marker,
} from "@react-google-maps/api";
import { TSearchComponent } from "./components/Search";

const center = {
    lat: 35.9078,
    lng: 127.7669,
};

export interface IJDgoogleMapProp extends GoogleMapProps {
    marker: TMapMarker;
    googleMapsApiKey: string;
    SearchComponent?: TSearchComponent;
}

const defaultMapContainerStyle = {
    height: "200px",
    width: "300px",
};

type TMapMarker = {
    lat: number;
    lng: number;
};

const GoogleMapViewOnly: React.FC<IJDgoogleMapProp> = ({
    marker,
    googleMapsApiKey,
    SearchComponent,
    ...props
}) => {
    if (!googleMapsApiKey) {
        console.error("Google map key must be provided");
        if (typeof window !== "undefined" && !googleMapsApiKey) {
            alert("구글 맵을 제공하기 위해서 API Key를 제공하십시요.");
        }
    }

    const { isLoaded, loadError } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: googleMapsApiKey,
        libraries: ["places"],
    });

    const mapRef = React.useRef<google.maps.Map>();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return <div>'Error..'</div>;
    if (!isLoaded) return <div>'Loading...'</div>;

    return isLoaded ? (
        <div>
            <GoogleMap
                id="map"
                zoom={12}
                center={{
                    lat: marker.lat,
                    lng: marker.lng,
                }}
                onLoad={onMapLoad}
                mapContainerStyle={defaultMapContainerStyle}
                options={{
                    mapTypeControlOptions: {
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP],
                    },
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                }}
                {...props}
            >
                <Marker
                    key={`${marker.lat}-${marker.lng}`}
                    position={{ lat: marker.lat, lng: marker.lng }}
                />
            </GoogleMap>
        </div>
    ) : (
        <>..</>
    );
};

export default React.memo(GoogleMapViewOnly);
