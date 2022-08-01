import { Validater } from "@janda-com/front";
import { useState } from "react";
import { TravelerInfoInput } from "../types/api";
import { useCopy } from "./useCopy";

export const useTravlerInfo = (defaultTravlerInputs?: TravelerInfoInput[]) => {
    const [travlers, setTravlers] = useCopy<TravelerInfoInput[]>(
        defaultTravlerInputs || []
    );

    const { validate: travlerValidate, nodes: travelrValidateNodes } =
        new Validater(
            travlers.flatMap((travler, index) => [
                {
                    value: travler.name,
                    failMsg: "여행자 이름을 입력 해주세요.",
                    id: "TravlerFormName" + index,
                },
                {
                    value: travler.gender,
                    failMsg: "여행자 성별을 입력 해주세요.",
                    id: "TravlerFormGender" + index,
                },
                {
                    value: travler.phoneNumber,
                    failMsg: "여행자 연락처를 입력 해주세요.",
                    id: "TravlerFormPhoneNumber" + index,
                },
                {
                    value: travler.phoneNumber,
                    failMsg: "여행자 이메일을 입력 해주세요.",
                    id: "TravlerFormEmail" + index,
                },
                {
                    value: travler.phoneNumber,
                    failMsg: "생년월일을 입력해주세요.",
                    id: "TravlerFormBirthDay" + index,
                },
            ])
        );

    return { travlers, setTravlers, travlerValidate, travelrValidateNodes };
};
