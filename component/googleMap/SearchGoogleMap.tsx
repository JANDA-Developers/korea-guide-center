import React from "react";
import {
    GoogleMap,
    useJsApiLoader,
    GoogleMapProps,
    InfoWindow,
    Marker,
} from "@react-google-maps/api";
import { MapSearcher } from "./components/Search";
import { Locate } from "./components/Locate";
import { DefaultMapSearcher } from "./components/DefaultSearcher";
import { Bold, Flex, IUseModal, JDbutton, JDmodal } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";

const center = {
    lat: 35.9078,
    lng: 127.7669,
};

export interface IJDgoogleMapProp extends GoogleMapProps {
    googleMapsApiKey: string;
    marker?: TMapMarker;
    setMarker: ISet<TMapMarker>;
}

const defaultMapContainerStyle = {
    height: "100vh",
    width: "100vw",
};

type TMapMarker = {
    lat: number;
    lng: number;
    address?: string;
};

const JDsearchGoogleMap: React.FC<IJDgoogleMapProp> = ({
    googleMapsApiKey,
    marker,
    setMarker,
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

    const panTo = React.useCallback(({ lat, lng }) => {
        if (!mapRef.current) return;
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    const handleSelected = ({ lat, lng, address }: any) => {
        setMarker({
            lat,
            lng,
            address,
        });
    };

    if (loadError) return <div>'Error..'</div>;
    if (!isLoaded) return <div>'Loading...'</div>;

    return isLoaded ? (
        <div className="SearchGoogleMapPopUp">
            <Flex className="SearchGoogleMapPopUp__searcher JDmodal--full">
                <MapSearcher
                    handleSelect={handleSelected}
                    children={DefaultMapSearcher}
                    panTo={panTo}
                />
            </Flex>

            <GoogleMap
                id="map"
                zoom={8}
                center={center}
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
                {marker && (
                    <InfoWindow
                        position={{
                            lat: marker.lat,
                            lng: marker.lng,
                        }}
                        options={{
                            pixelOffset: new google.maps.Size(0, -40),
                        }}
                    >
                        <div>
                            <Bold size="large">출발장소</Bold>
                        </div>
                    </InfoWindow>
                )}
                {marker && (
                    <Marker
                        key={`${marker.lat}-${marker.lng}`}
                        position={{ lat: marker.lat, lng: marker.lng }}
                    />
                )}
            </GoogleMap>
        </div>
    ) : (
        <>..</>
    );
};

export default React.memo(JDsearchGoogleMap);
