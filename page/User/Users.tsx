import { Flex, JDcard, JDcontainer, toast, WindowSize } from "@janda-com/front";
import React from "react";
import { useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { Clip } from "../../atom/clip/Clip";
import JDsearchBar from "../../atom/SearchBar";
import { TableBtn } from "../../component/btns/ModalBtn";
import { CardHead } from "../../component/modalHead/ModalHead";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import { getUserSummary } from "../../component/userModal/UserModal";
import { AppContext } from "../../context/context";
import {
    useAddTempPassword,
    useUserAccept,
    useUserDelete,
    useUserList,
    useUserManage,
} from "../../hook/useUser";
import { UserRole, _IUserFilter, _IUserSort } from "../../types/api";
import { UserRoleKr } from "../../types/const";
import GuideContext from "../context";
import { UserTable } from "./components/UserTable";

interface IProp {
    deletedUsers?: boolean;
    role?: UserRole;
    GuideRequests?: boolean;
}

export const User: React.FC<IProp> = ({
    role,
    deletedUsers,
    GuideRequests,
}) => {
    const { userModalHook, alertModalHook } = useContext(GuideContext);
    const { handleAcceptGuide, handleDeleteUser, handleStopToggle } =
        useUserManage();

    const [addTempPw] = useAddTempPassword({
        onCompleted: ({ AddTempPassword }) => {
            if (AddTempPassword) {
                alertModalHook?.openModal({
                    title: "임시비밀번호",
                    content: <Clip>{AddTempPassword}</Clip>,
                });
            }
        },
    });

    const resginFilter: _IUserFilter = deletedUsers
        ? {
              resginData_resign__eq: true,
          }
        : {};

    let roleSort: _IUserSort = _IUserSort.createdAt__desc;
    let roleFilter: _IUserFilter = role
        ? {
              role__eq: role,
              isDeleted__not_eq: true,
          }
        : {};

    if (GuideRequests) {
        roleFilter = {
            role__eq: UserRole.BUYER,
            applyAt__not_eq: null,
        };
    }

    if (deletedUsers) {
        roleFilter = {
            isDeleted__eq: true,
        };
        roleSort = _IUserSort._id__asc;
    }

    const userListHook = useUserList({
        fixingFilter: {
            ...roleFilter,
            ...resginFilter,
            isDeleted__not_eq: true,
        },
        initialSort: [roleSort],
    });
    const {
        items: users,
        paginatorHook,
        pageInfo,
        filter,
        setFilter,
    } = userListHook;

    return (
        <div>
            <JDcontainer size={WindowSize.full} verticalPadding>
                <PageHeader
                    title="회원 살펴보기"
                    pageName="회원"
                    description="회원 살펴보기"
                />
                <JDcard mb head="회원목록 필터">
                    <JDsearchBar
                        searchOps={[
                            {
                                label: "전체검색",
                                value: "applyAt__not_eq",
                                filter: (value) => {
                                    setFilter({
                                        ...filter,
                                        OR: [
                                            {
                                                name__contains: value,
                                            },
                                            {
                                                nickName__contains: value,
                                            },
                                            {
                                                email__contains: value,
                                            },
                                            {
                                                phoneNumber__contains: value,
                                            },
                                            {
                                                regions_label_ko__contains:
                                                    value,
                                            },
                                        ],
                                    });
                                },
                            },
                            {
                                label: "회원이름",
                                value: "name__contains",
                            },
                            {
                                label: "닉네임",
                                value: "nickName__contains",
                            },
                            {
                                label: "이메일",
                                value: "email__contains",
                            },
                            {
                                label: "전화번호",
                                value: "phoneNumber__contains",
                            },
                            {
                                label: "지역이름",
                                value: "regions_label_ko__contains",
                            },
                        ]}
                        listHook={userListHook}
                    />
                </JDcard>

                <JDcard
                    head={
                        <CardHead
                            title={<div>{UserRoleKr[role!]} 유저 목록</div>}
                            description="유저 목록입니다"
                        />
                    }
                >
                    <UserTable
                        Controller={(user) => {
                            const { isBooker, itsGuideAppling, isGuide } =
                                getUserSummary(user);
                            const handleOpenDetail = () => {
                                userModalHook.openModal({
                                    userId: user._id,
                                });
                            };
                            return (
                                <div>
                                    <TableBtn
                                        hide={!itsGuideAppling}
                                        thema="primary"
                                        onClick={handleAcceptGuide(user._id)}
                                    >
                                        가이드허용
                                    </TableBtn>
                                    <TableBtn
                                        thema="error"
                                        onClick={handleDeleteUser(user._id)}
                                    >
                                        삭제하기
                                    </TableBtn>
                                    <TableBtn
                                        thema={user.stop ? "primary" : "error"}
                                        onClick={handleStopToggle(user._id)}
                                    >
                                        {user.stop ? "활동재개" : "정지하기"}
                                    </TableBtn>

                                    <TableBtn
                                        onClick={() => {
                                            addTempPw({
                                                variables: {
                                                    userId: user._id,
                                                },
                                            });
                                        }}
                                    >
                                        임시비번
                                    </TableBtn>

                                    <TableBtn onClick={handleOpenDetail}>
                                        자세히보기
                                    </TableBtn>
                                </div>
                            );
                        }}
                        role={role}
                        deletedUsers={deletedUsers}
                        pageInfo={pageInfo}
                        paginationHook={paginatorHook}
                        users={users}
                    />
                </JDcard>
            </JDcontainer>
        </div>
    );
};

type IDetailRouteProp = { role?: UserRole };
export const UserWrap = () => {
    const {
        params: { role },
    } = useRouteMatch<IDetailRouteProp>();
    return <User key={role} role={role} />;
};
