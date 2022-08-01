import { getRefetch } from "@janda-com/front";
import {
    GROUP_CREATE,
    GROUP_DELETE,
    GROUP_FIND_BY_ID,
    GROUP_LIST,
    GROUP_UPDATE,
} from "../apollo/gql/group";
import { ME } from "../apollo/gql/user";
import {
    groupCreate,
    groupCreateVariables,
    groupDelete,
    groupDeleteVariables,
    groupFindById,
    groupFindByIdVariables,
    groupFindById_GroupFindById,
    groupList,
    groupListVariables,
    groupList_GroupList_items,
    groupUpdate,
    groupUpdateVariables,
    _GroupFilter,
    _GroupSort,
} from "../types/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
} from "../utils/query";

export const useGroupFindById = generateFindQuery<
    groupFindById,
    groupFindByIdVariables,
    groupFindById_GroupFindById
>("GroupId", GROUP_FIND_BY_ID);
export const useGroupList = generateListQueryHook<
    _GroupFilter,
    _GroupSort,
    groupList,
    groupListVariables,
    groupList_GroupList_items
>(GROUP_LIST, {
    ...getRefetch(GROUP_LIST),
    initialSort: [_GroupSort.order__asc],
});
export const useGroupCreate = generateMutationHook<
    groupCreate,
    groupCreateVariables
>(GROUP_CREATE, { ...getRefetch(GROUP_LIST, GROUP_FIND_BY_ID) });
export const useGroupDelete = generateMutationHook<
    groupDelete,
    groupDeleteVariables
>(GROUP_DELETE, { ...getRefetch(GROUP_LIST) });
export const useGroupUpdate = generateMutationHook<
    groupUpdate,
    groupUpdateVariables
>(GROUP_UPDATE, { ...getRefetch(GROUP_LIST) });
