import { JDcontainer } from "@janda-com/front";
import React, { useContext } from "react";
import { PageHeader } from "../../component/pageHeader/PageHeader";
import { AppContext } from "../../context/context";
import { useGroupUpdate } from "../../hook/useGroup";
import { useProductList } from "../../hook/useProduct";
import { omits } from "../../utils/omits";
import { IndexControlForm } from "./IndexControlForm";

interface IProp {}

export const IndexControl: React.FC<IProp> = () => {
    const [updateGroup] = useGroupUpdate();
    const { indexGroup } = useContext(AppContext);

    const { items, setFilter } = useProductList({
        initialFilter: {
            _id__in: indexGroup?.members || [],
        },
    });

    const handleUpdateGroupMebmers = (members: string[]) => {
        updateGroup({
            variables: {
                GroupId: indexGroup?._id,
                input: {
                    ...omits(indexGroup),
                    members,
                },
            },
        }).then(({ data }) => {
            if (data?.GroupUpdate?.ok) {
                setFilter({
                    _id__in: members,
                });
            }
        });
    };

    return (
        <div>
            <JDcontainer verticalPadding>
                <PageHeader
                    title="메인 상품전시"
                    pageName="메인 상품전시 해주세요~"
                />
                <IndexControlForm
                    items={items}
                    onSubmit={handleUpdateGroupMebmers}
                />
            </JDcontainer>
        </div>
    );
};
