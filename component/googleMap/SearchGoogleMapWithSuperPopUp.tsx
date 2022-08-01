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

const center = {
    lat: 35.9078,
    lng: 127.7669,
};

interface IJDgoogleMapSearchModalInfo {
    defaultMarker?: TMapMarker;
    onSubmit: (marker: TMapMarker) => IJDgoogleMapProp;
}

export interface IJDgoogleMapProp extends GoogleMapProps {
    googleMapsApiKey: string;
    modalHook: IUseModal<IJDgoogleMapSearchModalInfo>;
}

const defaultMapContainerStyle = {
    height: "100vh",
    width: "100vw",
};

type TMapMarker = {
    lat: number;
    lng: number;
    time: Date;
    address?: string;
};

const JDsearchGoogleMap: React.FC<IJDgoogleMapProp> = ({
    googleMapsApiKey,
    modalHook,
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

    const [marker, setMarker] = React.useState<TMapMarker>();

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
            time: new Date(),
            address,
        });
    };

    const completeSearch = () => {
        if (!marker) return;

        modalHook.info?.onSubmit({
            ...marker,
        });
        modalHook.closeModal();
    };

    if (loadError) return <div>'Error..'</div>;
    if (!isLoaded) return <div>'Loading...'</div>;

    return isLoaded ? (
        <JDmodal className="SearchGoogleMapPopUp JDmodal--full" {...modalHook}>
            <Flex className="SearchGoogleMapPopUp__searcher JDmodal--full">
                <MapSearcher
                    handleSelect={handleSelected}
                    children={DefaultMapSearcher}
                    panTo={panTo}
                />
                <JDbutton
                    onClick={modalHook.closeModal}
                    className="SearchGoogleMapPopUp__closer"
                    thema="error"
                >
                    닫기
                </JDbutton>
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
                            pixelOffset: new google.maps.Size(0, -0),
                        }}
                    >
                        <div>
                            <Bold size="large">출발장소</Bold>
                            <JDbutton
                                onClick={completeSearch}
                                br="square"
                                size="long"
                                thema="primary"
                            >
                                설정완료하기
                            </JDbutton>
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
        </JDmodal>
    ) : (
        <>..</>
    );
};

export default React.memo(JDsearchGoogleMap);
