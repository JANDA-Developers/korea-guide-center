import React from "react";
import {
    autoComma,
    autoHypen,
    Bold,
    Flex,
    isEmpty,
    IusePagination,
    JDalign,
    JDbadge,
    JDbox,
    JDbutton,
    JDtypho,
    Mb,
    Mr,
    Small,
    Tiny,
} from "@janda-com/front";
import {
    userList_UserList_items,
    FoffsetPagingInfo,
    UserRole,
} from "../../../types/api";
import JDtable, {
    IJDTableProps,
    JDcolumn,
} from "../../../component/table/Table";
import { Clip } from "../../../atom/clip/Clip";
import { yyyymmddHHmm } from "../../../utils/dateFormat";
import { Photo } from "../../../component/photoFrame/PhotoFram";
import Pagination from "../../../component/pagination/Pagination";
import { Ratio, UserRoleKr } from "../../../types/const";
import JDSelectable from "../../../component/table/SelectableTable";
import { Empty } from "../../../atom/Empty";
import { StopBadge } from "../../../component/statusBadges/StatusBadges";
import { TableBtn } from "../../../component/btns/ModalBtn";
import { useContext } from "react";
import { AppContext } from "../../../context/context";
import { usePaths } from "../../../hook/usePaths";
import { Img } from "../../../atom/Image";
import { useUserAccept } from "../../../hook/useUser";
import GuideContext from "../../context";
import { Info } from "../../../atom/Info";
import { UserProfileCard } from "../../../component/userProfileCard/UserProfileCard";
import { FilingCabinet } from "../../../component/userModal/component/FilingCabinet";

export type TproductRowData = userList_UserList_items;

