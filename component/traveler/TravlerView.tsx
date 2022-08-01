import React, { useContext } from "react";
import { Ftraveler } from "../../types/api";
import { yyyymmdd } from "../../utils/dateFormat";
import { ScrollBox } from "../scrollBox/ScrollBox";
import LineTable from "../table/LineTable";
import { AppContext } from "../../context/context";
import { RepresentiveTourBadge } from "../statusBadges/StatusBadges";
import { Flex, JDbadge } from "@janda-com/front";

interface ITravelerViewsProps {
    travlers: Ftraveler[];
}
export const TravlerViews: React.FC<ITravelerViewsProps> = ({ travlers }) => {
    const { s } = useContext(AppContext);
    return (
        <div className="travlerViews">
            <ScrollBox>
                <LineTable
                    columns={[
                        {
                            key: "name",
                            body: ({ name, Representative, isBooker }) => {
                                return (
                                    <Flex vCenter>
                                        <JDbadge
                                            hide={!Representative}
                                            thema="grey1"
                                            mr="small"
                                        >
                                            대표자
                                        </JDbadge>
                                        <JDbadge
                                            hide={!isBooker}
                                            thema="grey1"
                                            mr="small"
                                        >
                                            예약자
                                        </JDbadge>
                                        <div>{name || "-"}</div>
                                    </Flex>
                                );
                            },
                            header: s("name"),
                        },
                        {
                            key: "gender",
                            body: ({ gender }) => {
                                return <div>{gender || "-"}</div>;
                            },
                            header: s("gender"),
                        },
                        {
                            key: "birthDate",
                            body: ({ birthDate }) => {
                                return <div>{yyyymmdd(birthDate) || "-"}</div>;
                            },
                            header: s("birthDay"),
                        },
                        {
                            key: "email",
                            body: ({ email }) => {
                                return <div>{email || "-"}</div>;
                            },
                            header: s("email"),
                        },
                        {
                            key: "phoneNumber",
                            body: ({ phoneNumber }) => {
                                return <div>{phoneNumber || "-"}</div>;
                            },
                            header: s("phoneNumber"),
                        },
                        {
                            key: "passportNumber",
                            body: ({ passportNumber }) => {
                                return <div>{passportNumber || "-"}</div>;
                            },
                            header: s("passportNumber"),
                        },
                        {
                            key: "countryCode",
                            body: ({ countryCode }) => {
                                return <div>{countryCode || "-"}</div>;
                            },
                            header: s("country"),
                        },
                    ]}
                    data={travlers}
                />
            </ScrollBox>
        </div>
    );
};
