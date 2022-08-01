import React from "react";

interface IProp {}

export const InfoSVG: React.FC<IProp> = () => {
    return (
        <svg
            style={{
                width: "1.4rem",
                height: "1.2rem",
            }}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 34.7 25.4"
            enableBackground="new 0 0 34.7 25.4"
            xmlSpace="preserve"
        >
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html: "\n\t.st0{fill:#4E4E4E;}\n\t.st1{fill:none;stroke:#4E4E4E;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n",
                }}
            />
            <g>
                <path
                    className="st0"
                    d="M14.9,25c-0.2,0-0.3-0.1-0.5-0.2l-5.9-4.9c-4.4-0.1-8-3.8-8-8.2V8.7c0-4.5,3.7-8.2,8.2-8.2h17   c4.5,0,8.2,3.7,8.2,8.2v2.9c0,4.5-3.7,8.2-8.2,8.2H14.6l1,4.2c0.1,0.3-0.1,0.6-0.3,0.8C15.2,24.9,15.1,25,14.9,25z M8.8,1.9   c-3.7,0-6.7,3-6.7,6.7v2.9c0,3.7,3,6.7,6.7,6.7c0.2,0,0.3,0.1,0.5,0.2l4.3,3.6l-0.7-2.9c-0.1-0.2,0-0.5,0.1-0.6s0.4-0.3,0.6-0.3   h12.2c3.7,0,6.7-3,6.7-6.7V8.7c0-3.7-3-6.7-6.7-6.7H8.8z"
                />
                <path className="st1" d="M11.1,19.1" />
                <circle className="st0" cx="9.8" cy="10.1" r="1.3" />
                <circle className="st0" cx="25.2" cy="10.1" r="1.3" />
                <circle className="st0" cx="17.5" cy="10.1" r="1.3" />
            </g>
        </svg>
    );
};
