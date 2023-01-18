import React, { ReactChild } from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
    HookReturn,
} from "use-places-autocomplete";

interface ISearchComponentProp extends HookReturn {
    onSelect: (adress: string) => void;
}

export type TSearchComponent = (searchProp: ISearchComponentProp) => ReactChild;

interface IMapSearchComponentProp {
    children: TSearchComponent;
    panTo?: ({ lat, lng }: any) => void;
    handleSelect?: ({ lat, lng, address }: any) => void;
}

export const MapSearcher: React.FC<IMapSearchComponentProp> = ({
    children,
    panTo,
    handleSelect: onSelect,
}) => {
    const autoCompleteHook = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 35.9078, lng: () => 127.7669 } as any,
            radius: 100 * 1000,
        },
    });

    const { value, setValue, clearSuggestions } = autoCompleteHook;

    // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

    const handleSelect = async (address: string) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo?.({ lat, lng });
            onSelect?.({ lat, lng, address });
        } catch (error) {
            console.log("😱 Error: ", error);
        }
    };

    const SearcherProperty: ISearchComponentProp = {
        onSelect: handleSelect,
        ...autoCompleteHook,
    };

    return (
        <div className="SearchGoogleMapPopUp__SearchWrap">
            {children(SearcherProperty)}
        </div>
    );
};
