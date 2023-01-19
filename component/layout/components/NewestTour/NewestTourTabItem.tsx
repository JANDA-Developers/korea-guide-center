import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";
import { Paths } from "../../../../pages/index[depre]";

interface NewestTourItemProps {
    _id?: string;
    thumbNailUrl: string;
    title: any;
    description: any;
    price: number;
}

const NewestTourItem = ({
    _id,
    thumbNailUrl,
    title,
    description,
    price,
}: NewestTourItemProps) => {
    const { s, l, locale } = useContext(AppContext);
    const priceToString = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div
            className="item bloc-card free"
            data-linkall="a"
            onClick={() => {
                location.href = `${locale}/${Paths.productDetailView}/${_id}`;
            }}
        >
            <figure className="fit-cover">
                <img
                    src={thumbNailUrl}
                    alt="Newest Tour"
                    width="335"
                    height="335"
                    className="lazy"
                />
            </figure>
            <div className="content">
                {/* <span className="category">Free Tour - Tips-based</span> */}
                <a>
                    <h3>{l(title)}</h3>
                </a>
                <p>
                    {" "}
                    {l(description).length >= 70
                        ? l(description).slice(0, 70) + "..."
                        : l(description)}
                </p>
            </div>
            <div className="info-bottom">
                <span className="btn gtm-event-info-booking">
                    {s("AboutAndSchedule")}
                </span>
                <span className="price">₩{priceToString(price)}</span>
            </div>
        </div>
    );
};

export default React.memo(NewestTourItem);
