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

// import React from 'react';
// import { generateRandomStringCode } from '../../utils/codeGenerator';

// interface IProp {
//     // 1 ~ 5
//     rate?: 1 | 2 | 3 | 4 | 5;
// }

// export const RatingStars: React.FC<IProp> = ({ rate = 5 }) => {
//     const check = (num: number) => {
//         if (rate >= num) return "checked"
//         return "";
//     }

//     const stars = new Array(5).fill(null);
//     return <div className="rating-stars">
//         {stars.map((star, i) =>
//             <span key={generateRandomStringCode()} className={`fa fa-star ${check(i + 1)}`}></span>
//         )}
//     </div>;
// };
