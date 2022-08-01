// import {
//     Flex,
//     IJDalignProp,
//     JDdayPicker,
//     Mr,
//     Split,
//     TimePicker,
//     Tiny,
//     useDayPicker,
//     useTimePicker,
// } from "@janda-com/front";
// import React, { useEffect, useState } from "react";
// import { TUseDateTimePicker } from "../../hook/useDateTimePicker";
// import { HOURS_SELECT_OP, MINUTES_SELECT_OP } from "../../type/const";
// import { ScrollBox } from "../scrollBox/ScrollBox";
// import dayjs from "dayjs";
// import { useContext } from "react";
// import { AppContext } from "../../context/context";

// interface IProp extends TUseDateTimePicker {
//     align?: IJDalignProp;
//     fixSameDate?: boolean;
//     fixTimeRange?: boolean;
//     useDayPick?: boolean;
//     useTime?: boolean;
//     useRange?: boolean;
// }

// export const DateWithTimePicker: React.FC<IProp> = ({
//     fixTimeRange,
//     fixSameDate,
//     align,
//     useDayPick = true,
//     useTime = true,
//     useRange = true,
//     endDateHook,
//     endTimerHook,
//     startDateHook,
//     startTimerHook,
// }) => {
//     const { s } = useContext(AppContext);
//     const [lastStart, setLastStart] = useState<{
//         date: Date | null;
//         hour: number;
//         min: number;
//     }>({
//         date: startDateHook.from,
//         hour: 0,
//         min: 0,
//     });
//     const startDate = startDateHook.from?.valueOf();
//     const startHour = startTimerHook.hour;
//     const startMin = startTimerHook.min;
//     const endHour = endTimerHook.hour;
//     const endMin = endTimerHook.min;

//     useEffect(() => {
//         if (!fixTimeRange) return;

//         const diffH = startHour - lastStart.hour;
//         const diffM = startMin - lastStart.min;
//         let diffDate = 0;
//         let toDate = endDateHook.from;

//         if (lastStart.date && endDateHook.from) {
//             diffDate = dayjs(lastStart.date).diff(endDateHook.from);
//             toDate = dayjs(endDateHook.from).add(diffDate, "day").toDate();
//         }

//         const nextEndHour = endHour + diffH;
//         const nextEndMin = endMin + diffM;

//         if (lastStart.hour) {
//             endTimerHook.setTime({
//                 hour: nextEndHour,
//                 min: nextEndMin,
//             });
//         }

//         if (fixSameDate) {
//             toDate = startDateHook.from;
//         }

//         if (toDate) endDateHook.setDate(toDate);

//         setLastStart({
//             date: toDate,
//             hour: startHour,
//             min: startMin,
//         });
//     }, [startHour, startMin, startDate, startDateHook.from?.valueOf()]);

//     return (
//         <Flex wrap vCenter {...align}>
//             {useDayPick && (
//                 <JDdayPicker
//                     format={s("dateFormay")}
//                     isRange={false}
//                     mr
//                     {...startDateHook}
//                     mode="input"
//                 />
//             )}
//             {useTime && (
//                 <Flex>
//                     <TimePicker
//                         minOps={MINUTES_SELECT_OP}
//                         hourOps={HOURS_SELECT_OP}
//                         {...startTimerHook}
//                     />
//                     <Mr mr="tiny" />
//                     <Tiny mr>{s("startFrom")}</Tiny>
//                 </Flex>
//             )}
//             {!fixSameDate && useRange && (
//                 <JDdayPicker
//                     format={s("dateFormay")}
//                     isRange={false}
//                     mr
//                     {...endDateHook}
//                     mode="input"
//                 />
//             )}
//             {useTime && useRange && (
//                 <Flex>
//                     <TimePicker
//                         minOps={MINUTES_SELECT_OP}
//                         hourOps={HOURS_SELECT_OP}
//                         {...endTimerHook}
//                     />
//                     <Mr mr="tiny" />
//                     <Tiny>{s("till")}</Tiny>
//                 </Flex>
//             )}
//         </Flex>
//     );
// };

export default "";
