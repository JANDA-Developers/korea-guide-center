import React, { useState, useContext } from "react";
import dayjs from "dayjs";
import { BigHorizenCalendar } from "../bigHorizenCalendar/BigHorizenCalendar";
import { ProductViewCardsWithApi } from "./ProductViewCards";
import { ProductViewsLineHeader } from "./ProductViewsLineHeader";
import { Empty } from "../../atom/Empty";
import { AppContext } from "../../context/context";

interface IProp {}

export const ProductViewCardsWithHorizenCalendar: React.FC<IProp> = () => {
    const { s } = useContext(AppContext);
    const [selectedDay, setSelectedDay] = useState(
        dayjs().add(1, "day").toDate()
    );
    return (
        <div>
            <ProductViewsLineHeader
                description={s("selectDateIsTravelingDate")}
                title={s("selectStartDate")}
            />
            <BigHorizenCalendar
                mb
                selectedDay={selectedDay}
                onSelect={setSelectedDay}
            />
            <ProductViewCardsWithApi
                empty={<Empty msg={s("noTourDateIsAvailable")} />}
                key={
                    dayjs(selectedDay).format("YYYYMMDD") +
                    "ProductViewCardsWithApi"
                }
                queryParam={{
                    fixingFilter: {
                        elemMatch: {
                            tourDates__gte: dayjs(selectedDay).startOf("date"),
                            tourDates__lte: dayjs(selectedDay).endOf("date"),
                        },
                    },
                }}
            />
        </div>
    );
};
