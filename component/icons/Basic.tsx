import React from "react";

interface IProps extends React.SVGProps<SVGSVGElement> {
    path: string;
}

const BasicIcon: React.FC<IProps> = ({
    path,
    viewBox = "0 0 24 24",
    ...prop
}) => {
    return (
        <svg {...prop} viewBox={viewBox}>
            <g>
                <path d={path} />
            </g>
        </svg>
    );
};

export default BasicIcon;