interface IProp extends Partial<IJDTableProps> {
    selectable?: boolean;
    pageInfo?: FoffsetPagingInfo;
    paginationHook: IusePagination;
    Controller?: (data: TproductRowData) => JSX.Element;
    users: TproductRowData[];
    role?: UserRole;
    deletedUsers?: boolean;
}
export const UserTable: React.FC<IProp> = ({
    selectable,
    users,
    Controller,
    paginationHook,
    pageInfo,
    role,
    deletedUsers,
    ...props
}) => {
    const { bookingViewModalHook } = useContext(GuideContext);
    const [acceptUser] = useUserAccept();
    const { toGuideProfileDetail, toProductDetailPage } = usePaths();
    const {} = useContext(AppContext);
    const isGuideTable = role === UserRole.GUIDE;
    const isMasterTable = role === UserRole.ADMIN;
    const isBookerTable = role === UserRole.BUYER;

    let columns: JDcolumn<TproductRowData>[] = [
        {
            width: 130,
            Header: () => <div>기능</div>,
            accessor: "_id",
            Cell: ({ original }) => {
                return <div>{Controller?.(original)}</div>;
            },
        },
        {
            skip: !isGuideTable,
            Header: () => <div>프로필</div>,
            accessor: "profileImage",
            width: 200,
            Cell: ({ original: { profileImage, _id } }) => {
                return (
                    <div>
                        {profileImage?.uri ? (
                            <Img
                                width={80}
                                height={80}
                                src={profileImage?.uri}
                            />
                        ) : (
                            <div />
                        )}
                        <Mb mb="tiny" />
                        <TableBtn
                            onClick={() => {
                                toGuideProfileDetail(_id);
                            }}
                        >
                            프로필
                        </TableBtn>
                    </div>
                );
            },
        },
        {
            Header: () => <div>가입일</div>,
            accessor: "createdAt",
            Cell: ({ original: { createdAt } }) => {
                return <Small>{yyyymmddHHmm(createdAt)}</Small>;
            },
        },
        {
            skip: !deletedUsers,
            width: 200,
            Header: () => <div>탈퇴정보</div>,
            accessor: "resginData",
            Cell: ({ original: { resginData } }) => {
                return (
                    <div>
                        <Small mb>
                            <Info
                                label="탈퇴일"
                                value={yyyymmddHHmm(resginData?.resignDate)}
                            />
                        </Small>
                        <Small>{resginData?.resignReason}</Small>
                    </div>
                );
            },
        },
        {
            Header: () => <div>유저명</div>,
            accessor: "name",
            width: 300,
            Cell: ({ original: { name, nickName, role } }) => {
                return (
                    <Flex column center vCenter>
                        <Bold mr>{nickName}</Bold>
                        <JDalign mb="small"> 본명({name}) </JDalign>
                        <JDbadge thema="grey2">{UserRoleKr[role]}</JDbadge>
                    </Flex>
                );
            },
        },
        {
            Header: () => <div>연락처</div>,
            accessor: "phoneNumber",
            width: 300,
            Cell: ({ original: { phoneNumber, email } }) => {
                return (
                    <JDtypho>
                        <Clip>{autoHypen(phoneNumber || "")}</Clip>
                        <Clip>{email}</Clip>
                    </JDtypho>
                );
            },
        },
        {
            skip: !isGuideTable,
            Header: () => <div>등록상품</div>,
            width: 300,
            accessor: "myProductInfoes",
            Cell: ({ original: { myProductInfoes } }) => {
                const pInfos = myProductInfoes?.filter((v) => v);
                return (
                    <span>
                        <Empty empty={pInfos} msg="작성하신 상품이 없습니다" />
                        {pInfos?.map((product) => (
                            <JDbox mb="tiny">
                                <Small>
                                    {product.title?.ko} [{product.code}]
                                </Small>
                            </JDbox>
                        ))}
                    </span>
                );
            },
        },
        {
            skip: !isGuideTable,
            Header: () => <div>투어 정보</div>,
            accessor: "myTourInfoes",
            width: 200,
            Cell: ({ original: { myTourInfoes } }) => {
                return (
                    <Flex column center vCenter text="center">
                        {myTourInfoes?.length}개의 투어가 있습니다.
                    </Flex>
                );
            },
        },
        // {
        //     skip: !isGuideTable,
        //     Header: () => <div>가이드 프로필</div>,
        //     accessor: "myTourInfoes",
        //     width: 200,
        //     Cell: ({ original: user }) => {
        //         return (
        //             <Flex>
        //                 <UserProfileCard user={user} />
        //                 <Mr />
        //                 {/* 투어 상품 정보 */}
        //                 <FilingCabinet user={user} />
        //             </Flex>
        //         );
        //     },
        // },
        {
            width: 200,
            skip: isGuideTable,
            Header: () => <div>예약 정보</div>,
            accessor: "myBookingInfoes",
            Cell: ({ original: { myBookingInfoes } }) => {
                return (
                    <div style={{ maxHeight: 200 }}>
                        <Empty
                            msg="예약정보가 없습니다"
                            empty={myBookingInfoes}
                        />
                        {myBookingInfoes?.map((bi, index) => (
                            <JDbox key={bi + "myBookingInfo"}>
                                <Tiny>
                                    {bi.tourTitle?.ko}[{bi.bookingCode}]
                                </Tiny>
                            </JDbox>
                        ))}
                    </div>
                );
            },
        },
        {
            skip: deletedUsers,
            Header: () => <div>상태</div>,
            accessor: "stop",
            Cell: ({ original: { stop } }) => {
                return <span>{stop ? <StopBadge stop={stop} /> : "정상"}</span>;
            },
        },
    ];

    columns = columns.filter((col) => !col.skip);

    return (
        <div>
            {selectable ? (
                <JDSelectable columns={columns} data={users} {...props} />
            ) : (
                <JDtable columns={columns} data={users} {...props} />
            )}
            <Mb />
            <Pagination
                {...paginationHook}
                totalPageCount={pageInfo?.totalPageCount || 0}
            />
        </div>
    );
};
