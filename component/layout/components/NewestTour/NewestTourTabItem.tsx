import React, { useContext } from "react";
import { AppContext } from "../../../../context/context";

interface NewestTourItemProps {
    thumbNailUrl: string;
    title: any;
    description: any;
    price: number;
}

const NewestTourItem = ({
    thumbNailUrl,
    title,
    description,
    price,
}: NewestTourItemProps) => {
    const { s, l } = useContext(AppContext);
    const priceToString = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div className="item bloc-card free" data-linkall="a">
            <figure className="fit-cover">
                <img
                    src={thumbNailUrl}
                    data-src="https://www.neweuropetours.eu/wp-content/uploads/2018/08/amsterdam-walking-tours-05-335x335.jpg"
                    alt="amsterdam's famous canals and bridges during the amsterdam free walking tour"
                    width="335"
                    height="335"
                    className="lazy"
                />
            </figure>
            <div className="content">
                <span className="category">Free Tour - Tips-based</span>
                <a href="https://www.neweuropetours.eu/sandemans-tours/amsterdam/free-tour-of-amsterdam/">
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
