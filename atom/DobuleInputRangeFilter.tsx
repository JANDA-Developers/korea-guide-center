// import { JDdoubleInputRange, useDayPicker, useSelect } from "@janda-com/front";
// import dayjs from "dayjs";
// import React from "react";
// import { PropsWithChildren, useEffect } from "react";
// import { IListHook } from "../hook/useListQuery";
// import { IselectedOption } from "../utils/formatter";

// interface ISearchOption<T> extends IselectedOption<T> {
// }

// interface IProp<F, S> {
//     listHook: IListHook<F, S>;
//     placeholder?: string;
//     searchOps?: ISearchOption<keyof F>[];
//     [key: string]: any;
// }
// export const DobuleInputRangeFilter = <F, S>({
//     listHook,
//     searchOps = [{label: "생성일", }],
// }: PropsWithChildren<IProp<F, S>>): JSX.Element => {
//     const dayPickerHook = useDayPicker(null, null);
//     const selectBoxHook = useSelect(
//         defaultSelectedSearchOps || searchOps?.[0] || null,
//         searchOps
//     );

//     const adaptFilter = (from: any, to: any) => {
//         listHook.filter[filterOps[0]] = from;
//         listHook.filter[filterOps[1]] = to;
//         listHook.setFilter({ ...listHook.filter });
//     };

//     const removeFilter = () => {
//         delete listHook.filter[filterOps[0]];
//         delete listHook.filter[filterOps[1]];
//         listHook.setFilter({ ...listHook.filter });
//     };

//     useEffect(() => {
//         if (dayPickerHook.from && dayPickerHook.to) {
//             const fromDate = dayjs(dayPickerHook.from).startOf("date").toDate();
//             const toDate = dayjs(dayPickerHook.to).startOf("date").toDate();
//             adaptFilter(fromDate, toDate);
//         } else {
//             removeFilter();
//         }
//     }, [dayPickerHook.from, dayPickerHook.to]);

//     return <JDdoubleInputRange dayPickerHook={dayPickerHook} fromLabel={} />;
// };

export default "";
