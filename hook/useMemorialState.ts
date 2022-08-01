import { useEffect, useState } from "react";

export const useMemorialState = (defaultValue: string, memoryKey: string) => {
    const memory = localStorage.getItem(memoryKey);
    const [val, setVal] = useState(memory || defaultValue);

    useEffect(() => {
        localStorage.setItem(memoryKey, val as string);
    }, [val]);

    return { val, setVal };
};

export const useMemoryBooleanState = (
    memoryKey: string,
    defaultValue?: boolean
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const memory = localStorage.getItem(memoryKey);
    const targetDefault = memory ?? defaultValue;
    const memoryVal = !!targetDefault;
    const [val, setVal] = useState<boolean>(memoryVal);

    useEffect(() => {
        if (val) localStorage.setItem(memoryKey, "T");
        else localStorage.removeItem(memoryKey);
    }, [val]);

    return [val, setVal];
};
