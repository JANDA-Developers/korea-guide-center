import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";
import { Paths } from "../../../../pages/index[depre]";

interface NewestTourItemProps {
    _id?: string;
    thumbNailUrl: string;
    title: any;
    description: any;
    price: number;
    category: string;
    regionLabel: string;
}

export const priceToString = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const NewestTourItem = ({
    _id,
    thumbNailUrl,
    title,
    description,
    price,
    category,
    regionLabel,
}: NewestTourItemProps) => {
    const { s, l, locale } = useContext(AppContext);

    return (
        <div
            className="item bloc-card free"
            style={{
                position: "relative",
            }}
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
            <div
                className="content"
                style={{
                    padding: "30px 0",
                    paddingTop: "10px",
                }}
            >
                <span
                    className="category"
                    style={{
                        borderColor: "#D15C2E",
                        color: "#D15C2E",
                    }}
                >
                    {category + "·" + regionLabel}
                </span>
                <a>
                    <h3>{l(title)}</h3>
                </a>
                <p>
                    {l(description).length >= 35
                        ? l(description).slice(0, 35) + "..."
                        : l(description)}
                </p>
            </div>
            <div className="info-bottom">
                <div
                    className="price"
                    style={{
                        position: "relative",
                        color: "black",
                        fontWeight: 500,
                    }}
                >
                    ₩{priceToString(price)}
                </div>
                <span
                    className="btn gtm-event-info-booking"
                    style={{
                        boxSizing: "border-box",
                        width: "100%",
                    }}
                >
                    {s("AboutAndSchedule")}
                </span>
            </div>
        </div>
    );
};

export default React.memo(NewestTourItem);
