// import { JDbutton } from "@janda-com/front";
// import { TElements } from "@janda-com/front/dist/types/interface";
// import React from "react";
// import { Info } from "../../atom/Info";
// import { DisplayType, Fattribute } from "../../type/api";
// import dayjs from "dayjs";

// interface IProp {
//     attrs: Fattribute[];
// }

// export const AttributeViewer: React.FC<IProp> = ({ attrs }) => {
//     return (
//         <div>
//             {attrs.map((attr) => {
//                 let value: TElements = attr.value || "";

//                 if (attr.displayType === DisplayType.FILE) {
//                     value = (
//                         <JDbutton
//                             padding="small"
//                             size="tiny"
//                             mode="border"
//                             onClick={() => {
//                                 window.open(attr.value || "", "_blank");
//                             }}
//                             label="다운로드"
//                         />
//                     );
//                 }

//                 if (attr.displayType === DisplayType.TIME_PICKER) {
//                     if (typeof value === "string") {
//                         value = value.replace("h", "시");
//                         value = value + "분";
//                     }
//                 }
//                 if (attr.displayType === DisplayType.DATE_PICKER) {
//                     if (typeof value === "string") {
//                         value = dayjs(value).format("YYYY.MM.DD");
//                     }
//                 }

//                 return (
//                     <Info
//                         mr
//                         mb
//                         key={attr.key}
//                         value={value || ""}
//                         label={attr.label || ""}
//                     />
//                 );
//             })}
//         </div>
//     );
// };

export default "";
