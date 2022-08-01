// import { JDlabel, opFind, selectOpCreater, useSelect } from "@janda-com/front";
// import React, { useEffect } from "react";
// import { useMemo } from "react";
// import { COUNT } from "../../type/const";
// import { JDselectCounter, ISelectCountProp } from "./JDselectCounter";

// interface IProp extends Omit<Partial<ISelectCountProp>, "onChange"> {
//     count: number;
//     label?: string;
//     onChange: (number: number) => void;
//     optionUnit?: string;
// }

// export const SelectCounter: React.FC<IProp> = ({
//     count,
//     onChange,
//     label,
//     optionUnit,
//     ...props
// }) => {
//     const options = props?.selectHook?.options || COUNT;
//     const replacedOptions = useMemo(() => {
//         if (optionUnit)
//             return selectOpCreater({
//                 count: 1000,
//                 start: 0,
//                 labelAdd: optionUnit,
//             });
//         else return options;
//     }, [optionUnit]);
//     const defaultCapacity = opFind(count as any, replacedOptions);
//     const selectHook = useSelect(defaultCapacity, replacedOptions);

//     const value = selectHook.selectedOption?.value;
//     useEffect(() => {
//         onChange(value);
//     }, [value]);

//     return (
//         <div>
//             {label && <JDlabel txt={label} />}
//             <JDselectCounter {...props} selectHook={selectHook} />
//         </div>
//     );
// };

export default "";
