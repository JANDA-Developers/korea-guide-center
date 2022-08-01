import hotkeys from "hotkeys-js";
import { useEffect } from "react";

export const useHotKey = (hotKeys: THotKey[]) => {
    useEffect(() => {
        hotKey(hotKeys);
    }, []);
};

export type THotKey = [string, Function];
export const hotKey = (keys: THotKey[], devOnly: boolean = true) => {
    if (devOnly && process.env.NODE_ENV !== "development") return;
    const hotKeyMap = new Map(keys);
    const eventTargetStr = Array.from(hotKeyMap.keys()).join(",");
    hotkeys(eventTargetStr, function (event, handler) {
        hotKeyMap.get(handler.key)?.();
    });
};
