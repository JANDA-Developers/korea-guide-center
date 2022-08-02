import styled from "styled-components";
import { useRouter } from "next/router";
import { productList_ProductList_items } from "../../types/api";
import { useContext } from "react";
import { AppContext } from "../../context/context";

interface ITourSliderItemProps {
    products: productList_ProductList_items[];
    offset: number;
    index: number;
}

const TourSliderItem = ({ products, offset, index }: ITourSliderItemProps) => {
    const router = useRouter();
    const { l, s } = useContext(AppContext);
    const onClickTour = () => {
        router.push("/");
    };
    const priceToString = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <>
            {products
                .slice(offset * index, offset * index + offset)
                .map((i, index) => {
                    return (
                        <div className="slider__LongSliderItems">
                            <div
                                className="slider__TourSliderItemImage"
                                style={{
                                    backgroundImage: `url(${i.thumbNail?.uri})`,
                                }}
                            />
                            <div className="slider__TourSliderItemTextAndDesc">
                                <h5 className="slider__TourSliderItemTitle">
                                    {l(i.title)}
                                </h5>
                                <p>
                                    {l(i.shortDecsription).length >= 40
                                        ? l(i.shortDecsription).slice(0, 40) +
                                          "..."
                                        : l(i.shortDecsription)}
                                </p>
                            </div>
                            <div className="slider__TourSliderItemPriceAndBooking">
                                <h6 className="slider__TourSliderItemPrice">
                                    {priceToString(i.priceAdult!)}
                                </h6>
                                <button
                                    className="slider__TourSliderItemBookingButton"
                                    onClick={onClickTour}
                                >
                                    <span>정보 & 예약하기</span>
                                </button>
                            </div>
                        </div>
                    );
                })}
        </>
    );
};

export default TourSliderItem;
