import {
    JDalign,
    JDbutton,
    JDdayPickerModal,
    JDselect,
    opFind,
    useDayPicker,
    useInput,
    useModal,
    useSelect,
} from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { InputText } from "@janda-com/front";
import React, { PropsWithChildren, useEffect } from "react";
import dayjs from "dayjs";
import { IListHook } from "../hook/useListQuery";
import { whenEnter } from "../utils/whenEnter";

interface ISearchOption<T, F = any> extends IselectedOption<T> {
    type?: "date" | "dateRange";
    filter?: (value: any) => void;
}

interface IProp<F, S> {
    listHook?: IListHook<F, S>;
    placeholder?: string;
    searchOps: ISearchOption<keyof F, F>[];
    [key: string]: any;
}

export const JDsearchBar = <F, S>({
    listHook,
    searchOps,
    placeholder,
    ...props
}: PropsWithChildren<IProp<F, S>>): JSX.Element => {
    const { setRangeFilter, filter, setFilter, setUniqFilter } =
        listHook as any;
    const dayPickerModalHook = useModal();
    const dayPickerHook = useDayPicker(null, null);

    // @ts-ignore
    const defaultSelectedSearchOps = searchOps.find(
        (filterOp) => !!filter?.[filterOp.value]
    );
    const selectBoxHook = useSelect(
        defaultSelectedSearchOps || searchOps?.[0] || null,
        searchOps
    );
    const selectedSearchOps = selectBoxHook.selectedOption as ISearchOption<
        keyof F
    >;
    const inputTextHook = useInput("");

    const dateString = dayPickerHook.from
        ? dayjs(dayPickerHook.from).format("YYYY년 MM월 DD일~YYYY년 MM월 DD일")
        : "";

    const handleInputClick = () => {
        if (selectedSearchOps?.type !== undefined) {
            dayPickerModalHook.openModal();
        }
    };

    const searchType = selectBoxHook.selectedOption?.value;
    const searchKeys = searchOps.map((op) => op.value);

    const isDateSearch = selectedSearchOps?.type !== undefined;

    const handleSearchDate = () => {
        if (!searchType) return;

        setUniqFilter(searchType, searchKeys, undefined);
        setRangeFilter(
            {
                from: dayPickerHook.from || undefined,
                to: dayPickerHook.to || undefined,
            },
            searchType
        );
    };

    const handleSearch = () => {
        const filterTargetOption = searchOps.find(
            (op) => op.value === searchType
        );
        const customFilter = filterTargetOption?.filter;

        if (!searchType) return;
        if (customFilter) {
            customFilter(inputTextHook.value);
            return;
        }
        if (isDateSearch) handleSearchDate();
        else setUniqFilter(searchType, searchKeys, inputTextHook.value);
    };

    useEffect(() => {
        if (isDateSearch) inputTextHook.onChange(dateString);
    }, [dateString]);

    return (
        <JDalign flex {...props}>
            {searchOps && (
                <JDalign mr="small">
                    <JDselect menuCanOverflow {...selectBoxHook} autoSize />
                </JDalign>
            )}
            <InputText
                onKeyPress={whenEnter(handleSearch)}
                style={{ background: "white", width: "100%" }}
                mr="small"
                onClick={handleInputClick}
                placeholder={placeholder}
                {...inputTextHook}
            />
            <JDbutton
                br="square"
                onClick={handleSearch}
                mode="flat"
                thema="black"
            >
                검색
            </JDbutton>
            <JDdayPickerModal
                canSelectBeforeDay
                isRange={selectedSearchOps?.type === "dateRange"}
                autoClose
                {...dayPickerHook}
                modalHook={dayPickerModalHook}
            />
        </JDalign>
    );
};

export default JDsearchBar;
