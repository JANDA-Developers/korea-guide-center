import { autoComma, Tiny } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React, { useState } from "react";
import { _ProductFilter } from "../../../types/api";
import { DoubleRangeSlider } from "../../rangeSlider/DoubleRangeSlider";

interface IProp {
    filter: _ProductFilter;
    setFilter: ISet<_ProductFilter>;
}

const Max = 150000;

export const PriceFilter: React.FC<IProp> = ({ filter, setFilter }) => {
    const { priceAdult__gte, priceAdult__lte } = filter;
    const biggerthan = priceAdult__gte || 0;
    const lowerthan = priceAdult__lte || Max;
    const [values, setValues] = useState([biggerthan, lowerthan]);
    return (
        <div>
            <Tiny>
                {`${autoComma(values[0])}₩`} ~ {`${autoComma(values[1])}₩`}
            </Tiny>
            <DoubleRangeSlider
                step={1000}
                onMouseUp={() => {
                    filter.priceAdult__lte = values[1];
                    filter.priceAdult__gte = values[0];
                    setFilter({
                        ...filter,
                    });
                }}
                setValue={(values) => {
                    setValues([...values]);
                }}
                values={values}
                MIN={0}
                MAX={Max}
            />
        </div>
    );
};
