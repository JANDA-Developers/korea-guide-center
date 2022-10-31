import Rating, { RatingComponentProps } from "react-rating";
import React from "react";
import { ICONPROP, JDicon } from "../icons/Icons";
interface IProp extends RatingComponentProps {
    id?: string;
    startProp?: Partial<ICONPROP>;
}

export const RatingStar: React.FC<IProp> = ({ startProp, ...props }) => {
    return (
        <Rating
            className="rating-stars"
            key={"ratingStar" + props.initialRating + props.id}
            emptySymbol={
                <JDicon color="primary" {...startProp} icon="emptyStar" />
            }
            fullSymbol={<JDicon color="point" {...startProp} icon="fullStar" />}
            fractions={2}
            {...props}
        />
    );
};
