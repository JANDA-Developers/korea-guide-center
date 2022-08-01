import dynamic from "next/dynamic";
import React from "react";
interface IProp {}
export const LoadEditor = (): React.ComponentType<{
    data: string;
    onChange: (val: string) => void;
}> =>
    dynamic(() => import("./CkEditor.jsx"), {
        ssr: false,
        loading: () => (
            <div
                className="editorHolder"
                style={{ height: 200 }}
                dangerouslySetInnerHTML={{ __html: "에디터 로딩..." }}
            />
        ),
    });
