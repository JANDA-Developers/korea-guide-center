import { JDbutton } from "@janda-com/front";
import React from "react";
export const Locate: any = ({ panTo }: any) => {
    return (
        <JDbutton
            mr
            br="square"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}
        >
            내위치로
        </JDbutton>
    );
};
