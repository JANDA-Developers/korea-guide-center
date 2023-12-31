import React from "react";
import { Preloader } from "./Preloader";

interface IProp {}

export const LoadingPage: React.FC<IProp> = () => {
    return (
        <div id="MuPageLoading" data-fetchingid="" className="muPageLoading">
            <div className="muPageLoading__icons">
                <Preloader />
            </div>
        </div>
    );
};
