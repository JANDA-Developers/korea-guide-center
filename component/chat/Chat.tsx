import {
    Flex,
    IJDalignProp,
    JDalign,
    JDavatar,
    JDbutton,
    Tiny,
    useInput,
    InputText,
    Mr,
    toast,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../context/context";
import { ChatInput, Fchat, Ffile } from "../../types/api";
import { BG } from "../../types/const";
import { IDiv } from "../../types/interface";
import { cutStr } from "../../utils/cutStr";
import { MMDDhhmm, yyyymmddHHmmLabel } from "../../utils/dateFormat";
import { omitsAuto } from "../../utils/omit";
import { Validater } from "../../utils/Validater";
import { Circle } from "../circle/Circle";
import { FileBox } from "../filebox/FileBox";
import { MultiFileInput } from "../multiFileInput/MultiFileInput";

interface IProp extends IJDalignProp {
    chat: Fchat;
    profileImg?: string;
    dir: "left" | "right";
}

interface IBallonProp extends IJDalignProp {
    dir: "left" | "right";
}
export const Ballon: React.FC<IBallonProp> = ({
    dir,
    children,
}: IBallonProp) => {
    return (
        <JDalign
            mr={dir === "left" ? "normal" : undefined}
            className={
                "ballon " + (dir === "right" ? "ballon--right" : "ballon--left")
            }
        >
            {children}
        </JDalign>
    );
};

export const Chat: React.FC<IProp> = ({ chat, profileImg, dir, ...props }) => {
    const { me } = useContext(AppContext);
    const { message, name, nickName, files, createdAt, userId } = chat;
    const _name = nickName || name;
    const isMyChat = me?._id === userId;
    return (
        <JDalign
            className={props.className + (isMyChat ? " Chat--myChat" : "")}
            {...props}
        >
            <Flex className="Chat__inWrap">
                <div className="Chat__circleZone">
                    {profileImg ? (
                        <JDavatar mr img={profileImg} />
                    ) : (
                        <Circle className="Chat__nameCircle">
                            <Tiny>{cutStr(_name, 3, "")}</Tiny>
                        </Circle>
                    )}
                </div>
                <div>
                    <Tiny color="grey2">{MMDDhhmm(createdAt)}</Tiny>
                    <Ballon dir={dir}>{message}</Ballon>
                    <div style={{ marginTop: "0.8rem" }}>
                        {files?.map((file) => (
                            <FileBox key={file._id} file={file} />
                        ))}
                    </div>
                </div>
            </Flex>
        </JDalign>
    );
};

interface IChatFormProp {
    onSubmit: (chatInput: ChatInput) => void;
}

export const ChatForm: React.FC<IChatFormProp> = ({ onSubmit }) => {
    const { me, s } = useContext(AppContext);
    const [message, setMessage] = useState("");
    const [files, setFiles] = useState<Ffile[]>([]);

    const { validate } = new Validater([
        {
            value: message,
            failMsg: "하나이상의 텍스트를 작성해주세요.",
            id: "BallonForm",
        },
    ]);

    const handleSubmit = () => {
        if (!validate()) return;
        onSubmit({
            files: omitsAuto(files),
            message,
        });
        setMessage("");
        setFiles([]);
    };

    return (
        <div className="ChatForm">
            <Flex mb vCenter>
                <Circle
                    img={me?.profileImage?.uri}
                    className="Chat__nameCircle"
                >
                    {s("I")}
                </Circle>
                <BallonEditor value={message} onChange={setMessage} />
                <Mr />
                <JDbutton
                    thema="primary"
                    onClick={handleSubmit}
                    label={s("send")}
                />
            </Flex>
            <MultiFileInput
                className="ChatForm__file"
                files={files}
                onChange={setFiles}
            />
        </div>
    );
};

interface IBallonEditorProp {
    value: string;
    onChange: (val: string) => void;
}

export const BallonEditor: React.FC<IBallonEditorProp> = ({
    onChange,
    value,
}) => {
    return (
        <textarea
            id="BallonForm"
            className="ballon ballon--form"
            value={value}
            onChange={(e) => {
                onChange(e.currentTarget.value);
            }}
            onInput={(e) => {
                e.currentTarget.style.height = "5px";
                const scrollHegiht = e.currentTarget.scrollHeight;
                e.currentTarget.style.height = scrollHegiht + "px";
            }}
        />
    );
};
