import {
    Bold,
    Flex,
    InputText,
    JDalign,
    JDbadge,
    JDbutton,
    JDhorizen,
    JDlabel,
    JDselect,
} from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { counturyOps } from "../../utils/countury";
import { Ftraveler, Gender, TravelerInfoInput } from "../../types/api";
import { BirthDayPicker } from "../birthDayPicker/BirthDayPicker";
import DotButton from "../dotButton/DotButton";
import { GenderInput } from "../genderInput/GenderInput";
import { mergeArray } from "../../utils/mergeArray";

interface ITravelerFormProp {
    travler: TravelerInfoInput;
    onChange: any;
    index?: number;
}

export const TravelerForm: React.FC<ITravelerFormProp> = ({
    index,
    travler,
    onChange,
}) => {
    const {
        gender,
        email,
        birthDate,
        name,
        phoneNumber,
        Representative,
        countryCode,
        isBooker,
        passportNumber,
    } = travler;
    const { s } = useContext(AppContext);
    return (
        <div className="TravlerForm">
            <Flex vEnd>
                <InputText
                    require
                    mr
                    mb
                    id={"TravlerFormName" + index}
                    onChange={(val) => {
                        travler.name = val;
                        onChange();
                    }}
                    value={name}
                    label={s("name")}
                />
                <GenderInput
                    mb
                    id={"TravlerFormGender" + index}
                    setValue={(gender) => {
                        travler.gender = gender;
                        onChange();
                    }}
                    value={gender}
                />
            </Flex>
            <Flex>
                <InputText
                    require
                    id={"TravlerFormPhoneNumber" + index}
                    onChange={(val) => {
                        travler.phoneNumber = val;
                        onChange();
                    }}
                    mr
                    mb
                    value={phoneNumber}
                    label={s("phoneNumber")}
                />
                <InputText
                    id={"TravlerFormEmail" + index}
                    require
                    onChange={(val) => {
                        travler.email = val;
                        onChange();
                    }}
                    mb
                    value={email}
                    label={s("email")}
                />
            </Flex>
            <Flex oneone wrap>
                <div className="TravlerForm__birthDay">
                    <JDlabel require txt={s("birthDay")} />
                    <BirthDayPicker
                        mr
                        id={`TravlerFormBirthDay` + index}
                        birthDate={travler.birthDate}
                        setBirthDate={(date) => {
                            travler.birthDate = date;
                            onChange();
                        }}
                    />
                </div>
                <div>
                    <JDselect
                        mb
                        id={"CountryFormEmail" + index}
                        require
                        options={counturyOps}
                        onChange={(cc) => {
                            travler.countryCode = cc.value;
                            onChange();
                        }}
                        label={s("country")}
                    />
                </div>
            </Flex>
            <InputText
                id={"CountryFormPassportNumber" + index}
                value={passportNumber || ""}
                label={s("passportNumber")}
                onChange={(val) => {
                    travler.passportNumber = val;
                    onChange();
                }}
            />
        </div>
    );
};

export const defaultTralver: Ftraveler = {
    Representative: false,
    __typename: "TravelerInfo",
    birthDate: new Date(),
    countryCode: "",
    email: "",
    gender: Gender.MALE,
    isBooker: false,
    name: "",
    passportNumber: "",
    phoneNumber: "",
};

interface IProp {
    travlersInput: TravelerInfoInput[];
    setTravlersInput: React.Dispatch<React.SetStateAction<TravelerInfoInput[]>>;
}

export const TravelersForm: React.FC<IProp> = ({
    setTravlersInput,
    travlersInput,
}) => {
    const { s, me } = useContext(AppContext);
    const hnadleRid = (index: number) => () => {
        travlersInput.splice(index, 1);
        setTravlersInput([...travlersInput]);
    };

    const handleIncludeMySelf = () => {
        const {
            phoneNumber,
            name,
            gender,
            countryCode,
            birthDate,
            email,
            passportNumber,
        } = me!;
        const nextTravler: TravelerInfoInput = {
            birthDate: birthDate || new Date("1990-01-01"),
            email,
            gender: gender || Gender.MALE,
            name: name || "",
            phoneNumber: phoneNumber || "",
            countryCode,
            Representative: true,
            isBooker: true,
            passportNumber: passportNumber || "",
        };

        setTravlersInput([...mergeArray(travlersInput, [nextTravler])]);
    };

    const hasBooker = !!travlersInput.find((ti) => ti.isBooker);

    return (
        <div>
            <JDbutton
                br="square"
                mode="border"
                hide={!me || hasBooker}
                mb
                onClick={handleIncludeMySelf}
            >
                {s("includeBooker")}
            </JDbutton>
            {travlersInput.map((ti, index) => {
                if (index === 0) ti.Representative = true;
                return (
                    <div key={index + "travelerInput"}>
                        <Flex vCenter between>
                            <Bold flex mb>
                                <JDalign mr>
                                    {s("travler")}
                                    {index + 1}{" "}
                                </JDalign>
                                <Flex style={{ height: "content-height" }}>
                                    <span>
                                        {ti.Representative && (
                                            <JDbadge thema="grey1" mr="small">
                                                {s("representive")}
                                            </JDbadge>
                                        )}
                                    </span>
                                    <span>
                                        {ti.isBooker && (
                                            <JDbadge thema="grey1">
                                                {s("booker")}
                                            </JDbadge>
                                        )}
                                    </span>
                                </Flex>
                            </Bold>
                            <JDbutton
                                hide={index === 0}
                                onClick={hnadleRid(index)}
                                thema="error"
                                size="tiny"
                            >
                                {s("delete")}
                            </JDbutton>
                        </Flex>
                        <TravelerForm
                            index={index}
                            travler={ti}
                            onChange={() => {
                                setTravlersInput([...travlersInput]);
                            }}
                        />
                        <JDhorizen margin={3} />
                    </div>
                );
            })}
            <DotButton
                mb
                onClick={() => {
                    travlersInput.push({ ...defaultTralver });
                    setTravlersInput([...travlersInput]);
                }}
            >
                {s("addTraveler")}
            </DotButton>
        </div>
    );
};
