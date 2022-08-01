import styled from "styled-components";
import { useRouter } from "next/router";

export interface ITourSliderItem {
    title: string;
    desc: string; // 혹시 몰라서 만들어둠
    imageUrl: string;
    price: number;
}

interface ITourSliderItemProps {
    item: ITourSliderItem[];
    offset: number;
    index: number;
}

const TourSliderItem = ({ item, offset, index }: ITourSliderItemProps) => {
    const router = useRouter();
    const onClickTour = () => {
        router.push("/");
    };
    const priceToString = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (
        <>
            {item.slice(offset * index, offset * index + offset).map((i) => {
                return (
                    <div className="slider__LongSliderItems">
                        <div
                            className="slider__TourSliderItemImage"
                            style={{ backgroundImage: `url(${i.imageUrl})` }}
                        />
                        <div className="slider__TourSliderItemTextAndDesc">
                            <h5 className="slider__TourSliderItemTitle">
                                {i.title}
                            </h5>
                            <p>
                                {i.desc.length >= 230
                                    ? i.desc.slice(0, 100) + "..."
                                    : i.desc}
                            </p>
                        </div>
                        <div className="slider__TourSliderItemPriceAndBooking">
                            <h6 className="slider__TourSliderItemPrice">
                                ₩{priceToString(i.price)}
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
