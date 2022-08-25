/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardUpdate
// ====================================================

export interface boardUpdate_BoardUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface boardUpdate_BoardUpdate {
  __typename: "BoardUpdateResponse";
  ok: boolean;
  error: boardUpdate_BoardUpdate_error | null;
}

export interface boardUpdate {
  BoardUpdate: boardUpdate_BoardUpdate;
}

export interface boardUpdateVariables {
  input: BoardInput;
  boardId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardCreate
// ====================================================

export interface boardCreate_BoardCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface boardCreate_BoardCreate {
  __typename: "BoardCreateResponse";
  ok: boolean;
  error: boardCreate_BoardCreate_error | null;
}

export interface boardCreate {
  BoardCreate: boardCreate_BoardCreate;
}

export interface boardCreateVariables {
  input: BoardInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardDelete
// ====================================================

export interface boardDelete_BoardDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface boardDelete_BoardDelete {
  __typename: "BoardDeleteResponse";
  ok: boolean;
  error: boardDelete_BoardDelete_error | null;
}

export interface boardDelete {
  BoardDelete: boardDelete_BoardDelete;
}

export interface boardDeleteVariables {
  boardId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: boardList
// ====================================================

export interface boardList_BoardList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface boardList_BoardList_items_inputs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardList_BoardList_items_inputs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardList_BoardList_items_inputs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardList_BoardList_items {
  __typename: "Board";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  key: string;
  name: string;
  fields: string[];
  writePermission: UserRole[];
  readPermission: UserRole[];
  inputs: boardList_BoardList_items_inputs[];
}

export interface boardList_BoardList {
  __typename: "OffsetPagenatedBoardData";
  pageInfo: boardList_BoardList_pageInfo;
  items: boardList_BoardList_items[];
}

export interface boardList {
  /**
   * Function for Exam Admin
   */
  BoardList: boardList_BoardList;
}

export interface boardListVariables {
  sort?: _BoardSort[] | null;
  filter?: _BoardFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: boardFindById
// ====================================================

export interface boardFindById_BoardFindById_inputs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardFindById_BoardFindById_inputs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardFindById_BoardFindById_inputs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardFindById_BoardFindById {
  __typename: "Board";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  key: string;
  name: string;
  fields: string[];
  writePermission: UserRole[];
  readPermission: UserRole[];
  inputs: boardFindById_BoardFindById_inputs[];
}

export interface boardFindById {
  BoardFindById: boardFindById_BoardFindById | null;
}

export interface boardFindByIdVariables {
  boardId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: boardFindByKey
// ====================================================

export interface boardFindByKey_BoardFindByKey_inputs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardFindByKey_BoardFindByKey_inputs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardFindByKey_BoardFindByKey_inputs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardFindByKey_BoardFindByKey {
  __typename: "Board";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  key: string;
  name: string;
  fields: string[];
  writePermission: UserRole[];
  readPermission: UserRole[];
  inputs: boardFindByKey_BoardFindByKey_inputs[];
}

export interface boardFindByKey {
  BoardFindByKey: boardFindByKey_BoardFindByKey | null;
}

export interface boardFindByKeyVariables {
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardDocUpdate
// ====================================================

export interface boardDocUpdate_BoardDocUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface boardDocUpdate_BoardDocUpdate_data_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocUpdate_BoardDocUpdate_data_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardDocUpdate_BoardDocUpdate_data_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardDocUpdate_BoardDocUpdate_data_attachFiles_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocUpdate_BoardDocUpdate_data_attachFiles {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocUpdate_BoardDocUpdate_data_attachFiles_tags[];
}

export interface boardDocUpdate_BoardDocUpdate_data_thumb_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocUpdate_BoardDocUpdate_data_thumb {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocUpdate_BoardDocUpdate_data_thumb_tags[];
}

export interface boardDocUpdate_BoardDocUpdate_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocUpdate_BoardDocUpdate_data_recentComment_writerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocUpdate_BoardDocUpdate_data_recentComment_writerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocUpdate_BoardDocUpdate_data_recentComment_writerProfileImg_tags[];
}

export interface boardDocUpdate_BoardDocUpdate_data_recentComment {
  __typename: "Comment";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  content: string;
  writerId: any;
  writerName: string;
  writerNickName: string;
  targetId: any;
  targetModel: string;
  writerProfileImg: boardDocUpdate_BoardDocUpdate_data_recentComment_writerProfileImg | null;
}

export interface boardDocUpdate_BoardDocUpdate_data {
  __typename: "BoardDoc";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  title: string;
  contents: string;
  authorName: string;
  authorRole: string;
  isNotice: boolean | null;
  attrs: boardDocUpdate_BoardDocUpdate_data_attrs[];
  lang: LANGUAGES | null;
  type: string | null;
  isOpen: boolean | null;
  authorEmail: string;
  authorId: string | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: boardDocUpdate_BoardDocUpdate_data_attachFiles[] | null;
  thumb: boardDocUpdate_BoardDocUpdate_data_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  tags: boardDocUpdate_BoardDocUpdate_data_tags[];
  recentComment: boardDocUpdate_BoardDocUpdate_data_recentComment[];
  commentCount: number;
  boardKey: string;
  _boardId: any;
  boardName: string;
}

export interface boardDocUpdate_BoardDocUpdate {
  __typename: "BoardDocUpdateResponse";
  ok: boolean;
  error: boardDocUpdate_BoardDocUpdate_error | null;
  data: boardDocUpdate_BoardDocUpdate_data | null;
}

export interface boardDocUpdate {
  BoardDocUpdate: boardDocUpdate_BoardDocUpdate;
}

export interface boardDocUpdateVariables {
  input: BoardDocInput;
  boardDocId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardDocCreate
// ====================================================

export interface boardDocCreate_BoardDocCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface boardDocCreate_BoardDocCreate_data_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocCreate_BoardDocCreate_data_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardDocCreate_BoardDocCreate_data_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardDocCreate_BoardDocCreate_data_attachFiles_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocCreate_BoardDocCreate_data_attachFiles {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocCreate_BoardDocCreate_data_attachFiles_tags[];
}

export interface boardDocCreate_BoardDocCreate_data_thumb_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocCreate_BoardDocCreate_data_thumb {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocCreate_BoardDocCreate_data_thumb_tags[];
}

export interface boardDocCreate_BoardDocCreate_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocCreate_BoardDocCreate_data_recentComment_writerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocCreate_BoardDocCreate_data_recentComment_writerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocCreate_BoardDocCreate_data_recentComment_writerProfileImg_tags[];
}

export interface boardDocCreate_BoardDocCreate_data_recentComment {
  __typename: "Comment";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  content: string;
  writerId: any;
  writerName: string;
  writerNickName: string;
  targetId: any;
  targetModel: string;
  writerProfileImg: boardDocCreate_BoardDocCreate_data_recentComment_writerProfileImg | null;
}

export interface boardDocCreate_BoardDocCreate_data {
  __typename: "BoardDoc";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  title: string;
  contents: string;
  authorName: string;
  authorRole: string;
  isNotice: boolean | null;
  attrs: boardDocCreate_BoardDocCreate_data_attrs[];
  lang: LANGUAGES | null;
  type: string | null;
  isOpen: boolean | null;
  authorEmail: string;
  authorId: string | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: boardDocCreate_BoardDocCreate_data_attachFiles[] | null;
  thumb: boardDocCreate_BoardDocCreate_data_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  tags: boardDocCreate_BoardDocCreate_data_tags[];
  recentComment: boardDocCreate_BoardDocCreate_data_recentComment[];
  commentCount: number;
  boardKey: string;
  _boardId: any;
  boardName: string;
}

export interface boardDocCreate_BoardDocCreate {
  __typename: "BoardDocCreateResponse";
  ok: boolean;
  error: boardDocCreate_BoardDocCreate_error | null;
  data: boardDocCreate_BoardDocCreate_data | null;
}

export interface boardDocCreate {
  BoardDocCreate: boardDocCreate_BoardDocCreate;
}

export interface boardDocCreateVariables {
  boardKey: string;
  input: BoardDocInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardDocDelete
// ====================================================

export interface boardDocDelete_BoardDocDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface boardDocDelete_BoardDocDelete_data_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocDelete_BoardDocDelete_data_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardDocDelete_BoardDocDelete_data_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardDocDelete_BoardDocDelete_data_attachFiles_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocDelete_BoardDocDelete_data_attachFiles {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocDelete_BoardDocDelete_data_attachFiles_tags[];
}

export interface boardDocDelete_BoardDocDelete_data_thumb_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocDelete_BoardDocDelete_data_thumb {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocDelete_BoardDocDelete_data_thumb_tags[];
}

export interface boardDocDelete_BoardDocDelete_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocDelete_BoardDocDelete_data_recentComment_writerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocDelete_BoardDocDelete_data_recentComment_writerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocDelete_BoardDocDelete_data_recentComment_writerProfileImg_tags[];
}

export interface boardDocDelete_BoardDocDelete_data_recentComment {
  __typename: "Comment";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  content: string;
  writerId: any;
  writerName: string;
  writerNickName: string;
  targetId: any;
  targetModel: string;
  writerProfileImg: boardDocDelete_BoardDocDelete_data_recentComment_writerProfileImg | null;
}

export interface boardDocDelete_BoardDocDelete_data {
  __typename: "BoardDoc";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  title: string;
  contents: string;
  authorName: string;
  authorRole: string;
  isNotice: boolean | null;
  attrs: boardDocDelete_BoardDocDelete_data_attrs[];
  lang: LANGUAGES | null;
  type: string | null;
  isOpen: boolean | null;
  authorEmail: string;
  authorId: string | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: boardDocDelete_BoardDocDelete_data_attachFiles[] | null;
  thumb: boardDocDelete_BoardDocDelete_data_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  tags: boardDocDelete_BoardDocDelete_data_tags[];
  recentComment: boardDocDelete_BoardDocDelete_data_recentComment[];
  commentCount: number;
  boardKey: string;
  _boardId: any;
  boardName: string;
}

export interface boardDocDelete_BoardDocDelete {
  __typename: "BoardDocDeleteResponse";
  ok: boolean;
  error: boardDocDelete_BoardDocDelete_error | null;
  data: boardDocDelete_BoardDocDelete_data | null;
}

export interface boardDocDelete {
  BoardDocDelete: boardDocDelete_BoardDocDelete;
}

export interface boardDocDeleteVariables {
  boardDocId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: boardDocList
// ====================================================

export interface boardDocList_BoardDocList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface boardDocList_BoardDocList_items_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocList_BoardDocList_items_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardDocList_BoardDocList_items_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardDocList_BoardDocList_items_attachFiles_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocList_BoardDocList_items_attachFiles {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocList_BoardDocList_items_attachFiles_tags[];
}

export interface boardDocList_BoardDocList_items_thumb_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocList_BoardDocList_items_thumb {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocList_BoardDocList_items_thumb_tags[];
}

export interface boardDocList_BoardDocList_items_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocList_BoardDocList_items_recentComment_writerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocList_BoardDocList_items_recentComment_writerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocList_BoardDocList_items_recentComment_writerProfileImg_tags[];
}

export interface boardDocList_BoardDocList_items_recentComment {
  __typename: "Comment";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  content: string;
  writerId: any;
  writerName: string;
  writerNickName: string;
  targetId: any;
  targetModel: string;
  writerProfileImg: boardDocList_BoardDocList_items_recentComment_writerProfileImg | null;
}

export interface boardDocList_BoardDocList_items {
  __typename: "BoardDoc";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  title: string;
  contents: string;
  authorName: string;
  authorRole: string;
  isNotice: boolean | null;
  attrs: boardDocList_BoardDocList_items_attrs[];
  lang: LANGUAGES | null;
  type: string | null;
  isOpen: boolean | null;
  authorEmail: string;
  authorId: string | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: boardDocList_BoardDocList_items_attachFiles[] | null;
  thumb: boardDocList_BoardDocList_items_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  tags: boardDocList_BoardDocList_items_tags[];
  recentComment: boardDocList_BoardDocList_items_recentComment[];
  commentCount: number;
  boardKey: string;
  _boardId: any;
  boardName: string;
}

export interface boardDocList_BoardDocList {
  __typename: "OffsetPagenatedBoardDocData";
  pageInfo: boardDocList_BoardDocList_pageInfo;
  items: boardDocList_BoardDocList_items[];
}

export interface boardDocList {
  /**
   * Function for Exam Admin
   */
  BoardDocList: boardDocList_BoardDocList;
}

export interface boardDocListVariables {
  sort?: _BoardDocSort[] | null;
  filter?: _BoardDocFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: boardDocFindById
// ====================================================

export interface boardDocFindById_BoardDocFindById_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocFindById_BoardDocFindById_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardDocFindById_BoardDocFindById_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardDocFindById_BoardDocFindById_attachFiles_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocFindById_BoardDocFindById_attachFiles {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocFindById_BoardDocFindById_attachFiles_tags[];
}

export interface boardDocFindById_BoardDocFindById_thumb_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocFindById_BoardDocFindById_thumb {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocFindById_BoardDocFindById_thumb_tags[];
}

export interface boardDocFindById_BoardDocFindById_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocFindById_BoardDocFindById_recentComment_writerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocFindById_BoardDocFindById_recentComment_writerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: boardDocFindById_BoardDocFindById_recentComment_writerProfileImg_tags[];
}

export interface boardDocFindById_BoardDocFindById_recentComment {
  __typename: "Comment";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  content: string;
  writerId: any;
  writerName: string;
  writerNickName: string;
  targetId: any;
  targetModel: string;
  writerProfileImg: boardDocFindById_BoardDocFindById_recentComment_writerProfileImg | null;
}

export interface boardDocFindById_BoardDocFindById {
  __typename: "BoardDoc";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  title: string;
  contents: string;
  authorName: string;
  authorRole: string;
  isNotice: boolean | null;
  attrs: boardDocFindById_BoardDocFindById_attrs[];
  lang: LANGUAGES | null;
  type: string | null;
  isOpen: boolean | null;
  authorEmail: string;
  authorId: string | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: boardDocFindById_BoardDocFindById_attachFiles[] | null;
  thumb: boardDocFindById_BoardDocFindById_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  tags: boardDocFindById_BoardDocFindById_tags[];
  recentComment: boardDocFindById_BoardDocFindById_recentComment[];
  commentCount: number;
  boardKey: string;
  _boardId: any;
  boardName: string;
}

export interface boardDocFindById {
  BoardDocFindById: boardDocFindById_BoardDocFindById | null;
}

export interface boardDocFindByIdVariables {
  boardDocId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingUpdate
// ====================================================

export interface bookingUpdate_BookingUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface bookingUpdate_BookingUpdate {
  __typename: "BookingUpdateResponse";
  ok: boolean;
  error: bookingUpdate_BookingUpdate_error | null;
}

export interface bookingUpdate {
  BookingUpdate: bookingUpdate_BookingUpdate;
}

export interface bookingUpdateVariables {
  input: BookingInput;
  BookingId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingCreate
// ====================================================

export interface bookingCreate_BookingCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface bookingCreate_BookingCreate_data_refundBankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface bookingCreate_BookingCreate_data_tourThumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingCreate_BookingCreate_data_tourThumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingCreate_BookingCreate_data_tourThumbNail_tags[];
}

export interface bookingCreate_BookingCreate_data_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingCreate_BookingCreate_data_travlers {
  __typename: "TravelerInfo";
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  isBooker: boolean | null;
  Representative: boolean | null;
  passportNumber: string | null;
  countryCode: string | null;
  birthDate: any;
}

export interface bookingCreate_BookingCreate_data_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingCreate_BookingCreate_data_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingCreate_BookingCreate_data_guideImage_tags[];
}

export interface bookingCreate_BookingCreate_data {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  paymethod: Paymethod;
  paidPrice: number;
  pendingPrice: number;
  refundPrice: number;
  byHand: boolean | null;
  cancelDate: any | null;
  cancelReason: string | null;
  refundMethod: string;
  adultCount: number;
  kidsCount: number;
  babyCount: number;
  buyerId: any | null;
  /**
   * 투어 회차
   */
  tourRecycleNumber: number | null;
  buyerPhone: string;
  buyerEmail: string;
  buyerGender: Gender;
  buyerMessage: string | null;
  buyerName: string;
  guideMemo: string | null;
  adminMemo: string | null;
  productId: any;
  productCode: string;
  bankTranferName: string | null;
  refundBankInfo: bookingCreate_BookingCreate_data_refundBankInfo | null;
  tourThumbNail: bookingCreate_BookingCreate_data_tourThumbNail;
  tourTitle: bookingCreate_BookingCreate_data_tourTitle;
  tourCode: string;
  /**
   * 이것은 가이드 승인으로만 COMPLETED가 될수 있다
   */
  bookingStatus: BookingStatus | null;
  tourId: any;
  tourStart: any;
  code: string;
  travlers: bookingCreate_BookingCreate_data_travlers[] | null;
  guideName: string;
  guideNickName: string | null;
  guideId: any;
  guideImage: bookingCreate_BookingCreate_data_guideImage | null;
  niceAuthStr: string | null;
}

export interface bookingCreate_BookingCreate {
  __typename: "BookingCreateResponse";
  ok: boolean;
  error: bookingCreate_BookingCreate_error | null;
  data: bookingCreate_BookingCreate_data | null;
}

export interface bookingCreate {
  BookingCreate: bookingCreate_BookingCreate;
}

export interface bookingCreateVariables {
  input: BookingInput;
  tourId: any;
  offerId?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingDelete
// ====================================================

export interface bookingDelete_BookingDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface bookingDelete_BookingDelete {
  __typename: "BookingDeleteResponse";
  ok: boolean;
  error: bookingDelete_BookingDelete_error | null;
}

export interface bookingDelete {
  BookingDelete: bookingDelete_BookingDelete;
}

export interface bookingDeleteVariables {
  BookingId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: bookingList
// ====================================================

export interface bookingList_BookingList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface bookingList_BookingList_items_refundBankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface bookingList_BookingList_items_tourThumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingList_BookingList_items_tourThumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingList_BookingList_items_tourThumbNail_tags[];
}

export interface bookingList_BookingList_items_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingList_BookingList_items_travlers {
  __typename: "TravelerInfo";
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  isBooker: boolean | null;
  Representative: boolean | null;
  passportNumber: string | null;
  countryCode: string | null;
  birthDate: any;
}

export interface bookingList_BookingList_items_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingList_BookingList_items_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingList_BookingList_items_guideImage_tags[];
}

export interface bookingList_BookingList_items {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  paymethod: Paymethod;
  paidPrice: number;
  pendingPrice: number;
  refundPrice: number;
  byHand: boolean | null;
  cancelDate: any | null;
  cancelReason: string | null;
  refundMethod: string;
  adultCount: number;
  kidsCount: number;
  babyCount: number;
  buyerId: any | null;
  /**
   * 투어 회차
   */
  tourRecycleNumber: number | null;
  buyerPhone: string;
  buyerEmail: string;
  buyerGender: Gender;
  buyerMessage: string | null;
  buyerName: string;
  guideMemo: string | null;
  adminMemo: string | null;
  productId: any;
  productCode: string;
  bankTranferName: string | null;
  refundBankInfo: bookingList_BookingList_items_refundBankInfo | null;
  tourThumbNail: bookingList_BookingList_items_tourThumbNail;
  tourTitle: bookingList_BookingList_items_tourTitle;
  tourCode: string;
  /**
   * 이것은 가이드 승인으로만 COMPLETED가 될수 있다
   */
  bookingStatus: BookingStatus | null;
  tourId: any;
  tourStart: any;
  code: string;
  travlers: bookingList_BookingList_items_travlers[] | null;
  guideName: string;
  guideNickName: string | null;
  guideId: any;
  guideImage: bookingList_BookingList_items_guideImage | null;
}

export interface bookingList_BookingList {
  __typename: "OffsetPagenatedBookingData";
  pageInfo: bookingList_BookingList_pageInfo;
  items: bookingList_BookingList_items[];
}

export interface bookingList {
  /**
   * Function for Exam Admin
   */
  BookingList: bookingList_BookingList;
}

export interface bookingListVariables {
  sort?: _BookingSort[] | null;
  filter?: _BookingFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: bookingFindById
// ====================================================

export interface bookingFindById_BookingFindById_refundBankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface bookingFindById_BookingFindById_tourThumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingFindById_BookingFindById_tourThumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingFindById_BookingFindById_tourThumbNail_tags[];
}

export interface bookingFindById_BookingFindById_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_travlers {
  __typename: "TravelerInfo";
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  isBooker: boolean | null;
  Representative: boolean | null;
  passportNumber: string | null;
  countryCode: string | null;
  birthDate: any;
}

export interface bookingFindById_BookingFindById_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingFindById_BookingFindById_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingFindById_BookingFindById_guideImage_tags[];
}

export interface bookingFindById_BookingFindById_tour_productInfomation_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: bookingFindById_BookingFindById_tour_productInfomation_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: bookingFindById_BookingFindById_tour_productInfomation_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: bookingFindById_BookingFindById_tour_productInfomation_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingFindById_BookingFindById_tour_productInfomation_videos_tags[];
}

export interface bookingFindById_BookingFindById_tour_productInfomation_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingFindById_BookingFindById_tour_productInfomation_thumbNailVideo_tags[];
}

export interface bookingFindById_BookingFindById_tour_productInfomation_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingFindById_BookingFindById_tour_productInfomation_guideImage_tags[];
}

export interface bookingFindById_BookingFindById_tour_productInfomation_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingFindById_BookingFindById_tour_productInfomation_subPlanes_photo_tags[];
}

export interface bookingFindById_BookingFindById_tour_productInfomation_subPlanes {
  __typename: "SubPlan";
  title: bookingFindById_BookingFindById_tour_productInfomation_subPlanes_title;
  time: bookingFindById_BookingFindById_tour_productInfomation_subPlanes_time;
  description: bookingFindById_BookingFindById_tour_productInfomation_subPlanes_description;
  photo: bookingFindById_BookingFindById_tour_productInfomation_subPlanes_photo | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingFindById_BookingFindById_tour_productInfomation_images_tags[];
}

export interface bookingFindById_BookingFindById_tour_productInfomation_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingFindById_BookingFindById_tour_productInfomation_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingFindById_BookingFindById_tour_productInfomation_thumbNail_tags[];
}

export interface bookingFindById_BookingFindById_tour_productInfomation {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: bookingFindById_BookingFindById_tour_productInfomation_title | null;
  languages: LANGUAGES[] | null;
  marker: bookingFindById_BookingFindById_tour_productInfomation_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: bookingFindById_BookingFindById_tour_productInfomation_shortDecsription | null;
  categoryMini: bookingFindById_BookingFindById_tour_productInfomation_categoryMini[] | null;
  descriptionLarge: bookingFindById_BookingFindById_tour_productInfomation_descriptionLarge | null;
  region: bookingFindById_BookingFindById_tour_productInfomation_region | null;
  startTime: bookingFindById_BookingFindById_tour_productInfomation_startTime | null;
  extraInfo: bookingFindById_BookingFindById_tour_productInfomation_extraInfo | null;
  startPoint: bookingFindById_BookingFindById_tour_productInfomation_startPoint | null;
  include: bookingFindById_BookingFindById_tour_productInfomation_include | null;
  unInclude: bookingFindById_BookingFindById_tour_productInfomation_unInclude | null;
  importantNotice: bookingFindById_BookingFindById_tour_productInfomation_importantNotice | null;
  category: bookingFindById_BookingFindById_tour_productInfomation_category | null;
  videos: bookingFindById_BookingFindById_tour_productInfomation_videos[] | null;
  thumbNailVideo: bookingFindById_BookingFindById_tour_productInfomation_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: bookingFindById_BookingFindById_tour_productInfomation_guideImage | null;
  subPlanes: bookingFindById_BookingFindById_tour_productInfomation_subPlanes[] | null;
  guideId: any | null;
  address: bookingFindById_BookingFindById_tour_productInfomation_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: bookingFindById_BookingFindById_tour_productInfomation_images[] | null;
  thumbNail: bookingFindById_BookingFindById_tour_productInfomation_thumbNail | null;
  adminMemo: string | null;
}

export interface bookingFindById_BookingFindById_tour {
  __typename: "Tour";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  productId: any;
  productInfomation: bookingFindById_BookingFindById_tour_productInfomation;
  number: number | null;
  bookings: (any | null)[] | null;
  startDate: any;
  endDate: any | null;
  /**
   * refund를 뺴지 않은 금액이다
   */
  totalPaidAmt: number | null;
  totalRefundPrice: number | null;
  totalAdult: number | null;
  totalKids: number | null;
  totalBaby: number;
  totalMember: number;
  code: string;
  representive: boolean;
  completeBookingCnt: number | null;
  cancelBookingCnt: number | null;
  readyBookingCnt: number | null;
  settlementStatus: SettlementStatus;
  settlementId: any | null;
  settlementAmt: number | null;
  tourStatus: TourStatus;
}

export interface bookingFindById_BookingFindById {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  paymethod: Paymethod;
  paidPrice: number;
  pendingPrice: number;
  refundPrice: number;
  byHand: boolean | null;
  cancelDate: any | null;
  cancelReason: string | null;
  refundMethod: string;
  adultCount: number;
  kidsCount: number;
  babyCount: number;
  buyerId: any | null;
  /**
   * 투어 회차
   */
  tourRecycleNumber: number | null;
  buyerPhone: string;
  buyerEmail: string;
  buyerGender: Gender;
  buyerMessage: string | null;
  buyerName: string;
  guideMemo: string | null;
  adminMemo: string | null;
  productId: any;
  productCode: string;
  bankTranferName: string | null;
  refundBankInfo: bookingFindById_BookingFindById_refundBankInfo | null;
  tourThumbNail: bookingFindById_BookingFindById_tourThumbNail;
  tourTitle: bookingFindById_BookingFindById_tourTitle;
  tourCode: string;
  /**
   * 이것은 가이드 승인으로만 COMPLETED가 될수 있다
   */
  bookingStatus: BookingStatus | null;
  tourId: any;
  tourStart: any;
  code: string;
  travlers: bookingFindById_BookingFindById_travlers[] | null;
  guideName: string;
  guideNickName: string | null;
  guideId: any;
  guideImage: bookingFindById_BookingFindById_guideImage | null;
  tour: bookingFindById_BookingFindById_tour;
}

export interface bookingFindById {
  BookingFindById: bookingFindById_BookingFindById | null;
}

export interface bookingFindByIdVariables {
  BookingId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: bookingFindByInfo
// ====================================================

export interface bookingFindByInfo_BookingFindByInfo_refundBankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface bookingFindByInfo_BookingFindByInfo_tourThumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingFindByInfo_BookingFindByInfo_tourThumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingFindByInfo_BookingFindByInfo_tourThumbNail_tags[];
}

export interface bookingFindByInfo_BookingFindByInfo_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface bookingFindByInfo_BookingFindByInfo_travlers {
  __typename: "TravelerInfo";
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  isBooker: boolean | null;
  Representative: boolean | null;
  passportNumber: string | null;
  countryCode: string | null;
  birthDate: any;
}

export interface bookingFindByInfo_BookingFindByInfo_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface bookingFindByInfo_BookingFindByInfo_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: bookingFindByInfo_BookingFindByInfo_guideImage_tags[];
}

export interface bookingFindByInfo_BookingFindByInfo {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  paymethod: Paymethod;
  paidPrice: number;
  pendingPrice: number;
  refundPrice: number;
  byHand: boolean | null;
  cancelDate: any | null;
  cancelReason: string | null;
  refundMethod: string;
  adultCount: number;
  kidsCount: number;
  babyCount: number;
  buyerId: any | null;
  /**
   * 투어 회차
   */
  tourRecycleNumber: number | null;
  buyerPhone: string;
  buyerEmail: string;
  buyerGender: Gender;
  buyerMessage: string | null;
  buyerName: string;
  guideMemo: string | null;
  adminMemo: string | null;
  productId: any;
  productCode: string;
  bankTranferName: string | null;
  refundBankInfo: bookingFindByInfo_BookingFindByInfo_refundBankInfo | null;
  tourThumbNail: bookingFindByInfo_BookingFindByInfo_tourThumbNail;
  tourTitle: bookingFindByInfo_BookingFindByInfo_tourTitle;
  tourCode: string;
  /**
   * 이것은 가이드 승인으로만 COMPLETED가 될수 있다
   */
  bookingStatus: BookingStatus | null;
  tourId: any;
  tourStart: any;
  code: string;
  travlers: bookingFindByInfo_BookingFindByInfo_travlers[] | null;
  guideName: string;
  guideNickName: string | null;
  guideId: any;
  guideImage: bookingFindByInfo_BookingFindByInfo_guideImage | null;
}

export interface bookingFindByInfo {
  BookingFindByInfo: bookingFindByInfo_BookingFindByInfo[] | null;
}

export interface bookingFindByInfoVariables {
  name: string;
  contact: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingCancel
// ====================================================

export interface bookingCancel_BookingCancel_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface bookingCancel_BookingCancel {
  __typename: "BookingDeleteResponse";
  ok: boolean;
  error: bookingCancel_BookingCancel_error | null;
}

export interface bookingCancel {
  BookingCancel: bookingCancel_BookingCancel;
}

export interface bookingCancelVariables {
  BookingId: any;
  cancelReason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingRefund
// ====================================================

export interface bookingRefund_BookingRefund_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface bookingRefund_BookingRefund {
  __typename: "BookingRefundResponse";
  ok: boolean;
  error: bookingRefund_BookingRefund_error | null;
}

export interface bookingRefund {
  BookingRefund: bookingRefund_BookingRefund;
}

export interface bookingRefundVariables {
  bookingId: any;
  amount: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryUpdate
// ====================================================

export interface categoryUpdate_CategoryUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface categoryUpdate_CategoryUpdate {
  __typename: "CategoryUpdateResponse";
  ok: boolean;
  error: categoryUpdate_CategoryUpdate_error | null;
}

export interface categoryUpdate {
  CategoryUpdate: categoryUpdate_CategoryUpdate;
}

export interface categoryUpdateVariables {
  input: CategoryInput;
  categoryId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryOrderUpdate
// ====================================================

export interface categoryOrderUpdate_CategoryOrderUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface categoryOrderUpdate_CategoryOrderUpdate {
  __typename: "CategoryOrderUpdateResponse";
  ok: boolean;
  error: categoryOrderUpdate_CategoryOrderUpdate_error | null;
}

export interface categoryOrderUpdate {
  CategoryOrderUpdate: categoryOrderUpdate_CategoryOrderUpdate;
}

export interface categoryOrderUpdateVariables {
  input: OrderUpdateInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryCreate
// ====================================================

export interface categoryCreate_CategoryCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface categoryCreate_CategoryCreate {
  __typename: "CategoryCreateResponse";
  ok: boolean;
  error: categoryCreate_CategoryCreate_error | null;
}

export interface categoryCreate {
  CategoryCreate: categoryCreate_CategoryCreate;
}

export interface categoryCreateVariables {
  input: CategoryInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryDelete
// ====================================================

export interface categoryDelete_CategoryDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface categoryDelete_CategoryDelete {
  __typename: "CategoryDeleteResponse";
  ok: boolean;
  error: categoryDelete_CategoryDelete_error | null;
}

export interface categoryDelete {
  CategoryDelete: categoryDelete_CategoryDelete;
}

export interface categoryDeleteVariables {
  categoryId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryList
// ====================================================

export interface categoryList_CategoryList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface categoryList_CategoryList_items_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface categoryList_CategoryList_items {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: categoryList_CategoryList_items_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface categoryList_CategoryList {
  __typename: "OffsetPagenatedCategoryData";
  pageInfo: categoryList_CategoryList_pageInfo;
  items: categoryList_CategoryList_items[];
}

export interface categoryList {
  /**
   * Function for Exam Admin
   */
  CategoryList: categoryList_CategoryList;
}

export interface categoryListVariables {
  sort?: _CategorySort[] | null;
  filter?: _CategoryFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryFindById
// ====================================================

export interface categoryFindById_CategoryFindById_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface categoryFindById_CategoryFindById {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: categoryFindById_CategoryFindById_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface categoryFindById {
  CategoryFindById: categoryFindById_CategoryFindById | null;
}

export interface categoryFindByIdVariables {
  categoryId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryFindByKey
// ====================================================

export interface categoryFindByKey_CategoryFindByKey_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface categoryFindByKey_CategoryFindByKey {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: categoryFindByKey_CategoryFindByKey_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface categoryFindByKey {
  CategoryFindByKey: categoryFindByKey_CategoryFindByKey | null;
}

export interface categoryFindByKeyVariables {
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: chatRoomUpdate
// ====================================================

export interface chatRoomUpdate_ChatRoomUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface chatRoomUpdate_ChatRoomUpdate {
  __typename: "ChatRoomUpdateResponse";
  ok: boolean;
  error: chatRoomUpdate_ChatRoomUpdate_error | null;
}

export interface chatRoomUpdate {
  ChatRoomUpdate: chatRoomUpdate_ChatRoomUpdate;
}

export interface chatRoomUpdateVariables {
  input: ChatRoomInput;
  ChatRoomId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: chatRoomCreate
// ====================================================

export interface chatRoomCreate_ChatRoomCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface chatRoomCreate_ChatRoomCreate_data_targetProfileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomCreate_ChatRoomCreate_data_targetProfileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomCreate_ChatRoomCreate_data_targetProfileImage_tags[];
}

export interface chatRoomCreate_ChatRoomCreate_data_openerImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomCreate_ChatRoomCreate_data_openerImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomCreate_ChatRoomCreate_data_openerImg_tags[];
}

export interface chatRoomCreate_ChatRoomCreate_data_chatRoomBg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomCreate_ChatRoomCreate_data_chatRoomBg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomCreate_ChatRoomCreate_data_chatRoomBg_tags[];
}

export interface chatRoomCreate_ChatRoomCreate_data_chats_files_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomCreate_ChatRoomCreate_data_chats_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomCreate_ChatRoomCreate_data_chats_files_tags[];
}

export interface chatRoomCreate_ChatRoomCreate_data_chats {
  __typename: "Chat";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  message: string;
  files: chatRoomCreate_ChatRoomCreate_data_chats_files[] | null;
  name: string;
  profileImg: string | null;
  nickName: string | null;
  userId: any;
  chatRoomId: any;
}

export interface chatRoomCreate_ChatRoomCreate_data {
  __typename: "ChatRoom";
  _id: any;
  lastChatTime: any | null;
  lastChatMessage: string | null;
  updatedAt: any | null;
  createdAt: any;
  title: string;
  contents: string | null;
  openerId: any;
  openerName: string;
  openerNickname: string | null;
  targetRole: string;
  targetNicekName: string | null;
  targetName: string;
  targetId: any;
  targetProfileImage: chatRoomCreate_ChatRoomCreate_data_targetProfileImage | null;
  openerImg: chatRoomCreate_ChatRoomCreate_data_openerImg | null;
  chatRoomBg: chatRoomCreate_ChatRoomCreate_data_chatRoomBg | null;
  chats: chatRoomCreate_ChatRoomCreate_data_chats[];
}

export interface chatRoomCreate_ChatRoomCreate {
  __typename: "ChatRoomCreateResponse";
  ok: boolean;
  error: chatRoomCreate_ChatRoomCreate_error | null;
  data: chatRoomCreate_ChatRoomCreate_data | null;
}

export interface chatRoomCreate {
  ChatRoomCreate: chatRoomCreate_ChatRoomCreate;
}

export interface chatRoomCreateVariables {
  input: ChatRoomInput;
  targetUserIds: any[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: chatRoomDelete
// ====================================================

export interface chatRoomDelete_ChatRoomDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface chatRoomDelete_ChatRoomDelete {
  __typename: "ChatRoomDeleteResponse";
  ok: boolean;
  error: chatRoomDelete_ChatRoomDelete_error | null;
}

export interface chatRoomDelete {
  ChatRoomDelete: chatRoomDelete_ChatRoomDelete;
}

export interface chatRoomDeleteVariables {
  ChatRoomId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: chatRoomList
// ====================================================

export interface chatRoomList_ChatRoomList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface chatRoomList_ChatRoomList_items_targetProfileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomList_ChatRoomList_items_targetProfileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomList_ChatRoomList_items_targetProfileImage_tags[];
}

export interface chatRoomList_ChatRoomList_items_openerImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomList_ChatRoomList_items_openerImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomList_ChatRoomList_items_openerImg_tags[];
}

export interface chatRoomList_ChatRoomList_items_chatRoomBg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomList_ChatRoomList_items_chatRoomBg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomList_ChatRoomList_items_chatRoomBg_tags[];
}

export interface chatRoomList_ChatRoomList_items_chats_files_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomList_ChatRoomList_items_chats_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomList_ChatRoomList_items_chats_files_tags[];
}

export interface chatRoomList_ChatRoomList_items_chats {
  __typename: "Chat";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  message: string;
  files: chatRoomList_ChatRoomList_items_chats_files[] | null;
  name: string;
  profileImg: string | null;
  nickName: string | null;
  userId: any;
  chatRoomId: any;
}

export interface chatRoomList_ChatRoomList_items {
  __typename: "ChatRoom";
  _id: any;
  lastChatTime: any | null;
  lastChatMessage: string | null;
  updatedAt: any | null;
  createdAt: any;
  title: string;
  contents: string | null;
  openerId: any;
  openerName: string;
  openerNickname: string | null;
  targetRole: string;
  targetNicekName: string | null;
  targetName: string;
  targetId: any;
  targetProfileImage: chatRoomList_ChatRoomList_items_targetProfileImage | null;
  openerImg: chatRoomList_ChatRoomList_items_openerImg | null;
  chatRoomBg: chatRoomList_ChatRoomList_items_chatRoomBg | null;
  chats: chatRoomList_ChatRoomList_items_chats[];
}

export interface chatRoomList_ChatRoomList {
  __typename: "OffsetPagenatedChatRoomData";
  pageInfo: chatRoomList_ChatRoomList_pageInfo;
  items: chatRoomList_ChatRoomList_items[];
}

export interface chatRoomList {
  /**
   * Function for Exam Admin
   */
  ChatRoomList: chatRoomList_ChatRoomList;
}

export interface chatRoomListVariables {
  sort?: _ChatRoomSort[] | null;
  filter?: _ChatRoomFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: chatCreate
// ====================================================

export interface chatCreate_ChatCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface chatCreate_ChatCreate {
  __typename: "ChatCreateResponse";
  ok: boolean;
  error: chatCreate_ChatCreate_error | null;
}

export interface chatCreate {
  ChatCreate: chatCreate_ChatCreate;
}

export interface chatCreateVariables {
  input: ChatInput;
  chatRoomId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: chatDelete
// ====================================================

export interface chatDelete_ChatDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface chatDelete_ChatDelete {
  __typename: "ChatDeleteResponse";
  ok: boolean;
  error: chatDelete_ChatDelete_error | null;
}

export interface chatDelete {
  ChatDelete: chatDelete_ChatDelete;
}

export interface chatDeleteVariables {
  ChatRoomId: any;
  ChatId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: chatRoomFindById
// ====================================================

export interface chatRoomFindById_ChatRoomFindById_targetProfileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomFindById_ChatRoomFindById_targetProfileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomFindById_ChatRoomFindById_targetProfileImage_tags[];
}

export interface chatRoomFindById_ChatRoomFindById_openerImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomFindById_ChatRoomFindById_openerImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomFindById_ChatRoomFindById_openerImg_tags[];
}

export interface chatRoomFindById_ChatRoomFindById_chatRoomBg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomFindById_ChatRoomFindById_chatRoomBg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomFindById_ChatRoomFindById_chatRoomBg_tags[];
}

export interface chatRoomFindById_ChatRoomFindById_chats_files_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomFindById_ChatRoomFindById_chats_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomFindById_ChatRoomFindById_chats_files_tags[];
}

export interface chatRoomFindById_ChatRoomFindById_chats {
  __typename: "Chat";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  message: string;
  files: chatRoomFindById_ChatRoomFindById_chats_files[] | null;
  name: string;
  profileImg: string | null;
  nickName: string | null;
  userId: any;
  chatRoomId: any;
}

export interface chatRoomFindById_ChatRoomFindById {
  __typename: "ChatRoom";
  _id: any;
  lastChatTime: any | null;
  lastChatMessage: string | null;
  updatedAt: any | null;
  createdAt: any;
  title: string;
  contents: string | null;
  openerId: any;
  openerName: string;
  openerNickname: string | null;
  targetRole: string;
  targetNicekName: string | null;
  targetName: string;
  targetId: any;
  targetProfileImage: chatRoomFindById_ChatRoomFindById_targetProfileImage | null;
  openerImg: chatRoomFindById_ChatRoomFindById_openerImg | null;
  chatRoomBg: chatRoomFindById_ChatRoomFindById_chatRoomBg | null;
  chats: chatRoomFindById_ChatRoomFindById_chats[];
}

export interface chatRoomFindById {
  ChatRoomFindById: chatRoomFindById_ChatRoomFindById | null;
}

export interface chatRoomFindByIdVariables {
  chatRoomId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: chatRoomFindByTargetId
// ====================================================

export interface chatRoomFindByTargetId_ChatRoomFindByTargetId_targetProfileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomFindByTargetId_ChatRoomFindByTargetId_targetProfileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomFindByTargetId_ChatRoomFindByTargetId_targetProfileImage_tags[];
}

export interface chatRoomFindByTargetId_ChatRoomFindByTargetId_openerImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomFindByTargetId_ChatRoomFindByTargetId_openerImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomFindByTargetId_ChatRoomFindByTargetId_openerImg_tags[];
}

export interface chatRoomFindByTargetId_ChatRoomFindByTargetId_chatRoomBg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomFindByTargetId_ChatRoomFindByTargetId_chatRoomBg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomFindByTargetId_ChatRoomFindByTargetId_chatRoomBg_tags[];
}

export interface chatRoomFindByTargetId_ChatRoomFindByTargetId_chats_files_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface chatRoomFindByTargetId_ChatRoomFindByTargetId_chats_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: chatRoomFindByTargetId_ChatRoomFindByTargetId_chats_files_tags[];
}

export interface chatRoomFindByTargetId_ChatRoomFindByTargetId_chats {
  __typename: "Chat";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  message: string;
  files: chatRoomFindByTargetId_ChatRoomFindByTargetId_chats_files[] | null;
  name: string;
  profileImg: string | null;
  nickName: string | null;
  userId: any;
  chatRoomId: any;
}

export interface chatRoomFindByTargetId_ChatRoomFindByTargetId {
  __typename: "ChatRoom";
  _id: any;
  lastChatTime: any | null;
  lastChatMessage: string | null;
  updatedAt: any | null;
  createdAt: any;
  title: string;
  contents: string | null;
  openerId: any;
  openerName: string;
  openerNickname: string | null;
  targetRole: string;
  targetNicekName: string | null;
  targetName: string;
  targetId: any;
  targetProfileImage: chatRoomFindByTargetId_ChatRoomFindByTargetId_targetProfileImage | null;
  openerImg: chatRoomFindByTargetId_ChatRoomFindByTargetId_openerImg | null;
  chatRoomBg: chatRoomFindByTargetId_ChatRoomFindByTargetId_chatRoomBg | null;
  chats: chatRoomFindByTargetId_ChatRoomFindByTargetId_chats[];
}

export interface chatRoomFindByTargetId {
  ChatRoomFindByTargetId: chatRoomFindByTargetId_ChatRoomFindByTargetId | null;
}

export interface chatRoomFindByTargetIdVariables {
  targetId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: commentUpdate
// ====================================================

export interface commentUpdate_CommentUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface commentUpdate_CommentUpdate {
  __typename: "CommentUpdateResponse";
  ok: boolean;
  error: commentUpdate_CommentUpdate_error | null;
}

export interface commentUpdate {
  CommentUpdate: commentUpdate_CommentUpdate;
}

export interface commentUpdateVariables {
  input: CommentInput;
  commentId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: commentCreate
// ====================================================

export interface commentCreate_CommentCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface commentCreate_CommentCreate {
  __typename: "CommentCreateResponse";
  ok: boolean;
  error: commentCreate_CommentCreate_error | null;
}

export interface commentCreate {
  CommentCreate: commentCreate_CommentCreate;
}

export interface commentCreateVariables {
  input: CommentInput;
  targetId: any;
  target: CommentTarget;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: commentDelete
// ====================================================

export interface commentDelete_CommentDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface commentDelete_CommentDelete {
  __typename: "CommentDeleteResponse";
  ok: boolean;
  error: commentDelete_CommentDelete_error | null;
}

export interface commentDelete {
  CommentDelete: commentDelete_CommentDelete;
}

export interface commentDeleteVariables {
  commentId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: commentList
// ====================================================

export interface commentList_CommentList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface commentList_CommentList_items_writerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface commentList_CommentList_items_writerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: commentList_CommentList_items_writerProfileImg_tags[];
}

export interface commentList_CommentList_items {
  __typename: "Comment";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  content: string;
  writerId: any;
  writerName: string;
  writerNickName: string;
  targetId: any;
  targetModel: string;
  writerProfileImg: commentList_CommentList_items_writerProfileImg | null;
}

export interface commentList_CommentList {
  __typename: "OffsetPagenatedCommentData";
  pageInfo: commentList_CommentList_pageInfo;
  items: commentList_CommentList_items[];
}

export interface commentList {
  /**
   * Function for Exam Admin
   */
  CommentList: commentList_CommentList;
}

export interface commentListVariables {
  sort?: _CommentSort[] | null;
  filter?: _CommentFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: orderUpdate
// ====================================================

export interface orderUpdate_OrderUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface orderUpdate_OrderUpdate {
  __typename: "OrderUpdateResponse";
  ok: boolean;
  error: orderUpdate_OrderUpdate_error | null;
}

export interface orderUpdate {
  OrderUpdate: orderUpdate_OrderUpdate;
}

export interface orderUpdateVariables {
  inputs: OrderUpdateInput[];
  target: OrderAbleTarget;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: errorGenerate
// ====================================================

export interface errorGenerate_ErrorGenerate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface errorGenerate_ErrorGenerate {
  __typename: "Response";
  ok: boolean;
  error: errorGenerate_ErrorGenerate_error | null;
}

export interface errorGenerate {
  ErrorGenerate: errorGenerate_ErrorGenerate;
}

export interface errorGenerateVariables {
  code: string;
  message: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: fileUploads
// ====================================================

export interface fileUploads_FileUploads_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface fileUploads_FileUploads_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface fileUploads_FileUploads_data {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: fileUploads_FileUploads_data_tags[];
}

export interface fileUploads_FileUploads {
  __typename: "FileUploadsResponse";
  ok: boolean;
  error: fileUploads_FileUploads_error | null;
  data: fileUploads_FileUploads_data[];
}

export interface fileUploads {
  FileUploads: fileUploads_FileUploads;
}

export interface fileUploadsVariables {
  files: FileInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fileList
// ====================================================

export interface fileList_FileList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface fileList_FileList_items_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface fileList_FileList_items {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: fileList_FileList_items_tags[];
}

export interface fileList_FileList {
  __typename: "OffsetPagenatedFileData";
  pageInfo: fileList_FileList_pageInfo;
  items: fileList_FileList_items[];
}

export interface fileList {
  FileList: fileList_FileList;
}

export interface fileListVariables {
  sort?: _FileSort[] | null;
  filter?: _FileFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: fileDeletes
// ====================================================

export interface fileDeletes_FileDeletes_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface fileDeletes_FileDeletes {
  __typename: "Response";
  ok: boolean;
  error: fileDeletes_FileDeletes_error | null;
}

export interface fileDeletes {
  FileDeletes: fileDeletes_FileDeletes;
}

export interface fileDeletesVariables {
  deleteFileList: any[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: groupCreate
// ====================================================

export interface groupCreate_GroupCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface groupCreate_GroupCreate {
  __typename: "GroupCreateResponse";
  ok: boolean;
  error: groupCreate_GroupCreate_error | null;
}

export interface groupCreate {
  GroupCreate: groupCreate_GroupCreate;
}

export interface groupCreateVariables {
  input: GroupInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: groupDelete
// ====================================================

export interface groupDelete_GroupDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface groupDelete_GroupDelete {
  __typename: "GroupDeleteResponse";
  ok: boolean;
  error: groupDelete_GroupDelete_error | null;
}

export interface groupDelete {
  GroupDelete: groupDelete_GroupDelete;
}

export interface groupDeleteVariables {
  GroupId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: groupFindById
// ====================================================

export interface groupFindById_GroupFindById_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface groupFindById_GroupFindById_desc {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface groupFindById_GroupFindById {
  __typename: "Group";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  /**
   * 어떤 모델을 대상으로 정렬을 하는지 정의함
   */
  target: string | null;
  /**
   * 이 그룹을 호출하기 위한 Uniq한 key값
   */
  key: string | null;
  order: number | null;
  label: groupFindById_GroupFindById_label;
  desc: groupFindById_GroupFindById_desc | null;
  /**
   * 그룹안의 순서는 이 배열의 인덱스로 조정됨
   */
  members: string[];
}

export interface groupFindById {
  GroupFindById: groupFindById_GroupFindById | null;
}

export interface groupFindByIdVariables {
  GroupId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: groupList
// ====================================================

export interface groupList_GroupList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface groupList_GroupList_items_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface groupList_GroupList_items_desc {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface groupList_GroupList_items {
  __typename: "Group";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  /**
   * 어떤 모델을 대상으로 정렬을 하는지 정의함
   */
  target: string | null;
  /**
   * 이 그룹을 호출하기 위한 Uniq한 key값
   */
  key: string | null;
  order: number | null;
  label: groupList_GroupList_items_label;
  desc: groupList_GroupList_items_desc | null;
  /**
   * 그룹안의 순서는 이 배열의 인덱스로 조정됨
   */
  members: string[];
}

export interface groupList_GroupList {
  __typename: "OffsetPagenatedGroupData";
  pageInfo: groupList_GroupList_pageInfo;
  items: groupList_GroupList_items[];
}

export interface groupList {
  /**
   * Function for Exam Admin
   */
  GroupList: groupList_GroupList;
}

export interface groupListVariables {
  sort?: _GroupSort[] | null;
  filter?: _GroupFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: groupUpdate
// ====================================================

export interface groupUpdate_GroupUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface groupUpdate_GroupUpdate {
  __typename: "GroupUpdateResponse";
  ok: boolean;
  error: groupUpdate_GroupUpdate_error | null;
}

export interface groupUpdate {
  GroupUpdate: groupUpdate_GroupUpdate;
}

export interface groupUpdateVariables {
  input: GroupInput;
  GroupId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: homepageManage
// ====================================================

export interface homepageManage_HomepageManage_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface homepageManage_HomepageManage {
  __typename: "HomepageManageResponse";
  ok: boolean;
  error: homepageManage_HomepageManage_error | null;
}

export interface homepageManage {
  HomepageManage: homepageManage_HomepageManage;
}

export interface homepageManageVariables {
  input: HomepageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: modalUpdate
// ====================================================

export interface modalUpdate_ModalUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface modalUpdate_ModalUpdate {
  __typename: "ModalUpdateResponse";
  ok: boolean;
  error: modalUpdate_ModalUpdate_error | null;
}

export interface modalUpdate {
  ModalUpdate: modalUpdate_ModalUpdate;
}

export interface modalUpdateVariables {
  input: ModalInput;
  modalId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: modalCreate
// ====================================================

export interface modalCreate_ModalCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface modalCreate_ModalCreate {
  __typename: "ModalCreateResponse";
  ok: boolean;
  error: modalCreate_ModalCreate_error | null;
}

export interface modalCreate {
  ModalCreate: modalCreate_ModalCreate;
}

export interface modalCreateVariables {
  input: ModalInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: modalDelete
// ====================================================

export interface modalDelete_ModalDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface modalDelete_ModalDelete {
  __typename: "ModalDeleteResponse";
  ok: boolean;
  error: modalDelete_ModalDelete_error | null;
}

export interface modalDelete {
  ModalDelete: modalDelete_ModalDelete;
}

export interface modalDeleteVariables {
  modalId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: modalFindById
// ====================================================

export interface modalFindById_ModalFindById_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface modalFindById_ModalFindById_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: modalFindById_ModalFindById_images_tags[];
}

export interface modalFindById_ModalFindById {
  __typename: "Modal";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  /**
   * 부킹솔루션 자체에서 사용하는 모달
   */
  serviceModal: boolean | null;
  storeId: any | null;
  path: string | null;
  style: any | null;
  images: modalFindById_ModalFindById_images[];
}

export interface modalFindById {
  ModalFindById: modalFindById_ModalFindById | null;
}

export interface modalFindByIdVariables {
  modalId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: modalFindByPath
// ====================================================

export interface modalFindByPath_ModalFindByPath_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface modalFindByPath_ModalFindByPath_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: modalFindByPath_ModalFindByPath_images_tags[];
}

export interface modalFindByPath_ModalFindByPath {
  __typename: "Modal";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  /**
   * 부킹솔루션 자체에서 사용하는 모달
   */
  serviceModal: boolean | null;
  storeId: any | null;
  path: string | null;
  style: any | null;
  images: modalFindByPath_ModalFindByPath_images[];
}

export interface modalFindByPath {
  ModalFindByPath: modalFindByPath_ModalFindByPath | null;
}

export interface modalFindByPathVariables {
  path: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: modalFindByStoreId
// ====================================================

export interface modalFindByStoreId_ModalFindByStoreId_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface modalFindByStoreId_ModalFindByStoreId_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: modalFindByStoreId_ModalFindByStoreId_images_tags[];
}

export interface modalFindByStoreId_ModalFindByStoreId {
  __typename: "Modal";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  /**
   * 부킹솔루션 자체에서 사용하는 모달
   */
  serviceModal: boolean | null;
  storeId: any | null;
  path: string | null;
  style: any | null;
  images: modalFindByStoreId_ModalFindByStoreId_images[];
}

export interface modalFindByStoreId {
  ModalFindByStoreId: modalFindByStoreId_ModalFindByStoreId | null;
}

export interface modalFindByStoreIdVariables {
  storeId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: modalList
// ====================================================

export interface modalList_ModalList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface modalList_ModalList_items_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface modalList_ModalList_items_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: modalList_ModalList_items_images_tags[];
}

export interface modalList_ModalList_items {
  __typename: "Modal";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  /**
   * 부킹솔루션 자체에서 사용하는 모달
   */
  serviceModal: boolean | null;
  storeId: any | null;
  path: string | null;
  style: any | null;
  images: modalList_ModalList_items_images[];
}

export interface modalList_ModalList {
  __typename: "OffsetPagenatedModalData";
  pageInfo: modalList_ModalList_pageInfo;
  items: modalList_ModalList_items[];
}

export interface modalList {
  /**
   * Function for Exam Admin
   */
  ModalList: modalList_ModalList;
}

export interface modalListVariables {
  sort?: _ModalSort[] | null;
  filter?: _ModalFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: serviceModalFind
// ====================================================

export interface serviceModalFind_ServiceModalFind_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface serviceModalFind_ServiceModalFind_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: serviceModalFind_ServiceModalFind_images_tags[];
}

export interface serviceModalFind_ServiceModalFind {
  __typename: "Modal";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  /**
   * 부킹솔루션 자체에서 사용하는 모달
   */
  serviceModal: boolean | null;
  storeId: any | null;
  path: string | null;
  style: any | null;
  images: serviceModalFind_ServiceModalFind_images[];
}

export interface serviceModalFind {
  ServiceModalFind: serviceModalFind_ServiceModalFind | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: notificationHistory
// ====================================================

export interface notificationHistory_NotificationHistory_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface notificationHistory_NotificationHistory_items {
  __typename: "SmsHistoryItem" | "EmailHistoryItem" | "KaKaoHistoryItem";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  method: NotificationMethod;
  sender: string;
  receivers: string[];
  title: string | null;
  /**
   * Template에서 변수가 치환되지 않은 채로 출력 될 수 있음.
   */
  content: string;
  count: number;
  successCount: number;
  errorCount: number;
  /**
   * 전송 후 남은 포인트
   */
  pointRemains: number;
  /**
   * 포인트 소모량
   */
  pointConsumed: number;
}

export interface notificationHistory_NotificationHistory {
  __typename: "OffsetPagenatedNotificationHistoryItemData";
  pageInfo: notificationHistory_NotificationHistory_pageInfo;
  items: notificationHistory_NotificationHistory_items[];
}

export interface notificationHistory {
  NotificationHistory: notificationHistory_NotificationHistory;
}

export interface notificationHistoryVariables {
  sort?: _NotificationHistoryItemSort[] | null;
  filter?: _NotificationHistoryItemFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: notificationmanagerFindById
// ====================================================

export interface notificationmanagerFindById_NotificationManagerFindById_senders_files_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface notificationmanagerFindById_NotificationManagerFindById_senders_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: notificationmanagerFindById_NotificationManagerFindById_senders_files_tags[];
}

export interface notificationmanagerFindById_NotificationManagerFindById_senders {
  __typename: "NotificationSender";
  type: NotificationMethod;
  label: string | null;
  sender: string;
  isVerified: boolean;
  files: notificationmanagerFindById_NotificationManagerFindById_senders_files[];
  isRegisteredToSES: boolean | null;
  isRegisteredToAligo: boolean | null;
  createdAt: any;
}

export interface notificationmanagerFindById_NotificationManagerFindById_smsPricingTable {
  __typename: "SMSPricingTable";
  SMS: number;
  LMS: number;
  MMS: number;
}

export interface notificationmanagerFindById_NotificationManagerFindById {
  __typename: "NotificationManager";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  /**
   * 건당 비용. 단위는 KRW
   */
  emailPricing: number;
  currency: Currency;
  /**
   * Email, SMS 뭘로 보내든 포인트 차감
   */
  pointRemains: number;
  senders: notificationmanagerFindById_NotificationManagerFindById_senders[];
  smsPricingTable: notificationmanagerFindById_NotificationManagerFindById_smsPricingTable;
  /**
   * 건당 비용. 단위는 KRW
   */
  kakaoPrice: number;
  kakaoApiKey: string | null;
  kakaoUserId: string | null;
  kakaoSenderKey: string | null;
  userName: string;
}

export interface notificationmanagerFindById {
  NotificationManagerFindById: notificationmanagerFindById_NotificationManagerFindById;
}

export interface notificationmanagerFindByIdVariables {
  notificationManagerId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: notificationTemplateList
// ====================================================

export interface notificationTemplateList_NotificationTemplateList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface notificationTemplateList_NotificationTemplateList_items_kakaoTemplate_buttons {
  __typename: "KakaoTemplateButton";
  ordering: string | null;
  /**
   * 버튼명
   */
  name: string;
  linkType: KakaoTemplateButtonLinkType;
  linkTypeName: string | null;
  /**
   * 모바일 링크 주소
   */
  linkMo: string | null;
  /**
   * PC웹 링크 주소
   */
  linkPc: string | null;
  /**
   * IOS앱 링크 주소
   */
  linkIos: string | null;
  /**
   * 안드로이드 앱 링크 주소
   */
  linkAnd: string | null;
  /**
   * 모바일 링크 주소
   */
  linkM: string | null;
  /**
   * PC웹 링크 주소
   */
  linkP: string | null;
  /**
   * IOS앱 링크 주소
   */
  linkI: string | null;
  /**
   * 안드로이드 앱 링크 주소
   */
  linkA: string | null;
}

export interface notificationTemplateList_NotificationTemplateList_items_kakaoTemplate_comments {
  __typename: "KakaoTemplateComment";
  commentContent: string;
  cdate: string;
  status: string;
}

export interface notificationTemplateList_NotificationTemplateList_items_kakaoTemplate {
  __typename: "KakaoTemplate";
  templtContent: string | null;
  templtName: string | null;
  status: KakaoTemplateStatus | null;
  inspStatus: KakaoTemplateInspStatus | null;
  buttons: notificationTemplateList_NotificationTemplateList_items_kakaoTemplate_buttons[] | null;
  cdate: string | null;
  udate: string | null;
  comments: notificationTemplateList_NotificationTemplateList_items_kakaoTemplate_comments[] | null;
  templtCode: string | null;
}

export interface notificationTemplateList_NotificationTemplateList_items_trigger_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface notificationTemplateList_NotificationTemplateList_items_trigger {
  __typename: "NotificationTrigger";
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  addReceivers: string[] | null;
  autoSendTargetType: AutoSendTargetType[] | null;
  tags: notificationTemplateList_NotificationTemplateList_items_trigger_tags[];
}

export interface notificationTemplateList_NotificationTemplateList_items {
  __typename: "TemplateSms" | "TemplateKakao" | "TemplateEmail";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  content: string;
  /**
   * 회신번호 또는 회신 이메일
   */
  replayTo: string | null;
  notificationMethod: NotificationMethod;
  replacers: string[];
  /**
   * 카카오측 템플릿 상태
   */
  kakaoTemplateStatus: KakaoTemplateStatus;
  /**
   * 요청상태
   */
  kakaoTemplateInspStatus: KakaoTemplateInspStatus;
  kakaoTemplateCode: string | null;
  kakaoTemplate: notificationTemplateList_NotificationTemplateList_items_kakaoTemplate | null;
  trigger: notificationTemplateList_NotificationTemplateList_items_trigger[];
}

export interface notificationTemplateList_NotificationTemplateList {
  __typename: "OffsetPagenatedITemplateData";
  pageInfo: notificationTemplateList_NotificationTemplateList_pageInfo;
  items: notificationTemplateList_NotificationTemplateList_items[];
}

export interface notificationTemplateList {
  /**
   * BusinessUser 전용
   */
  NotificationTemplateList: notificationTemplateList_NotificationTemplateList;
}

export interface notificationTemplateListVariables {
  sort?: _ITemplateSort[] | null;
  filter?: _ITemplateFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: notificationManagerList
// ====================================================

export interface notificationManagerList_NotificationManagerList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface notificationManagerList_NotificationManagerList_items_senders_files_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface notificationManagerList_NotificationManagerList_items_senders_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: notificationManagerList_NotificationManagerList_items_senders_files_tags[];
}

export interface notificationManagerList_NotificationManagerList_items_senders {
  __typename: "NotificationSender";
  type: NotificationMethod;
  label: string | null;
  sender: string;
  isVerified: boolean;
  files: notificationManagerList_NotificationManagerList_items_senders_files[];
  isRegisteredToSES: boolean | null;
  isRegisteredToAligo: boolean | null;
  createdAt: any;
}

export interface notificationManagerList_NotificationManagerList_items_smsPricingTable {
  __typename: "SMSPricingTable";
  SMS: number;
  LMS: number;
  MMS: number;
}

export interface notificationManagerList_NotificationManagerList_items {
  __typename: "NotificationManager";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  /**
   * 건당 비용. 단위는 KRW
   */
  emailPricing: number;
  currency: Currency;
  /**
   * Email, SMS 뭘로 보내든 포인트 차감
   */
  pointRemains: number;
  senders: notificationManagerList_NotificationManagerList_items_senders[];
  smsPricingTable: notificationManagerList_NotificationManagerList_items_smsPricingTable;
  /**
   * 건당 비용. 단위는 KRW
   */
  kakaoPrice: number;
  kakaoApiKey: string | null;
  kakaoUserId: string | null;
  kakaoSenderKey: string | null;
  userName: string;
}

export interface notificationManagerList_NotificationManagerList {
  __typename: "OffsetPagenatedNotificationManagerData";
  pageInfo: notificationManagerList_NotificationManagerList_pageInfo;
  items: notificationManagerList_NotificationManagerList_items[];
}

export interface notificationManagerList {
  /**
   * Function for Exam Admin
   */
  NotificationManagerList: notificationManagerList_NotificationManagerList;
}

export interface notificationManagerListVariables {
  filter?: _NotificationManagerFilter | null;
  sort?: _NotificationManagerSort[] | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: notificationSendSingle
// ====================================================

export interface notificationSendSingle_NotificationSendSingle_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface notificationSendSingle_NotificationSendSingle {
  __typename: "SmsSingleMessageSendResponse";
  ok: boolean;
  error: notificationSendSingle_NotificationSendSingle_error | null;
}

export interface notificationSendSingle {
  NotificationSendSingle: notificationSendSingle_NotificationSendSingle;
}

export interface notificationSendSingleVariables {
  input: NotificationSendInput;
  method: NotificationMethod;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: notificationSendWithTemplate
// ====================================================

export interface notificationSendWithTemplate_NotificationSendWithTemplate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface notificationSendWithTemplate_NotificationSendWithTemplate {
  __typename: "SmsTemplateMessageSendResponse";
  ok: boolean;
  error: notificationSendWithTemplate_NotificationSendWithTemplate_error | null;
}

export interface notificationSendWithTemplate {
  NotificationSendWithTemplate: notificationSendWithTemplate_NotificationSendWithTemplate;
}

export interface notificationSendWithTemplateVariables {
  input: NotificationSendWithTemplateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: notificationTemplateCreate
// ====================================================

export interface notificationTemplateCreate_NotificationTemplateCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface notificationTemplateCreate_NotificationTemplateCreate {
  __typename: "NotificationTemplateCreateResponse";
  ok: boolean;
  error: notificationTemplateCreate_NotificationTemplateCreate_error | null;
}

export interface notificationTemplateCreate {
  NotificationTemplateCreate: notificationTemplateCreate_NotificationTemplateCreate;
}

export interface notificationTemplateCreateVariables {
  inputs: NotificationTemplateCreateInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: notificationTemplateDelete
// ====================================================

export interface notificationTemplateDelete_NotificationTemplateDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface notificationTemplateDelete_NotificationTemplateDelete {
  __typename: "NotificationTemplateDeleteResponse";
  ok: boolean;
  error: notificationTemplateDelete_NotificationTemplateDelete_error | null;
}

export interface notificationTemplateDelete {
  NotificationTemplateDelete: notificationTemplateDelete_NotificationTemplateDelete;
}

export interface notificationTemplateDeleteVariables {
  templateId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: notificationTemplateUpdate
// ====================================================

export interface notificationTemplateUpdate_NotificationTemplateUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface notificationTemplateUpdate_NotificationTemplateUpdate {
  __typename: "NotificationTemplateUpdateResponse";
  ok: boolean;
  error: notificationTemplateUpdate_NotificationTemplateUpdate_error | null;
}

export interface notificationTemplateUpdate {
  NotificationTemplateUpdate: notificationTemplateUpdate_NotificationTemplateUpdate;
}

export interface notificationTemplateUpdateVariables {
  input: NotificationTemplateUpdateInput;
  templateId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: unReadSystemNotiFind
// ====================================================

export interface unReadSystemNotiFind_UnReadSystemNotiFind_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface unReadSystemNotiFind_UnReadSystemNotiFind_data {
  __typename: "SystemNoti";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
  severity: SystemNotiSeverity;
}

export interface unReadSystemNotiFind_UnReadSystemNotiFind {
  __typename: "UnReadSystemNotiFindResponse";
  ok: boolean;
  error: unReadSystemNotiFind_UnReadSystemNotiFind_error | null;
  data: unReadSystemNotiFind_UnReadSystemNotiFind_data[];
}

export interface unReadSystemNotiFind {
  UnReadSystemNotiFind: unReadSystemNotiFind_UnReadSystemNotiFind;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: kakaoTemplateConfirmRequest
// ====================================================

export interface kakaoTemplateConfirmRequest_KakaoTemplateConfirmRequest_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface kakaoTemplateConfirmRequest_KakaoTemplateConfirmRequest {
  __typename: "KakaoTemplateResponse";
  ok: boolean;
  error: kakaoTemplateConfirmRequest_KakaoTemplateConfirmRequest_error | null;
}

export interface kakaoTemplateConfirmRequest {
  KakaoTemplateConfirmRequest: kakaoTemplateConfirmRequest_KakaoTemplateConfirmRequest;
}

export interface kakaoTemplateConfirmRequestVariables {
  tpl_code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: offerUpdate
// ====================================================

export interface offerUpdate_OfferUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface offerUpdate_OfferUpdate {
  __typename: "OfferUpdateResponse";
  ok: boolean;
  error: offerUpdate_OfferUpdate_error | null;
}

export interface offerUpdate {
  OfferUpdate: offerUpdate_OfferUpdate;
}

export interface offerUpdateVariables {
  input: WishTourInput;
  OfferId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: offerCreate
// ====================================================

export interface offerCreate_OfferCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface offerCreate_OfferCreate {
  __typename: "OfferCreateResponse";
  ok: boolean;
  error: offerCreate_OfferCreate_error | null;
}

export interface offerCreate {
  OfferCreate: offerCreate_OfferCreate;
}

export interface offerCreateVariables {
  input: WishTourInput;
  guideId?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: offerDelete
// ====================================================

export interface offerDelete_OfferDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface offerDelete_OfferDelete {
  __typename: "OfferDeleteResponse";
  ok: boolean;
  error: offerDelete_OfferDelete_error | null;
}

export interface offerDelete {
  OfferDelete: offerDelete_OfferDelete;
}

export interface offerDeleteVariables {
  OfferId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: offerSend
// ====================================================

export interface offerSend_OfferSend_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface offerSend_OfferSend {
  __typename: "OfferDeleteResponse";
  ok: boolean;
  error: offerSend_OfferSend_error | null;
}

export interface offerSend {
  OfferSend: offerSend_OfferSend;
}

export interface offerSendVariables {
  TourId: any;
  OfferId: any;
  message: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: offerList
// ====================================================

export interface offerList_OfferList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface offerList_OfferList_items_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_wishTour_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_wishTour_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: offerList_OfferList_items_wishTour_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface offerList_OfferList_items_wishTour_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_wishTour_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: offerList_OfferList_items_wishTour_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface offerList_OfferList_items_wishTour_travlers {
  __typename: "TravelerInfo";
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  isBooker: boolean | null;
  Representative: boolean | null;
  passportNumber: string | null;
  countryCode: string | null;
  birthDate: any;
}

export interface offerList_OfferList_items_wishTour_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_wishTour_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: offerList_OfferList_items_wishTour_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface offerList_OfferList_items_wishTour {
  __typename: "WishTour";
  region: offerList_OfferList_items_wishTour_region | null;
  category: offerList_OfferList_items_wishTour_category | null;
  lang: string | null;
  langCustom: string | null;
  travelStartTime: string | null;
  wishMemeo: string | null;
  money: number | null;
  regionDetail: string | null;
  contents: string;
  travlers: offerList_OfferList_items_wishTour_travlers[] | null;
  categoryMini: offerList_OfferList_items_wishTour_categoryMini[] | null;
  price: number;
  adultCnt: number;
  babyCnt: number;
  kidsCnt: number;
  totalCnt: number;
  startDate: any | null;
  endDate: any | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: offerList_OfferList_items_proposalTours_productInfomation_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: offerList_OfferList_items_proposalTours_productInfomation_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: offerList_OfferList_items_proposalTours_productInfomation_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: offerList_OfferList_items_proposalTours_productInfomation_videos_tags[];
}

export interface offerList_OfferList_items_proposalTours_productInfomation_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: offerList_OfferList_items_proposalTours_productInfomation_thumbNailVideo_tags[];
}

export interface offerList_OfferList_items_proposalTours_productInfomation_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: offerList_OfferList_items_proposalTours_productInfomation_guideImage_tags[];
}

export interface offerList_OfferList_items_proposalTours_productInfomation_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: offerList_OfferList_items_proposalTours_productInfomation_subPlanes_photo_tags[];
}

export interface offerList_OfferList_items_proposalTours_productInfomation_subPlanes {
  __typename: "SubPlan";
  title: offerList_OfferList_items_proposalTours_productInfomation_subPlanes_title;
  time: offerList_OfferList_items_proposalTours_productInfomation_subPlanes_time;
  description: offerList_OfferList_items_proposalTours_productInfomation_subPlanes_description;
  photo: offerList_OfferList_items_proposalTours_productInfomation_subPlanes_photo | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: offerList_OfferList_items_proposalTours_productInfomation_images_tags[];
}

export interface offerList_OfferList_items_proposalTours_productInfomation_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface offerList_OfferList_items_proposalTours_productInfomation_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: offerList_OfferList_items_proposalTours_productInfomation_thumbNail_tags[];
}

export interface offerList_OfferList_items_proposalTours_productInfomation {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: offerList_OfferList_items_proposalTours_productInfomation_title | null;
  languages: LANGUAGES[] | null;
  marker: offerList_OfferList_items_proposalTours_productInfomation_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: offerList_OfferList_items_proposalTours_productInfomation_shortDecsription | null;
  categoryMini: offerList_OfferList_items_proposalTours_productInfomation_categoryMini[] | null;
  descriptionLarge: offerList_OfferList_items_proposalTours_productInfomation_descriptionLarge | null;
  region: offerList_OfferList_items_proposalTours_productInfomation_region | null;
  startTime: offerList_OfferList_items_proposalTours_productInfomation_startTime | null;
  extraInfo: offerList_OfferList_items_proposalTours_productInfomation_extraInfo | null;
  startPoint: offerList_OfferList_items_proposalTours_productInfomation_startPoint | null;
  include: offerList_OfferList_items_proposalTours_productInfomation_include | null;
  unInclude: offerList_OfferList_items_proposalTours_productInfomation_unInclude | null;
  importantNotice: offerList_OfferList_items_proposalTours_productInfomation_importantNotice | null;
  category: offerList_OfferList_items_proposalTours_productInfomation_category | null;
  videos: offerList_OfferList_items_proposalTours_productInfomation_videos[] | null;
  thumbNailVideo: offerList_OfferList_items_proposalTours_productInfomation_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: offerList_OfferList_items_proposalTours_productInfomation_guideImage | null;
  subPlanes: offerList_OfferList_items_proposalTours_productInfomation_subPlanes[] | null;
  guideId: any | null;
  address: offerList_OfferList_items_proposalTours_productInfomation_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: offerList_OfferList_items_proposalTours_productInfomation_images[] | null;
  thumbNail: offerList_OfferList_items_proposalTours_productInfomation_thumbNail | null;
  adminMemo: string | null;
}

export interface offerList_OfferList_items_proposalTours {
  __typename: "Tour";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  productId: any;
  productInfomation: offerList_OfferList_items_proposalTours_productInfomation;
  number: number | null;
  bookings: (any | null)[] | null;
  startDate: any;
  endDate: any | null;
  /**
   * refund를 뺴지 않은 금액이다
   */
  totalPaidAmt: number | null;
  totalRefundPrice: number | null;
  totalAdult: number | null;
  totalKids: number | null;
  totalBaby: number;
  totalMember: number;
  code: string;
  representive: boolean;
  completeBookingCnt: number | null;
  cancelBookingCnt: number | null;
  readyBookingCnt: number | null;
  settlementStatus: SettlementStatus;
  settlementId: any | null;
  settlementAmt: number | null;
  tourStatus: TourStatus;
}

export interface offerList_OfferList_items {
  __typename: "Offer";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  offerName: string;
  offerNickName: string | null;
  offerId: any;
  tourTitle: offerList_OfferList_items_tourTitle | null;
  tourStart: any | null;
  tourCode: string | null;
  tourId: any | null;
  guideId: any | null;
  guideName: string | null;
  guideNickName: string | null;
  wishTour: offerList_OfferList_items_wishTour;
  proposalTours: offerList_OfferList_items_proposalTours[] | null;
  status: OfferStatus;
  chatRooms: any[] | null;
}

export interface offerList_OfferList {
  __typename: "OffsetPagenatedOfferData";
  pageInfo: offerList_OfferList_pageInfo;
  items: offerList_OfferList_items[];
}

export interface offerList {
  /**
   * Function for Exam Admin
   */
  OfferList: offerList_OfferList;
}

export interface offerListVariables {
  sort?: _OfferSort[] | null;
  filter?: _OfferFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: offerFindById
// ====================================================

export interface offerFindById_OfferFindById_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_wishTour_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_wishTour_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: offerFindById_OfferFindById_wishTour_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface offerFindById_OfferFindById_wishTour_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_wishTour_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: offerFindById_OfferFindById_wishTour_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface offerFindById_OfferFindById_wishTour_travlers {
  __typename: "TravelerInfo";
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  isBooker: boolean | null;
  Representative: boolean | null;
  passportNumber: string | null;
  countryCode: string | null;
  birthDate: any;
}

export interface offerFindById_OfferFindById_wishTour_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_wishTour_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: offerFindById_OfferFindById_wishTour_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface offerFindById_OfferFindById_wishTour {
  __typename: "WishTour";
  region: offerFindById_OfferFindById_wishTour_region | null;
  category: offerFindById_OfferFindById_wishTour_category | null;
  lang: string | null;
  langCustom: string | null;
  travelStartTime: string | null;
  wishMemeo: string | null;
  money: number | null;
  regionDetail: string | null;
  contents: string;
  travlers: offerFindById_OfferFindById_wishTour_travlers[] | null;
  categoryMini: offerFindById_OfferFindById_wishTour_categoryMini[] | null;
  price: number;
  adultCnt: number;
  babyCnt: number;
  kidsCnt: number;
  totalCnt: number;
  startDate: any | null;
  endDate: any | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: offerFindById_OfferFindById_proposalTours_productInfomation_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: offerFindById_OfferFindById_proposalTours_productInfomation_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: offerFindById_OfferFindById_proposalTours_productInfomation_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: offerFindById_OfferFindById_proposalTours_productInfomation_videos_tags[];
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: offerFindById_OfferFindById_proposalTours_productInfomation_thumbNailVideo_tags[];
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: offerFindById_OfferFindById_proposalTours_productInfomation_guideImage_tags[];
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: offerFindById_OfferFindById_proposalTours_productInfomation_subPlanes_photo_tags[];
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_subPlanes {
  __typename: "SubPlan";
  title: offerFindById_OfferFindById_proposalTours_productInfomation_subPlanes_title;
  time: offerFindById_OfferFindById_proposalTours_productInfomation_subPlanes_time;
  description: offerFindById_OfferFindById_proposalTours_productInfomation_subPlanes_description;
  photo: offerFindById_OfferFindById_proposalTours_productInfomation_subPlanes_photo | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: offerFindById_OfferFindById_proposalTours_productInfomation_images_tags[];
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: offerFindById_OfferFindById_proposalTours_productInfomation_thumbNail_tags[];
}

export interface offerFindById_OfferFindById_proposalTours_productInfomation {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: offerFindById_OfferFindById_proposalTours_productInfomation_title | null;
  languages: LANGUAGES[] | null;
  marker: offerFindById_OfferFindById_proposalTours_productInfomation_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: offerFindById_OfferFindById_proposalTours_productInfomation_shortDecsription | null;
  categoryMini: offerFindById_OfferFindById_proposalTours_productInfomation_categoryMini[] | null;
  descriptionLarge: offerFindById_OfferFindById_proposalTours_productInfomation_descriptionLarge | null;
  region: offerFindById_OfferFindById_proposalTours_productInfomation_region | null;
  startTime: offerFindById_OfferFindById_proposalTours_productInfomation_startTime | null;
  extraInfo: offerFindById_OfferFindById_proposalTours_productInfomation_extraInfo | null;
  startPoint: offerFindById_OfferFindById_proposalTours_productInfomation_startPoint | null;
  include: offerFindById_OfferFindById_proposalTours_productInfomation_include | null;
  unInclude: offerFindById_OfferFindById_proposalTours_productInfomation_unInclude | null;
  importantNotice: offerFindById_OfferFindById_proposalTours_productInfomation_importantNotice | null;
  category: offerFindById_OfferFindById_proposalTours_productInfomation_category | null;
  videos: offerFindById_OfferFindById_proposalTours_productInfomation_videos[] | null;
  thumbNailVideo: offerFindById_OfferFindById_proposalTours_productInfomation_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: offerFindById_OfferFindById_proposalTours_productInfomation_guideImage | null;
  subPlanes: offerFindById_OfferFindById_proposalTours_productInfomation_subPlanes[] | null;
  guideId: any | null;
  address: offerFindById_OfferFindById_proposalTours_productInfomation_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: offerFindById_OfferFindById_proposalTours_productInfomation_images[] | null;
  thumbNail: offerFindById_OfferFindById_proposalTours_productInfomation_thumbNail | null;
  adminMemo: string | null;
}

export interface offerFindById_OfferFindById_proposalTours {
  __typename: "Tour";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  productId: any;
  productInfomation: offerFindById_OfferFindById_proposalTours_productInfomation;
  number: number | null;
  bookings: (any | null)[] | null;
  startDate: any;
  endDate: any | null;
  /**
   * refund를 뺴지 않은 금액이다
   */
  totalPaidAmt: number | null;
  totalRefundPrice: number | null;
  totalAdult: number | null;
  totalKids: number | null;
  totalBaby: number;
  totalMember: number;
  code: string;
  representive: boolean;
  completeBookingCnt: number | null;
  cancelBookingCnt: number | null;
  readyBookingCnt: number | null;
  settlementStatus: SettlementStatus;
  settlementId: any | null;
  settlementAmt: number | null;
  tourStatus: TourStatus;
}

export interface offerFindById_OfferFindById {
  __typename: "Offer";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  offerName: string;
  offerNickName: string | null;
  offerId: any;
  tourTitle: offerFindById_OfferFindById_tourTitle | null;
  tourStart: any | null;
  tourCode: string | null;
  tourId: any | null;
  guideId: any | null;
  guideName: string | null;
  guideNickName: string | null;
  wishTour: offerFindById_OfferFindById_wishTour;
  proposalTours: offerFindById_OfferFindById_proposalTours[] | null;
  status: OfferStatus;
  chatRooms: any[] | null;
}

export interface offerFindById {
  OfferFindById: offerFindById_OfferFindById | null;
}

export interface offerFindByIdVariables {
  OfferId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: policyUpdate
// ====================================================

export interface policyUpdate_PolicyUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface policyUpdate_PolicyUpdate {
  __typename: "PolicyUpdateResponse";
  ok: boolean;
  error: policyUpdate_PolicyUpdate_error | null;
}

export interface policyUpdate {
  PolicyUpdate: policyUpdate_PolicyUpdate;
}

export interface policyUpdateVariables {
  input: PolicyInput;
  policyId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: policyOrderUpdate
// ====================================================

export interface policyOrderUpdate_PolicyOrderUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface policyOrderUpdate_PolicyOrderUpdate {
  __typename: "PolicyOrderUpdateResponse";
  ok: boolean;
  error: policyOrderUpdate_PolicyOrderUpdate_error | null;
}

export interface policyOrderUpdate {
  PolicyOrderUpdate: policyOrderUpdate_PolicyOrderUpdate;
}

export interface policyOrderUpdateVariables {
  input: OrderUpdateInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: policyCreate
// ====================================================

export interface policyCreate_PolicyCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface policyCreate_PolicyCreate {
  __typename: "PolicyCreateResponse";
  ok: boolean;
  error: policyCreate_PolicyCreate_error | null;
}

export interface policyCreate {
  PolicyCreate: policyCreate_PolicyCreate;
}

export interface policyCreateVariables {
  input: PolicyInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: policyDelete
// ====================================================

export interface policyDelete_PolicyDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface policyDelete_PolicyDelete {
  __typename: "PolicyDeleteResponse";
  ok: boolean;
  error: policyDelete_PolicyDelete_error | null;
}

export interface policyDelete {
  PolicyDelete: policyDelete_PolicyDelete;
}

export interface policyDeleteVariables {
  policyId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: policyList
// ====================================================

export interface policyList_PolicyList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface policyList_PolicyList_items {
  __typename: "Policy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  target: PolicyLocation;
  name: string;
  content: string;
  require: boolean;
  order: number;
  version: number;
}

export interface policyList_PolicyList {
  __typename: "OffsetPagenatedPolicyData";
  pageInfo: policyList_PolicyList_pageInfo;
  items: policyList_PolicyList_items[];
}

export interface policyList {
  /**
   * Function for Exam Admin
   */
  PolicyList: policyList_PolicyList;
}

export interface policyListVariables {
  sort?: _PolicySort[] | null;
  filter?: _PolicyFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: policyFindById
// ====================================================

export interface policyFindById_PolicyFindById {
  __typename: "Policy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  target: PolicyLocation;
  name: string;
  content: string;
  require: boolean;
  order: number;
  version: number;
}

export interface policyFindById {
  PolicyFindById: policyFindById_PolicyFindById | null;
}

export interface policyFindByIdVariables {
  policyId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: policyFindByKey
// ====================================================

export interface policyFindByKey_PolicyFindByKey {
  __typename: "Policy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  target: PolicyLocation;
  name: string;
  content: string;
  require: boolean;
  order: number;
  version: number;
}

export interface policyFindByKey {
  PolicyFindByKey: policyFindByKey_PolicyFindByKey | null;
}

export interface policyFindByKeyVariables {
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productUpdate
// ====================================================

export interface productUpdate_ProductUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productUpdate_ProductUpdate {
  __typename: "ProductUpdateResponse";
  ok: boolean;
  error: productUpdate_ProductUpdate_error | null;
}

export interface productUpdate {
  ProductUpdate: productUpdate_ProductUpdate;
}

export interface productUpdateVariables {
  input: ProductInput;
  ProductId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productCreate
// ====================================================

export interface productCreate_ProductCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productCreate_ProductCreate_data_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface productCreate_ProductCreate_data_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: productCreate_ProductCreate_data_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface productCreate_ProductCreate_data_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: productCreate_ProductCreate_data_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface productCreate_ProductCreate_data_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: productCreate_ProductCreate_data_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface productCreate_ProductCreate_data_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productCreate_ProductCreate_data_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productCreate_ProductCreate_data_videos_tags[];
}

export interface productCreate_ProductCreate_data_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productCreate_ProductCreate_data_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productCreate_ProductCreate_data_thumbNailVideo_tags[];
}

export interface productCreate_ProductCreate_data_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productCreate_ProductCreate_data_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productCreate_ProductCreate_data_guideImage_tags[];
}

export interface productCreate_ProductCreate_data_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productCreate_ProductCreate_data_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productCreate_ProductCreate_data_subPlanes_photo_tags[];
}

export interface productCreate_ProductCreate_data_subPlanes {
  __typename: "SubPlan";
  title: productCreate_ProductCreate_data_subPlanes_title;
  time: productCreate_ProductCreate_data_subPlanes_time;
  description: productCreate_ProductCreate_data_subPlanes_description;
  photo: productCreate_ProductCreate_data_subPlanes_photo | null;
}

export interface productCreate_ProductCreate_data_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productCreate_ProductCreate_data_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productCreate_ProductCreate_data_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productCreate_ProductCreate_data_images_tags[];
}

export interface productCreate_ProductCreate_data_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productCreate_ProductCreate_data_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productCreate_ProductCreate_data_thumbNail_tags[];
}

export interface productCreate_ProductCreate_data {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: productCreate_ProductCreate_data_title | null;
  languages: LANGUAGES[] | null;
  marker: productCreate_ProductCreate_data_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: productCreate_ProductCreate_data_shortDecsription | null;
  categoryMini: productCreate_ProductCreate_data_categoryMini[] | null;
  descriptionLarge: productCreate_ProductCreate_data_descriptionLarge | null;
  region: productCreate_ProductCreate_data_region | null;
  startTime: productCreate_ProductCreate_data_startTime | null;
  extraInfo: productCreate_ProductCreate_data_extraInfo | null;
  startPoint: productCreate_ProductCreate_data_startPoint | null;
  include: productCreate_ProductCreate_data_include | null;
  unInclude: productCreate_ProductCreate_data_unInclude | null;
  importantNotice: productCreate_ProductCreate_data_importantNotice | null;
  category: productCreate_ProductCreate_data_category | null;
  videos: productCreate_ProductCreate_data_videos[] | null;
  thumbNailVideo: productCreate_ProductCreate_data_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: productCreate_ProductCreate_data_guideImage | null;
  subPlanes: productCreate_ProductCreate_data_subPlanes[] | null;
  guideId: any | null;
  address: productCreate_ProductCreate_data_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: productCreate_ProductCreate_data_images[] | null;
  thumbNail: productCreate_ProductCreate_data_thumbNail | null;
  adminMemo: string | null;
}

export interface productCreate_ProductCreate {
  __typename: "ProductCreateResponse";
  ok: boolean;
  error: productCreate_ProductCreate_error | null;
  data: productCreate_ProductCreate_data | null;
}

export interface productCreate {
  ProductCreate: productCreate_ProductCreate;
}

export interface productCreateVariables {
  input: ProductInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: availDateProductList
// ====================================================

export interface availDateProductList {
  /**
   * 조건안에 프로덕트가 존재하는 날짜들을 가져옴
   */
  AvailDateProductList: any[];
}

export interface availDateProductListVariables {
  filter?: _ProductFilter | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productDelete
// ====================================================

export interface productDelete_ProductDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productDelete_ProductDelete {
  __typename: "ProductDeleteResponse";
  ok: boolean;
  error: productDelete_ProductDelete_error | null;
}

export interface productDelete {
  ProductDelete: productDelete_ProductDelete;
}

export interface productDeleteVariables {
  productId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productList
// ====================================================

export interface productList_ProductList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface productList_ProductList_items_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface productList_ProductList_items_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: productList_ProductList_items_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface productList_ProductList_items_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: productList_ProductList_items_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface productList_ProductList_items_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: productList_ProductList_items_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface productList_ProductList_items_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productList_ProductList_items_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productList_ProductList_items_videos_tags[];
}

export interface productList_ProductList_items_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productList_ProductList_items_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productList_ProductList_items_thumbNailVideo_tags[];
}

export interface productList_ProductList_items_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productList_ProductList_items_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productList_ProductList_items_guideImage_tags[];
}

export interface productList_ProductList_items_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productList_ProductList_items_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productList_ProductList_items_subPlanes_photo_tags[];
}

export interface productList_ProductList_items_subPlanes {
  __typename: "SubPlan";
  title: productList_ProductList_items_subPlanes_title;
  time: productList_ProductList_items_subPlanes_time;
  description: productList_ProductList_items_subPlanes_description;
  photo: productList_ProductList_items_subPlanes_photo | null;
}

export interface productList_ProductList_items_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productList_ProductList_items_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productList_ProductList_items_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productList_ProductList_items_images_tags[];
}

export interface productList_ProductList_items_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productList_ProductList_items_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productList_ProductList_items_thumbNail_tags[];
}

export interface productList_ProductList_items {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: productList_ProductList_items_title | null;
  languages: LANGUAGES[] | null;
  marker: productList_ProductList_items_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: productList_ProductList_items_shortDecsription | null;
  categoryMini: productList_ProductList_items_categoryMini[] | null;
  descriptionLarge: productList_ProductList_items_descriptionLarge | null;
  region: productList_ProductList_items_region | null;
  startTime: productList_ProductList_items_startTime | null;
  extraInfo: productList_ProductList_items_extraInfo | null;
  startPoint: productList_ProductList_items_startPoint | null;
  include: productList_ProductList_items_include | null;
  unInclude: productList_ProductList_items_unInclude | null;
  importantNotice: productList_ProductList_items_importantNotice | null;
  category: productList_ProductList_items_category | null;
  videos: productList_ProductList_items_videos[] | null;
  thumbNailVideo: productList_ProductList_items_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: productList_ProductList_items_guideImage | null;
  subPlanes: productList_ProductList_items_subPlanes[] | null;
  guideId: any | null;
  address: productList_ProductList_items_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: productList_ProductList_items_images[] | null;
  thumbNail: productList_ProductList_items_thumbNail | null;
  adminMemo: string | null;
}

export interface productList_ProductList {
  __typename: "OffsetPagenatedProductData";
  pageInfo: productList_ProductList_pageInfo;
  items: productList_ProductList_items[];
}

export interface productList {
  /**
   * Function for Exam Admin
   */
  ProductList: productList_ProductList;
}

export interface productListVariables {
  sort?: _ProductSort[] | null;
  filter?: _ProductFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productFindById
// ====================================================

export interface productFindById_ProductFindById_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface productFindById_ProductFindById_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: productFindById_ProductFindById_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface productFindById_ProductFindById_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: productFindById_ProductFindById_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface productFindById_ProductFindById_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: productFindById_ProductFindById_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface productFindById_ProductFindById_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productFindById_ProductFindById_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productFindById_ProductFindById_videos_tags[];
}

export interface productFindById_ProductFindById_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productFindById_ProductFindById_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productFindById_ProductFindById_thumbNailVideo_tags[];
}

export interface productFindById_ProductFindById_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productFindById_ProductFindById_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productFindById_ProductFindById_guideImage_tags[];
}

export interface productFindById_ProductFindById_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productFindById_ProductFindById_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productFindById_ProductFindById_subPlanes_photo_tags[];
}

export interface productFindById_ProductFindById_subPlanes {
  __typename: "SubPlan";
  title: productFindById_ProductFindById_subPlanes_title;
  time: productFindById_ProductFindById_subPlanes_time;
  description: productFindById_ProductFindById_subPlanes_description;
  photo: productFindById_ProductFindById_subPlanes_photo | null;
}

export interface productFindById_ProductFindById_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface productFindById_ProductFindById_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productFindById_ProductFindById_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productFindById_ProductFindById_images_tags[];
}

export interface productFindById_ProductFindById_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productFindById_ProductFindById_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: productFindById_ProductFindById_thumbNail_tags[];
}

export interface productFindById_ProductFindById {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: productFindById_ProductFindById_title | null;
  languages: LANGUAGES[] | null;
  marker: productFindById_ProductFindById_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: productFindById_ProductFindById_shortDecsription | null;
  categoryMini: productFindById_ProductFindById_categoryMini[] | null;
  descriptionLarge: productFindById_ProductFindById_descriptionLarge | null;
  region: productFindById_ProductFindById_region | null;
  startTime: productFindById_ProductFindById_startTime | null;
  extraInfo: productFindById_ProductFindById_extraInfo | null;
  startPoint: productFindById_ProductFindById_startPoint | null;
  include: productFindById_ProductFindById_include | null;
  unInclude: productFindById_ProductFindById_unInclude | null;
  importantNotice: productFindById_ProductFindById_importantNotice | null;
  category: productFindById_ProductFindById_category | null;
  videos: productFindById_ProductFindById_videos[] | null;
  thumbNailVideo: productFindById_ProductFindById_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: productFindById_ProductFindById_guideImage | null;
  subPlanes: productFindById_ProductFindById_subPlanes[] | null;
  guideId: any | null;
  address: productFindById_ProductFindById_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: productFindById_ProductFindById_images[] | null;
  thumbNail: productFindById_ProductFindById_thumbNail | null;
  adminMemo: string | null;
}

export interface productFindById {
  ProductFindById: productFindById_ProductFindById | null;
}

export interface productFindByIdVariables {
  productId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: reviewUpdate
// ====================================================

export interface reviewUpdate_ReviewUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface reviewUpdate_ReviewUpdate {
  __typename: "ReviewUpdateResponse";
  ok: boolean;
  error: reviewUpdate_ReviewUpdate_error | null;
}

export interface reviewUpdate {
  ReviewUpdate: reviewUpdate_ReviewUpdate;
}

export interface reviewUpdateVariables {
  input: ReviewInput;
  ReviewId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: reviewCreate
// ====================================================

export interface reviewCreate_ReviewCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface reviewCreate_ReviewCreate {
  __typename: "ReviewCreateResponse";
  ok: boolean;
  error: reviewCreate_ReviewCreate_error | null;
}

export interface reviewCreate {
  ReviewCreate: reviewCreate_ReviewCreate;
}

export interface reviewCreateVariables {
  guideId: any;
  tourId: any;
  input: ReviewInput;
  reviewerName?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: reviewDelete
// ====================================================

export interface reviewDelete_ReviewDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface reviewDelete_ReviewDelete {
  __typename: "ReviewDeleteResponse";
  ok: boolean;
  error: reviewDelete_ReviewDelete_error | null;
}

export interface reviewDelete {
  ReviewDelete: reviewDelete_ReviewDelete;
}

export interface reviewDeleteVariables {
  reviewId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: reviewList
// ====================================================

export interface reviewList_ReviewList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface reviewList_ReviewList_items_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface reviewList_ReviewList_items_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: reviewList_ReviewList_items_images_tags[];
}

export interface reviewList_ReviewList_items_reviewerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface reviewList_ReviewList_items_reviewerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: reviewList_ReviewList_items_reviewerProfileImg_tags[];
}

export interface reviewList_ReviewList_items_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface reviewList_ReviewList_items_recentComment_writerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface reviewList_ReviewList_items_recentComment_writerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: reviewList_ReviewList_items_recentComment_writerProfileImg_tags[];
}

export interface reviewList_ReviewList_items_recentComment {
  __typename: "Comment";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  content: string;
  writerId: any;
  writerName: string;
  writerNickName: string;
  targetId: any;
  targetModel: string;
  writerProfileImg: reviewList_ReviewList_items_recentComment_writerProfileImg | null;
}

export interface reviewList_ReviewList_items {
  __typename: "Review";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  title: string | null;
  contents: string;
  images: reviewList_ReviewList_items_images[] | null;
  rating: number;
  type: ReviewType;
  reviewerId: any;
  reviewerName: string;
  reviewerProfileImg: reviewList_ReviewList_items_reviewerProfileImg | null;
  reviewerNickName: string | null;
  tourTitle: reviewList_ReviewList_items_tourTitle;
  recentComment: reviewList_ReviewList_items_recentComment[];
  commentCount: number;
  productCode: string;
  guideName: string;
  guideId: any;
  guideNickName: string | null;
  tourCode: string;
  tourStart: any;
  tourId: any;
}

export interface reviewList_ReviewList {
  __typename: "OffsetPagenatedReviewData";
  pageInfo: reviewList_ReviewList_pageInfo;
  items: reviewList_ReviewList_items[];
}

export interface reviewList {
  /**
   * Function for Exam Admin
   */
  ReviewList: reviewList_ReviewList;
}

export interface reviewListVariables {
  sort?: _ReviewSort[] | null;
  filter?: _ReviewFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: reviewFindById
// ====================================================

export interface reviewFindById_ReviewFindById_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface reviewFindById_ReviewFindById_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: reviewFindById_ReviewFindById_images_tags[];
}

export interface reviewFindById_ReviewFindById_reviewerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface reviewFindById_ReviewFindById_reviewerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: reviewFindById_ReviewFindById_reviewerProfileImg_tags[];
}

export interface reviewFindById_ReviewFindById_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface reviewFindById_ReviewFindById_recentComment_writerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface reviewFindById_ReviewFindById_recentComment_writerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: reviewFindById_ReviewFindById_recentComment_writerProfileImg_tags[];
}

export interface reviewFindById_ReviewFindById_recentComment {
  __typename: "Comment";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  content: string;
  writerId: any;
  writerName: string;
  writerNickName: string;
  targetId: any;
  targetModel: string;
  writerProfileImg: reviewFindById_ReviewFindById_recentComment_writerProfileImg | null;
}

export interface reviewFindById_ReviewFindById {
  __typename: "Review";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  title: string | null;
  contents: string;
  images: reviewFindById_ReviewFindById_images[] | null;
  rating: number;
  type: ReviewType;
  reviewerId: any;
  reviewerName: string;
  reviewerProfileImg: reviewFindById_ReviewFindById_reviewerProfileImg | null;
  reviewerNickName: string | null;
  tourTitle: reviewFindById_ReviewFindById_tourTitle;
  recentComment: reviewFindById_ReviewFindById_recentComment[];
  commentCount: number;
  productCode: string;
  guideName: string;
  guideId: any;
  guideNickName: string | null;
  tourCode: string;
  tourStart: any;
  tourId: any;
}

export interface reviewFindById {
  ReviewFindById: reviewFindById_ReviewFindById | null;
}

export interface reviewFindByIdVariables {
  reviewId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementCreate
// ====================================================

export interface settlementCreate_SettlementCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface settlementCreate_SettlementCreate_data_tourName {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface settlementCreate_SettlementCreate_data_appliedFeePolicy {
  __typename: "FeePolicy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  feeName: string;
  feeDescription: string;
  type: FeeType;
  /**
   * 0~100
   */
  feePercent: number | null;
  /**
   * 0~100
   */
  feePercentUnder: number | null;
  targetPayMethods: Paymethod[] | null;
  fee: number | null;
}

export interface settlementCreate_SettlementCreate_data {
  __typename: "SettlementHistory";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  guideName: string;
  guideId: any;
  guideNickName: string;
  /**
   * 수수료 안뺀 돈
   */
  amt: number;
  /**
   * 수수료 뺀 돈
   */
  settlementedPrice: number;
  settlementCompleteAt: any | null;
  tourPeopleNum: number;
  guideMemo: string | null;
  masterMemo: string | null;
  productCode: string;
  productId: any;
  tourId: any;
  tourName: settlementCreate_SettlementCreate_data_tourName;
  appliedFeePolicy: settlementCreate_SettlementCreate_data_appliedFeePolicy[];
  tourDate: any;
  tourCode: string;
}

export interface settlementCreate_SettlementCreate {
  __typename: "SettlementCreateResponse";
  ok: boolean;
  error: settlementCreate_SettlementCreate_error | null;
  data: settlementCreate_SettlementCreate_data | null;
}

export interface settlementCreate {
  SettlementCreate: settlementCreate_SettlementCreate;
}

export interface settlementCreateVariables {
  input: SettlementHistoryInput;
  tourId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementComplete
// ====================================================

export interface settlementComplete_SettlementComplete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface settlementComplete_SettlementComplete_data_tourName {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface settlementComplete_SettlementComplete_data_appliedFeePolicy {
  __typename: "FeePolicy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  feeName: string;
  feeDescription: string;
  type: FeeType;
  /**
   * 0~100
   */
  feePercent: number | null;
  /**
   * 0~100
   */
  feePercentUnder: number | null;
  targetPayMethods: Paymethod[] | null;
  fee: number | null;
}

export interface settlementComplete_SettlementComplete_data {
  __typename: "SettlementHistory";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  guideName: string;
  guideId: any;
  guideNickName: string;
  /**
   * 수수료 안뺀 돈
   */
  amt: number;
  /**
   * 수수료 뺀 돈
   */
  settlementedPrice: number;
  settlementCompleteAt: any | null;
  tourPeopleNum: number;
  guideMemo: string | null;
  masterMemo: string | null;
  productCode: string;
  productId: any;
  tourId: any;
  tourName: settlementComplete_SettlementComplete_data_tourName;
  appliedFeePolicy: settlementComplete_SettlementComplete_data_appliedFeePolicy[];
  tourDate: any;
  tourCode: string;
}

export interface settlementComplete_SettlementComplete {
  __typename: "SettlementCreateResponse";
  ok: boolean;
  error: settlementComplete_SettlementComplete_error | null;
  data: settlementComplete_SettlementComplete_data | null;
}

export interface settlementComplete {
  SettlementComplete: settlementComplete_SettlementComplete;
}

export interface settlementCompleteVariables {
  settlementId: any;
  input: SettlementHistoryInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementDelete
// ====================================================

export interface settlementDelete_SettlementDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface settlementDelete_SettlementDelete_data_tourName {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface settlementDelete_SettlementDelete_data_appliedFeePolicy {
  __typename: "FeePolicy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  feeName: string;
  feeDescription: string;
  type: FeeType;
  /**
   * 0~100
   */
  feePercent: number | null;
  /**
   * 0~100
   */
  feePercentUnder: number | null;
  targetPayMethods: Paymethod[] | null;
  fee: number | null;
}

export interface settlementDelete_SettlementDelete_data {
  __typename: "SettlementHistory";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  guideName: string;
  guideId: any;
  guideNickName: string;
  /**
   * 수수료 안뺀 돈
   */
  amt: number;
  /**
   * 수수료 뺀 돈
   */
  settlementedPrice: number;
  settlementCompleteAt: any | null;
  tourPeopleNum: number;
  guideMemo: string | null;
  masterMemo: string | null;
  productCode: string;
  productId: any;
  tourId: any;
  tourName: settlementDelete_SettlementDelete_data_tourName;
  appliedFeePolicy: settlementDelete_SettlementDelete_data_appliedFeePolicy[];
  tourDate: any;
  tourCode: string;
}

export interface settlementDelete_SettlementDelete {
  __typename: "SettlementDeleteResponse";
  ok: boolean;
  error: settlementDelete_SettlementDelete_error | null;
  data: settlementDelete_SettlementDelete_data | null;
}

export interface settlementDelete {
  SettlementDelete: settlementDelete_SettlementDelete;
}

export interface settlementDeleteVariables {
  settlementId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: settlementList
// ====================================================

export interface settlementList_SettlementList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface settlementList_SettlementList_items_tourName {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface settlementList_SettlementList_items_appliedFeePolicy {
  __typename: "FeePolicy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  feeName: string;
  feeDescription: string;
  type: FeeType;
  /**
   * 0~100
   */
  feePercent: number | null;
  /**
   * 0~100
   */
  feePercentUnder: number | null;
  targetPayMethods: Paymethod[] | null;
  fee: number | null;
}

export interface settlementList_SettlementList_items {
  __typename: "SettlementHistory";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  guideName: string;
  guideId: any;
  guideNickName: string;
  /**
   * 수수료 안뺀 돈
   */
  amt: number;
  /**
   * 수수료 뺀 돈
   */
  settlementedPrice: number;
  settlementCompleteAt: any | null;
  tourPeopleNum: number;
  guideMemo: string | null;
  masterMemo: string | null;
  productCode: string;
  productId: any;
  tourId: any;
  tourName: settlementList_SettlementList_items_tourName;
  appliedFeePolicy: settlementList_SettlementList_items_appliedFeePolicy[];
  tourDate: any;
  tourCode: string;
}

export interface settlementList_SettlementList {
  __typename: "OffsetPagenatedSettlementHistoryData";
  pageInfo: settlementList_SettlementList_pageInfo;
  items: settlementList_SettlementList_items[];
}

export interface settlementList {
  /**
   * Function for Exam Admin
   */
  SettlementList: settlementList_SettlementList;
}

export interface settlementListVariables {
  sort?: _SettlementHistorySort[] | null;
  filter?: _SettlementHistoryFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: systemInfo
// ====================================================

export interface systemInfo_SystemInfo_categories_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface systemInfo_SystemInfo_categories {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: systemInfo_SystemInfo_categories_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface systemInfo_SystemInfo_groups_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface systemInfo_SystemInfo_groups_desc {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface systemInfo_SystemInfo_groups {
  __typename: "Group";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  /**
   * 어떤 모델을 대상으로 정렬을 하는지 정의함
   */
  target: string | null;
  /**
   * 이 그룹을 호출하기 위한 Uniq한 key값
   */
  key: string | null;
  order: number | null;
  label: systemInfo_SystemInfo_groups_label;
  desc: systemInfo_SystemInfo_groups_desc | null;
  /**
   * 그룹안의 순서는 이 배열의 인덱스로 조정됨
   */
  members: string[];
}

export interface systemInfo_SystemInfo_homepage_bannerImages_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface systemInfo_SystemInfo_homepage_bannerImages {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: systemInfo_SystemInfo_homepage_bannerImages_tags[];
}

export interface systemInfo_SystemInfo_homepage_feePolicies {
  __typename: "FeePolicy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  feeName: string;
  feeDescription: string;
  type: FeeType;
  /**
   * 0~100
   */
  feePercent: number | null;
  /**
   * 0~100
   */
  feePercentUnder: number | null;
  targetPayMethods: Paymethod[] | null;
  fee: number | null;
}

export interface systemInfo_SystemInfo_homepage {
  __typename: "Homepage";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  /**
   * tag에 링크. 및 분류
   */
  bannerImages: systemInfo_SystemInfo_homepage_bannerImages[];
  feePolicies: systemInfo_SystemInfo_homepage_feePolicies[];
}

export interface systemInfo_SystemInfo {
  __typename: "SystemInfo";
  categories: systemInfo_SystemInfo_categories[] | null;
  groups: systemInfo_SystemInfo_groups[] | null;
  homepage: systemInfo_SystemInfo_homepage | null;
}

export interface systemInfo {
  SystemInfo: systemInfo_SystemInfo | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: systemNotiList
// ====================================================

export interface systemNotiList_SystemNotiList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface systemNotiList_SystemNotiList_items {
  __typename: "SystemNoti";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
  severity: SystemNotiSeverity;
}

export interface systemNotiList_SystemNotiList {
  __typename: "OffsetPagenatedSystemNotiData";
  pageInfo: systemNotiList_SystemNotiList_pageInfo;
  items: systemNotiList_SystemNotiList_items[];
}

export interface systemNotiList {
  SystemNotiList: systemNotiList_SystemNotiList;
}

export interface systemNotiListVariables {
  sort?: _SystemNotiSort[] | null;
  filter?: _SystemNotiFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: systemNotiRead
// ====================================================

export interface systemNotiRead_SystemNotiRead_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface systemNotiRead_SystemNotiRead {
  __typename: "SystemNotiReadResponse";
  ok: boolean;
  error: systemNotiRead_SystemNotiRead_error | null;
}

export interface systemNotiRead {
  SystemNotiRead: systemNotiRead_SystemNotiRead;
}

export interface systemNotiReadVariables {
  ids: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: systemNotiHide
// ====================================================

export interface systemNotiHide_SystemNotiHide_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface systemNotiHide_SystemNotiHide {
  __typename: "SystemNotiHideResponse";
  ok: boolean;
  error: systemNotiHide_SystemNotiHide_error | null;
}

export interface systemNotiHide {
  SystemNotiHide: systemNotiHide_SystemNotiHide;
}

export interface systemNotiHideVariables {
  ids: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SystemNotiCreate
// ====================================================

export interface SystemNotiCreate_SystemNotiCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface SystemNotiCreate_SystemNotiCreate {
  __typename: "SystemNotiCreateResponse";
  ok: boolean;
  error: SystemNotiCreate_SystemNotiCreate_error | null;
}

export interface SystemNotiCreate {
  SystemNotiCreate: SystemNotiCreate_SystemNotiCreate;
}

export interface SystemNotiCreateVariables {
  message: string;
  userIds?: string[] | null;
  serverity?: SystemNotiSeverity | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: tourUpdate
// ====================================================

export interface tourUpdate_TourUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface tourUpdate_TourUpdate {
  __typename: "TourUpdateResponse";
  ok: boolean;
  error: tourUpdate_TourUpdate_error | null;
}

export interface tourUpdate {
  TourUpdate: tourUpdate_TourUpdate;
}

export interface tourUpdateVariables {
  producInput: ProductInput;
  input: TourInput;
  TourId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: tourCreate
// ====================================================

export interface tourCreate_TourCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface tourCreate_TourCreate {
  __typename: "TourCreateResponse";
  ok: boolean;
  error: tourCreate_TourCreate_error | null;
}

export interface tourCreate {
  TourCreate: tourCreate_TourCreate;
}

export interface tourCreateVariables {
  input: TourInput[];
  productId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: tourCancel
// ====================================================

export interface tourCancel_TourCancel_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface tourCancel_TourCancel {
  __typename: "TourDeleteResponse";
  ok: boolean;
  error: tourCancel_TourCancel_error | null;
}

export interface tourCancel {
  TourCancel: tourCancel_TourCancel;
}

export interface tourCancelVariables {
  TourId: any;
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: tourDelete
// ====================================================

export interface tourDelete_TourDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface tourDelete_TourDelete {
  __typename: "TourDeleteResponse";
  ok: boolean;
  error: tourDelete_TourDelete_error | null;
}

export interface tourDelete {
  TourDelete: tourDelete_TourDelete;
}

export interface tourDeleteVariables {
  TourId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: representiveTourChange
// ====================================================

export interface representiveTourChange_RepresentiveTourChange_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface representiveTourChange_RepresentiveTourChange {
  __typename: "TourDeleteResponse";
  ok: boolean;
  error: representiveTourChange_RepresentiveTourChange_error | null;
}

export interface representiveTourChange {
  RepresentiveTourChange: representiveTourChange_RepresentiveTourChange;
}

export interface representiveTourChangeVariables {
  NextRepresentiveTourId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: tourList
// ====================================================

export interface tourList_TourList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface tourList_TourList_items_productInfomation_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface tourList_TourList_items_productInfomation_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: tourList_TourList_items_productInfomation_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface tourList_TourList_items_productInfomation_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: tourList_TourList_items_productInfomation_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface tourList_TourList_items_productInfomation_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: tourList_TourList_items_productInfomation_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface tourList_TourList_items_productInfomation_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourList_TourList_items_productInfomation_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourList_TourList_items_productInfomation_videos_tags[];
}

export interface tourList_TourList_items_productInfomation_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourList_TourList_items_productInfomation_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourList_TourList_items_productInfomation_thumbNailVideo_tags[];
}

export interface tourList_TourList_items_productInfomation_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourList_TourList_items_productInfomation_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourList_TourList_items_productInfomation_guideImage_tags[];
}

export interface tourList_TourList_items_productInfomation_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourList_TourList_items_productInfomation_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourList_TourList_items_productInfomation_subPlanes_photo_tags[];
}

export interface tourList_TourList_items_productInfomation_subPlanes {
  __typename: "SubPlan";
  title: tourList_TourList_items_productInfomation_subPlanes_title;
  time: tourList_TourList_items_productInfomation_subPlanes_time;
  description: tourList_TourList_items_productInfomation_subPlanes_description;
  photo: tourList_TourList_items_productInfomation_subPlanes_photo | null;
}

export interface tourList_TourList_items_productInfomation_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourList_TourList_items_productInfomation_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourList_TourList_items_productInfomation_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourList_TourList_items_productInfomation_images_tags[];
}

export interface tourList_TourList_items_productInfomation_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourList_TourList_items_productInfomation_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourList_TourList_items_productInfomation_thumbNail_tags[];
}

export interface tourList_TourList_items_productInfomation {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: tourList_TourList_items_productInfomation_title | null;
  languages: LANGUAGES[] | null;
  marker: tourList_TourList_items_productInfomation_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: tourList_TourList_items_productInfomation_shortDecsription | null;
  categoryMini: tourList_TourList_items_productInfomation_categoryMini[] | null;
  descriptionLarge: tourList_TourList_items_productInfomation_descriptionLarge | null;
  region: tourList_TourList_items_productInfomation_region | null;
  startTime: tourList_TourList_items_productInfomation_startTime | null;
  extraInfo: tourList_TourList_items_productInfomation_extraInfo | null;
  startPoint: tourList_TourList_items_productInfomation_startPoint | null;
  include: tourList_TourList_items_productInfomation_include | null;
  unInclude: tourList_TourList_items_productInfomation_unInclude | null;
  importantNotice: tourList_TourList_items_productInfomation_importantNotice | null;
  category: tourList_TourList_items_productInfomation_category | null;
  videos: tourList_TourList_items_productInfomation_videos[] | null;
  thumbNailVideo: tourList_TourList_items_productInfomation_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: tourList_TourList_items_productInfomation_guideImage | null;
  subPlanes: tourList_TourList_items_productInfomation_subPlanes[] | null;
  guideId: any | null;
  address: tourList_TourList_items_productInfomation_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: tourList_TourList_items_productInfomation_images[] | null;
  thumbNail: tourList_TourList_items_productInfomation_thumbNail | null;
  adminMemo: string | null;
}

export interface tourList_TourList_items {
  __typename: "Tour";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  productId: any;
  productInfomation: tourList_TourList_items_productInfomation;
  number: number | null;
  bookings: (any | null)[] | null;
  startDate: any;
  endDate: any | null;
  /**
   * refund를 뺴지 않은 금액이다
   */
  totalPaidAmt: number | null;
  totalRefundPrice: number | null;
  totalAdult: number | null;
  totalKids: number | null;
  totalBaby: number;
  totalMember: number;
  code: string;
  representive: boolean;
  completeBookingCnt: number | null;
  cancelBookingCnt: number | null;
  readyBookingCnt: number | null;
  settlementStatus: SettlementStatus;
  settlementId: any | null;
  settlementAmt: number | null;
  tourStatus: TourStatus;
}

export interface tourList_TourList {
  __typename: "OffsetPagenatedTourData";
  pageInfo: tourList_TourList_pageInfo;
  items: tourList_TourList_items[];
}

export interface tourList {
  /**
   * Function for Exam Admin
   */
  TourList: tourList_TourList;
}

export interface tourListVariables {
  sort?: _TourSort[] | null;
  filter?: _TourFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: tourFindById
// ====================================================

export interface tourFindById_TourFindById_productInfomation_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface tourFindById_TourFindById_productInfomation_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: tourFindById_TourFindById_productInfomation_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface tourFindById_TourFindById_productInfomation_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: tourFindById_TourFindById_productInfomation_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface tourFindById_TourFindById_productInfomation_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: tourFindById_TourFindById_productInfomation_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface tourFindById_TourFindById_productInfomation_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_productInfomation_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_productInfomation_videos_tags[];
}

export interface tourFindById_TourFindById_productInfomation_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_productInfomation_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_productInfomation_thumbNailVideo_tags[];
}

export interface tourFindById_TourFindById_productInfomation_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_productInfomation_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_productInfomation_guideImage_tags[];
}

export interface tourFindById_TourFindById_productInfomation_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_productInfomation_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_productInfomation_subPlanes_photo_tags[];
}

export interface tourFindById_TourFindById_productInfomation_subPlanes {
  __typename: "SubPlan";
  title: tourFindById_TourFindById_productInfomation_subPlanes_title;
  time: tourFindById_TourFindById_productInfomation_subPlanes_time;
  description: tourFindById_TourFindById_productInfomation_subPlanes_description;
  photo: tourFindById_TourFindById_productInfomation_subPlanes_photo | null;
}

export interface tourFindById_TourFindById_productInfomation_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_productInfomation_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_productInfomation_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_productInfomation_images_tags[];
}

export interface tourFindById_TourFindById_productInfomation_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_productInfomation_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_productInfomation_thumbNail_tags[];
}

export interface tourFindById_TourFindById_productInfomation {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: tourFindById_TourFindById_productInfomation_title | null;
  languages: LANGUAGES[] | null;
  marker: tourFindById_TourFindById_productInfomation_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: tourFindById_TourFindById_productInfomation_shortDecsription | null;
  categoryMini: tourFindById_TourFindById_productInfomation_categoryMini[] | null;
  descriptionLarge: tourFindById_TourFindById_productInfomation_descriptionLarge | null;
  region: tourFindById_TourFindById_productInfomation_region | null;
  startTime: tourFindById_TourFindById_productInfomation_startTime | null;
  extraInfo: tourFindById_TourFindById_productInfomation_extraInfo | null;
  startPoint: tourFindById_TourFindById_productInfomation_startPoint | null;
  include: tourFindById_TourFindById_productInfomation_include | null;
  unInclude: tourFindById_TourFindById_productInfomation_unInclude | null;
  importantNotice: tourFindById_TourFindById_productInfomation_importantNotice | null;
  category: tourFindById_TourFindById_productInfomation_category | null;
  videos: tourFindById_TourFindById_productInfomation_videos[] | null;
  thumbNailVideo: tourFindById_TourFindById_productInfomation_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: tourFindById_TourFindById_productInfomation_guideImage | null;
  subPlanes: tourFindById_TourFindById_productInfomation_subPlanes[] | null;
  guideId: any | null;
  address: tourFindById_TourFindById_productInfomation_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: tourFindById_TourFindById_productInfomation_images[] | null;
  thumbNail: tourFindById_TourFindById_productInfomation_thumbNail | null;
  adminMemo: string | null;
}

export interface tourFindById_TourFindById_Bookings_refundBankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface tourFindById_TourFindById_Bookings_tourThumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_Bookings_tourThumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_Bookings_tourThumbNail_tags[];
}

export interface tourFindById_TourFindById_Bookings_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_Bookings_travlers {
  __typename: "TravelerInfo";
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  isBooker: boolean | null;
  Representative: boolean | null;
  passportNumber: string | null;
  countryCode: string | null;
  birthDate: any;
}

export interface tourFindById_TourFindById_Bookings_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_Bookings_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_Bookings_guideImage_tags[];
}

export interface tourFindById_TourFindById_Bookings {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  paymethod: Paymethod;
  paidPrice: number;
  pendingPrice: number;
  refundPrice: number;
  byHand: boolean | null;
  cancelDate: any | null;
  cancelReason: string | null;
  refundMethod: string;
  adultCount: number;
  kidsCount: number;
  babyCount: number;
  buyerId: any | null;
  /**
   * 투어 회차
   */
  tourRecycleNumber: number | null;
  buyerPhone: string;
  buyerEmail: string;
  buyerGender: Gender;
  buyerMessage: string | null;
  buyerName: string;
  guideMemo: string | null;
  adminMemo: string | null;
  productId: any;
  productCode: string;
  bankTranferName: string | null;
  refundBankInfo: tourFindById_TourFindById_Bookings_refundBankInfo | null;
  tourThumbNail: tourFindById_TourFindById_Bookings_tourThumbNail;
  tourTitle: tourFindById_TourFindById_Bookings_tourTitle;
  tourCode: string;
  /**
   * 이것은 가이드 승인으로만 COMPLETED가 될수 있다
   */
  bookingStatus: BookingStatus | null;
  tourId: any;
  tourStart: any;
  code: string;
  travlers: tourFindById_TourFindById_Bookings_travlers[] | null;
  guideName: string;
  guideNickName: string | null;
  guideId: any;
  guideImage: tourFindById_TourFindById_Bookings_guideImage | null;
}

export interface tourFindById_TourFindById_guide_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_guide_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_guide_profileImage_tags[];
}

export interface tourFindById_TourFindById_guide_profileMediumImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_guide_profileMediumImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_guide_profileMediumImage_tags[];
}

export interface tourFindById_TourFindById_guide_profileVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_guide_profileVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_guide_profileVideo_tags[];
}

export interface tourFindById_TourFindById_guide_guideCategory_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_guideCategory {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: tourFindById_TourFindById_guide_guideCategory_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface tourFindById_TourFindById_guide_regions_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_regions {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: tourFindById_TourFindById_guide_regions_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface tourFindById_TourFindById_guide_guideLicenses_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_guide_guideLicenses {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_guide_guideLicenses_tags[];
}

export interface tourFindById_TourFindById_guide_bankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface tourFindById_TourFindById_guide_sns {
  __typename: "SNS";
  facebook: string | null;
  insta: string | null;
  twitter: string | null;
  youtube: string | null;
  line: string | null;
}

export interface tourFindById_TourFindById_guide_products_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface tourFindById_TourFindById_guide_products_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: tourFindById_TourFindById_guide_products_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface tourFindById_TourFindById_guide_products_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: tourFindById_TourFindById_guide_products_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface tourFindById_TourFindById_guide_products_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: tourFindById_TourFindById_guide_products_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface tourFindById_TourFindById_guide_products_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_guide_products_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_guide_products_videos_tags[];
}

export interface tourFindById_TourFindById_guide_products_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_guide_products_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_guide_products_thumbNailVideo_tags[];
}

export interface tourFindById_TourFindById_guide_products_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_guide_products_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_guide_products_guideImage_tags[];
}

export interface tourFindById_TourFindById_guide_products_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_guide_products_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_guide_products_subPlanes_photo_tags[];
}

export interface tourFindById_TourFindById_guide_products_subPlanes {
  __typename: "SubPlan";
  title: tourFindById_TourFindById_guide_products_subPlanes_title;
  time: tourFindById_TourFindById_guide_products_subPlanes_time;
  description: tourFindById_TourFindById_guide_products_subPlanes_description;
  photo: tourFindById_TourFindById_guide_products_subPlanes_photo | null;
}

export interface tourFindById_TourFindById_guide_products_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_guide_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_guide_products_images_tags[];
}

export interface tourFindById_TourFindById_guide_products_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_guide_products_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_guide_products_thumbNail_tags[];
}

export interface tourFindById_TourFindById_guide_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: tourFindById_TourFindById_guide_products_title | null;
  languages: LANGUAGES[] | null;
  marker: tourFindById_TourFindById_guide_products_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: tourFindById_TourFindById_guide_products_shortDecsription | null;
  categoryMini: tourFindById_TourFindById_guide_products_categoryMini[] | null;
  descriptionLarge: tourFindById_TourFindById_guide_products_descriptionLarge | null;
  region: tourFindById_TourFindById_guide_products_region | null;
  startTime: tourFindById_TourFindById_guide_products_startTime | null;
  extraInfo: tourFindById_TourFindById_guide_products_extraInfo | null;
  startPoint: tourFindById_TourFindById_guide_products_startPoint | null;
  include: tourFindById_TourFindById_guide_products_include | null;
  unInclude: tourFindById_TourFindById_guide_products_unInclude | null;
  importantNotice: tourFindById_TourFindById_guide_products_importantNotice | null;
  category: tourFindById_TourFindById_guide_products_category | null;
  videos: tourFindById_TourFindById_guide_products_videos[] | null;
  thumbNailVideo: tourFindById_TourFindById_guide_products_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: tourFindById_TourFindById_guide_products_guideImage | null;
  subPlanes: tourFindById_TourFindById_guide_products_subPlanes[] | null;
  guideId: any | null;
  address: tourFindById_TourFindById_guide_products_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: tourFindById_TourFindById_guide_products_images[] | null;
  thumbNail: tourFindById_TourFindById_guide_products_thumbNail | null;
  adminMemo: string | null;
}

export interface tourFindById_TourFindById_guide_myProductInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_myProductInfoes {
  __typename: "MyProductInfo";
  code: string | null;
  title: tourFindById_TourFindById_guide_myProductInfoes_title | null;
}

export interface tourFindById_TourFindById_guide_myTourInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_myTourInfoes {
  __typename: "MyTourInfo";
  code: string | null;
  title: tourFindById_TourFindById_guide_myTourInfoes_title | null;
}

export interface tourFindById_TourFindById_guide_myBookingInfoes_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_myBookingInfoes {
  __typename: "MyBookingInfo";
  bookingCode: string | null;
  tourCode: string | null;
  tourNumber: number | null;
  productCode: string | null;
  tourTitle: tourFindById_TourFindById_guide_myBookingInfoes_tourTitle | null;
}

export interface tourFindById_TourFindById_guide_introduce {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface tourFindById_TourFindById_guide_resginData {
  __typename: "ResignData";
  resign: boolean;
  resignDate: any | null;
  resignReason: string;
}

export interface tourFindById_TourFindById_guide_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
}

export interface tourFindById_TourFindById_guide_profileBgImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_guide_profileBgImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_guide_profileBgImage_tags[];
}

export interface tourFindById_TourFindById_guide_bankImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface tourFindById_TourFindById_guide_bankImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: tourFindById_TourFindById_guide_bankImage_tags[];
}

export interface tourFindById_TourFindById_guide {
  __typename: "IUser";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  stop: boolean | null;
  name: string | null;
  nickName: string | null;
  nationality: string | null;
  email: string;
  chatRoomIds: (any | null)[] | null;
  isOauth: boolean | null;
  gender: Gender | null;
  phoneNumber: string | null;
  passportNumber: string | null;
  countryCode: string | null;
  /**
   * Oauth로 작성된 유저의 경우 필수 정보들이 전부 들어있고 활동이 가능한 상태인지 확인합니다
   */
  oauthSignUpCompleted: boolean | null;
  isVerifiedByAdmin: boolean | null;
  birthDate: any | null;
  stopReason: string | null;
  applyAt: any | null;
  profileImage: tourFindById_TourFindById_guide_profileImage | null;
  profileMediumImage: tourFindById_TourFindById_guide_profileMediumImage | null;
  profileVideo: tourFindById_TourFindById_guide_profileVideo | null;
  /**
   * 가이드 활동지역 리스트
   */
  guideCategory: tourFindById_TourFindById_guide_guideCategory[] | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  /**
   * 가이드 활동지역 리스트
   */
  regions: tourFindById_TourFindById_guide_regions[] | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: tourFindById_TourFindById_guide_guideLicenses[] | null;
  bankInfo: tourFindById_TourFindById_guide_bankInfo | null;
  /**
   * 지원언어들
   */
  langs: LANGUAGES[];
  role: UserRole;
  sns: tourFindById_TourFindById_guide_sns | null;
  products: tourFindById_TourFindById_guide_products[] | null;
  myProductInfoes: tourFindById_TourFindById_guide_myProductInfoes[] | null;
  myTourInfoes: tourFindById_TourFindById_guide_myTourInfoes[] | null;
  myBookingInfoes: tourFindById_TourFindById_guide_myBookingInfoes[] | null;
  company: string | null;
  introduce: tourFindById_TourFindById_guide_introduce | null;
  resginData: tourFindById_TourFindById_guide_resginData | null;
  chatWiths: (any | null)[] | null;
  myWishList: (any | null)[] | null;
  adminMemo: string | null;
  location: tourFindById_TourFindById_guide_location | null;
  profileBgImage: tourFindById_TourFindById_guide_profileBgImage | null;
  bankImage: tourFindById_TourFindById_guide_bankImage | null;
  unReadSystemNoties: any[];
}

export interface tourFindById_TourFindById {
  __typename: "Tour";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  productId: any;
  productInfomation: tourFindById_TourFindById_productInfomation;
  number: number | null;
  bookings: (any | null)[] | null;
  startDate: any;
  endDate: any | null;
  /**
   * refund를 뺴지 않은 금액이다
   */
  totalPaidAmt: number | null;
  totalRefundPrice: number | null;
  totalAdult: number | null;
  totalKids: number | null;
  totalBaby: number;
  totalMember: number;
  code: string;
  representive: boolean;
  completeBookingCnt: number | null;
  cancelBookingCnt: number | null;
  readyBookingCnt: number | null;
  settlementStatus: SettlementStatus;
  settlementId: any | null;
  settlementAmt: number | null;
  tourStatus: TourStatus;
  Bookings: tourFindById_TourFindById_Bookings[];
  guide: tourFindById_TourFindById_guide;
}

export interface tourFindById {
  TourFindById: tourFindById_TourFindById | null;
}

export interface tourFindByIdVariables {
  TourId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: userFindPassword
// ====================================================

export interface userFindPassword_UserFindPassword_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface userFindPassword_UserFindPassword {
  __typename: "CustomerFindEmailResponse";
  ok: boolean;
  error: userFindPassword_UserFindPassword_error | null;
}

export interface userFindPassword {
  UserFindPassword: userFindPassword_UserFindPassword;
}

export interface userFindPasswordVariables {
  email: string;
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userFindById
// ====================================================

export interface userFindById_UserFindById_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userFindById_UserFindById_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userFindById_UserFindById_profileImage_tags[];
}

export interface userFindById_UserFindById_profileMediumImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userFindById_UserFindById_profileMediumImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userFindById_UserFindById_profileMediumImage_tags[];
}

export interface userFindById_UserFindById_profileVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userFindById_UserFindById_profileVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userFindById_UserFindById_profileVideo_tags[];
}

export interface userFindById_UserFindById_guideCategory_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_guideCategory {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userFindById_UserFindById_guideCategory_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userFindById_UserFindById_regions_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_regions {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userFindById_UserFindById_regions_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userFindById_UserFindById_guideLicenses_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userFindById_UserFindById_guideLicenses {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userFindById_UserFindById_guideLicenses_tags[];
}

export interface userFindById_UserFindById_bankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface userFindById_UserFindById_sns {
  __typename: "SNS";
  facebook: string | null;
  insta: string | null;
  twitter: string | null;
  youtube: string | null;
  line: string | null;
}

export interface userFindById_UserFindById_products_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface userFindById_UserFindById_products_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userFindById_UserFindById_products_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userFindById_UserFindById_products_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userFindById_UserFindById_products_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userFindById_UserFindById_products_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userFindById_UserFindById_products_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userFindById_UserFindById_products_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userFindById_UserFindById_products_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userFindById_UserFindById_products_videos_tags[];
}

export interface userFindById_UserFindById_products_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userFindById_UserFindById_products_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userFindById_UserFindById_products_thumbNailVideo_tags[];
}

export interface userFindById_UserFindById_products_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userFindById_UserFindById_products_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userFindById_UserFindById_products_guideImage_tags[];
}

export interface userFindById_UserFindById_products_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userFindById_UserFindById_products_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userFindById_UserFindById_products_subPlanes_photo_tags[];
}

export interface userFindById_UserFindById_products_subPlanes {
  __typename: "SubPlan";
  title: userFindById_UserFindById_products_subPlanes_title;
  time: userFindById_UserFindById_products_subPlanes_time;
  description: userFindById_UserFindById_products_subPlanes_description;
  photo: userFindById_UserFindById_products_subPlanes_photo | null;
}

export interface userFindById_UserFindById_products_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userFindById_UserFindById_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userFindById_UserFindById_products_images_tags[];
}

export interface userFindById_UserFindById_products_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userFindById_UserFindById_products_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userFindById_UserFindById_products_thumbNail_tags[];
}

export interface userFindById_UserFindById_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: userFindById_UserFindById_products_title | null;
  languages: LANGUAGES[] | null;
  marker: userFindById_UserFindById_products_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: userFindById_UserFindById_products_shortDecsription | null;
  categoryMini: userFindById_UserFindById_products_categoryMini[] | null;
  descriptionLarge: userFindById_UserFindById_products_descriptionLarge | null;
  region: userFindById_UserFindById_products_region | null;
  startTime: userFindById_UserFindById_products_startTime | null;
  extraInfo: userFindById_UserFindById_products_extraInfo | null;
  startPoint: userFindById_UserFindById_products_startPoint | null;
  include: userFindById_UserFindById_products_include | null;
  unInclude: userFindById_UserFindById_products_unInclude | null;
  importantNotice: userFindById_UserFindById_products_importantNotice | null;
  category: userFindById_UserFindById_products_category | null;
  videos: userFindById_UserFindById_products_videos[] | null;
  thumbNailVideo: userFindById_UserFindById_products_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: userFindById_UserFindById_products_guideImage | null;
  subPlanes: userFindById_UserFindById_products_subPlanes[] | null;
  guideId: any | null;
  address: userFindById_UserFindById_products_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: userFindById_UserFindById_products_images[] | null;
  thumbNail: userFindById_UserFindById_products_thumbNail | null;
  adminMemo: string | null;
}

export interface userFindById_UserFindById_myProductInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_myProductInfoes {
  __typename: "MyProductInfo";
  code: string | null;
  title: userFindById_UserFindById_myProductInfoes_title | null;
}

export interface userFindById_UserFindById_myTourInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_myTourInfoes {
  __typename: "MyTourInfo";
  code: string | null;
  title: userFindById_UserFindById_myTourInfoes_title | null;
}

export interface userFindById_UserFindById_myBookingInfoes_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_myBookingInfoes {
  __typename: "MyBookingInfo";
  bookingCode: string | null;
  tourCode: string | null;
  tourNumber: number | null;
  productCode: string | null;
  tourTitle: userFindById_UserFindById_myBookingInfoes_tourTitle | null;
}

export interface userFindById_UserFindById_introduce {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userFindById_UserFindById_resginData {
  __typename: "ResignData";
  resign: boolean;
  resignDate: any | null;
  resignReason: string;
}

export interface userFindById_UserFindById_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
}

export interface userFindById_UserFindById_profileBgImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userFindById_UserFindById_profileBgImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userFindById_UserFindById_profileBgImage_tags[];
}

export interface userFindById_UserFindById_bankImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userFindById_UserFindById_bankImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userFindById_UserFindById_bankImage_tags[];
}

export interface userFindById_UserFindById {
  __typename: "IUser";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  stop: boolean | null;
  name: string | null;
  nickName: string | null;
  nationality: string | null;
  email: string;
  chatRoomIds: (any | null)[] | null;
  isOauth: boolean | null;
  gender: Gender | null;
  phoneNumber: string | null;
  passportNumber: string | null;
  countryCode: string | null;
  /**
   * Oauth로 작성된 유저의 경우 필수 정보들이 전부 들어있고 활동이 가능한 상태인지 확인합니다
   */
  oauthSignUpCompleted: boolean | null;
  isVerifiedByAdmin: boolean | null;
  birthDate: any | null;
  stopReason: string | null;
  applyAt: any | null;
  profileImage: userFindById_UserFindById_profileImage | null;
  profileMediumImage: userFindById_UserFindById_profileMediumImage | null;
  profileVideo: userFindById_UserFindById_profileVideo | null;
  /**
   * 가이드 활동지역 리스트
   */
  guideCategory: userFindById_UserFindById_guideCategory[] | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  /**
   * 가이드 활동지역 리스트
   */
  regions: userFindById_UserFindById_regions[] | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: userFindById_UserFindById_guideLicenses[] | null;
  bankInfo: userFindById_UserFindById_bankInfo | null;
  /**
   * 지원언어들
   */
  langs: LANGUAGES[];
  role: UserRole;
  sns: userFindById_UserFindById_sns | null;
  products: userFindById_UserFindById_products[] | null;
  myProductInfoes: userFindById_UserFindById_myProductInfoes[] | null;
  myTourInfoes: userFindById_UserFindById_myTourInfoes[] | null;
  myBookingInfoes: userFindById_UserFindById_myBookingInfoes[] | null;
  company: string | null;
  introduce: userFindById_UserFindById_introduce | null;
  resginData: userFindById_UserFindById_resginData | null;
  chatWiths: (any | null)[] | null;
  myWishList: (any | null)[] | null;
  adminMemo: string | null;
  location: userFindById_UserFindById_location | null;
  profileBgImage: userFindById_UserFindById_profileBgImage | null;
  bankImage: userFindById_UserFindById_bankImage | null;
  unReadSystemNoties: any[];
}

export interface userFindById {
  UserFindById: userFindById_UserFindById;
}

export interface userFindByIdVariables {
  userId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addTempPassword
// ====================================================

export interface addTempPassword {
  AddTempPassword: string;
}

export interface addTempPasswordVariables {
  userId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: userDelete
// ====================================================

export interface userDelete_UserDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface userDelete_UserDelete_data_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userDelete_UserDelete_data_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userDelete_UserDelete_data_profileImage_tags[];
}

export interface userDelete_UserDelete_data_profileMediumImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userDelete_UserDelete_data_profileMediumImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userDelete_UserDelete_data_profileMediumImage_tags[];
}

export interface userDelete_UserDelete_data_profileVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userDelete_UserDelete_data_profileVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userDelete_UserDelete_data_profileVideo_tags[];
}

export interface userDelete_UserDelete_data_guideCategory_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_guideCategory {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userDelete_UserDelete_data_guideCategory_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userDelete_UserDelete_data_regions_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_regions {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userDelete_UserDelete_data_regions_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userDelete_UserDelete_data_guideLicenses_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userDelete_UserDelete_data_guideLicenses {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userDelete_UserDelete_data_guideLicenses_tags[];
}

export interface userDelete_UserDelete_data_bankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface userDelete_UserDelete_data_sns {
  __typename: "SNS";
  facebook: string | null;
  insta: string | null;
  twitter: string | null;
  youtube: string | null;
  line: string | null;
}

export interface userDelete_UserDelete_data_products_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface userDelete_UserDelete_data_products_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userDelete_UserDelete_data_products_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userDelete_UserDelete_data_products_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userDelete_UserDelete_data_products_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userDelete_UserDelete_data_products_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userDelete_UserDelete_data_products_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userDelete_UserDelete_data_products_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userDelete_UserDelete_data_products_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userDelete_UserDelete_data_products_videos_tags[];
}

export interface userDelete_UserDelete_data_products_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userDelete_UserDelete_data_products_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userDelete_UserDelete_data_products_thumbNailVideo_tags[];
}

export interface userDelete_UserDelete_data_products_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userDelete_UserDelete_data_products_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userDelete_UserDelete_data_products_guideImage_tags[];
}

export interface userDelete_UserDelete_data_products_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userDelete_UserDelete_data_products_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userDelete_UserDelete_data_products_subPlanes_photo_tags[];
}

export interface userDelete_UserDelete_data_products_subPlanes {
  __typename: "SubPlan";
  title: userDelete_UserDelete_data_products_subPlanes_title;
  time: userDelete_UserDelete_data_products_subPlanes_time;
  description: userDelete_UserDelete_data_products_subPlanes_description;
  photo: userDelete_UserDelete_data_products_subPlanes_photo | null;
}

export interface userDelete_UserDelete_data_products_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userDelete_UserDelete_data_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userDelete_UserDelete_data_products_images_tags[];
}

export interface userDelete_UserDelete_data_products_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userDelete_UserDelete_data_products_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userDelete_UserDelete_data_products_thumbNail_tags[];
}

export interface userDelete_UserDelete_data_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: userDelete_UserDelete_data_products_title | null;
  languages: LANGUAGES[] | null;
  marker: userDelete_UserDelete_data_products_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: userDelete_UserDelete_data_products_shortDecsription | null;
  categoryMini: userDelete_UserDelete_data_products_categoryMini[] | null;
  descriptionLarge: userDelete_UserDelete_data_products_descriptionLarge | null;
  region: userDelete_UserDelete_data_products_region | null;
  startTime: userDelete_UserDelete_data_products_startTime | null;
  extraInfo: userDelete_UserDelete_data_products_extraInfo | null;
  startPoint: userDelete_UserDelete_data_products_startPoint | null;
  include: userDelete_UserDelete_data_products_include | null;
  unInclude: userDelete_UserDelete_data_products_unInclude | null;
  importantNotice: userDelete_UserDelete_data_products_importantNotice | null;
  category: userDelete_UserDelete_data_products_category | null;
  videos: userDelete_UserDelete_data_products_videos[] | null;
  thumbNailVideo: userDelete_UserDelete_data_products_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: userDelete_UserDelete_data_products_guideImage | null;
  subPlanes: userDelete_UserDelete_data_products_subPlanes[] | null;
  guideId: any | null;
  address: userDelete_UserDelete_data_products_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: userDelete_UserDelete_data_products_images[] | null;
  thumbNail: userDelete_UserDelete_data_products_thumbNail | null;
  adminMemo: string | null;
}

export interface userDelete_UserDelete_data_myProductInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_myProductInfoes {
  __typename: "MyProductInfo";
  code: string | null;
  title: userDelete_UserDelete_data_myProductInfoes_title | null;
}

export interface userDelete_UserDelete_data_myTourInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_myTourInfoes {
  __typename: "MyTourInfo";
  code: string | null;
  title: userDelete_UserDelete_data_myTourInfoes_title | null;
}

export interface userDelete_UserDelete_data_myBookingInfoes_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_myBookingInfoes {
  __typename: "MyBookingInfo";
  bookingCode: string | null;
  tourCode: string | null;
  tourNumber: number | null;
  productCode: string | null;
  tourTitle: userDelete_UserDelete_data_myBookingInfoes_tourTitle | null;
}

export interface userDelete_UserDelete_data_introduce {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userDelete_UserDelete_data_resginData {
  __typename: "ResignData";
  resign: boolean;
  resignDate: any | null;
  resignReason: string;
}

export interface userDelete_UserDelete_data_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
}

export interface userDelete_UserDelete_data_profileBgImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userDelete_UserDelete_data_profileBgImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userDelete_UserDelete_data_profileBgImage_tags[];
}

export interface userDelete_UserDelete_data_bankImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userDelete_UserDelete_data_bankImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userDelete_UserDelete_data_bankImage_tags[];
}

export interface userDelete_UserDelete_data {
  __typename: "IUser";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  stop: boolean | null;
  name: string | null;
  nickName: string | null;
  nationality: string | null;
  email: string;
  chatRoomIds: (any | null)[] | null;
  isOauth: boolean | null;
  gender: Gender | null;
  phoneNumber: string | null;
  passportNumber: string | null;
  countryCode: string | null;
  /**
   * Oauth로 작성된 유저의 경우 필수 정보들이 전부 들어있고 활동이 가능한 상태인지 확인합니다
   */
  oauthSignUpCompleted: boolean | null;
  isVerifiedByAdmin: boolean | null;
  birthDate: any | null;
  stopReason: string | null;
  applyAt: any | null;
  profileImage: userDelete_UserDelete_data_profileImage | null;
  profileMediumImage: userDelete_UserDelete_data_profileMediumImage | null;
  profileVideo: userDelete_UserDelete_data_profileVideo | null;
  /**
   * 가이드 활동지역 리스트
   */
  guideCategory: userDelete_UserDelete_data_guideCategory[] | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  /**
   * 가이드 활동지역 리스트
   */
  regions: userDelete_UserDelete_data_regions[] | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: userDelete_UserDelete_data_guideLicenses[] | null;
  bankInfo: userDelete_UserDelete_data_bankInfo | null;
  /**
   * 지원언어들
   */
  langs: LANGUAGES[];
  role: UserRole;
  sns: userDelete_UserDelete_data_sns | null;
  products: userDelete_UserDelete_data_products[] | null;
  myProductInfoes: userDelete_UserDelete_data_myProductInfoes[] | null;
  myTourInfoes: userDelete_UserDelete_data_myTourInfoes[] | null;
  myBookingInfoes: userDelete_UserDelete_data_myBookingInfoes[] | null;
  company: string | null;
  introduce: userDelete_UserDelete_data_introduce | null;
  resginData: userDelete_UserDelete_data_resginData | null;
  chatWiths: (any | null)[] | null;
  myWishList: (any | null)[] | null;
  adminMemo: string | null;
  location: userDelete_UserDelete_data_location | null;
  profileBgImage: userDelete_UserDelete_data_profileBgImage | null;
  bankImage: userDelete_UserDelete_data_bankImage | null;
  unReadSystemNoties: any[];
}

export interface userDelete_UserDelete {
  __typename: "UserDeleteResponse";
  ok: boolean;
  error: userDelete_UserDelete_error | null;
  data: userDelete_UserDelete_data | null;
}

export interface userDelete {
  UserDelete: userDelete_UserDelete;
}

export interface userDeleteVariables {
  userId: any;
  message: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: userAccept
// ====================================================

export interface userAccept_UserAccept_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface userAccept_UserAccept_data_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userAccept_UserAccept_data_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userAccept_UserAccept_data_profileImage_tags[];
}

export interface userAccept_UserAccept_data_profileMediumImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userAccept_UserAccept_data_profileMediumImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userAccept_UserAccept_data_profileMediumImage_tags[];
}

export interface userAccept_UserAccept_data_profileVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userAccept_UserAccept_data_profileVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userAccept_UserAccept_data_profileVideo_tags[];
}

export interface userAccept_UserAccept_data_guideCategory_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_guideCategory {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userAccept_UserAccept_data_guideCategory_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userAccept_UserAccept_data_regions_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_regions {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userAccept_UserAccept_data_regions_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userAccept_UserAccept_data_guideLicenses_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userAccept_UserAccept_data_guideLicenses {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userAccept_UserAccept_data_guideLicenses_tags[];
}

export interface userAccept_UserAccept_data_bankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface userAccept_UserAccept_data_sns {
  __typename: "SNS";
  facebook: string | null;
  insta: string | null;
  twitter: string | null;
  youtube: string | null;
  line: string | null;
}

export interface userAccept_UserAccept_data_products_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface userAccept_UserAccept_data_products_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userAccept_UserAccept_data_products_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userAccept_UserAccept_data_products_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userAccept_UserAccept_data_products_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userAccept_UserAccept_data_products_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userAccept_UserAccept_data_products_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userAccept_UserAccept_data_products_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userAccept_UserAccept_data_products_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userAccept_UserAccept_data_products_videos_tags[];
}

export interface userAccept_UserAccept_data_products_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userAccept_UserAccept_data_products_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userAccept_UserAccept_data_products_thumbNailVideo_tags[];
}

export interface userAccept_UserAccept_data_products_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userAccept_UserAccept_data_products_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userAccept_UserAccept_data_products_guideImage_tags[];
}

export interface userAccept_UserAccept_data_products_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userAccept_UserAccept_data_products_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userAccept_UserAccept_data_products_subPlanes_photo_tags[];
}

export interface userAccept_UserAccept_data_products_subPlanes {
  __typename: "SubPlan";
  title: userAccept_UserAccept_data_products_subPlanes_title;
  time: userAccept_UserAccept_data_products_subPlanes_time;
  description: userAccept_UserAccept_data_products_subPlanes_description;
  photo: userAccept_UserAccept_data_products_subPlanes_photo | null;
}

export interface userAccept_UserAccept_data_products_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userAccept_UserAccept_data_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userAccept_UserAccept_data_products_images_tags[];
}

export interface userAccept_UserAccept_data_products_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userAccept_UserAccept_data_products_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userAccept_UserAccept_data_products_thumbNail_tags[];
}

export interface userAccept_UserAccept_data_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: userAccept_UserAccept_data_products_title | null;
  languages: LANGUAGES[] | null;
  marker: userAccept_UserAccept_data_products_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: userAccept_UserAccept_data_products_shortDecsription | null;
  categoryMini: userAccept_UserAccept_data_products_categoryMini[] | null;
  descriptionLarge: userAccept_UserAccept_data_products_descriptionLarge | null;
  region: userAccept_UserAccept_data_products_region | null;
  startTime: userAccept_UserAccept_data_products_startTime | null;
  extraInfo: userAccept_UserAccept_data_products_extraInfo | null;
  startPoint: userAccept_UserAccept_data_products_startPoint | null;
  include: userAccept_UserAccept_data_products_include | null;
  unInclude: userAccept_UserAccept_data_products_unInclude | null;
  importantNotice: userAccept_UserAccept_data_products_importantNotice | null;
  category: userAccept_UserAccept_data_products_category | null;
  videos: userAccept_UserAccept_data_products_videos[] | null;
  thumbNailVideo: userAccept_UserAccept_data_products_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: userAccept_UserAccept_data_products_guideImage | null;
  subPlanes: userAccept_UserAccept_data_products_subPlanes[] | null;
  guideId: any | null;
  address: userAccept_UserAccept_data_products_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: userAccept_UserAccept_data_products_images[] | null;
  thumbNail: userAccept_UserAccept_data_products_thumbNail | null;
  adminMemo: string | null;
}

export interface userAccept_UserAccept_data_myProductInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_myProductInfoes {
  __typename: "MyProductInfo";
  code: string | null;
  title: userAccept_UserAccept_data_myProductInfoes_title | null;
}

export interface userAccept_UserAccept_data_myTourInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_myTourInfoes {
  __typename: "MyTourInfo";
  code: string | null;
  title: userAccept_UserAccept_data_myTourInfoes_title | null;
}

export interface userAccept_UserAccept_data_myBookingInfoes_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_myBookingInfoes {
  __typename: "MyBookingInfo";
  bookingCode: string | null;
  tourCode: string | null;
  tourNumber: number | null;
  productCode: string | null;
  tourTitle: userAccept_UserAccept_data_myBookingInfoes_tourTitle | null;
}

export interface userAccept_UserAccept_data_introduce {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userAccept_UserAccept_data_resginData {
  __typename: "ResignData";
  resign: boolean;
  resignDate: any | null;
  resignReason: string;
}

export interface userAccept_UserAccept_data_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
}

export interface userAccept_UserAccept_data_profileBgImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userAccept_UserAccept_data_profileBgImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userAccept_UserAccept_data_profileBgImage_tags[];
}

export interface userAccept_UserAccept_data_bankImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userAccept_UserAccept_data_bankImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userAccept_UserAccept_data_bankImage_tags[];
}

export interface userAccept_UserAccept_data {
  __typename: "IUser";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  stop: boolean | null;
  name: string | null;
  nickName: string | null;
  nationality: string | null;
  email: string;
  chatRoomIds: (any | null)[] | null;
  isOauth: boolean | null;
  gender: Gender | null;
  phoneNumber: string | null;
  passportNumber: string | null;
  countryCode: string | null;
  /**
   * Oauth로 작성된 유저의 경우 필수 정보들이 전부 들어있고 활동이 가능한 상태인지 확인합니다
   */
  oauthSignUpCompleted: boolean | null;
  isVerifiedByAdmin: boolean | null;
  birthDate: any | null;
  stopReason: string | null;
  applyAt: any | null;
  profileImage: userAccept_UserAccept_data_profileImage | null;
  profileMediumImage: userAccept_UserAccept_data_profileMediumImage | null;
  profileVideo: userAccept_UserAccept_data_profileVideo | null;
  /**
   * 가이드 활동지역 리스트
   */
  guideCategory: userAccept_UserAccept_data_guideCategory[] | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  /**
   * 가이드 활동지역 리스트
   */
  regions: userAccept_UserAccept_data_regions[] | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: userAccept_UserAccept_data_guideLicenses[] | null;
  bankInfo: userAccept_UserAccept_data_bankInfo | null;
  /**
   * 지원언어들
   */
  langs: LANGUAGES[];
  role: UserRole;
  sns: userAccept_UserAccept_data_sns | null;
  products: userAccept_UserAccept_data_products[] | null;
  myProductInfoes: userAccept_UserAccept_data_myProductInfoes[] | null;
  myTourInfoes: userAccept_UserAccept_data_myTourInfoes[] | null;
  myBookingInfoes: userAccept_UserAccept_data_myBookingInfoes[] | null;
  company: string | null;
  introduce: userAccept_UserAccept_data_introduce | null;
  resginData: userAccept_UserAccept_data_resginData | null;
  chatWiths: (any | null)[] | null;
  myWishList: (any | null)[] | null;
  adminMemo: string | null;
  location: userAccept_UserAccept_data_location | null;
  profileBgImage: userAccept_UserAccept_data_profileBgImage | null;
  bankImage: userAccept_UserAccept_data_bankImage | null;
  unReadSystemNoties: any[];
}

export interface userAccept_UserAccept {
  __typename: "UserAcceptResponse";
  ok: boolean;
  error: userAccept_UserAccept_error | null;
  data: userAccept_UserAccept_data | null;
}

export interface userAccept {
  UserAccept: userAccept_UserAccept;
}

export interface userAcceptVariables {
  userId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: userUpdate
// ====================================================

export interface userUpdate_UserUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface userUpdate_UserUpdate_data_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userUpdate_UserUpdate_data_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userUpdate_UserUpdate_data_profileImage_tags[];
}

export interface userUpdate_UserUpdate_data_profileMediumImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userUpdate_UserUpdate_data_profileMediumImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userUpdate_UserUpdate_data_profileMediumImage_tags[];
}

export interface userUpdate_UserUpdate_data_profileVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userUpdate_UserUpdate_data_profileVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userUpdate_UserUpdate_data_profileVideo_tags[];
}

export interface userUpdate_UserUpdate_data_guideCategory_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_guideCategory {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userUpdate_UserUpdate_data_guideCategory_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userUpdate_UserUpdate_data_regions_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_regions {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userUpdate_UserUpdate_data_regions_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userUpdate_UserUpdate_data_guideLicenses_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userUpdate_UserUpdate_data_guideLicenses {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userUpdate_UserUpdate_data_guideLicenses_tags[];
}

export interface userUpdate_UserUpdate_data_bankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface userUpdate_UserUpdate_data_sns {
  __typename: "SNS";
  facebook: string | null;
  insta: string | null;
  twitter: string | null;
  youtube: string | null;
  line: string | null;
}

export interface userUpdate_UserUpdate_data_products_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface userUpdate_UserUpdate_data_products_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userUpdate_UserUpdate_data_products_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userUpdate_UserUpdate_data_products_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userUpdate_UserUpdate_data_products_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userUpdate_UserUpdate_data_products_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userUpdate_UserUpdate_data_products_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userUpdate_UserUpdate_data_products_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userUpdate_UserUpdate_data_products_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userUpdate_UserUpdate_data_products_videos_tags[];
}

export interface userUpdate_UserUpdate_data_products_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userUpdate_UserUpdate_data_products_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userUpdate_UserUpdate_data_products_thumbNailVideo_tags[];
}

export interface userUpdate_UserUpdate_data_products_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userUpdate_UserUpdate_data_products_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userUpdate_UserUpdate_data_products_guideImage_tags[];
}

export interface userUpdate_UserUpdate_data_products_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userUpdate_UserUpdate_data_products_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userUpdate_UserUpdate_data_products_subPlanes_photo_tags[];
}

export interface userUpdate_UserUpdate_data_products_subPlanes {
  __typename: "SubPlan";
  title: userUpdate_UserUpdate_data_products_subPlanes_title;
  time: userUpdate_UserUpdate_data_products_subPlanes_time;
  description: userUpdate_UserUpdate_data_products_subPlanes_description;
  photo: userUpdate_UserUpdate_data_products_subPlanes_photo | null;
}

export interface userUpdate_UserUpdate_data_products_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userUpdate_UserUpdate_data_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userUpdate_UserUpdate_data_products_images_tags[];
}

export interface userUpdate_UserUpdate_data_products_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userUpdate_UserUpdate_data_products_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userUpdate_UserUpdate_data_products_thumbNail_tags[];
}

export interface userUpdate_UserUpdate_data_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: userUpdate_UserUpdate_data_products_title | null;
  languages: LANGUAGES[] | null;
  marker: userUpdate_UserUpdate_data_products_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: userUpdate_UserUpdate_data_products_shortDecsription | null;
  categoryMini: userUpdate_UserUpdate_data_products_categoryMini[] | null;
  descriptionLarge: userUpdate_UserUpdate_data_products_descriptionLarge | null;
  region: userUpdate_UserUpdate_data_products_region | null;
  startTime: userUpdate_UserUpdate_data_products_startTime | null;
  extraInfo: userUpdate_UserUpdate_data_products_extraInfo | null;
  startPoint: userUpdate_UserUpdate_data_products_startPoint | null;
  include: userUpdate_UserUpdate_data_products_include | null;
  unInclude: userUpdate_UserUpdate_data_products_unInclude | null;
  importantNotice: userUpdate_UserUpdate_data_products_importantNotice | null;
  category: userUpdate_UserUpdate_data_products_category | null;
  videos: userUpdate_UserUpdate_data_products_videos[] | null;
  thumbNailVideo: userUpdate_UserUpdate_data_products_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: userUpdate_UserUpdate_data_products_guideImage | null;
  subPlanes: userUpdate_UserUpdate_data_products_subPlanes[] | null;
  guideId: any | null;
  address: userUpdate_UserUpdate_data_products_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: userUpdate_UserUpdate_data_products_images[] | null;
  thumbNail: userUpdate_UserUpdate_data_products_thumbNail | null;
  adminMemo: string | null;
}

export interface userUpdate_UserUpdate_data_myProductInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_myProductInfoes {
  __typename: "MyProductInfo";
  code: string | null;
  title: userUpdate_UserUpdate_data_myProductInfoes_title | null;
}

export interface userUpdate_UserUpdate_data_myTourInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_myTourInfoes {
  __typename: "MyTourInfo";
  code: string | null;
  title: userUpdate_UserUpdate_data_myTourInfoes_title | null;
}

export interface userUpdate_UserUpdate_data_myBookingInfoes_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_myBookingInfoes {
  __typename: "MyBookingInfo";
  bookingCode: string | null;
  tourCode: string | null;
  tourNumber: number | null;
  productCode: string | null;
  tourTitle: userUpdate_UserUpdate_data_myBookingInfoes_tourTitle | null;
}

export interface userUpdate_UserUpdate_data_introduce {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userUpdate_UserUpdate_data_resginData {
  __typename: "ResignData";
  resign: boolean;
  resignDate: any | null;
  resignReason: string;
}

export interface userUpdate_UserUpdate_data_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
}

export interface userUpdate_UserUpdate_data_profileBgImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userUpdate_UserUpdate_data_profileBgImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userUpdate_UserUpdate_data_profileBgImage_tags[];
}

export interface userUpdate_UserUpdate_data_bankImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userUpdate_UserUpdate_data_bankImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userUpdate_UserUpdate_data_bankImage_tags[];
}

export interface userUpdate_UserUpdate_data {
  __typename: "IUser";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  stop: boolean | null;
  name: string | null;
  nickName: string | null;
  nationality: string | null;
  email: string;
  chatRoomIds: (any | null)[] | null;
  isOauth: boolean | null;
  gender: Gender | null;
  phoneNumber: string | null;
  passportNumber: string | null;
  countryCode: string | null;
  /**
   * Oauth로 작성된 유저의 경우 필수 정보들이 전부 들어있고 활동이 가능한 상태인지 확인합니다
   */
  oauthSignUpCompleted: boolean | null;
  isVerifiedByAdmin: boolean | null;
  birthDate: any | null;
  stopReason: string | null;
  applyAt: any | null;
  profileImage: userUpdate_UserUpdate_data_profileImage | null;
  profileMediumImage: userUpdate_UserUpdate_data_profileMediumImage | null;
  profileVideo: userUpdate_UserUpdate_data_profileVideo | null;
  /**
   * 가이드 활동지역 리스트
   */
  guideCategory: userUpdate_UserUpdate_data_guideCategory[] | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  /**
   * 가이드 활동지역 리스트
   */
  regions: userUpdate_UserUpdate_data_regions[] | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: userUpdate_UserUpdate_data_guideLicenses[] | null;
  bankInfo: userUpdate_UserUpdate_data_bankInfo | null;
  /**
   * 지원언어들
   */
  langs: LANGUAGES[];
  role: UserRole;
  sns: userUpdate_UserUpdate_data_sns | null;
  products: userUpdate_UserUpdate_data_products[] | null;
  myProductInfoes: userUpdate_UserUpdate_data_myProductInfoes[] | null;
  myTourInfoes: userUpdate_UserUpdate_data_myTourInfoes[] | null;
  myBookingInfoes: userUpdate_UserUpdate_data_myBookingInfoes[] | null;
  company: string | null;
  introduce: userUpdate_UserUpdate_data_introduce | null;
  resginData: userUpdate_UserUpdate_data_resginData | null;
  chatWiths: (any | null)[] | null;
  myWishList: (any | null)[] | null;
  adminMemo: string | null;
  location: userUpdate_UserUpdate_data_location | null;
  profileBgImage: userUpdate_UserUpdate_data_profileBgImage | null;
  bankImage: userUpdate_UserUpdate_data_bankImage | null;
  unReadSystemNoties: any[];
}

export interface userUpdate_UserUpdate {
  __typename: "UserUpdateResponse";
  ok: boolean;
  error: userUpdate_UserUpdate_error | null;
  data: userUpdate_UserUpdate_data | null;
}

export interface userUpdate {
  UserUpdate: userUpdate_UserUpdate;
}

export interface userUpdateVariables {
  userId: any;
  input: UserUpdateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: userVerifyByAdmin
// ====================================================

export interface userVerifyByAdmin_UserVerifyByAdmin_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userVerifyByAdmin_UserVerifyByAdmin_data_profileImage_tags[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_profileMediumImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_profileMediumImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userVerifyByAdmin_UserVerifyByAdmin_data_profileMediumImage_tags[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_profileVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_profileVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userVerifyByAdmin_UserVerifyByAdmin_data_profileVideo_tags[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_guideCategory_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_guideCategory {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userVerifyByAdmin_UserVerifyByAdmin_data_guideCategory_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_regions_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_regions {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userVerifyByAdmin_UserVerifyByAdmin_data_regions_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_guideLicenses_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_guideLicenses {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userVerifyByAdmin_UserVerifyByAdmin_data_guideLicenses_tags[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_bankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_sns {
  __typename: "SNS";
  facebook: string | null;
  insta: string | null;
  twitter: string | null;
  youtube: string | null;
  line: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userVerifyByAdmin_UserVerifyByAdmin_data_products_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userVerifyByAdmin_UserVerifyByAdmin_data_products_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userVerifyByAdmin_UserVerifyByAdmin_data_products_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userVerifyByAdmin_UserVerifyByAdmin_data_products_videos_tags[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userVerifyByAdmin_UserVerifyByAdmin_data_products_thumbNailVideo_tags[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userVerifyByAdmin_UserVerifyByAdmin_data_products_guideImage_tags[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userVerifyByAdmin_UserVerifyByAdmin_data_products_subPlanes_photo_tags[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_subPlanes {
  __typename: "SubPlan";
  title: userVerifyByAdmin_UserVerifyByAdmin_data_products_subPlanes_title;
  time: userVerifyByAdmin_UserVerifyByAdmin_data_products_subPlanes_time;
  description: userVerifyByAdmin_UserVerifyByAdmin_data_products_subPlanes_description;
  photo: userVerifyByAdmin_UserVerifyByAdmin_data_products_subPlanes_photo | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userVerifyByAdmin_UserVerifyByAdmin_data_products_images_tags[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userVerifyByAdmin_UserVerifyByAdmin_data_products_thumbNail_tags[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: userVerifyByAdmin_UserVerifyByAdmin_data_products_title | null;
  languages: LANGUAGES[] | null;
  marker: userVerifyByAdmin_UserVerifyByAdmin_data_products_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: userVerifyByAdmin_UserVerifyByAdmin_data_products_shortDecsription | null;
  categoryMini: userVerifyByAdmin_UserVerifyByAdmin_data_products_categoryMini[] | null;
  descriptionLarge: userVerifyByAdmin_UserVerifyByAdmin_data_products_descriptionLarge | null;
  region: userVerifyByAdmin_UserVerifyByAdmin_data_products_region | null;
  startTime: userVerifyByAdmin_UserVerifyByAdmin_data_products_startTime | null;
  extraInfo: userVerifyByAdmin_UserVerifyByAdmin_data_products_extraInfo | null;
  startPoint: userVerifyByAdmin_UserVerifyByAdmin_data_products_startPoint | null;
  include: userVerifyByAdmin_UserVerifyByAdmin_data_products_include | null;
  unInclude: userVerifyByAdmin_UserVerifyByAdmin_data_products_unInclude | null;
  importantNotice: userVerifyByAdmin_UserVerifyByAdmin_data_products_importantNotice | null;
  category: userVerifyByAdmin_UserVerifyByAdmin_data_products_category | null;
  videos: userVerifyByAdmin_UserVerifyByAdmin_data_products_videos[] | null;
  thumbNailVideo: userVerifyByAdmin_UserVerifyByAdmin_data_products_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: userVerifyByAdmin_UserVerifyByAdmin_data_products_guideImage | null;
  subPlanes: userVerifyByAdmin_UserVerifyByAdmin_data_products_subPlanes[] | null;
  guideId: any | null;
  address: userVerifyByAdmin_UserVerifyByAdmin_data_products_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: userVerifyByAdmin_UserVerifyByAdmin_data_products_images[] | null;
  thumbNail: userVerifyByAdmin_UserVerifyByAdmin_data_products_thumbNail | null;
  adminMemo: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_myProductInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_myProductInfoes {
  __typename: "MyProductInfo";
  code: string | null;
  title: userVerifyByAdmin_UserVerifyByAdmin_data_myProductInfoes_title | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_myTourInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_myTourInfoes {
  __typename: "MyTourInfo";
  code: string | null;
  title: userVerifyByAdmin_UserVerifyByAdmin_data_myTourInfoes_title | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_myBookingInfoes_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_myBookingInfoes {
  __typename: "MyBookingInfo";
  bookingCode: string | null;
  tourCode: string | null;
  tourNumber: number | null;
  productCode: string | null;
  tourTitle: userVerifyByAdmin_UserVerifyByAdmin_data_myBookingInfoes_tourTitle | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_introduce {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_resginData {
  __typename: "ResignData";
  resign: boolean;
  resignDate: any | null;
  resignReason: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_profileBgImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_profileBgImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userVerifyByAdmin_UserVerifyByAdmin_data_profileBgImage_tags[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_bankImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data_bankImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userVerifyByAdmin_UserVerifyByAdmin_data_bankImage_tags[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin_data {
  __typename: "IUser";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  stop: boolean | null;
  name: string | null;
  nickName: string | null;
  nationality: string | null;
  email: string;
  chatRoomIds: (any | null)[] | null;
  isOauth: boolean | null;
  gender: Gender | null;
  phoneNumber: string | null;
  passportNumber: string | null;
  countryCode: string | null;
  /**
   * Oauth로 작성된 유저의 경우 필수 정보들이 전부 들어있고 활동이 가능한 상태인지 확인합니다
   */
  oauthSignUpCompleted: boolean | null;
  isVerifiedByAdmin: boolean | null;
  birthDate: any | null;
  stopReason: string | null;
  applyAt: any | null;
  profileImage: userVerifyByAdmin_UserVerifyByAdmin_data_profileImage | null;
  profileMediumImage: userVerifyByAdmin_UserVerifyByAdmin_data_profileMediumImage | null;
  profileVideo: userVerifyByAdmin_UserVerifyByAdmin_data_profileVideo | null;
  /**
   * 가이드 활동지역 리스트
   */
  guideCategory: userVerifyByAdmin_UserVerifyByAdmin_data_guideCategory[] | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  /**
   * 가이드 활동지역 리스트
   */
  regions: userVerifyByAdmin_UserVerifyByAdmin_data_regions[] | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: userVerifyByAdmin_UserVerifyByAdmin_data_guideLicenses[] | null;
  bankInfo: userVerifyByAdmin_UserVerifyByAdmin_data_bankInfo | null;
  /**
   * 지원언어들
   */
  langs: LANGUAGES[];
  role: UserRole;
  sns: userVerifyByAdmin_UserVerifyByAdmin_data_sns | null;
  products: userVerifyByAdmin_UserVerifyByAdmin_data_products[] | null;
  myProductInfoes: userVerifyByAdmin_UserVerifyByAdmin_data_myProductInfoes[] | null;
  myTourInfoes: userVerifyByAdmin_UserVerifyByAdmin_data_myTourInfoes[] | null;
  myBookingInfoes: userVerifyByAdmin_UserVerifyByAdmin_data_myBookingInfoes[] | null;
  company: string | null;
  introduce: userVerifyByAdmin_UserVerifyByAdmin_data_introduce | null;
  resginData: userVerifyByAdmin_UserVerifyByAdmin_data_resginData | null;
  chatWiths: (any | null)[] | null;
  myWishList: (any | null)[] | null;
  adminMemo: string | null;
  location: userVerifyByAdmin_UserVerifyByAdmin_data_location | null;
  profileBgImage: userVerifyByAdmin_UserVerifyByAdmin_data_profileBgImage | null;
  bankImage: userVerifyByAdmin_UserVerifyByAdmin_data_bankImage | null;
  unReadSystemNoties: any[];
}

export interface userVerifyByAdmin_UserVerifyByAdmin {
  __typename: "UserUpdateResponse";
  ok: boolean;
  error: userVerifyByAdmin_UserVerifyByAdmin_error | null;
  data: userVerifyByAdmin_UserVerifyByAdmin_data | null;
}

export interface userVerifyByAdmin {
  UserVerifyByAdmin: userVerifyByAdmin_UserVerifyByAdmin;
}

export interface userVerifyByAdminVariables {
  userId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: userFindEmail
// ====================================================

export interface userFindEmail_UserFindEmail_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface userFindEmail_UserFindEmail {
  __typename: "UserFindEmailResponse";
  ok: boolean;
  error: userFindEmail_UserFindEmail_error | null;
}

export interface userFindEmail {
  UserFindEmail: userFindEmail_UserFindEmail;
}

export interface userFindEmailVariables {
  phoneNumber: string;
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signOut
// ====================================================

export interface signOut_SignOut_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface signOut_SignOut {
  __typename: "Response";
  ok: boolean;
  error: signOut_SignOut_error | null;
}

export interface signOut {
  SignOut: signOut_SignOut;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUp
// ====================================================

export interface signUp_SignUp_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface signUp_SignUp {
  __typename: "SignUpResponse";
  ok: boolean;
  error: signUp_SignUp_error | null;
}

export interface signUp {
  SignUp: signUp_SignUp;
}

export interface signUpVariables {
  input: UserSignUpInput;
  role: UserRole;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signIn
// ====================================================

export interface signIn_SignIn_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface signIn_SignIn {
  __typename: "SignInResponse";
  ok: boolean;
  error: signIn_SignIn_error | null;
}

export interface signIn {
  SignIn: signIn_SignIn;
}

export interface signInVariables {
  input: SignInInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: me
// ====================================================

export interface me_Me_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_profileImage_tags[];
}

export interface me_Me_profileMediumImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_profileMediumImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_profileMediumImage_tags[];
}

export interface me_Me_profileVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_profileVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_profileVideo_tags[];
}

export interface me_Me_guideCategory_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_guideCategory {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: me_Me_guideCategory_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface me_Me_regions_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_regions {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: me_Me_regions_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface me_Me_guideLicenses_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_guideLicenses {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_guideLicenses_tags[];
}

export interface me_Me_bankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface me_Me_sns {
  __typename: "SNS";
  facebook: string | null;
  insta: string | null;
  twitter: string | null;
  youtube: string | null;
  line: string | null;
}

export interface me_Me_products_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface me_Me_products_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: me_Me_products_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface me_Me_products_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: me_Me_products_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface me_Me_products_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: me_Me_products_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface me_Me_products_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_products_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_products_videos_tags[];
}

export interface me_Me_products_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_products_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_products_thumbNailVideo_tags[];
}

export interface me_Me_products_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_products_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_products_guideImage_tags[];
}

export interface me_Me_products_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_products_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_products_subPlanes_photo_tags[];
}

export interface me_Me_products_subPlanes {
  __typename: "SubPlan";
  title: me_Me_products_subPlanes_title;
  time: me_Me_products_subPlanes_time;
  description: me_Me_products_subPlanes_description;
  photo: me_Me_products_subPlanes_photo | null;
}

export interface me_Me_products_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_products_images_tags[];
}

export interface me_Me_products_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_products_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_products_thumbNail_tags[];
}

export interface me_Me_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: me_Me_products_title | null;
  languages: LANGUAGES[] | null;
  marker: me_Me_products_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: me_Me_products_shortDecsription | null;
  categoryMini: me_Me_products_categoryMini[] | null;
  descriptionLarge: me_Me_products_descriptionLarge | null;
  region: me_Me_products_region | null;
  startTime: me_Me_products_startTime | null;
  extraInfo: me_Me_products_extraInfo | null;
  startPoint: me_Me_products_startPoint | null;
  include: me_Me_products_include | null;
  unInclude: me_Me_products_unInclude | null;
  importantNotice: me_Me_products_importantNotice | null;
  category: me_Me_products_category | null;
  videos: me_Me_products_videos[] | null;
  thumbNailVideo: me_Me_products_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: me_Me_products_guideImage | null;
  subPlanes: me_Me_products_subPlanes[] | null;
  guideId: any | null;
  address: me_Me_products_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: me_Me_products_images[] | null;
  thumbNail: me_Me_products_thumbNail | null;
  adminMemo: string | null;
}

export interface me_Me_myProductInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_myProductInfoes {
  __typename: "MyProductInfo";
  code: string | null;
  title: me_Me_myProductInfoes_title | null;
}

export interface me_Me_myTourInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_myTourInfoes {
  __typename: "MyTourInfo";
  code: string | null;
  title: me_Me_myTourInfoes_title | null;
}

export interface me_Me_myBookingInfoes_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_myBookingInfoes {
  __typename: "MyBookingInfo";
  bookingCode: string | null;
  tourCode: string | null;
  tourNumber: number | null;
  productCode: string | null;
  tourTitle: me_Me_myBookingInfoes_tourTitle | null;
}

export interface me_Me_introduce {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_resginData {
  __typename: "ResignData";
  resign: boolean;
  resignDate: any | null;
  resignReason: string;
}

export interface me_Me_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
}

export interface me_Me_profileBgImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_profileBgImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_profileBgImage_tags[];
}

export interface me_Me_bankImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_bankImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_bankImage_tags[];
}

export interface me_Me_myReviews_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_myReviews_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_myReviews_images_tags[];
}

export interface me_Me_myReviews_reviewerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_myReviews_reviewerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_myReviews_reviewerProfileImg_tags[];
}

export interface me_Me_myReviews_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface me_Me_myReviews_recentComment_writerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_myReviews_recentComment_writerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: me_Me_myReviews_recentComment_writerProfileImg_tags[];
}

export interface me_Me_myReviews_recentComment {
  __typename: "Comment";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  content: string;
  writerId: any;
  writerName: string;
  writerNickName: string;
  targetId: any;
  targetModel: string;
  writerProfileImg: me_Me_myReviews_recentComment_writerProfileImg | null;
}

export interface me_Me_myReviews {
  __typename: "Review";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  title: string | null;
  contents: string;
  images: me_Me_myReviews_images[] | null;
  rating: number;
  type: ReviewType;
  reviewerId: any;
  reviewerName: string;
  reviewerProfileImg: me_Me_myReviews_reviewerProfileImg | null;
  reviewerNickName: string | null;
  tourTitle: me_Me_myReviews_tourTitle;
  recentComment: me_Me_myReviews_recentComment[];
  commentCount: number;
  productCode: string;
  guideName: string;
  guideId: any;
  guideNickName: string | null;
  tourCode: string;
  tourStart: any;
  tourId: any;
}

export interface me_Me {
  __typename: "IUser";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  stop: boolean | null;
  name: string | null;
  nickName: string | null;
  nationality: string | null;
  email: string;
  chatRoomIds: (any | null)[] | null;
  isOauth: boolean | null;
  gender: Gender | null;
  phoneNumber: string | null;
  passportNumber: string | null;
  countryCode: string | null;
  /**
   * Oauth로 작성된 유저의 경우 필수 정보들이 전부 들어있고 활동이 가능한 상태인지 확인합니다
   */
  oauthSignUpCompleted: boolean | null;
  isVerifiedByAdmin: boolean | null;
  birthDate: any | null;
  stopReason: string | null;
  applyAt: any | null;
  profileImage: me_Me_profileImage | null;
  profileMediumImage: me_Me_profileMediumImage | null;
  profileVideo: me_Me_profileVideo | null;
  /**
   * 가이드 활동지역 리스트
   */
  guideCategory: me_Me_guideCategory[] | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  /**
   * 가이드 활동지역 리스트
   */
  regions: me_Me_regions[] | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: me_Me_guideLicenses[] | null;
  bankInfo: me_Me_bankInfo | null;
  /**
   * 지원언어들
   */
  langs: LANGUAGES[];
  role: UserRole;
  sns: me_Me_sns | null;
  products: me_Me_products[] | null;
  myProductInfoes: me_Me_myProductInfoes[] | null;
  myTourInfoes: me_Me_myTourInfoes[] | null;
  myBookingInfoes: me_Me_myBookingInfoes[] | null;
  company: string | null;
  introduce: me_Me_introduce | null;
  resginData: me_Me_resginData | null;
  chatWiths: (any | null)[] | null;
  myWishList: (any | null)[] | null;
  adminMemo: string | null;
  location: me_Me_location | null;
  profileBgImage: me_Me_profileBgImage | null;
  bankImage: me_Me_bankImage | null;
  unReadSystemNoties: any[];
  myReviews: me_Me_myReviews[] | null;
}

export interface me {
  Me: me_Me | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: myWishList
// ====================================================

export interface myWishList {
  MyWishList: any[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: myNotificationManager
// ====================================================

export interface myNotificationManager_MyNotificationManager_senders_files_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface myNotificationManager_MyNotificationManager_senders_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: myNotificationManager_MyNotificationManager_senders_files_tags[];
}

export interface myNotificationManager_MyNotificationManager_senders {
  __typename: "NotificationSender";
  type: NotificationMethod;
  label: string | null;
  sender: string;
  isVerified: boolean;
  files: myNotificationManager_MyNotificationManager_senders_files[];
  isRegisteredToSES: boolean | null;
  isRegisteredToAligo: boolean | null;
  createdAt: any;
}

export interface myNotificationManager_MyNotificationManager_smsPricingTable {
  __typename: "SMSPricingTable";
  SMS: number;
  LMS: number;
  MMS: number;
}

export interface myNotificationManager_MyNotificationManager {
  __typename: "NotificationManager";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  /**
   * 건당 비용. 단위는 KRW
   */
  emailPricing: number;
  currency: Currency;
  /**
   * Email, SMS 뭘로 보내든 포인트 차감
   */
  pointRemains: number;
  senders: myNotificationManager_MyNotificationManager_senders[];
  smsPricingTable: myNotificationManager_MyNotificationManager_smsPricingTable;
  /**
   * 건당 비용. 단위는 KRW
   */
  kakaoPrice: number;
  kakaoApiKey: string | null;
  kakaoUserId: string | null;
  kakaoSenderKey: string | null;
  userName: string;
}

export interface myNotificationManager {
  /**
   * 비지니스 유저용
   */
  MyNotificationManager: myNotificationManager_MyNotificationManager | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userDuplicateCheck
// ====================================================

export interface userDuplicateCheck_UserDuplicateCheck {
  __typename: "DuplicateCheckResponse";
  duplicated: boolean;
}

export interface userDuplicateCheck {
  UserDuplicateCheck: userDuplicateCheck_UserDuplicateCheck;
}

export interface userDuplicateCheckVariables {
  target: string;
  value: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: profileUpdateForBusinessUser
// ====================================================

export interface profileUpdateForBusinessUser_ProfileUpdateForBusinessUser_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface profileUpdateForBusinessUser_ProfileUpdateForBusinessUser {
  __typename: "ProfileUpdateResponse";
  ok: boolean;
  error: profileUpdateForBusinessUser_ProfileUpdateForBusinessUser_error | null;
}

export interface profileUpdateForBusinessUser {
  ProfileUpdateForBusinessUser: profileUpdateForBusinessUser_ProfileUpdateForBusinessUser;
}

export interface profileUpdateForBusinessUserVariables {
  input: ProfileUpdateForBusinessUserInput;
  pw: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: resign
// ====================================================

export interface resign_Resign_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface resign_Resign {
  __typename: "ResignResponse";
  ok: boolean;
  error: resign_Resign_error | null;
}

export interface resign {
  Resign: resign_Resign;
}

export interface resignVariables {
  resignData: ResignDataInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: wishListToggle
// ====================================================

export interface wishListToggle_WishListToggle_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface wishListToggle_WishListToggle {
  __typename: "WishListToggleResponse";
  ok: boolean;
  error: wishListToggle_WishListToggle_error | null;
}

export interface wishListToggle {
  WishListToggle: wishListToggle_WishListToggle;
}

export interface wishListToggleVariables {
  wishProduct: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userList
// ====================================================

export interface userList_UserList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

export interface userList_UserList_items_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userList_UserList_items_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userList_UserList_items_profileImage_tags[];
}

export interface userList_UserList_items_profileMediumImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userList_UserList_items_profileMediumImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userList_UserList_items_profileMediumImage_tags[];
}

export interface userList_UserList_items_profileVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userList_UserList_items_profileVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userList_UserList_items_profileVideo_tags[];
}

export interface userList_UserList_items_guideCategory_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_guideCategory {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userList_UserList_items_guideCategory_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userList_UserList_items_regions_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_regions {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userList_UserList_items_regions_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userList_UserList_items_guideLicenses_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userList_UserList_items_guideLicenses {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userList_UserList_items_guideLicenses_tags[];
}

export interface userList_UserList_items_bankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface userList_UserList_items_sns {
  __typename: "SNS";
  facebook: string | null;
  insta: string | null;
  twitter: string | null;
  youtube: string | null;
  line: string | null;
}

export interface userList_UserList_items_products_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface userList_UserList_items_products_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userList_UserList_items_products_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userList_UserList_items_products_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userList_UserList_items_products_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userList_UserList_items_products_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: userList_UserList_items_products_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface userList_UserList_items_products_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userList_UserList_items_products_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userList_UserList_items_products_videos_tags[];
}

export interface userList_UserList_items_products_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userList_UserList_items_products_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userList_UserList_items_products_thumbNailVideo_tags[];
}

export interface userList_UserList_items_products_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userList_UserList_items_products_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userList_UserList_items_products_guideImage_tags[];
}

export interface userList_UserList_items_products_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userList_UserList_items_products_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userList_UserList_items_products_subPlanes_photo_tags[];
}

export interface userList_UserList_items_products_subPlanes {
  __typename: "SubPlan";
  title: userList_UserList_items_products_subPlanes_title;
  time: userList_UserList_items_products_subPlanes_time;
  description: userList_UserList_items_products_subPlanes_description;
  photo: userList_UserList_items_products_subPlanes_photo | null;
}

export interface userList_UserList_items_products_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userList_UserList_items_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userList_UserList_items_products_images_tags[];
}

export interface userList_UserList_items_products_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userList_UserList_items_products_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userList_UserList_items_products_thumbNail_tags[];
}

export interface userList_UserList_items_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: userList_UserList_items_products_title | null;
  languages: LANGUAGES[] | null;
  marker: userList_UserList_items_products_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: userList_UserList_items_products_shortDecsription | null;
  categoryMini: userList_UserList_items_products_categoryMini[] | null;
  descriptionLarge: userList_UserList_items_products_descriptionLarge | null;
  region: userList_UserList_items_products_region | null;
  startTime: userList_UserList_items_products_startTime | null;
  extraInfo: userList_UserList_items_products_extraInfo | null;
  startPoint: userList_UserList_items_products_startPoint | null;
  include: userList_UserList_items_products_include | null;
  unInclude: userList_UserList_items_products_unInclude | null;
  importantNotice: userList_UserList_items_products_importantNotice | null;
  category: userList_UserList_items_products_category | null;
  videos: userList_UserList_items_products_videos[] | null;
  thumbNailVideo: userList_UserList_items_products_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: userList_UserList_items_products_guideImage | null;
  subPlanes: userList_UserList_items_products_subPlanes[] | null;
  guideId: any | null;
  address: userList_UserList_items_products_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: userList_UserList_items_products_images[] | null;
  thumbNail: userList_UserList_items_products_thumbNail | null;
  adminMemo: string | null;
}

export interface userList_UserList_items_myProductInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_myProductInfoes {
  __typename: "MyProductInfo";
  code: string | null;
  title: userList_UserList_items_myProductInfoes_title | null;
}

export interface userList_UserList_items_myTourInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_myTourInfoes {
  __typename: "MyTourInfo";
  code: string | null;
  title: userList_UserList_items_myTourInfoes_title | null;
}

export interface userList_UserList_items_myBookingInfoes_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_myBookingInfoes {
  __typename: "MyBookingInfo";
  bookingCode: string | null;
  tourCode: string | null;
  tourNumber: number | null;
  productCode: string | null;
  tourTitle: userList_UserList_items_myBookingInfoes_tourTitle | null;
}

export interface userList_UserList_items_introduce {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface userList_UserList_items_resginData {
  __typename: "ResignData";
  resign: boolean;
  resignDate: any | null;
  resignReason: string;
}

export interface userList_UserList_items_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
}

export interface userList_UserList_items_profileBgImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userList_UserList_items_profileBgImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userList_UserList_items_profileBgImage_tags[];
}

export interface userList_UserList_items_bankImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface userList_UserList_items_bankImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: userList_UserList_items_bankImage_tags[];
}

export interface userList_UserList_items {
  __typename: "IUser";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  stop: boolean | null;
  name: string | null;
  nickName: string | null;
  nationality: string | null;
  email: string;
  chatRoomIds: (any | null)[] | null;
  isOauth: boolean | null;
  gender: Gender | null;
  phoneNumber: string | null;
  passportNumber: string | null;
  countryCode: string | null;
  /**
   * Oauth로 작성된 유저의 경우 필수 정보들이 전부 들어있고 활동이 가능한 상태인지 확인합니다
   */
  oauthSignUpCompleted: boolean | null;
  isVerifiedByAdmin: boolean | null;
  birthDate: any | null;
  stopReason: string | null;
  applyAt: any | null;
  profileImage: userList_UserList_items_profileImage | null;
  profileMediumImage: userList_UserList_items_profileMediumImage | null;
  profileVideo: userList_UserList_items_profileVideo | null;
  /**
   * 가이드 활동지역 리스트
   */
  guideCategory: userList_UserList_items_guideCategory[] | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  /**
   * 가이드 활동지역 리스트
   */
  regions: userList_UserList_items_regions[] | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: userList_UserList_items_guideLicenses[] | null;
  bankInfo: userList_UserList_items_bankInfo | null;
  /**
   * 지원언어들
   */
  langs: LANGUAGES[];
  role: UserRole;
  sns: userList_UserList_items_sns | null;
  products: userList_UserList_items_products[] | null;
  myProductInfoes: userList_UserList_items_myProductInfoes[] | null;
  myTourInfoes: userList_UserList_items_myTourInfoes[] | null;
  myBookingInfoes: userList_UserList_items_myBookingInfoes[] | null;
  company: string | null;
  introduce: userList_UserList_items_introduce | null;
  resginData: userList_UserList_items_resginData | null;
  chatWiths: (any | null)[] | null;
  myWishList: (any | null)[] | null;
  adminMemo: string | null;
  location: userList_UserList_items_location | null;
  profileBgImage: userList_UserList_items_profileBgImage | null;
  bankImage: userList_UserList_items_bankImage | null;
  unReadSystemNoties: any[];
}

export interface userList_UserList {
  __typename: "OffsetPagenatedIUserData";
  pageInfo: userList_UserList_pageInfo;
  items: userList_UserList_items[];
}

export interface userList {
  /**
   * Admin 전용
   */
  UserList: userList_UserList;
}

export interface userListVariables {
  sort?: _IUserSort[] | null;
  filter?: _IUserFilter | null;
  pagingInput: OffsetPagingInput;
  random?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: userStopToggle
// ====================================================

export interface userStopToggle_UserStopToggle {
  __typename: "UserStopResponse";
  ok: boolean;
}

export interface userStopToggle {
  UserStopToggle: userStopToggle_UserStopToggle;
}

export interface userStopToggleVariables {
  userId: any;
  message: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verificationStart
// ====================================================

export interface verificationStart_VerificationStart_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface verificationStart_VerificationStart_data {
  __typename: "Verification";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeId: any | null;
  expiresAt: any;
  isExpire: boolean;
}

export interface verificationStart_VerificationStart {
  __typename: "VerificationResponse";
  ok: boolean;
  error: verificationStart_VerificationStart_error | null;
  data: verificationStart_VerificationStart_data | null;
}

export interface verificationStart {
  VerificationStart: verificationStart_VerificationStart;
}

export interface verificationStartVariables {
  input: VerificationStartInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verificationComplete
// ====================================================

export interface verificationComplete_VerificationComplete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface verificationComplete_VerificationComplete_data {
  __typename: "Verification";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeId: any | null;
  expiresAt: any;
  isExpire: boolean;
}

export interface verificationComplete_VerificationComplete {
  __typename: "VerificationResponse";
  ok: boolean;
  error: verificationComplete_VerificationComplete_error | null;
  data: verificationComplete_VerificationComplete_data | null;
}

export interface verificationComplete {
  VerificationComplete: verificationComplete_VerificationComplete;
}

export interface verificationCompleteVariables {
  input: VerificationCompleteInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verificationCompleteJoinWithPhoneNumber
// ====================================================

export interface verificationCompleteJoinWithPhoneNumber_VerificationCompleteJoinWithPhoneNumber_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface verificationCompleteJoinWithPhoneNumber_VerificationCompleteJoinWithPhoneNumber {
  __typename: "Response";
  ok: boolean;
  error: verificationCompleteJoinWithPhoneNumber_VerificationCompleteJoinWithPhoneNumber_error | null;
}

export interface verificationCompleteJoinWithPhoneNumber {
  VerificationCompleteJoinWithPhoneNumber: verificationCompleteJoinWithPhoneNumber_VerificationCompleteJoinWithPhoneNumber;
}

export interface verificationCompleteJoinWithPhoneNumberVariables {
  code: string;
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fboard
// ====================================================

export interface Fboard_inputs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fboard_inputs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: Fboard_inputs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface Fboard {
  __typename: "Board";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  key: string;
  name: string;
  fields: string[];
  writePermission: UserRole[];
  readPermission: UserRole[];
  inputs: Fboard_inputs[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FboardDoc
// ====================================================

export interface FboardDoc_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FboardDoc_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: FboardDoc_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface FboardDoc_attachFiles_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FboardDoc_attachFiles {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: FboardDoc_attachFiles_tags[];
}

export interface FboardDoc_thumb_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FboardDoc_thumb {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: FboardDoc_thumb_tags[];
}

export interface FboardDoc_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FboardDoc_recentComment_writerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FboardDoc_recentComment_writerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: FboardDoc_recentComment_writerProfileImg_tags[];
}

export interface FboardDoc_recentComment {
  __typename: "Comment";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  content: string;
  writerId: any;
  writerName: string;
  writerNickName: string;
  targetId: any;
  targetModel: string;
  writerProfileImg: FboardDoc_recentComment_writerProfileImg | null;
}

export interface FboardDoc {
  __typename: "BoardDoc";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  title: string;
  contents: string;
  authorName: string;
  authorRole: string;
  isNotice: boolean | null;
  attrs: FboardDoc_attrs[];
  lang: LANGUAGES | null;
  type: string | null;
  isOpen: boolean | null;
  authorEmail: string;
  authorId: string | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: FboardDoc_attachFiles[] | null;
  thumb: FboardDoc_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  tags: FboardDoc_tags[];
  recentComment: FboardDoc_recentComment[];
  commentCount: number;
  boardKey: string;
  _boardId: any;
  boardName: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ftraveler
// ====================================================

export interface Ftraveler {
  __typename: "TravelerInfo";
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  isBooker: boolean | null;
  Representative: boolean | null;
  passportNumber: string | null;
  countryCode: string | null;
  birthDate: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fbooking
// ====================================================

export interface Fbooking_refundBankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface Fbooking_tourThumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fbooking_tourThumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fbooking_tourThumbNail_tags[];
}

export interface Fbooking_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fbooking_travlers {
  __typename: "TravelerInfo";
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  isBooker: boolean | null;
  Representative: boolean | null;
  passportNumber: string | null;
  countryCode: string | null;
  birthDate: any;
}

export interface Fbooking_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fbooking_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fbooking_guideImage_tags[];
}

export interface Fbooking {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  paymethod: Paymethod;
  paidPrice: number;
  pendingPrice: number;
  refundPrice: number;
  byHand: boolean | null;
  cancelDate: any | null;
  cancelReason: string | null;
  refundMethod: string;
  adultCount: number;
  kidsCount: number;
  babyCount: number;
  buyerId: any | null;
  /**
   * 투어 회차
   */
  tourRecycleNumber: number | null;
  buyerPhone: string;
  buyerEmail: string;
  buyerGender: Gender;
  buyerMessage: string | null;
  buyerName: string;
  guideMemo: string | null;
  adminMemo: string | null;
  productId: any;
  productCode: string;
  bankTranferName: string | null;
  refundBankInfo: Fbooking_refundBankInfo | null;
  tourThumbNail: Fbooking_tourThumbNail;
  tourTitle: Fbooking_tourTitle;
  tourCode: string;
  /**
   * 이것은 가이드 승인으로만 COMPLETED가 될수 있다
   */
  bookingStatus: BookingStatus | null;
  tourId: any;
  tourStart: any;
  code: string;
  travlers: Fbooking_travlers[] | null;
  guideName: string;
  guideNickName: string | null;
  guideId: any;
  guideImage: Fbooking_guideImage | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fcategory
// ====================================================

export interface Fcategory_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fcategory {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Fcategory_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fchat
// ====================================================

export interface Fchat_files_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fchat_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fchat_files_tags[];
}

export interface Fchat {
  __typename: "Chat";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  message: string;
  files: Fchat_files[] | null;
  name: string;
  profileImg: string | null;
  nickName: string | null;
  userId: any;
  chatRoomId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FchatRoom
// ====================================================

export interface FchatRoom_targetProfileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FchatRoom_targetProfileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: FchatRoom_targetProfileImage_tags[];
}

export interface FchatRoom_openerImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FchatRoom_openerImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: FchatRoom_openerImg_tags[];
}

export interface FchatRoom_chatRoomBg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FchatRoom_chatRoomBg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: FchatRoom_chatRoomBg_tags[];
}

export interface FchatRoom_chats_files_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FchatRoom_chats_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: FchatRoom_chats_files_tags[];
}

export interface FchatRoom_chats {
  __typename: "Chat";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  message: string;
  files: FchatRoom_chats_files[] | null;
  name: string;
  profileImg: string | null;
  nickName: string | null;
  userId: any;
  chatRoomId: any;
}

export interface FchatRoom {
  __typename: "ChatRoom";
  _id: any;
  lastChatTime: any | null;
  lastChatMessage: string | null;
  updatedAt: any | null;
  createdAt: any;
  title: string;
  contents: string | null;
  openerId: any;
  openerName: string;
  openerNickname: string | null;
  targetRole: string;
  targetNicekName: string | null;
  targetName: string;
  targetId: any;
  targetProfileImage: FchatRoom_targetProfileImage | null;
  openerImg: FchatRoom_openerImg | null;
  chatRoomBg: FchatRoom_chatRoomBg | null;
  chats: FchatRoom_chats[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fcomment
// ====================================================

export interface Fcomment_writerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fcomment_writerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fcomment_writerProfileImg_tags[];
}

export interface Fcomment {
  __typename: "Comment";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  content: string;
  writerId: any;
  writerName: string;
  writerNickName: string;
  targetId: any;
  targetModel: string;
  writerProfileImg: Fcomment_writerProfileImg | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationSender
// ====================================================

export interface FnotificationSender_files_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FnotificationSender_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: FnotificationSender_files_tags[];
}

export interface FnotificationSender {
  __typename: "NotificationSender";
  type: NotificationMethod;
  label: string | null;
  sender: string;
  isVerified: boolean;
  files: FnotificationSender_files[];
  isRegisteredToSES: boolean | null;
  isRegisteredToAligo: boolean | null;
  createdAt: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationManager
// ====================================================

export interface FnotificationManager_senders_files_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FnotificationManager_senders_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: FnotificationManager_senders_files_tags[];
}

export interface FnotificationManager_senders {
  __typename: "NotificationSender";
  type: NotificationMethod;
  label: string | null;
  sender: string;
  isVerified: boolean;
  files: FnotificationManager_senders_files[];
  isRegisteredToSES: boolean | null;
  isRegisteredToAligo: boolean | null;
  createdAt: any;
}

export interface FnotificationManager_smsPricingTable {
  __typename: "SMSPricingTable";
  SMS: number;
  LMS: number;
  MMS: number;
}

export interface FnotificationManager {
  __typename: "NotificationManager";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  /**
   * 건당 비용. 단위는 KRW
   */
  emailPricing: number;
  currency: Currency;
  /**
   * Email, SMS 뭘로 보내든 포인트 차감
   */
  pointRemains: number;
  senders: FnotificationManager_senders[];
  smsPricingTable: FnotificationManager_smsPricingTable;
  /**
   * 건당 비용. 단위는 KRW
   */
  kakaoPrice: number;
  kakaoApiKey: string | null;
  kakaoUserId: string | null;
  kakaoSenderKey: string | null;
  userName: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationHistoryItem
// ====================================================

export interface FnotificationHistoryItem {
  __typename: "SmsHistoryItem" | "EmailHistoryItem" | "KaKaoHistoryItem";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  method: NotificationMethod;
  sender: string;
  receivers: string[];
  title: string | null;
  /**
   * Template에서 변수가 치환되지 않은 채로 출력 될 수 있음.
   */
  content: string;
  count: number;
  successCount: number;
  errorCount: number;
  /**
   * 전송 후 남은 포인트
   */
  pointRemains: number;
  /**
   * 포인트 소모량
   */
  pointConsumed: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationTrigger
// ====================================================

export interface FnotificationTrigger_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FnotificationTrigger {
  __typename: "NotificationTrigger";
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  addReceivers: string[] | null;
  autoSendTargetType: AutoSendTargetType[] | null;
  tags: FnotificationTrigger_tags[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FkakaoTemplateButton
// ====================================================

export interface FkakaoTemplateButton {
  __typename: "KakaoTemplateButton";
  ordering: string | null;
  /**
   * 버튼명
   */
  name: string;
  linkType: KakaoTemplateButtonLinkType;
  linkTypeName: string | null;
  /**
   * 모바일 링크 주소
   */
  linkMo: string | null;
  /**
   * PC웹 링크 주소
   */
  linkPc: string | null;
  /**
   * IOS앱 링크 주소
   */
  linkIos: string | null;
  /**
   * 안드로이드 앱 링크 주소
   */
  linkAnd: string | null;
  /**
   * 모바일 링크 주소
   */
  linkM: string | null;
  /**
   * PC웹 링크 주소
   */
  linkP: string | null;
  /**
   * IOS앱 링크 주소
   */
  linkI: string | null;
  /**
   * 안드로이드 앱 링크 주소
   */
  linkA: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FkakaoTemplate
// ====================================================

export interface FkakaoTemplate_buttons {
  __typename: "KakaoTemplateButton";
  ordering: string | null;
  /**
   * 버튼명
   */
  name: string;
  linkType: KakaoTemplateButtonLinkType;
  linkTypeName: string | null;
  /**
   * 모바일 링크 주소
   */
  linkMo: string | null;
  /**
   * PC웹 링크 주소
   */
  linkPc: string | null;
  /**
   * IOS앱 링크 주소
   */
  linkIos: string | null;
  /**
   * 안드로이드 앱 링크 주소
   */
  linkAnd: string | null;
  /**
   * 모바일 링크 주소
   */
  linkM: string | null;
  /**
   * PC웹 링크 주소
   */
  linkP: string | null;
  /**
   * IOS앱 링크 주소
   */
  linkI: string | null;
  /**
   * 안드로이드 앱 링크 주소
   */
  linkA: string | null;
}

export interface FkakaoTemplate_comments {
  __typename: "KakaoTemplateComment";
  commentContent: string;
  cdate: string;
  status: string;
}

export interface FkakaoTemplate {
  __typename: "KakaoTemplate";
  templtContent: string | null;
  templtName: string | null;
  status: KakaoTemplateStatus | null;
  inspStatus: KakaoTemplateInspStatus | null;
  buttons: FkakaoTemplate_buttons[] | null;
  cdate: string | null;
  udate: string | null;
  comments: FkakaoTemplate_comments[] | null;
  templtCode: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationTemplate
// ====================================================

export interface FnotificationTemplate_kakaoTemplate_buttons {
  __typename: "KakaoTemplateButton";
  ordering: string | null;
  /**
   * 버튼명
   */
  name: string;
  linkType: KakaoTemplateButtonLinkType;
  linkTypeName: string | null;
  /**
   * 모바일 링크 주소
   */
  linkMo: string | null;
  /**
   * PC웹 링크 주소
   */
  linkPc: string | null;
  /**
   * IOS앱 링크 주소
   */
  linkIos: string | null;
  /**
   * 안드로이드 앱 링크 주소
   */
  linkAnd: string | null;
  /**
   * 모바일 링크 주소
   */
  linkM: string | null;
  /**
   * PC웹 링크 주소
   */
  linkP: string | null;
  /**
   * IOS앱 링크 주소
   */
  linkI: string | null;
  /**
   * 안드로이드 앱 링크 주소
   */
  linkA: string | null;
}

export interface FnotificationTemplate_kakaoTemplate_comments {
  __typename: "KakaoTemplateComment";
  commentContent: string;
  cdate: string;
  status: string;
}

export interface FnotificationTemplate_kakaoTemplate {
  __typename: "KakaoTemplate";
  templtContent: string | null;
  templtName: string | null;
  status: KakaoTemplateStatus | null;
  inspStatus: KakaoTemplateInspStatus | null;
  buttons: FnotificationTemplate_kakaoTemplate_buttons[] | null;
  cdate: string | null;
  udate: string | null;
  comments: FnotificationTemplate_kakaoTemplate_comments[] | null;
  templtCode: string | null;
}

export interface FnotificationTemplate {
  __typename: "TemplateSms" | "TemplateKakao" | "TemplateEmail";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  content: string;
  /**
   * 회신번호 또는 회신 이메일
   */
  replayTo: string | null;
  notificationMethod: NotificationMethod;
  replacers: string[];
  /**
   * 카카오측 템플릿 상태
   */
  kakaoTemplateStatus: KakaoTemplateStatus;
  /**
   * 요청상태
   */
  kakaoTemplateInspStatus: KakaoTemplateInspStatus;
  kakaoTemplateCode: string | null;
  kakaoTemplate: FnotificationTemplate_kakaoTemplate | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FwishTour
// ====================================================

export interface FwishTour_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface FwishTour_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: FwishTour_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface FwishTour_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface FwishTour_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: FwishTour_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface FwishTour_travlers {
  __typename: "TravelerInfo";
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  isBooker: boolean | null;
  Representative: boolean | null;
  passportNumber: string | null;
  countryCode: string | null;
  birthDate: any;
}

export interface FwishTour_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface FwishTour_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: FwishTour_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface FwishTour {
  __typename: "WishTour";
  region: FwishTour_region | null;
  category: FwishTour_category | null;
  lang: string | null;
  langCustom: string | null;
  travelStartTime: string | null;
  wishMemeo: string | null;
  money: number | null;
  regionDetail: string | null;
  contents: string;
  travlers: FwishTour_travlers[] | null;
  categoryMini: FwishTour_categoryMini[] | null;
  price: number;
  adultCnt: number;
  babyCnt: number;
  kidsCnt: number;
  totalCnt: number;
  startDate: any | null;
  endDate: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Foffer
// ====================================================

export interface Foffer_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_wishTour_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_wishTour_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Foffer_wishTour_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Foffer_wishTour_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_wishTour_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Foffer_wishTour_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Foffer_wishTour_travlers {
  __typename: "TravelerInfo";
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  isBooker: boolean | null;
  Representative: boolean | null;
  passportNumber: string | null;
  countryCode: string | null;
  birthDate: any;
}

export interface Foffer_wishTour_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_wishTour_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Foffer_wishTour_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Foffer_wishTour {
  __typename: "WishTour";
  region: Foffer_wishTour_region | null;
  category: Foffer_wishTour_category | null;
  lang: string | null;
  langCustom: string | null;
  travelStartTime: string | null;
  wishMemeo: string | null;
  money: number | null;
  regionDetail: string | null;
  contents: string;
  travlers: Foffer_wishTour_travlers[] | null;
  categoryMini: Foffer_wishTour_categoryMini[] | null;
  price: number;
  adultCnt: number;
  babyCnt: number;
  kidsCnt: number;
  totalCnt: number;
  startDate: any | null;
  endDate: any | null;
}

export interface Foffer_proposalTours_productInfomation_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface Foffer_proposalTours_productInfomation_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Foffer_proposalTours_productInfomation_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Foffer_proposalTours_productInfomation_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Foffer_proposalTours_productInfomation_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Foffer_proposalTours_productInfomation_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Foffer_proposalTours_productInfomation_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Foffer_proposalTours_productInfomation_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Foffer_proposalTours_productInfomation_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Foffer_proposalTours_productInfomation_videos_tags[];
}

export interface Foffer_proposalTours_productInfomation_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Foffer_proposalTours_productInfomation_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Foffer_proposalTours_productInfomation_thumbNailVideo_tags[];
}

export interface Foffer_proposalTours_productInfomation_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Foffer_proposalTours_productInfomation_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Foffer_proposalTours_productInfomation_guideImage_tags[];
}

export interface Foffer_proposalTours_productInfomation_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Foffer_proposalTours_productInfomation_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Foffer_proposalTours_productInfomation_subPlanes_photo_tags[];
}

export interface Foffer_proposalTours_productInfomation_subPlanes {
  __typename: "SubPlan";
  title: Foffer_proposalTours_productInfomation_subPlanes_title;
  time: Foffer_proposalTours_productInfomation_subPlanes_time;
  description: Foffer_proposalTours_productInfomation_subPlanes_description;
  photo: Foffer_proposalTours_productInfomation_subPlanes_photo | null;
}

export interface Foffer_proposalTours_productInfomation_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Foffer_proposalTours_productInfomation_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Foffer_proposalTours_productInfomation_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Foffer_proposalTours_productInfomation_images_tags[];
}

export interface Foffer_proposalTours_productInfomation_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Foffer_proposalTours_productInfomation_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Foffer_proposalTours_productInfomation_thumbNail_tags[];
}

export interface Foffer_proposalTours_productInfomation {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: Foffer_proposalTours_productInfomation_title | null;
  languages: LANGUAGES[] | null;
  marker: Foffer_proposalTours_productInfomation_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: Foffer_proposalTours_productInfomation_shortDecsription | null;
  categoryMini: Foffer_proposalTours_productInfomation_categoryMini[] | null;
  descriptionLarge: Foffer_proposalTours_productInfomation_descriptionLarge | null;
  region: Foffer_proposalTours_productInfomation_region | null;
  startTime: Foffer_proposalTours_productInfomation_startTime | null;
  extraInfo: Foffer_proposalTours_productInfomation_extraInfo | null;
  startPoint: Foffer_proposalTours_productInfomation_startPoint | null;
  include: Foffer_proposalTours_productInfomation_include | null;
  unInclude: Foffer_proposalTours_productInfomation_unInclude | null;
  importantNotice: Foffer_proposalTours_productInfomation_importantNotice | null;
  category: Foffer_proposalTours_productInfomation_category | null;
  videos: Foffer_proposalTours_productInfomation_videos[] | null;
  thumbNailVideo: Foffer_proposalTours_productInfomation_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: Foffer_proposalTours_productInfomation_guideImage | null;
  subPlanes: Foffer_proposalTours_productInfomation_subPlanes[] | null;
  guideId: any | null;
  address: Foffer_proposalTours_productInfomation_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: Foffer_proposalTours_productInfomation_images[] | null;
  thumbNail: Foffer_proposalTours_productInfomation_thumbNail | null;
  adminMemo: string | null;
}

export interface Foffer_proposalTours {
  __typename: "Tour";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  productId: any;
  productInfomation: Foffer_proposalTours_productInfomation;
  number: number | null;
  bookings: (any | null)[] | null;
  startDate: any;
  endDate: any | null;
  /**
   * refund를 뺴지 않은 금액이다
   */
  totalPaidAmt: number | null;
  totalRefundPrice: number | null;
  totalAdult: number | null;
  totalKids: number | null;
  totalBaby: number;
  totalMember: number;
  code: string;
  representive: boolean;
  completeBookingCnt: number | null;
  cancelBookingCnt: number | null;
  readyBookingCnt: number | null;
  settlementStatus: SettlementStatus;
  settlementId: any | null;
  settlementAmt: number | null;
  tourStatus: TourStatus;
}

export interface Foffer {
  __typename: "Offer";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  offerName: string;
  offerNickName: string | null;
  offerId: any;
  tourTitle: Foffer_tourTitle | null;
  tourStart: any | null;
  tourCode: string | null;
  tourId: any | null;
  guideId: any | null;
  guideName: string | null;
  guideNickName: string | null;
  wishTour: Foffer_wishTour;
  proposalTours: Foffer_proposalTours[] | null;
  status: OfferStatus;
  chatRooms: any[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FbaseTransaction
// ====================================================

export interface FbaseTransaction {
  __typename: "TransactionPayment" | "TransactionRefund";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  status: TransactionStatus;
  type: TrxUpdatedType;
  paymethod: Paymethod;
  price: number;
  currency: Currency;
  message: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpolicy
// ====================================================

export interface Fpolicy {
  __typename: "Policy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  target: PolicyLocation;
  name: string;
  content: string;
  require: boolean;
  order: number;
  version: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FmapMarker
// ====================================================

export interface FmapMarker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FsubPlan
// ====================================================

export interface FsubPlan_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface FsubPlan_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface FsubPlan_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface FsubPlan_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FsubPlan_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: FsubPlan_photo_tags[];
}

export interface FsubPlan {
  __typename: "SubPlan";
  title: FsubPlan_title;
  time: FsubPlan_time;
  description: FsubPlan_description | any;
  photo: FsubPlan_photo | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fproduct
// ====================================================

export interface Fproduct_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface Fproduct_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Fproduct_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Fproduct_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Fproduct_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Fproduct_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Fproduct_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Fproduct_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fproduct_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fproduct_videos_tags[];
}

export interface Fproduct_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fproduct_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fproduct_thumbNailVideo_tags[];
}

export interface Fproduct_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fproduct_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fproduct_guideImage_tags[];
}

export interface Fproduct_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fproduct_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fproduct_subPlanes_photo_tags[];
}

export interface Fproduct_subPlanes {
  __typename: "SubPlan";
  title: Fproduct_subPlanes_title;
  time: Fproduct_subPlanes_time;
  description: Fproduct_subPlanes_description;
  photo: Fproduct_subPlanes_photo | null;
}

export interface Fproduct_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fproduct_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fproduct_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fproduct_images_tags[];
}

export interface Fproduct_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fproduct_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fproduct_thumbNail_tags[];
}

export interface Fproduct {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: Fproduct_title | null;
  languages: LANGUAGES[] | null;
  marker: Fproduct_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: Fproduct_shortDecsription | null;
  categoryMini: Fproduct_categoryMini[] | null;
  descriptionLarge: Fproduct_descriptionLarge | null;
  region: Fproduct_region | null;
  startTime: Fproduct_startTime | null;
  extraInfo: Fproduct_extraInfo | null;
  startPoint: Fproduct_startPoint | null;
  include: Fproduct_include | null;
  unInclude: Fproduct_unInclude | null;
  importantNotice: Fproduct_importantNotice | null;
  category: Fproduct_category | null;
  videos: Fproduct_videos[] | null;
  thumbNailVideo: Fproduct_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: Fproduct_guideImage | null;
  subPlanes: Fproduct_subPlanes[] | null;
  guideId: any | null;
  address: Fproduct_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: Fproduct_images[] | null;
  thumbNail: Fproduct_thumbNail | null;
  adminMemo: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Freview
// ====================================================

export interface Freview_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Freview_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Freview_images_tags[];
}

export interface Freview_reviewerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Freview_reviewerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Freview_reviewerProfileImg_tags[];
}

export interface Freview_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Freview_recentComment_writerProfileImg_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Freview_recentComment_writerProfileImg {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Freview_recentComment_writerProfileImg_tags[];
}

export interface Freview_recentComment {
  __typename: "Comment";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  content: string;
  writerId: any;
  writerName: string;
  writerNickName: string;
  targetId: any;
  targetModel: string;
  writerProfileImg: Freview_recentComment_writerProfileImg | null;
}

export interface Freview {
  __typename: "Review";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  title: string | null;
  contents: string;
  images: Freview_images[] | null;
  rating: number;
  type: ReviewType;
  reviewerId: any;
  reviewerName: string;
  reviewerProfileImg: Freview_reviewerProfileImg | null;
  reviewerNickName: string | null;
  tourTitle: Freview_tourTitle;
  recentComment: Freview_recentComment[];
  commentCount: number;
  productCode: string;
  guideName: string;
  guideId: any;
  guideNickName: string | null;
  tourCode: string;
  tourStart: any;
  tourId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FsettlementHistory
// ====================================================

export interface FsettlementHistory_tourName {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface FsettlementHistory_appliedFeePolicy {
  __typename: "FeePolicy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  feeName: string;
  feeDescription: string;
  type: FeeType;
  /**
   * 0~100
   */
  feePercent: number | null;
  /**
   * 0~100
   */
  feePercentUnder: number | null;
  targetPayMethods: Paymethod[] | null;
  fee: number | null;
}

export interface FsettlementHistory {
  __typename: "SettlementHistory";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  guideName: string;
  guideId: any;
  guideNickName: string;
  /**
   * 수수료 안뺀 돈
   */
  amt: number;
  /**
   * 수수료 뺀 돈
   */
  settlementedPrice: number;
  settlementCompleteAt: any | null;
  tourPeopleNum: number;
  guideMemo: string | null;
  masterMemo: string | null;
  productCode: string;
  productId: any;
  tourId: any;
  tourName: FsettlementHistory_tourName;
  appliedFeePolicy: FsettlementHistory_appliedFeePolicy[];
  tourDate: any;
  tourCode: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FcollectionDataInterface
// ====================================================

export interface FcollectionDataInterface {
  __typename: "Verification" | "File" | "Category" | "Product" | "FeePolicy" | "SettlementHistory" | "Tour" | "Booking" | "Comment" | "Review" | "IUser" | "NotificationManager" | "Board" | "BoardDoc" | "Modal" | "Chat" | "ChatRoom" | "Offer" | "Group" | "Homepage" | "SystemNoti" | "Policy" | "TransactionPayment" | "TransactionRefund" | "TemplateSms" | "TemplateKakao" | "TemplateEmail" | "SmsHistoryItem" | "EmailHistoryItem" | "KaKaoHistoryItem";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FoffsetPagingInfo
// ====================================================

export interface FoffsetPagingInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
  /**
   * 전체 아이템 수
   */
  totalDocumentCount: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FuserError
// ====================================================

export interface FuserError {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Flocation
// ====================================================

export interface Flocation {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number | null;
  lng: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FbankInfo
// ====================================================

export interface FbankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ftag
// ====================================================

export interface Ftag {
  __typename: "Tag";
  key: string;
  value: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fverification
// ====================================================

export interface Fverification {
  __typename: "Verification";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeId: any | null;
  expiresAt: any;
  isExpire: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ffile
// ====================================================

export interface Ffile_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Ffile {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Ffile_tags[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fattribute
// ====================================================

export interface Fattribute_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fattribute {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: Fattribute_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Flangs
// ====================================================

export interface Flangs {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fsns
// ====================================================

export interface Fsns {
  __typename: "SNS";
  facebook: string | null;
  insta: string | null;
  twitter: string | null;
  youtube: string | null;
  line: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fhomepage
// ====================================================

export interface Fhomepage_bannerImages_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fhomepage_bannerImages {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fhomepage_bannerImages_tags[];
}

export interface Fhomepage_feePolicies {
  __typename: "FeePolicy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  feeName: string;
  feeDescription: string;
  type: FeeType;
  /**
   * 0~100
   */
  feePercent: number | null;
  /**
   * 0~100
   */
  feePercentUnder: number | null;
  targetPayMethods: Paymethod[] | null;
  fee: number | null;
}

export interface Fhomepage {
  __typename: "Homepage";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  /**
   * tag에 링크. 및 분류
   */
  bannerImages: Fhomepage_bannerImages[];
  feePolicies: Fhomepage_feePolicies[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FsystemInfo
// ====================================================

export interface FsystemInfo_categories_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface FsystemInfo_categories {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: FsystemInfo_categories_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface FsystemInfo_groups_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface FsystemInfo_groups_desc {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface FsystemInfo_groups {
  __typename: "Group";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  /**
   * 어떤 모델을 대상으로 정렬을 하는지 정의함
   */
  target: string | null;
  /**
   * 이 그룹을 호출하기 위한 Uniq한 key값
   */
  key: string | null;
  order: number | null;
  label: FsystemInfo_groups_label;
  desc: FsystemInfo_groups_desc | null;
  /**
   * 그룹안의 순서는 이 배열의 인덱스로 조정됨
   */
  members: string[];
}

export interface FsystemInfo_homepage_bannerImages_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FsystemInfo_homepage_bannerImages {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: FsystemInfo_homepage_bannerImages_tags[];
}

export interface FsystemInfo_homepage_feePolicies {
  __typename: "FeePolicy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  feeName: string;
  feeDescription: string;
  type: FeeType;
  /**
   * 0~100
   */
  feePercent: number | null;
  /**
   * 0~100
   */
  feePercentUnder: number | null;
  targetPayMethods: Paymethod[] | null;
  fee: number | null;
}

export interface FsystemInfo_homepage {
  __typename: "Homepage";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  /**
   * tag에 링크. 및 분류
   */
  bannerImages: FsystemInfo_homepage_bannerImages[];
  feePolicies: FsystemInfo_homepage_feePolicies[];
}

export interface FsystemInfo {
  __typename: "SystemInfo";
  categories: FsystemInfo_categories[] | null;
  groups: FsystemInfo_groups[] | null;
  homepage: FsystemInfo_homepage | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FsystemNoti
// ====================================================

export interface FsystemNoti {
  __typename: "SystemNoti";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
  severity: SystemNotiSeverity;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ftour
// ====================================================

export interface Ftour_productInfomation_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface Ftour_productInfomation_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Ftour_productInfomation_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Ftour_productInfomation_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Ftour_productInfomation_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Ftour_productInfomation_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Ftour_productInfomation_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Ftour_productInfomation_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Ftour_productInfomation_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Ftour_productInfomation_videos_tags[];
}

export interface Ftour_productInfomation_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Ftour_productInfomation_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Ftour_productInfomation_thumbNailVideo_tags[];
}

export interface Ftour_productInfomation_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Ftour_productInfomation_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Ftour_productInfomation_guideImage_tags[];
}

export interface Ftour_productInfomation_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Ftour_productInfomation_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Ftour_productInfomation_subPlanes_photo_tags[];
}

export interface Ftour_productInfomation_subPlanes {
  __typename: "SubPlan";
  title: Ftour_productInfomation_subPlanes_title;
  time: Ftour_productInfomation_subPlanes_time;
  description: Ftour_productInfomation_subPlanes_description;
  photo: Ftour_productInfomation_subPlanes_photo | null;
}

export interface Ftour_productInfomation_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Ftour_productInfomation_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Ftour_productInfomation_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Ftour_productInfomation_images_tags[];
}

export interface Ftour_productInfomation_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Ftour_productInfomation_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Ftour_productInfomation_thumbNail_tags[];
}

export interface Ftour_productInfomation {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: Ftour_productInfomation_title | null;
  languages: LANGUAGES[] | null;
  marker: Ftour_productInfomation_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: Ftour_productInfomation_shortDecsription | null;
  categoryMini: Ftour_productInfomation_categoryMini[] | null;
  descriptionLarge: Ftour_productInfomation_descriptionLarge | null;
  region: Ftour_productInfomation_region | null;
  startTime: Ftour_productInfomation_startTime | null;
  extraInfo: Ftour_productInfomation_extraInfo | null;
  startPoint: Ftour_productInfomation_startPoint | null;
  include: Ftour_productInfomation_include | null;
  unInclude: Ftour_productInfomation_unInclude | null;
  importantNotice: Ftour_productInfomation_importantNotice | null;
  category: Ftour_productInfomation_category | null;
  videos: Ftour_productInfomation_videos[] | null;
  thumbNailVideo: Ftour_productInfomation_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: Ftour_productInfomation_guideImage | null;
  subPlanes: Ftour_productInfomation_subPlanes[] | null;
  guideId: any | null;
  address: Ftour_productInfomation_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: Ftour_productInfomation_images[] | null;
  thumbNail: Ftour_productInfomation_thumbNail | null;
  adminMemo: string | null;
}

export interface Ftour {
  __typename: "Tour";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  productId: any;
  productInfomation: Ftour_productInfomation;
  number: number | null;
  bookings: (any | null)[] | null;
  startDate: any;
  endDate: any | null;
  /**
   * refund를 뺴지 않은 금액이다
   */
  totalPaidAmt: number | null;
  totalRefundPrice: number | null;
  totalAdult: number | null;
  totalKids: number | null;
  totalBaby: number;
  totalMember: number;
  code: string;
  representive: boolean;
  completeBookingCnt: number | null;
  cancelBookingCnt: number | null;
  readyBookingCnt: number | null;
  settlementStatus: SettlementStatus;
  settlementId: any | null;
  settlementAmt: number | null;
  tourStatus: TourStatus;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fuser
// ====================================================

export interface Fuser_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fuser_profileImage_tags[];
}

export interface Fuser_profileMediumImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_profileMediumImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fuser_profileMediumImage_tags[];
}

export interface Fuser_profileVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_profileVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fuser_profileVideo_tags[];
}

export interface Fuser_guideCategory_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_guideCategory {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Fuser_guideCategory_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Fuser_regions_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_regions {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Fuser_regions_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Fuser_guideLicenses_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_guideLicenses {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fuser_guideLicenses_tags[];
}

export interface Fuser_bankInfo {
  __typename: "BankInfo";
  accountNum: string | null;
  accountHolder: string | null;
  bankName: string | null;
}

export interface Fuser_sns {
  __typename: "SNS";
  facebook: string | null;
  insta: string | null;
  twitter: string | null;
  youtube: string | null;
  line: string | null;
}

export interface Fuser_products_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_marker {
  __typename: "MapMarker";
  lat: number;
  lng: number;
  address: string | null;
}

export interface Fuser_products_shortDecsription {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_categoryMini_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_categoryMini {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Fuser_products_categoryMini_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Fuser_products_descriptionLarge {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_region_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_region {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Fuser_products_region_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Fuser_products_startTime {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_extraInfo {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_startPoint {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_include {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_unInclude {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_importantNotice {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_category_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_category {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: Fuser_products_category_label;
  order: number;
  /**
   * 상위카테고리 ID또는 다른 문자열
   */
  hyper: string | null;
}

export interface Fuser_products_videos_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_products_videos {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fuser_products_videos_tags[];
}

export interface Fuser_products_thumbNailVideo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_products_thumbNailVideo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fuser_products_thumbNailVideo_tags[];
}

export interface Fuser_products_guideImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_products_guideImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fuser_products_guideImage_tags[];
}

export interface Fuser_products_subPlanes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_subPlanes_time {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_subPlanes_description {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_subPlanes_photo_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_products_subPlanes_photo {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fuser_products_subPlanes_photo_tags[];
}

export interface Fuser_products_subPlanes {
  __typename: "SubPlan";
  title: Fuser_products_subPlanes_title;
  time: Fuser_products_subPlanes_time;
  description: Fuser_products_subPlanes_description;
  photo: Fuser_products_subPlanes_photo | null;
}

export interface Fuser_products_address {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fuser_products_images_tags[];
}

export interface Fuser_products_thumbNail_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_products_thumbNail {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fuser_products_thumbNail_tags[];
}

export interface Fuser_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  type: ProductType[] | null;
  status: ProductStatus | null;
  title: Fuser_products_title | null;
  languages: LANGUAGES[] | null;
  marker: Fuser_products_marker | null;
  masterConfirmed: boolean | null;
  /**
   * AM | PM | NONE
   */
  startTimeAmPm: string | null;
  /**
   * 0~60
   */
  startTimeMin: number | null;
  /**
   * 0~12
   */
  startTimeHour: number | null;
  shortDecsription: Fuser_products_shortDecsription | null;
  categoryMini: Fuser_products_categoryMini[] | null;
  descriptionLarge: Fuser_products_descriptionLarge | null;
  region: Fuser_products_region | null;
  startTime: Fuser_products_startTime | null;
  extraInfo: Fuser_products_extraInfo | null;
  startPoint: Fuser_products_startPoint | null;
  include: Fuser_products_include | null;
  unInclude: Fuser_products_unInclude | null;
  importantNotice: Fuser_products_importantNotice | null;
  category: Fuser_products_category | null;
  videos: Fuser_products_videos[] | null;
  thumbNailVideo: Fuser_products_thumbNailVideo | null;
  adultOnly: boolean | null;
  rangeDay: number | null;
  tourDates: any[] | null;
  priceAdult: number | null;
  priceKid: number | null;
  priceBaby: number | null;
  isPriviate: boolean | null;
  minimumPrice: number | null;
  maxMember: number | null;
  minMember: number | null;
  guideName: string | null;
  guideNickName: string | null;
  guideImage: Fuser_products_guideImage | null;
  subPlanes: Fuser_products_subPlanes[] | null;
  guideId: any | null;
  address: Fuser_products_address | null;
  rating: number | null;
  reviewCount: number | null;
  code: string | null;
  images: Fuser_products_images[] | null;
  thumbNail: Fuser_products_thumbNail | null;
  adminMemo: string | null;
}

export interface Fuser_myProductInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_myProductInfoes {
  __typename: "MyProductInfo";
  code: string | null;
  title: Fuser_myProductInfoes_title | null;
}

export interface Fuser_myTourInfoes_title {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_myTourInfoes {
  __typename: "MyTourInfo";
  code: string | null;
  title: Fuser_myTourInfoes_title | null;
}

export interface Fuser_myBookingInfoes_tourTitle {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_myBookingInfoes {
  __typename: "MyBookingInfo";
  bookingCode: string | null;
  tourCode: string | null;
  tourNumber: number | null;
  productCode: string | null;
  tourTitle: Fuser_myBookingInfoes_tourTitle | null;
}

export interface Fuser_introduce {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fuser_resginData {
  __typename: "ResignData";
  resign: boolean;
  resignDate: any | null;
  resignReason: string;
}

export interface Fuser_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
}

export interface Fuser_profileBgImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_profileBgImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fuser_profileBgImage_tags[];
}

export interface Fuser_bankImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_bankImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fuser_bankImage_tags[];
}

export interface Fuser {
  __typename: "IUser";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  stop: boolean | null;
  name: string | null;
  nickName: string | null;
  nationality: string | null;
  email: string;
  chatRoomIds: (any | null)[] | null;
  isOauth: boolean | null;
  gender: Gender | null;
  phoneNumber: string | null;
  passportNumber: string | null;
  countryCode: string | null;
  /**
   * Oauth로 작성된 유저의 경우 필수 정보들이 전부 들어있고 활동이 가능한 상태인지 확인합니다
   */
  oauthSignUpCompleted: boolean | null;
  isVerifiedByAdmin: boolean | null;
  birthDate: any | null;
  stopReason: string | null;
  applyAt: any | null;
  profileImage: Fuser_profileImage | null;
  profileMediumImage: Fuser_profileMediumImage | null;
  profileVideo: Fuser_profileVideo | null;
  /**
   * 가이드 활동지역 리스트
   */
  guideCategory: Fuser_guideCategory[] | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  /**
   * 가이드 활동지역 리스트
   */
  regions: Fuser_regions[] | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: Fuser_guideLicenses[] | null;
  bankInfo: Fuser_bankInfo | null;
  /**
   * 지원언어들
   */
  langs: LANGUAGES[];
  role: UserRole;
  sns: Fuser_sns | null;
  products: Fuser_products[] | null;
  myProductInfoes: Fuser_myProductInfoes[] | null;
  myTourInfoes: Fuser_myTourInfoes[] | null;
  myBookingInfoes: Fuser_myBookingInfoes[] | null;
  company: string | null;
  introduce: Fuser_introduce | null;
  resginData: Fuser_resginData | null;
  chatWiths: (any | null)[] | null;
  myWishList: (any | null)[] | null;
  adminMemo: string | null;
  location: Fuser_location | null;
  profileBgImage: Fuser_profileBgImage | null;
  bankImage: Fuser_bankImage | null;
  unReadSystemNoties: any[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FzoneInfo
// ====================================================

export interface FzoneInfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fgroup
// ====================================================

export interface Fgroup_label {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fgroup_desc {
  __typename: "Langs";
  ko: string | null;
  en: string | null;
  ja: string | null;
  chi: string | null;
  ot: string | null;
}

export interface Fgroup {
  __typename: "Group";
  _id: any;
  updatedAt: any | null;
  createdAt: any;
  /**
   * 어떤 모델을 대상으로 정렬을 하는지 정의함
   */
  target: string | null;
  /**
   * 이 그룹을 호출하기 위한 Uniq한 key값
   */
  key: string | null;
  order: number | null;
  label: Fgroup_label;
  desc: Fgroup_desc | null;
  /**
   * 그룹안의 순서는 이 배열의 인덱스로 조정됨
   */
  members: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ffeepolicy
// ====================================================

export interface Ffeepolicy {
  __typename: "FeePolicy";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  feeName: string;
  feeDescription: string;
  type: FeeType;
  /**
   * 0~100
   */
  feePercent: number | null;
  /**
   * 0~100
   */
  feePercentUnder: number | null;
  targetPayMethods: Paymethod[] | null;
  fee: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fmodal
// ====================================================

export interface Fmodal_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fmodal_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  mineType: string | null;
  uri: string;
  tags: Fmodal_images_tags[];
}

export interface Fmodal {
  __typename: "Modal";
  _id: any;
  createdAt: any;
  updatedAt: any | null;
  /**
   * 부킹솔루션 자체에서 사용하는 모달
   */
  serviceModal: boolean | null;
  storeId: any | null;
  path: string | null;
  style: any | null;
  images: Fmodal_images[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AutoSendTargetType {
  BOOKER = "BOOKER",
  CUSTOM = "CUSTOM",
  GUIDE = "GUIDE",
  MASTER = "MASTER",
}

/**
 * 예약 상태
 */
export enum BookingStatus {
  CANCEL = "CANCEL",
  COMPLETE = "COMPLETE",
  READY = "READY",
}

/**
 * 카테고리 타입
 */
export enum CategoryType {
  GUIDE = "GUIDE",
  ITEM = "ITEM",
  ITEM_SMALL = "ITEM_SMALL",
  REIGION = "REIGION",
}

export enum CommentTarget {
  BOARD = "BOARD",
  REVIEW = "REVIEW",
}

/**
 * 통화
 */
export enum Currency {
  JPY = "JPY",
  KRW = "KRW",
  USD = "USD",
}

export enum DisplayType {
  CHECK_BOX = "CHECK_BOX",
  DATETIME_PICKER = "DATETIME_PICKER",
  DATETIME_RANGE_PICKER = "DATETIME_RANGE_PICKER",
  DATE_PICKER = "DATE_PICKER",
  DATE_RANGE_PICKER = "DATE_RANGE_PICKER",
  DROPDOWN = "DROPDOWN",
  FILE = "FILE",
  NUMBER_SELECTOR = "NUMBER_SELECTOR",
  RADIO_BOX = "RADIO_BOX",
  TEXT_INPUT = "TEXT_INPUT",
  TIME_PICKER = "TIME_PICKER",
}

/**
 * % or +
 */
export enum FeeType {
  DEFAULT = "DEFAULT",
  PERCNET = "PERCNET",
}

export enum Gender {
  FEMALE = "FEMALE",
  MALE = "MALE",
}

/**
 * 템플릿 상태
 */
export enum KakaoTemplateButtonLinkType {
  APP_LINK = "APP_LINK",
  BOT_KEYWORD = "BOT_KEYWORD",
  DELIVERY_STOP = "DELIVERY_STOP",
  MESSAGE_DELIVERY = "MESSAGE_DELIVERY",
  WEB_LINK = "WEB_LINK",
}

/**
 * 템플릿 승인 상태
 */
export enum KakaoTemplateInspStatus {
  APR = "APR",
  REG = "REG",
  REJ = "REJ",
  REQ = "REQ",
}

/**
 * 템플릿 상태
 */
export enum KakaoTemplateStatus {
  ACK = "ACK",
  READY = "READY",
  STOP = "STOP",
}

/**
 * 언어
 */
export enum LANGUAGES {
  chi = "chi",
  en = "en",
  ja = "ja",
  ko = "ko",
  ot = "ot",
}

/**
 * 노티 수단...
 */
export enum NotificationMethod {
  EMAIL = "EMAIL",
  KAKAO = "KAKAO",
  SMS = "SMS",
}

export enum NotificationTriggerEvent {
  BOOKING_CANCEL_BY_BOOKER_TO_GUIDE = "BOOKING_CANCEL_BY_BOOKER_TO_GUIDE",
  BOOKING_CANCEL_BY_GUIDE_TO_BOOKER = "BOOKING_CANCEL_BY_GUIDE_TO_BOOKER",
  BOOKING_CREATE_CONFIRM_TO_BOOKER = "BOOKING_CREATE_CONFIRM_TO_BOOKER",
  BOOKING_CREATE_TO_ADMIN = "BOOKING_CREATE_TO_ADMIN",
  BOOKING_CREATE_TO_BOOKER = "BOOKING_CREATE_TO_BOOKER",
  BOOKING_CREATE_TO_GUIDE = "BOOKING_CREATE_TO_GUIDE",
  BOOKING_REFUND_TO_BOOKER = "BOOKING_REFUND_TO_BOOKER",
  CHAT_SENTED_FIRST_FOR_DATE = "CHAT_SENTED_FIRST_FOR_DATE",
  SETTLEMENT_COMPLETED = "SETTLEMENT_COMPLETED",
  SETTLEMENT_REQUESTED = "SETTLEMENT_REQUESTED",
  TOUR_CANCEL_TO_AMDIN = "TOUR_CANCEL_TO_AMDIN",
  TOUR_CANCEL_TO_BUYER = "TOUR_CANCEL_TO_BUYER",
  TOUR_CANCEL_TO_GUIDE = "TOUR_CANCEL_TO_GUIDE",
  TOUR_DATE_TO_ADMIN = "TOUR_DATE_TO_ADMIN",
  TOUR_DATE_TO_BUYER = "TOUR_DATE_TO_BUYER",
  TOUR_DATE_TO_GUIDE = "TOUR_DATE_TO_GUIDE",
  TOUR_UNDER_ACHEIVER_TO_ADMIN = "TOUR_UNDER_ACHEIVER_TO_ADMIN",
  TOUR_UNDER_ACHEIVER_TO_GUIDE = "TOUR_UNDER_ACHEIVER_TO_GUIDE",
}

/**
 * OfferStatus
 */
export enum OfferStatus {
  ACCEPTED = "ACCEPTED",
  CANCACLED = "CANCACLED",
  OPEN = "OPEN",
}

export enum OrderAbleTarget {
  CATEGORY = "CATEGORY",
  GROUP = "GROUP",
}

export enum Paymethod {
  BANK_TRANSFER = "BANK_TRANSFER",
  CARD = "CARD",
  CASH = "CASH",
  KAKAO = "KAKAO",
  NAVER = "NAVER",
  NON_PAY = "NON_PAY",
  PAY_PAL = "PAY_PAL",
}

export enum PolicyLocation {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}

/**
 * 상품 포지션
 */
export enum ProductPosition {
  KOREA = "KOREA",
  NORMAL = "NORMAL",
}

/**
 * 상품 상태
 */
export enum ProductStatus {
  OPEN = "OPEN",
  READY = "READY",
}

/**
 * 상품 타입
 */
export enum ProductType {
  KPOP = "KPOP",
  LOCAL = "LOCAL",
}

export enum ReviewType {
  GUIDE = "GUIDE",
  PRODUCT = "PRODUCT",
}

/**
 * 정산상태
 */
export enum SettlementStatus {
  COMPLETED = "COMPLETED",
  READY = "READY",
  REQUEST = "REQUEST",
}

export enum Status {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}

/**
 * 시스템 노티피케이션 심각도
 */
export enum SystemNotiSeverity {
  Normal = "Normal",
  Serious = "Serious",
}

/**
 * 시스템 노티피케이션 타입
 */
export enum SystemNotiType {
  booking = "booking",
  cancel = "cancel",
  janda = "janda",
  payment = "payment",
  system = "system",
  tourUnAcheiveCancel = "tourUnAcheiveCancel",
  user = "user",
}

/**
 * 투어 상태
 */
export enum TourStatus {
  CANCEL = "CANCEL",
  DONE = "DONE",
  READY = "READY",
}

export enum TransactionStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}

/**
 * 거래 타입.
 */
export enum TrxUpdatedType {
  PAY = "PAY",
  REFUND = "REFUND",
}

/**
 * 유저 역할!
 */
export enum UserRole {
  ADMIN = "ADMIN",
  BUYER = "BUYER",
  GUIDE = "GUIDE",
}

/**
 * 인증 타겟 Enum
 */
export enum VerificationEvent {
  FindPurchaseBundle = "FindPurchaseBundle",
  NotificationSenderAdd = "NotificationSenderAdd",
  SignInWithEmail = "SignInWithEmail",
  SignInWithPhone = "SignInWithPhone",
  UserFindEmail = "UserFindEmail",
  UserResetPassword = "UserResetPassword",
  UserUpdateInfo = "UserUpdateInfo",
  UserVerifyEmail = "UserVerifyEmail",
  UserVerifyPhone = "UserVerifyPhone",
}

/**
 * 인증 타겟 Enum
 */
export enum VerificationTarget {
  EMAIL = "EMAIL",
  KAKAO = "KAKAO",
  PHONE = "PHONE",
}

/**
 * Auto generated sort type
 */
export enum _BoardDocSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  isNotice__asc = "isNotice__asc",
  isNotice__desc = "isNotice__desc",
  likeCount__asc = "likeCount__asc",
  likeCount__desc = "likeCount__desc",
  order__asc = "order__asc",
  order__desc = "order__desc",
  subTitle__asc = "subTitle__asc",
  subTitle__desc = "subTitle__desc",
  title__asc = "title__asc",
  title__desc = "title__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
  viewCount__asc = "viewCount__asc",
  viewCount__desc = "viewCount__desc",
}

/**
 * Auto generated sort type
 */
export enum _BoardSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _BookingSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _CategorySort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  hyper__asc = "hyper__asc",
  hyper__desc = "hyper__desc",
  order__asc = "order__asc",
  order__desc = "order__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _ChatRoomSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  lastChatTime__asc = "lastChatTime__asc",
  lastChatTime__desc = "lastChatTime__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _CommentSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _FileSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  description__asc = "description__asc",
  description__desc = "description__desc",
  fileType__asc = "fileType__asc",
  fileType__desc = "fileType__desc",
  name__asc = "name__asc",
  name__desc = "name__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _GroupSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  order__asc = "order__asc",
  order__desc = "order__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _ITemplateSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _IUserSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  description__asc = "description__asc",
  description__desc = "description__desc",
  name__asc = "name__asc",
  name__desc = "name__desc",
  resginData_resignDate__asc = "resginData_resignDate__asc",
  resginData_resignDate__desc = "resginData_resignDate__desc",
  resignDate__asc = "resignDate__asc",
  resignDate__desc = "resignDate__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _ModalSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _NotificationHistoryItemSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  errorCount__asc = "errorCount__asc",
  errorCount__desc = "errorCount__desc",
  method__asc = "method__asc",
  method__desc = "method__desc",
  sender__asc = "sender__asc",
  sender__desc = "sender__desc",
  successCount__asc = "successCount__asc",
  successCount__desc = "successCount__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _NotificationManagerSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _OfferSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _PolicySort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _ProductSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  adultOnly__asc = "adultOnly__asc",
  adultOnly__desc = "adultOnly__desc",
  code__asc = "code__asc",
  code__desc = "code__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  isPriviate__asc = "isPriviate__asc",
  isPriviate__desc = "isPriviate__desc",
  minimumPrice__asc = "minimumPrice__asc",
  minimumPrice__desc = "minimumPrice__desc",
  nextClose__asc = "nextClose__asc",
  nextClose__desc = "nextClose__desc",
  priceAdult__asc = "priceAdult__asc",
  priceAdult__desc = "priceAdult__desc",
  questionBookOnly__asc = "questionBookOnly__asc",
  questionBookOnly__desc = "questionBookOnly__desc",
  rating__asc = "rating__asc",
  rating__desc = "rating__desc",
  reviewCount__asc = "reviewCount__asc",
  reviewCount__desc = "reviewCount__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _ReviewSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _SettlementHistorySort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _SystemNotiSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  type__asc = "type__asc",
  type__desc = "type__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _TourSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  endDate__asc = "endDate__asc",
  endDate__desc = "endDate__desc",
  startDate__asc = "startDate__asc",
  startDate__desc = "startDate__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * 예약시 받을 추가필드
 */
export interface AttributeInput {
  tags?: TagInput[] | null;
  value?: string | null;
  placeHolder?: string | null;
  default?: string | null;
  require?: boolean | null;
  options?: string[] | null;
  label?: string | null;
  key: string;
  displayType: DisplayType;
}

export interface BankInfoInput {
  accountHolder?: string | null;
  accountNum?: string | null;
  bankName?: string | null;
}

export interface BoardDocInput {
  title: string;
  lang?: LANGUAGES | null;
  contents: string;
  isNotice?: boolean | null;
  attrs: AttributeInput[];
  isOpen: boolean;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileInput[] | null;
  thumb?: FileInput | null;
  type?: string | null;
  tags: TagInput[];
}

export interface BoardInput {
  key: string;
  name?: string | null;
  writePermission?: UserRole[] | null;
  readPermission?: UserRole[] | null;
  inputs?: AttributeInput[] | null;
  fields?: string[] | null;
}

export interface BookingInput {
  paymethod?: Paymethod | null;
  paidPrice?: number | null;
  locale?: string | null;
  pendingPrice?: number | null;
  refundMethod?: string | null;
  travlers?: TravelerInfoInput[] | null;
  adultCount?: number | null;
  kidsCount?: number | null;
  babyCount?: number | null;
  buyerPhone?: string | null;
  buyerEmail?: string | null;
  buyerGender?: Gender | null;
  buyerMessage?: string | null;
  buyerName?: string | null;
  guideMemo?: string | null;
  adminMemo?: string | null;
  bookingStatus?: BookingStatus | null;
  nationality?: string | null;
  refundBankInfo?: BankInfoInput | null;
  bankTranferName?: string | null;
}

export interface CategoryInput {
  label?: LangInput | null;
  type?: CategoryType | null;
  order?: number | null;
  hyper?: string | null;
}

export interface ChatInput {
  message?: string | null;
  files?: FileCreateInput[] | null;
}

export interface ChatRoomInput {
  title?: string | null;
  contents?: string | null;
  openerImg?: FileCreateInput | null;
}

export interface CommentInput {
  content?: string | null;
}

export interface FeePolicyInput {
  feeName: string;
  feeDescription: string;
  type: FeeType;
  feePercent?: number | null;
  feePercentUnder?: number | null;
  fee?: number | null;
  targetPayMethods?: Paymethod[] | null;
}

/**
 * 임베딩용 인풋
 */
export interface FileCreateInput {
  name?: string | null;
  description?: string | null;
  extension?: string | null;
  fileType?: string | null;
  uri: string;
  owner?: string | null;
  tags?: TagInput[] | null;
  mineType?: string | null;
}

/**
 * 날파일 올릴때 사용 File upload to s3 이후에는 FileCreateInput 으로 임베딩
 */
export interface FileInput {
  upload: any;
  mineType?: string | null;
  tags?: TagInput[] | null;
}

export interface FileInputR {
  name: string;
  description?: string | null;
  extension: string;
  fileType?: string | null;
  mineType?: string | null;
  uri: string;
  tags: TagInput[];
}

export interface GoogleMapMarker {
  lat: number;
  lng: number;
  address?: string | null;
}

export interface GroupInput {
  target?: string | null;
  key?: string | null;
  label?: LangInput | null;
  desc?: LangInput | null;
  members?: any[] | null;
  tags?: TagInput[] | null;
  order?: number | null;
}

export interface HomepageInput {
  bannerImages?: FileCreateInput[] | null;
  feePolicies?: FeePolicyInput[] | null;
}

export interface LangInput {
  ko?: string | null;
  en?: string | null;
  ja?: string | null;
  chi?: string | null;
  ot?: string | null;
}

export interface LocationInput {
  address: string;
  addressDetail?: string | null;
  lat?: number | null;
  lng?: number | null;
}

export interface ModalInput {
  serviceModal?: boolean | null;
  storeId?: any | null;
  style?: any | null;
  path?: string | null;
  images?: FileCreateInput[] | null;
}

export interface NotificationSendInput {
  sender: string;
  kakaoTemplateCode?: string | null;
  title?: string | null;
  content: string;
  receivers: string[];
  tempalteId?: any | null;
  replacements?: ReplacementSetInput | null;
}

export interface NotificationSendWithTemplateInput {
  templateId?: any | null;
  content?: string | null;
  sender: string;
  replacements: ReceiverWithReplacementSetsInput[];
}

export interface NotificationTemplateCreateInput {
  lang: LANGUAGES;
  name: string;
  _guideId?: string | null;
  replayTo?: string | null;
  content: string;
  description?: string | null;
  triggers?: NotificationTriggerInput[] | null;
  method: NotificationMethod;
}

export interface NotificationTemplateUpdateInput {
  lang: LANGUAGES;
  content?: string | null;
  name?: string | null;
  description?: string | null;
  replayTo?: string | null;
  triggers?: NotificationTriggerInput[] | null;
}

export interface NotificationTriggerInput {
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  addReceivers?: string[] | null;
  autoSendTargetType?: AutoSendTargetType[] | null;
  tags: TagInput[];
}

export interface OffsetPagingInput {
  pageIndex: number;
  pageItemCount: number;
}

export interface OrderUpdateInput {
  id: any;
  order: number;
}

export interface PolicyInput {
  target: PolicyLocation;
  name: string;
  content: string;
  require: boolean;
  order: number;
  version: number;
}

export interface ProductInput {
  type?: ProductType[] | null;
  title?: LangInput | null;
  languages?: LANGUAGES[] | null;
  shortDecsription?: LangInput | null;
  descriptionLarge?: LangInput | null;
  startPoint?: LangInput | null;
  startTime?: LangInput | null;
  startTimeHour?: number | null;
  startTimeMin?: number | null;
  startTimeAmPm?: string | null;
  extraInfo?: LangInput | null;
  include?: LangInput | null;
  unInclude?: LangInput | null;
  importantNotice?: LangInput | null;
  region?: categoryInput | null;
  category?: categoryInput | null;
  categoryMini?: categoryInput[] | null;
  questionBookOnly?: boolean | null;
  adultOnly?: boolean | null;
  priceAdult?: number | null;
  isPriviate?: boolean | null;
  priceKid?: number | null;
  subPlanes?: SubPlanInput[] | null;
  priceBaby?: number | null;
  maxMember?: number | null;
  minMember?: number | null;
  rangeDay?: number | null;
  guideName?: string | null;
  videos?: FileCreateInput[] | null;
  thumbNailVideo?: FileCreateInput | null;
  status?: ProductStatus | null;
  address?: LangInput | null;
  images?: FileCreateInput[] | null;
  marker?: GoogleMapMarker | null;
  masterConfirmed?: boolean | null;
  adminMemo?: string | null;
}

export interface ProfileUpdateForBusinessUserInput {
  email?: string | null;
  profileImage?: FileCreateInput | null;
  phoneNumber?: string | null;
  name?: string | null;
  company?: string | null;
  adminMemo?: string | null;
  introduce?: string | null;
  location?: LocationInput | null;
  expectedBillingDayOfMonth?: number | null;
}

/**
 * 수신자번호 + 치환문자열 객체 INPUT
 */
export interface ReceiverWithReplacementSetsInput {
  receivers: string[];
  replacementSets: ReplacementSetInput[];
}

export interface ReplacementSetInput {
  key: string;
  value: string;
}

export interface ResignDataInput {
  resign: boolean;
  resignDate?: any | null;
  resignReason: string;
}

export interface ReviewInput {
  title?: string | null;
  contents?: string | null;
  images?: FileCreateInput[] | null;
  language?: LANGUAGES | null;
  rating?: number | null;
  type?: ReviewType | null;
  reviewerId?: any | null;
  reviewerName?: string | null;
  reviewerProfileImg?: FileCreateInput | null;
  _commentIds?: string | null;
}

export interface SNSInput {
  facebook?: string | null;
  insta?: string | null;
  twitter?: string | null;
  youtube?: string | null;
  line?: string | null;
}

export interface SettlementHistoryInput {
  amt?: number | null;
  settlementedPrice?: number | null;
  settlementCompleteAt?: any | null;
  status?: SettlementStatus | null;
  masterMemo?: string | null;
  guideMemo?: string | null;
}

export interface SignInInput {
  email: string;
  password: string;
  rootAccountEmail?: string | null;
}

export interface SubPlanInput {
  title: LangInput;
  time: LangInput;
  description: LangInput;
  photo?: FileInputR | null;
}

export interface TagInput {
  key: string;
  value: string;
}

export interface TourInput {
  startDate?: any | null;
}

export interface TravelerInfoInput {
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  isBooker?: boolean | null;
  Representative?: boolean | null;
  passportNumber?: string | null;
  countryCode?: string | null;
  birthDate: any;
}

export interface UserSignUpInput {
  stop?: boolean | null;
  name?: string | null;
  nickName?: string | null;
  nationality?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  profileImage?: FileCreateInput | null;
  profileMediumImage?: FileInputR | null;
  profileVideo?: FileInputR | null;
  profileBgImage?: FileCreateInput | null;
  bankImage?: FileCreateInput | null;
  bankInfo?: BankInfoInput | null;
  regions?: categoryInput[] | null;
  guideCategory?: categoryInput[] | null;
  guideLicenses?: FileCreateInput[] | null;
  lang?: LANGUAGES | null;
  langs?: LANGUAGES[] | null;
  role?: UserRole | null;
  applyAt?: any | null;
  company?: string | null;
  introduce?: LangInput | null;
  gender?: Gender | null;
  countryCode?: string | null;
  passportNumber?: string | null;
  birthDate?: any | null;
  adminMemo?: string | null;
  myWishList?: any[] | null;
  sns?: SNSInput | null;
  _password?: string | null;
  oauthSignUpCompleted?: boolean | null;
}

export interface UserUpdateInput {
  stop?: boolean | null;
  name?: string | null;
  nickName?: string | null;
  nationality?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  profileImage?: FileCreateInput | null;
  profileMediumImage?: FileInputR | null;
  profileVideo?: FileInputR | null;
  profileBgImage?: FileCreateInput | null;
  bankImage?: FileCreateInput | null;
  bankInfo?: BankInfoInput | null;
  regions?: categoryInput[] | null;
  guideCategory?: categoryInput[] | null;
  guideLicenses?: FileCreateInput[] | null;
  lang?: LANGUAGES | null;
  langs?: LANGUAGES[] | null;
  role?: UserRole | null;
  applyAt?: any | null;
  company?: string | null;
  introduce?: LangInput | null;
  gender?: Gender | null;
  countryCode?: string | null;
  passportNumber?: string | null;
  birthDate?: any | null;
  adminMemo?: string | null;
  myWishList?: any[] | null;
  sns?: SNSInput | null;
  _password?: string | null;
  oauthSignUpCompleted?: boolean | null;
}

export interface VerificationCompleteInput {
  verificationId: any;
  target: VerificationTarget;
  code: string;
  payload: string;
}

export interface VerificationStartInput {
  target: VerificationTarget;
  payload: string;
  event: VerificationEvent;
}

export interface WishTourInput {
  region?: categoryInput | null;
  category?: categoryInput | null;
  categoryMini?: categoryInput[] | null;
  lang?: string | null;
  langCustom?: string | null;
  travelStartTime?: string | null;
  wishMemeo?: string | null;
  money?: number | null;
  regionDetail?: string | null;
  contents: string;
  travlers?: TravelerInfoInput[] | null;
  price: number;
  adultCnt: number;
  babyCnt: number;
  kidsCnt: number;
  totalCnt: number;
  startDate?: any | null;
  endDate?: any | null;
}

export interface _BoardDocFilter {
  AND?: _BoardDocFilter[] | null;
  elemMatch?: _BoardDocFilter | null;
  OR?: _BoardDocFilter[] | null;
  title__eq?: string | null;
  title__not_eq?: string | null;
  title__contains?: string | null;
  title__not_contains?: string | null;
  title__in?: string[] | null;
  title__not_in?: string[] | null;
  lang__eq?: string | null;
  lang__not_eq?: string | null;
  authorEmail__eq?: string | null;
  authorEmail__not_eq?: string | null;
  authorEmail__in?: string[] | null;
  authorId__eq?: string | null;
  authorId__not_eq?: string | null;
  authorId__in?: string[] | null;
  authorName__eq?: string | null;
  authorName__not_eq?: string | null;
  authorRole__eq?: UserRole | null;
  authorRole__not_eq?: UserRole | null;
  isNotice__eq?: boolean | null;
  isNotice__not_eq?: boolean | null;
  isOpen__eq?: boolean | null;
  isOpen__not_eq?: boolean | null;
  subTitle__eq?: string | null;
  subTitle__not_eq?: string | null;
  subTitle__contains?: string | null;
  subTitle__not_contains?: string | null;
  subTitle__in?: string[] | null;
  subTitle__not_in?: string[] | null;
  keyWards__eq?: string | null;
  keyWards__not_eq?: string | null;
  keyWards__in?: string[] | null;
  keyWards__contains?: string | null;
  boardKey__eq?: string | null;
  boardKey__not_eq?: string | null;
  type__eq?: string | null;
  type__not_eq?: string | null;
  type__contains?: string | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _BoardFilter {
  AND?: _BoardFilter[] | null;
  elemMatch?: _BoardFilter | null;
  OR?: _BoardFilter[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _BookingFilter {
  AND?: _BookingFilter[] | null;
  elemMatch?: _BookingFilter | null;
  OR?: _BookingFilter[] | null;
  paymethod__eq?: Paymethod | null;
  paymethod__not_eq?: Paymethod | null;
  byHand__eq?: boolean | null;
  byHand__not_eq?: boolean | null;
  refundMethod__eq?: string | null;
  refundMethod__not_eq?: string | null;
  refundMethod__contains?: string | null;
  travlers_name__eq?: string | null;
  travlers_name__not_eq?: string | null;
  travlers_name__contains?: string | null;
  travlers_phoneNumber__eq?: string | null;
  travlers_phoneNumber__not_eq?: string | null;
  travlers_phoneNumber__contains?: string | null;
  travlers_email__eq?: string | null;
  travlers_email__not_eq?: string | null;
  travlers_email__contains?: string | null;
  travlers_gender__eq?: Gender | null;
  travlers_gender__not_eq?: Gender | null;
  travlers_isBooker__eq?: boolean | null;
  travlers_isBooker__not_eq?: boolean | null;
  travlers_Representative__eq?: boolean | null;
  travlers_Representative__not_eq?: boolean | null;
  travlers_passportNumber__eq?: string | null;
  travlers_passportNumber__not_eq?: string | null;
  travlers_passportNumber__in?: string[] | null;
  travlers_countryCode__eq?: string | null;
  travlers_countryCode__not_eq?: string | null;
  travlers_countryCode__in?: string[] | null;
  travlers_birthDate__eq?: any | null;
  travlers_birthDate__not_eq?: any | null;
  travlers_birthDate__gte?: any | null;
  travlers_birthDate__lte?: any | null;
  tourRecycleNumber__eq?: string | null;
  tourRecycleNumber__not_eq?: string | null;
  buyerId__eq?: any | null;
  buyerId__not_eq?: any | null;
  buyerPhone__eq?: string | null;
  buyerPhone__not_eq?: string | null;
  buyerPhone__contains?: string | null;
  buyerEmail__eq?: string | null;
  buyerEmail__not_eq?: string | null;
  buyerEmail__contains?: string | null;
  buyerGender__eq?: string | null;
  buyerGender__not_eq?: string | null;
  buyerGender__contains?: string | null;
  buyerName__eq?: string | null;
  buyerName__not_eq?: string | null;
  buyerName__contains?: string | null;
  guideMemo__eq?: string | null;
  guideMemo__not_eq?: string | null;
  guideMemo__contains?: string | null;
  adminMemo__eq?: string | null;
  adminMemo__not_eq?: string | null;
  adminMemo__contains?: string | null;
  productId__eq?: any | null;
  productId__not_eq?: any | null;
  productId__contains?: any | null;
  productCode__eq?: string | null;
  productCode__not_eq?: string | null;
  productCode__contains?: string | null;
  tourTitle_ko__eq?: string | null;
  tourTitle_ko__not_eq?: string | null;
  tourTitle_ko__contains?: string | null;
  tourTitle_en__eq?: string | null;
  tourTitle_en__not_eq?: string | null;
  tourTitle_en__contains?: string | null;
  tourTitle_ja__eq?: string | null;
  tourTitle_ja__not_eq?: string | null;
  tourTitle_ja__contains?: string | null;
  tourTitle_chi__eq?: string | null;
  tourTitle_chi__not_eq?: string | null;
  tourTitle_chi__contains?: string | null;
  tourTitle_ot__eq?: string | null;
  tourTitle_ot__not_eq?: string | null;
  tourTitle_ot__contains?: string | null;
  tourCode__eq?: string | null;
  tourCode__not_eq?: string | null;
  tourCode__contains?: string | null;
  bookingStatus__eq?: BookingStatus | null;
  bookingStatus__not_eq?: BookingStatus | null;
  bookingStatus__contains?: BookingStatus | null;
  tourId__eq?: any | null;
  tourId__not_eq?: any | null;
  tourId__contains?: any | null;
  tourStart__eq?: any | null;
  tourStart__not_eq?: any | null;
  tourStart__gte?: any | null;
  tourStart__lte?: any | null;
  code__eq?: string | null;
  code__not_eq?: string | null;
  code__contains?: string | null;
  MID__eq?: string | null;
  MID__not_eq?: string | null;
  Moid__eq?: string | null;
  Moid__not_eq?: string | null;
  guideName__eq?: string | null;
  guideName__not_eq?: string | null;
  guideName__contains?: string | null;
  guideNickName__eq?: string | null;
  guideNickName__not_eq?: string | null;
  guideNickName__contains?: string | null;
  nationality__eq?: string | null;
  nationality__not_eq?: string | null;
  guideId__eq?: any | null;
  guideId__not_eq?: any | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _CategoryFilter {
  AND?: _CategoryFilter[] | null;
  elemMatch?: _CategoryFilter | null;
  OR?: _CategoryFilter[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  label_ko__eq?: string | null;
  label_ko__not_eq?: string | null;
  label_ko__contains?: string | null;
  label_en__eq?: string | null;
  label_en__not_eq?: string | null;
  label_en__contains?: string | null;
  label_ja__eq?: string | null;
  label_ja__not_eq?: string | null;
  label_ja__contains?: string | null;
  label_chi__eq?: string | null;
  label_chi__not_eq?: string | null;
  label_chi__contains?: string | null;
  label_ot__eq?: string | null;
  label_ot__not_eq?: string | null;
  label_ot__contains?: string | null;
  type__eq?: CategoryType | null;
  type__not_eq?: CategoryType | null;
  hyper__eq?: string | null;
  hyper__not_eq?: string | null;
  hyper__in?: string[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _ChatRoomFilter {
  AND?: _ChatRoomFilter[] | null;
  elemMatch?: _ChatRoomFilter | null;
  OR?: _ChatRoomFilter[] | null;
  title__eq?: string | null;
  title__not_eq?: string | null;
  title__contains?: string | null;
  contents__eq?: string | null;
  contents__not_eq?: string | null;
  contents__contains?: string | null;
  openerId__eq?: any | null;
  openerId__not_eq?: any | null;
  openerId__contains?: any | null;
  openerName__eq?: string | null;
  openerName__not_eq?: string | null;
  openerName__contains?: string | null;
  openerNickname__eq?: string | null;
  openerNickname__not_eq?: string | null;
  openerNickname__contains?: string | null;
  lastChatTime__eq?: string | null;
  lastChatTime__not_eq?: string | null;
  lastChatTime__gte?: string | null;
  lastChatTime__lte?: string | null;
  targetId__eq?: any | null;
  targetId__not_eq?: any | null;
  targetId__contains?: any | null;
  targetName__eq?: string | null;
  targetName__not_eq?: string | null;
  targetName__contains?: string | null;
  targetNicekName__eq?: string | null;
  targetNicekName__not_eq?: string | null;
  targetNicekName__contains?: string | null;
  targetRole__eq?: UserRole | null;
  targetRole__not_eq?: UserRole | null;
  targetRole__contains?: UserRole | null;
  participantes__eq?: any[] | null;
  participantes__not_eq?: any[] | null;
  participantes__in?: any[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _CommentFilter {
  AND?: _CommentFilter[] | null;
  elemMatch?: _CommentFilter | null;
  OR?: _CommentFilter[] | null;
  writerId__eq?: any | null;
  writerId__not_eq?: any | null;
  writerName__eq?: string | null;
  writerName__not_eq?: string | null;
  writerName__contains?: string | null;
  writerNickName__eq?: string | null;
  writerNickName__not_eq?: string | null;
  writerNickName__contains?: string | null;
  targetId__eq?: CommentTarget | null;
  targetId__not_eq?: CommentTarget | null;
  targetModel__eq?: CommentTarget | null;
  targetModel__not_eq?: CommentTarget | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _FileFilter {
  AND?: _FileFilter[] | null;
  elemMatch?: _FileFilter | null;
  OR?: _FileFilter[] | null;
  name__eq?: string | null;
  name__not_eq?: string | null;
  name__contains?: string | null;
  name__not_contains?: string | null;
  name__in?: string[] | null;
  name__not_in?: string[] | null;
  description__eq?: string | null;
  description__not_eq?: string | null;
  description__contains?: string | null;
  description__not_contains?: string | null;
  fileType__eq?: string | null;
  fileType__not_eq?: string | null;
  fileType__in?: string[] | null;
  fileType__not_in?: string[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _GroupFilter {
  AND?: _GroupFilter[] | null;
  elemMatch?: _GroupFilter | null;
  OR?: _GroupFilter[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _ITemplateFilter {
  AND?: _ITemplateFilter[] | null;
  elemMatch?: _ITemplateFilter | null;
  OR?: _ITemplateFilter[] | null;
  _guideId__eq?: string | null;
  _guideId__not_eq?: string | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _IUserFilter {
  AND?: _IUserFilter[] | null;
  elemMatch?: _IUserFilter | null;
  OR?: _IUserFilter[] | null;
  stop__eq?: string | null;
  stop__not_eq?: string | null;
  stopReason__eq?: string | null;
  stopReason__not_eq?: string | null;
  name__eq?: string | null;
  name__not_eq?: string | null;
  name__contains?: string | null;
  nickName__eq?: string | null;
  nickName__not_eq?: string | null;
  nickName__contains?: string | null;
  nationality__eq?: string | null;
  nationality__not_eq?: string | null;
  nationality__contains?: string | null;
  email__eq?: string | null;
  email__not_eq?: string | null;
  email__contains?: string | null;
  isOauth__eq?: string | null;
  isOauth__not_eq?: string | null;
  oauthCompany__eq?: string | null;
  oauthCompany__not_eq?: string | null;
  phoneNumber__eq?: string | null;
  phoneNumber__not_eq?: string | null;
  phoneNumber__contains?: string | null;
  profileMediumImage__eq?: string | null;
  profileMediumImage__not_eq?: string | null;
  profileMediumImage__notNull?: string | null;
  profileVideo__eq?: string | null;
  profileVideo__not_eq?: string | null;
  profileVideo__notNull?: string | null;
  isVerifiedByAdmin__eq?: boolean | null;
  isVerifiedByAdmin__not_eq?: boolean | null;
  regions__id__eq?: any | null;
  regions__id__not_eq?: any | null;
  regions__id__in?: any[] | null;
  regions_label_ko__eq?: string | null;
  regions_label_ko__not_eq?: string | null;
  regions_label_ko__contains?: string | null;
  regions_label_en__eq?: string | null;
  regions_label_en__not_eq?: string | null;
  regions_label_en__contains?: string | null;
  regions_label_ja__eq?: string | null;
  regions_label_ja__not_eq?: string | null;
  regions_label_ja__contains?: string | null;
  regions_label_chi__eq?: string | null;
  regions_label_chi__not_eq?: string | null;
  regions_label_chi__contains?: string | null;
  regions_label_ot__eq?: string | null;
  regions_label_ot__not_eq?: string | null;
  regions_label_ot__contains?: string | null;
  regions_type__eq?: CategoryType | null;
  regions_type__not_eq?: CategoryType | null;
  regions_hyper__eq?: string | null;
  regions_hyper__not_eq?: string | null;
  regions_hyper__in?: string[] | null;
  guideCategory__id__eq?: any | null;
  guideCategory__id__not_eq?: any | null;
  guideCategory__id__in?: any[] | null;
  guideCategory_label_ko__eq?: string | null;
  guideCategory_label_ko__not_eq?: string | null;
  guideCategory_label_ko__contains?: string | null;
  guideCategory_label_en__eq?: string | null;
  guideCategory_label_en__not_eq?: string | null;
  guideCategory_label_en__contains?: string | null;
  guideCategory_label_ja__eq?: string | null;
  guideCategory_label_ja__not_eq?: string | null;
  guideCategory_label_ja__contains?: string | null;
  guideCategory_label_chi__eq?: string | null;
  guideCategory_label_chi__not_eq?: string | null;
  guideCategory_label_chi__contains?: string | null;
  guideCategory_label_ot__eq?: string | null;
  guideCategory_label_ot__not_eq?: string | null;
  guideCategory_label_ot__contains?: string | null;
  guideCategory_type__eq?: CategoryType | null;
  guideCategory_type__not_eq?: CategoryType | null;
  guideCategory_hyper__eq?: string | null;
  guideCategory_hyper__not_eq?: string | null;
  guideCategory_hyper__in?: string[] | null;
  lang__eq?: LANGUAGES | null;
  lang__not_eq?: LANGUAGES | null;
  lang__in?: LANGUAGES[] | null;
  langs__eq?: LANGUAGES[] | null;
  langs__not_eq?: LANGUAGES[] | null;
  langs__in?: LANGUAGES[] | null;
  role__eq?: UserRole | null;
  role__not_eq?: UserRole | null;
  role__in?: UserRole[] | null;
  role__not_in?: UserRole[] | null;
  applyAt__eq?: any | null;
  applyAt__not_eq?: any | null;
  company__eq?: string | null;
  company__not_eq?: string | null;
  company__contains?: string | null;
  company__not_contains?: string | null;
  company__in?: string[] | null;
  company__not_in?: string[] | null;
  resginData_resign__eq?: boolean | null;
  resginData_resign__not_eq?: boolean | null;
  adminMemo__eq?: string | null;
  adminMemo__not_eq?: string | null;
  adminMemo__contains?: string | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
  name__not_contains?: string | null;
  name__in?: string[] | null;
  name__not_in?: string[] | null;
  description__eq?: string | null;
  description__not_eq?: string | null;
  description__contains?: string | null;
  description__not_contains?: string | null;
  description__in?: string[] | null;
  description__not_in?: string[] | null;
}

export interface _ModalFilter {
  AND?: _ModalFilter[] | null;
  elemMatch?: _ModalFilter | null;
  OR?: _ModalFilter[] | null;
  serviceModal__eq?: boolean | null;
  serviceModal__not_eq?: boolean | null;
  path__eq?: string | null;
  path__not_eq?: string | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _NotificationHistoryItemFilter {
  AND?: _NotificationHistoryItemFilter[] | null;
  elemMatch?: _NotificationHistoryItemFilter | null;
  OR?: _NotificationHistoryItemFilter[] | null;
  method__eq?: NotificationMethod | null;
  method__not_eq?: NotificationMethod | null;
  method__in?: NotificationMethod[] | null;
  method__not_in?: NotificationMethod[] | null;
  sender__eq?: string | null;
  sender__not_eq?: string | null;
  sender__in?: string[] | null;
  sender__not_in?: string[] | null;
  sender__contains?: string | null;
  sender__not_contains?: string | null;
  receivers__eq?: string | null;
  receivers__not_eq?: string | null;
  receivers__in?: string[] | null;
  title__eq?: string | null;
  title__not_eq?: string | null;
  title__contains?: string | null;
  content__eq?: string | null;
  content__not_eq?: string | null;
  content__contains?: string | null;
}

export interface _NotificationManagerFilter {
  AND?: _NotificationManagerFilter[] | null;
  elemMatch?: _NotificationManagerFilter | null;
  OR?: _NotificationManagerFilter[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _OfferFilter {
  AND?: _OfferFilter[] | null;
  elemMatch?: _OfferFilter | null;
  OR?: _OfferFilter[] | null;
  offerName__eq?: string | null;
  offerName__not_eq?: string | null;
  offerName__contains?: string | null;
  offerNickName__eq?: string | null;
  offerNickName__not_eq?: string | null;
  offerNickName__contains?: string | null;
  offerId__eq?: any | null;
  offerId__not_eq?: any | null;
  tourTitle_ko__eq?: string | null;
  tourTitle_ko__not_eq?: string | null;
  tourTitle_ko__contains?: string | null;
  tourTitle_en__eq?: string | null;
  tourTitle_en__not_eq?: string | null;
  tourTitle_en__contains?: string | null;
  tourTitle_ja__eq?: string | null;
  tourTitle_ja__not_eq?: string | null;
  tourTitle_ja__contains?: string | null;
  tourTitle_chi__eq?: string | null;
  tourTitle_chi__not_eq?: string | null;
  tourTitle_chi__contains?: string | null;
  tourTitle_ot__eq?: string | null;
  tourTitle_ot__not_eq?: string | null;
  tourTitle_ot__contains?: string | null;
  tourStart__eq?: any | null;
  tourStart__not_eq?: any | null;
  tourStart__gte?: any | null;
  tourStart__lte?: any | null;
  tourCode__eq?: string | null;
  tourCode__not_eq?: string | null;
  tourId__eq?: any | null;
  tourId__not_eq?: any | null;
  guideId__eq?: any | null;
  guideId__not_eq?: any | null;
  guideName__eq?: string | null;
  guideName__not_eq?: string | null;
  guideName__contains?: string | null;
  guideNickName__eq?: string | null;
  guideNickName__not_eq?: string | null;
  guideNickName__contains?: string | null;
  wishTour_region__id__eq?: any | null;
  wishTour_region__id__not_eq?: any | null;
  wishTour_region__id__in?: any[] | null;
  wishTour_region_label_ko__eq?: string | null;
  wishTour_region_label_ko__not_eq?: string | null;
  wishTour_region_label_ko__contains?: string | null;
  wishTour_region_label_en__eq?: string | null;
  wishTour_region_label_en__not_eq?: string | null;
  wishTour_region_label_en__contains?: string | null;
  wishTour_region_label_ja__eq?: string | null;
  wishTour_region_label_ja__not_eq?: string | null;
  wishTour_region_label_ja__contains?: string | null;
  wishTour_region_label_chi__eq?: string | null;
  wishTour_region_label_chi__not_eq?: string | null;
  wishTour_region_label_chi__contains?: string | null;
  wishTour_region_label_ot__eq?: string | null;
  wishTour_region_label_ot__not_eq?: string | null;
  wishTour_region_label_ot__contains?: string | null;
  wishTour_region_type__eq?: CategoryType | null;
  wishTour_region_type__not_eq?: CategoryType | null;
  wishTour_region_hyper__eq?: string | null;
  wishTour_region_hyper__not_eq?: string | null;
  wishTour_region_hyper__in?: string[] | null;
  wishTour_category__id__eq?: any | null;
  wishTour_category__id__not_eq?: any | null;
  wishTour_category__id__in?: any[] | null;
  wishTour_category_label_ko__eq?: string | null;
  wishTour_category_label_ko__not_eq?: string | null;
  wishTour_category_label_ko__contains?: string | null;
  wishTour_category_label_en__eq?: string | null;
  wishTour_category_label_en__not_eq?: string | null;
  wishTour_category_label_en__contains?: string | null;
  wishTour_category_label_ja__eq?: string | null;
  wishTour_category_label_ja__not_eq?: string | null;
  wishTour_category_label_ja__contains?: string | null;
  wishTour_category_label_chi__eq?: string | null;
  wishTour_category_label_chi__not_eq?: string | null;
  wishTour_category_label_chi__contains?: string | null;
  wishTour_category_label_ot__eq?: string | null;
  wishTour_category_label_ot__not_eq?: string | null;
  wishTour_category_label_ot__contains?: string | null;
  wishTour_category_type__eq?: CategoryType | null;
  wishTour_category_type__not_eq?: CategoryType | null;
  wishTour_category_hyper__eq?: string | null;
  wishTour_category_hyper__not_eq?: string | null;
  wishTour_category_hyper__in?: string[] | null;
  categoryMini__id__eq?: any | null;
  categoryMini__id__not_eq?: any | null;
  categoryMini__id__in?: any[] | null;
  categoryMini_label_ko__eq?: string | null;
  categoryMini_label_ko__not_eq?: string | null;
  categoryMini_label_ko__contains?: string | null;
  categoryMini_label_en__eq?: string | null;
  categoryMini_label_en__not_eq?: string | null;
  categoryMini_label_en__contains?: string | null;
  categoryMini_label_ja__eq?: string | null;
  categoryMini_label_ja__not_eq?: string | null;
  categoryMini_label_ja__contains?: string | null;
  categoryMini_label_chi__eq?: string | null;
  categoryMini_label_chi__not_eq?: string | null;
  categoryMini_label_chi__contains?: string | null;
  categoryMini_label_ot__eq?: string | null;
  categoryMini_label_ot__not_eq?: string | null;
  categoryMini_label_ot__contains?: string | null;
  categoryMini_type__eq?: CategoryType | null;
  categoryMini_type__not_eq?: CategoryType | null;
  categoryMini_hyper__eq?: string | null;
  categoryMini_hyper__not_eq?: string | null;
  categoryMini_hyper__in?: string[] | null;
  wishTour_lang__eq?: string | null;
  wishTour_lang__not_eq?: string | null;
  wishTour_langCustom__eq?: string | null;
  wishTour_langCustom__not_eq?: string | null;
  wishTour_langCustom__contains?: string | null;
  wishTour_regionDetail__eq?: string | null;
  wishTour_regionDetail__not_eq?: string | null;
  wishTour_regionDetail__contains?: string | null;
  wishTour_contents__eq?: string | null;
  wishTour_contents__not_eq?: string | null;
  wishTour_contents__contains?: string | null;
  travlers_name__eq?: string | null;
  travlers_name__not_eq?: string | null;
  travlers_name__contains?: string | null;
  travlers_phoneNumber__eq?: string | null;
  travlers_phoneNumber__not_eq?: string | null;
  travlers_phoneNumber__contains?: string | null;
  travlers_email__eq?: string | null;
  travlers_email__not_eq?: string | null;
  travlers_email__contains?: string | null;
  travlers_gender__eq?: Gender | null;
  travlers_gender__not_eq?: Gender | null;
  travlers_isBooker__eq?: boolean | null;
  travlers_isBooker__not_eq?: boolean | null;
  travlers_Representative__eq?: boolean | null;
  travlers_Representative__not_eq?: boolean | null;
  travlers_passportNumber__eq?: string | null;
  travlers_passportNumber__not_eq?: string | null;
  travlers_passportNumber__in?: string[] | null;
  travlers_countryCode__eq?: string | null;
  travlers_countryCode__not_eq?: string | null;
  travlers_countryCode__in?: string[] | null;
  travlers_birthDate__eq?: any | null;
  travlers_birthDate__not_eq?: any | null;
  travlers_birthDate__gte?: any | null;
  travlers_birthDate__lte?: any | null;
  wishTour_price__eq?: string | null;
  wishTour_price__not_eq?: string | null;
  wishTour_price__gte?: string | null;
  wishTour_price__lte?: string | null;
  wishTour_totalCnt__eq?: string | null;
  wishTour_totalCnt__not_eq?: string | null;
  wishTour_totalCnt__gte?: string | null;
  wishTour_totalCnt__lte?: string | null;
  status__eq?: OfferStatus | null;
  status__not_eq?: OfferStatus | null;
  chatRooms__eq?: any | null;
  chatRooms__not_eq?: any | null;
  chatRooms__in?: any[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _PolicyFilter {
  AND?: _PolicyFilter[] | null;
  elemMatch?: _PolicyFilter | null;
  OR?: _PolicyFilter[] | null;
  target__eq?: PolicyLocation | null;
  target__not_eq?: PolicyLocation | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _ProductFilter {
  AND?: _ProductFilter[] | null;
  elemMatch?: _ProductFilter | null;
  OR?: _ProductFilter[] | null;
  type__eq?: string | null;
  type__not_eq?: string | null;
  type__in?: string[] | null;
  title_ko__eq?: string | null;
  title_ko__not_eq?: string | null;
  title_ko__contains?: string | null;
  title_en__eq?: string | null;
  title_en__not_eq?: string | null;
  title_en__contains?: string | null;
  title_ja__eq?: string | null;
  title_ja__not_eq?: string | null;
  title_ja__contains?: string | null;
  title_chi__eq?: string | null;
  title_chi__not_eq?: string | null;
  title_chi__contains?: string | null;
  title_ot__eq?: string | null;
  title_ot__not_eq?: string | null;
  title_ot__contains?: string | null;
  tags_key__eq?: string | null;
  tags_key__not_eq?: string | null;
  tags_value__eq?: string | null;
  tags_value__not_eq?: string | null;
  languages__eq?: LANGUAGES | null;
  languages__not_eq?: LANGUAGES | null;
  languages__in?: LANGUAGES[] | null;
  shortDecsription_ko__eq?: string | null;
  shortDecsription_ko__not_eq?: string | null;
  shortDecsription_ko__contains?: string | null;
  shortDecsription_en__eq?: string | null;
  shortDecsription_en__not_eq?: string | null;
  shortDecsription_en__contains?: string | null;
  shortDecsription_ja__eq?: string | null;
  shortDecsription_ja__not_eq?: string | null;
  shortDecsription_ja__contains?: string | null;
  shortDecsription_chi__eq?: string | null;
  shortDecsription_chi__not_eq?: string | null;
  shortDecsription_chi__contains?: string | null;
  shortDecsription_ot__eq?: string | null;
  shortDecsription_ot__not_eq?: string | null;
  shortDecsription_ot__contains?: string | null;
  descriptionLarge_ko__eq?: string | null;
  descriptionLarge_ko__not_eq?: string | null;
  descriptionLarge_ko__contains?: string | null;
  descriptionLarge_en__eq?: string | null;
  descriptionLarge_en__not_eq?: string | null;
  descriptionLarge_en__contains?: string | null;
  descriptionLarge_ja__eq?: string | null;
  descriptionLarge_ja__not_eq?: string | null;
  descriptionLarge_ja__contains?: string | null;
  descriptionLarge_chi__eq?: string | null;
  descriptionLarge_chi__not_eq?: string | null;
  descriptionLarge_chi__contains?: string | null;
  descriptionLarge_ot__eq?: string | null;
  descriptionLarge_ot__not_eq?: string | null;
  descriptionLarge_ot__contains?: string | null;
  startPoint_ko__eq?: string | null;
  startPoint_ko__not_eq?: string | null;
  startPoint_ko__contains?: string | null;
  startPoint_en__eq?: string | null;
  startPoint_en__not_eq?: string | null;
  startPoint_en__contains?: string | null;
  startPoint_ja__eq?: string | null;
  startPoint_ja__not_eq?: string | null;
  startPoint_ja__contains?: string | null;
  startPoint_chi__eq?: string | null;
  startPoint_chi__not_eq?: string | null;
  startPoint_chi__contains?: string | null;
  startPoint_ot__eq?: string | null;
  startPoint_ot__not_eq?: string | null;
  startPoint_ot__contains?: string | null;
  startTime_ko__eq?: string | null;
  startTime_ko__not_eq?: string | null;
  startTime_ko__contains?: string | null;
  startTime_en__eq?: string | null;
  startTime_en__not_eq?: string | null;
  startTime_en__contains?: string | null;
  startTime_ja__eq?: string | null;
  startTime_ja__not_eq?: string | null;
  startTime_ja__contains?: string | null;
  startTime_chi__eq?: string | null;
  startTime_chi__not_eq?: string | null;
  startTime_chi__contains?: string | null;
  startTime_ot__eq?: string | null;
  startTime_ot__not_eq?: string | null;
  startTime_ot__contains?: string | null;
  include_ko__eq?: string | null;
  include_ko__not_eq?: string | null;
  include_ko__contains?: string | null;
  include_en__eq?: string | null;
  include_en__not_eq?: string | null;
  include_en__contains?: string | null;
  include_ja__eq?: string | null;
  include_ja__not_eq?: string | null;
  include_ja__contains?: string | null;
  include_chi__eq?: string | null;
  include_chi__not_eq?: string | null;
  include_chi__contains?: string | null;
  include_ot__eq?: string | null;
  include_ot__not_eq?: string | null;
  include_ot__contains?: string | null;
  unInclude_ko__eq?: string | null;
  unInclude_ko__not_eq?: string | null;
  unInclude_ko__contains?: string | null;
  unInclude_en__eq?: string | null;
  unInclude_en__not_eq?: string | null;
  unInclude_en__contains?: string | null;
  unInclude_ja__eq?: string | null;
  unInclude_ja__not_eq?: string | null;
  unInclude_ja__contains?: string | null;
  unInclude_chi__eq?: string | null;
  unInclude_chi__not_eq?: string | null;
  unInclude_chi__contains?: string | null;
  unInclude_ot__eq?: string | null;
  unInclude_ot__not_eq?: string | null;
  unInclude_ot__contains?: string | null;
  importantNotice_ko__eq?: string | null;
  importantNotice_ko__not_eq?: string | null;
  importantNotice_ko__contains?: string | null;
  importantNotice_en__eq?: string | null;
  importantNotice_en__not_eq?: string | null;
  importantNotice_en__contains?: string | null;
  importantNotice_ja__eq?: string | null;
  importantNotice_ja__not_eq?: string | null;
  importantNotice_ja__contains?: string | null;
  importantNotice_chi__eq?: string | null;
  importantNotice_chi__not_eq?: string | null;
  importantNotice_chi__contains?: string | null;
  importantNotice_ot__eq?: string | null;
  importantNotice_ot__not_eq?: string | null;
  importantNotice_ot__contains?: string | null;
  region__id__eq?: any | null;
  region__id__not_eq?: any | null;
  region__id__in?: any[] | null;
  region_label_ko__eq?: string | null;
  region_label_ko__not_eq?: string | null;
  region_label_ko__contains?: string | null;
  region_label_en__eq?: string | null;
  region_label_en__not_eq?: string | null;
  region_label_en__contains?: string | null;
  region_label_ja__eq?: string | null;
  region_label_ja__not_eq?: string | null;
  region_label_ja__contains?: string | null;
  region_label_chi__eq?: string | null;
  region_label_chi__not_eq?: string | null;
  region_label_chi__contains?: string | null;
  region_label_ot__eq?: string | null;
  region_label_ot__not_eq?: string | null;
  region_label_ot__contains?: string | null;
  region_type__eq?: CategoryType | null;
  region_type__not_eq?: CategoryType | null;
  region_hyper__eq?: string | null;
  region_hyper__not_eq?: string | null;
  region_hyper__in?: string[] | null;
  category__id__eq?: any | null;
  category__id__not_eq?: any | null;
  category__id__in?: any[] | null;
  category_label_ko__eq?: string | null;
  category_label_ko__not_eq?: string | null;
  category_label_ko__contains?: string | null;
  category_label_en__eq?: string | null;
  category_label_en__not_eq?: string | null;
  category_label_en__contains?: string | null;
  category_label_ja__eq?: string | null;
  category_label_ja__not_eq?: string | null;
  category_label_ja__contains?: string | null;
  category_label_chi__eq?: string | null;
  category_label_chi__not_eq?: string | null;
  category_label_chi__contains?: string | null;
  category_label_ot__eq?: string | null;
  category_label_ot__not_eq?: string | null;
  category_label_ot__contains?: string | null;
  category_type__eq?: CategoryType | null;
  category_type__not_eq?: CategoryType | null;
  category_hyper__eq?: string | null;
  category_hyper__not_eq?: string | null;
  category_hyper__in?: string[] | null;
  categoryMini__id__eq?: any | null;
  categoryMini__id__not_eq?: any | null;
  categoryMini__id__in?: any[] | null;
  categoryMini_label_ko__eq?: string | null;
  categoryMini_label_ko__not_eq?: string | null;
  categoryMini_label_ko__contains?: string | null;
  categoryMini_label_en__eq?: string | null;
  categoryMini_label_en__not_eq?: string | null;
  categoryMini_label_en__contains?: string | null;
  categoryMini_label_ja__eq?: string | null;
  categoryMini_label_ja__not_eq?: string | null;
  categoryMini_label_ja__contains?: string | null;
  categoryMini_label_chi__eq?: string | null;
  categoryMini_label_chi__not_eq?: string | null;
  categoryMini_label_chi__contains?: string | null;
  categoryMini_label_ot__eq?: string | null;
  categoryMini_label_ot__not_eq?: string | null;
  categoryMini_label_ot__contains?: string | null;
  categoryMini_type__eq?: CategoryType | null;
  categoryMini_type__not_eq?: CategoryType | null;
  categoryMini_hyper__eq?: string | null;
  categoryMini_hyper__not_eq?: string | null;
  categoryMini_hyper__in?: string[] | null;
  questionBookOnly__eq?: boolean | null;
  questionBookOnly__not_eq?: boolean | null;
  questionBookOnly__lte?: boolean | null;
  questionBookOnly__gte?: boolean | null;
  adultOnly__eq?: boolean | null;
  adultOnly__not_eq?: boolean | null;
  adultOnly__lte?: boolean | null;
  adultOnly__gte?: boolean | null;
  priceAdult__eq?: number | null;
  priceAdult__not_eq?: number | null;
  priceAdult__lte?: number | null;
  priceAdult__gte?: number | null;
  isPriviate__eq?: boolean | null;
  isPriviate__not_eq?: boolean | null;
  minimumPrice__eq?: number | null;
  minimumPrice__not_eq?: number | null;
  minimumPrice__lte?: number | null;
  minimumPrice__gte?: number | null;
  maxMember__eq?: string | null;
  maxMember__not_eq?: string | null;
  maxMember__gte?: string | null;
  maxMember__lte?: string | null;
  minMember__eq?: string | null;
  minMember__not_eq?: string | null;
  minMember__gte?: string | null;
  minMember__lte?: string | null;
  rangeDay__eq?: string | null;
  rangeDay__not_eq?: string | null;
  rangeDay__gte?: string | null;
  rangeDay__lte?: string | null;
  guideName__eq?: string | null;
  guideName__not_eq?: string | null;
  guideName__contains?: string | null;
  guideNickName__eq?: string | null;
  guideNickName__not_eq?: string | null;
  guideNickName__contains?: string | null;
  guideId__eq?: any | null;
  guideId__not_eq?: any | null;
  status__eq?: ProductStatus | null;
  status__not_eq?: ProductStatus | null;
  address_ko__eq?: string | null;
  address_ko__not_eq?: string | null;
  address_ko__contains?: string | null;
  address_en__eq?: string | null;
  address_en__not_eq?: string | null;
  address_en__contains?: string | null;
  address_ja__eq?: string | null;
  address_ja__not_eq?: string | null;
  address_ja__contains?: string | null;
  address_chi__eq?: string | null;
  address_chi__not_eq?: string | null;
  address_chi__contains?: string | null;
  address_ot__eq?: string | null;
  address_ot__not_eq?: string | null;
  address_ot__contains?: string | null;
  rating__eq?: number | null;
  rating__not_eq?: number | null;
  rating__gte?: number | null;
  rating__lte?: number | null;
  reviewCount__eq?: number | null;
  reviewCount__not_eq?: number | null;
  reviewCount__gte?: number | null;
  reviewCount__lte?: number | null;
  code__eq?: string | null;
  code__not_eq?: string | null;
  code__gte?: string | null;
  code__lte?: string | null;
  position__eq?: ProductPosition[] | null;
  position__not_eq?: ProductPosition[] | null;
  tourDates__eq?: any | null;
  tourDates__not_eq?: any | null;
  tourDates__gte?: any | null;
  tourDates__lte?: any | null;
  nextClose__eq?: any | null;
  nextClose__not_eq?: any | null;
  nextClose__gte?: any | null;
  nextClose__lte?: any | null;
  masterConfirmed__eq?: boolean | null;
  masterConfirmed__not_eq?: boolean | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _ReviewFilter {
  AND?: _ReviewFilter[] | null;
  elemMatch?: _ReviewFilter | null;
  OR?: _ReviewFilter[] | null;
  title__eq?: string | null;
  title__not_eq?: string | null;
  title__contains?: string | null;
  contents__eq?: string | null;
  contents__not_eq?: string | null;
  contents__contains?: string | null;
  rating__eq?: string | null;
  rating__not_eq?: string | null;
  rating__gte?: string | null;
  rating__lte?: string | null;
  type__eq?: string | null;
  type__not_eq?: string | null;
  type__contains?: string | null;
  reviewerId__eq?: string | null;
  reviewerId__not_eq?: string | null;
  reviewerName__eq?: string | null;
  reviewerName__not_eq?: string | null;
  reviewerName__contains?: string | null;
  reviewerNickName__eq?: string | null;
  reviewerNickName__not_eq?: string | null;
  reviewerNickName__contains?: string | null;
  tourTitle_ko__eq?: string | null;
  tourTitle_ko__not_eq?: string | null;
  tourTitle_ko__contains?: string | null;
  tourTitle_en__eq?: string | null;
  tourTitle_en__not_eq?: string | null;
  tourTitle_en__contains?: string | null;
  tourTitle_ja__eq?: string | null;
  tourTitle_ja__not_eq?: string | null;
  tourTitle_ja__contains?: string | null;
  tourTitle_chi__eq?: string | null;
  tourTitle_chi__not_eq?: string | null;
  tourTitle_chi__contains?: string | null;
  tourTitle_ot__eq?: string | null;
  tourTitle_ot__not_eq?: string | null;
  tourTitle_ot__contains?: string | null;
  productCode__eq?: string | null;
  productCode__not_eq?: string | null;
  productCode__contains?: string | null;
  guideName__eq?: string | null;
  guideName__not_eq?: string | null;
  guideName__contains?: string | null;
  guideId__eq?: string | null;
  guideId__not_eq?: string | null;
  guideNickName__eq?: string | null;
  guideNickName__not_eq?: string | null;
  guideNickName__contains?: string | null;
  tourId__eq?: any | null;
  tourId__not_eq?: any | null;
  tourCode__eq?: string | null;
  tourCode__not_eq?: string | null;
  tourStart__eq?: string | null;
  tourStart__not_eq?: string | null;
  tourStart__gte?: string | null;
  tourStart__lte?: string | null;
  _commentIds__eq?: string | null;
  _commentIds__not_eq?: string | null;
  _commentIds__contains?: string | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _SettlementHistoryFilter {
  AND?: _SettlementHistoryFilter[] | null;
  elemMatch?: _SettlementHistoryFilter | null;
  OR?: _SettlementHistoryFilter[] | null;
  guideName__eq?: string | null;
  guideName__not_eq?: string | null;
  guideName__contains?: string | null;
  guideId__eq?: any | null;
  guideId__not_eq?: any | null;
  guideNickName__eq?: string | null;
  guideNickName__not_eq?: string | null;
  guideNickName__contains?: string | null;
  amt__eq?: number | null;
  amt__not_eq?: number | null;
  amt__lte?: number | null;
  amt__gte?: number | null;
  settlementedPrice__eq?: string | null;
  settlementedPrice__not_eq?: string | null;
  settlementedPrice__lte?: string | null;
  settlementedPrice__gte?: string | null;
  settlementCompleteAt__eq?: any | null;
  settlementCompleteAt__not_eq?: any | null;
  settlementCompleteAt__lte?: any | null;
  settlementCompleteAt__gte?: any | null;
  status__eq?: SettlementStatus | null;
  status__not_eq?: SettlementStatus | null;
  status__in?: SettlementStatus[] | null;
  masterMemo__eq?: string | null;
  masterMemo__not_eq?: string | null;
  masterMemo__contains?: string | null;
  guideMemo__eq?: string | null;
  guideMemo__not_eq?: string | null;
  guideMemo__contains?: string | null;
  productCode__eq?: string | null;
  productCode__not_eq?: string | null;
  productId__eq?: any | null;
  productId__not_eq?: any | null;
  tourId__eq?: any | null;
  tourId__not_eq?: any | null;
  tourName_ko__eq?: string | null;
  tourName_ko__not_eq?: string | null;
  tourName_ko__contains?: string | null;
  tourName_en__eq?: string | null;
  tourName_en__not_eq?: string | null;
  tourName_en__contains?: string | null;
  tourName_ja__eq?: string | null;
  tourName_ja__not_eq?: string | null;
  tourName_ja__contains?: string | null;
  tourName_chi__eq?: string | null;
  tourName_chi__not_eq?: string | null;
  tourName_chi__contains?: string | null;
  tourName_ot__eq?: string | null;
  tourName_ot__not_eq?: string | null;
  tourName_ot__contains?: string | null;
  tourDate__eq?: any | null;
  tourDate__not_eq?: any | null;
  tourDate__gt?: any | null;
  tourDate__lte?: any | null;
  tourCode__eq?: string | null;
  tourCode__not_eq?: string | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _SystemNotiFilter {
  AND?: _SystemNotiFilter[] | null;
  elemMatch?: _SystemNotiFilter | null;
  OR?: _SystemNotiFilter[] | null;
  type__eq?: string | null;
  type__not_eq?: string | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _TourFilter {
  AND?: _TourFilter[] | null;
  elemMatch?: _TourFilter | null;
  OR?: _TourFilter[] | null;
  productId__eq?: any | null;
  productId__not_eq?: any | null;
  productInfomation_type__eq?: string | null;
  productInfomation_type__not_eq?: string | null;
  productInfomation_type__in?: string[] | null;
  productInfomation_title_ko__eq?: string | null;
  productInfomation_title_ko__not_eq?: string | null;
  productInfomation_title_ko__contains?: string | null;
  productInfomation_title_en__eq?: string | null;
  productInfomation_title_en__not_eq?: string | null;
  productInfomation_title_en__contains?: string | null;
  productInfomation_title_ja__eq?: string | null;
  productInfomation_title_ja__not_eq?: string | null;
  productInfomation_title_ja__contains?: string | null;
  productInfomation_title_chi__eq?: string | null;
  productInfomation_title_chi__not_eq?: string | null;
  productInfomation_title_chi__contains?: string | null;
  productInfomation_title_ot__eq?: string | null;
  productInfomation_title_ot__not_eq?: string | null;
  productInfomation_title_ot__contains?: string | null;
  productInfomation_tags_key__eq?: string | null;
  productInfomation_tags_key__not_eq?: string | null;
  productInfomation_tags_value__eq?: string | null;
  productInfomation_tags_value__not_eq?: string | null;
  productInfomation_languages__eq?: LANGUAGES | null;
  productInfomation_languages__not_eq?: LANGUAGES | null;
  productInfomation_languages__in?: LANGUAGES[] | null;
  productInfomation_shortDecsription_ko__eq?: string | null;
  productInfomation_shortDecsription_ko__not_eq?: string | null;
  productInfomation_shortDecsription_ko__contains?: string | null;
  productInfomation_shortDecsription_en__eq?: string | null;
  productInfomation_shortDecsription_en__not_eq?: string | null;
  productInfomation_shortDecsription_en__contains?: string | null;
  productInfomation_shortDecsription_ja__eq?: string | null;
  productInfomation_shortDecsription_ja__not_eq?: string | null;
  productInfomation_shortDecsription_ja__contains?: string | null;
  productInfomation_shortDecsription_chi__eq?: string | null;
  productInfomation_shortDecsription_chi__not_eq?: string | null;
  productInfomation_shortDecsription_chi__contains?: string | null;
  productInfomation_shortDecsription_ot__eq?: string | null;
  productInfomation_shortDecsription_ot__not_eq?: string | null;
  productInfomation_shortDecsription_ot__contains?: string | null;
  productInfomation_descriptionLarge_ko__eq?: string | null;
  productInfomation_descriptionLarge_ko__not_eq?: string | null;
  productInfomation_descriptionLarge_ko__contains?: string | null;
  productInfomation_descriptionLarge_en__eq?: string | null;
  productInfomation_descriptionLarge_en__not_eq?: string | null;
  productInfomation_descriptionLarge_en__contains?: string | null;
  productInfomation_descriptionLarge_ja__eq?: string | null;
  productInfomation_descriptionLarge_ja__not_eq?: string | null;
  productInfomation_descriptionLarge_ja__contains?: string | null;
  productInfomation_descriptionLarge_chi__eq?: string | null;
  productInfomation_descriptionLarge_chi__not_eq?: string | null;
  productInfomation_descriptionLarge_chi__contains?: string | null;
  productInfomation_descriptionLarge_ot__eq?: string | null;
  productInfomation_descriptionLarge_ot__not_eq?: string | null;
  productInfomation_descriptionLarge_ot__contains?: string | null;
  productInfomation_startPoint_ko__eq?: string | null;
  productInfomation_startPoint_ko__not_eq?: string | null;
  productInfomation_startPoint_ko__contains?: string | null;
  productInfomation_startPoint_en__eq?: string | null;
  productInfomation_startPoint_en__not_eq?: string | null;
  productInfomation_startPoint_en__contains?: string | null;
  productInfomation_startPoint_ja__eq?: string | null;
  productInfomation_startPoint_ja__not_eq?: string | null;
  productInfomation_startPoint_ja__contains?: string | null;
  productInfomation_startPoint_chi__eq?: string | null;
  productInfomation_startPoint_chi__not_eq?: string | null;
  productInfomation_startPoint_chi__contains?: string | null;
  productInfomation_startPoint_ot__eq?: string | null;
  productInfomation_startPoint_ot__not_eq?: string | null;
  productInfomation_startPoint_ot__contains?: string | null;
  productInfomation_startTime_ko__eq?: string | null;
  productInfomation_startTime_ko__not_eq?: string | null;
  productInfomation_startTime_ko__contains?: string | null;
  productInfomation_startTime_en__eq?: string | null;
  productInfomation_startTime_en__not_eq?: string | null;
  productInfomation_startTime_en__contains?: string | null;
  productInfomation_startTime_ja__eq?: string | null;
  productInfomation_startTime_ja__not_eq?: string | null;
  productInfomation_startTime_ja__contains?: string | null;
  productInfomation_startTime_chi__eq?: string | null;
  productInfomation_startTime_chi__not_eq?: string | null;
  productInfomation_startTime_chi__contains?: string | null;
  productInfomation_startTime_ot__eq?: string | null;
  productInfomation_startTime_ot__not_eq?: string | null;
  productInfomation_startTime_ot__contains?: string | null;
  productInfomation_include_ko__eq?: string | null;
  productInfomation_include_ko__not_eq?: string | null;
  productInfomation_include_ko__contains?: string | null;
  productInfomation_include_en__eq?: string | null;
  productInfomation_include_en__not_eq?: string | null;
  productInfomation_include_en__contains?: string | null;
  productInfomation_include_ja__eq?: string | null;
  productInfomation_include_ja__not_eq?: string | null;
  productInfomation_include_ja__contains?: string | null;
  productInfomation_include_chi__eq?: string | null;
  productInfomation_include_chi__not_eq?: string | null;
  productInfomation_include_chi__contains?: string | null;
  productInfomation_include_ot__eq?: string | null;
  productInfomation_include_ot__not_eq?: string | null;
  productInfomation_include_ot__contains?: string | null;
  productInfomation_unInclude_ko__eq?: string | null;
  productInfomation_unInclude_ko__not_eq?: string | null;
  productInfomation_unInclude_ko__contains?: string | null;
  productInfomation_unInclude_en__eq?: string | null;
  productInfomation_unInclude_en__not_eq?: string | null;
  productInfomation_unInclude_en__contains?: string | null;
  productInfomation_unInclude_ja__eq?: string | null;
  productInfomation_unInclude_ja__not_eq?: string | null;
  productInfomation_unInclude_ja__contains?: string | null;
  productInfomation_unInclude_chi__eq?: string | null;
  productInfomation_unInclude_chi__not_eq?: string | null;
  productInfomation_unInclude_chi__contains?: string | null;
  productInfomation_unInclude_ot__eq?: string | null;
  productInfomation_unInclude_ot__not_eq?: string | null;
  productInfomation_unInclude_ot__contains?: string | null;
  productInfomation_importantNotice_ko__eq?: string | null;
  productInfomation_importantNotice_ko__not_eq?: string | null;
  productInfomation_importantNotice_ko__contains?: string | null;
  productInfomation_importantNotice_en__eq?: string | null;
  productInfomation_importantNotice_en__not_eq?: string | null;
  productInfomation_importantNotice_en__contains?: string | null;
  productInfomation_importantNotice_ja__eq?: string | null;
  productInfomation_importantNotice_ja__not_eq?: string | null;
  productInfomation_importantNotice_ja__contains?: string | null;
  productInfomation_importantNotice_chi__eq?: string | null;
  productInfomation_importantNotice_chi__not_eq?: string | null;
  productInfomation_importantNotice_chi__contains?: string | null;
  productInfomation_importantNotice_ot__eq?: string | null;
  productInfomation_importantNotice_ot__not_eq?: string | null;
  productInfomation_importantNotice_ot__contains?: string | null;
  productInfomation_region__id__eq?: any | null;
  productInfomation_region__id__not_eq?: any | null;
  productInfomation_region__id__in?: any[] | null;
  productInfomation_region_label_ko__eq?: string | null;
  productInfomation_region_label_ko__not_eq?: string | null;
  productInfomation_region_label_ko__contains?: string | null;
  productInfomation_region_label_en__eq?: string | null;
  productInfomation_region_label_en__not_eq?: string | null;
  productInfomation_region_label_en__contains?: string | null;
  productInfomation_region_label_ja__eq?: string | null;
  productInfomation_region_label_ja__not_eq?: string | null;
  productInfomation_region_label_ja__contains?: string | null;
  productInfomation_region_label_chi__eq?: string | null;
  productInfomation_region_label_chi__not_eq?: string | null;
  productInfomation_region_label_chi__contains?: string | null;
  productInfomation_region_label_ot__eq?: string | null;
  productInfomation_region_label_ot__not_eq?: string | null;
  productInfomation_region_label_ot__contains?: string | null;
  productInfomation_region_type__eq?: CategoryType | null;
  productInfomation_region_type__not_eq?: CategoryType | null;
  productInfomation_region_hyper__eq?: string | null;
  productInfomation_region_hyper__not_eq?: string | null;
  productInfomation_region_hyper__in?: string[] | null;
  productInfomation_category__id__eq?: any | null;
  productInfomation_category__id__not_eq?: any | null;
  productInfomation_category__id__in?: any[] | null;
  productInfomation_category_label_ko__eq?: string | null;
  productInfomation_category_label_ko__not_eq?: string | null;
  productInfomation_category_label_ko__contains?: string | null;
  productInfomation_category_label_en__eq?: string | null;
  productInfomation_category_label_en__not_eq?: string | null;
  productInfomation_category_label_en__contains?: string | null;
  productInfomation_category_label_ja__eq?: string | null;
  productInfomation_category_label_ja__not_eq?: string | null;
  productInfomation_category_label_ja__contains?: string | null;
  productInfomation_category_label_chi__eq?: string | null;
  productInfomation_category_label_chi__not_eq?: string | null;
  productInfomation_category_label_chi__contains?: string | null;
  productInfomation_category_label_ot__eq?: string | null;
  productInfomation_category_label_ot__not_eq?: string | null;
  productInfomation_category_label_ot__contains?: string | null;
  productInfomation_category_type__eq?: CategoryType | null;
  productInfomation_category_type__not_eq?: CategoryType | null;
  productInfomation_category_hyper__eq?: string | null;
  productInfomation_category_hyper__not_eq?: string | null;
  productInfomation_category_hyper__in?: string[] | null;
  categoryMini__id__eq?: any | null;
  categoryMini__id__not_eq?: any | null;
  categoryMini__id__in?: any[] | null;
  categoryMini_label_ko__eq?: string | null;
  categoryMini_label_ko__not_eq?: string | null;
  categoryMini_label_ko__contains?: string | null;
  categoryMini_label_en__eq?: string | null;
  categoryMini_label_en__not_eq?: string | null;
  categoryMini_label_en__contains?: string | null;
  categoryMini_label_ja__eq?: string | null;
  categoryMini_label_ja__not_eq?: string | null;
  categoryMini_label_ja__contains?: string | null;
  categoryMini_label_chi__eq?: string | null;
  categoryMini_label_chi__not_eq?: string | null;
  categoryMini_label_chi__contains?: string | null;
  categoryMini_label_ot__eq?: string | null;
  categoryMini_label_ot__not_eq?: string | null;
  categoryMini_label_ot__contains?: string | null;
  categoryMini_type__eq?: CategoryType | null;
  categoryMini_type__not_eq?: CategoryType | null;
  categoryMini_hyper__eq?: string | null;
  categoryMini_hyper__not_eq?: string | null;
  categoryMini_hyper__in?: string[] | null;
  productInfomation_questionBookOnly__eq?: boolean | null;
  productInfomation_questionBookOnly__not_eq?: boolean | null;
  productInfomation_questionBookOnly__lte?: boolean | null;
  productInfomation_questionBookOnly__gte?: boolean | null;
  productInfomation_adultOnly__eq?: boolean | null;
  productInfomation_adultOnly__not_eq?: boolean | null;
  productInfomation_adultOnly__lte?: boolean | null;
  productInfomation_adultOnly__gte?: boolean | null;
  productInfomation_priceAdult__eq?: number | null;
  productInfomation_priceAdult__not_eq?: number | null;
  productInfomation_priceAdult__lte?: number | null;
  productInfomation_priceAdult__gte?: number | null;
  productInfomation_isPriviate__eq?: boolean | null;
  productInfomation_isPriviate__not_eq?: boolean | null;
  productInfomation_minimumPrice__eq?: number | null;
  productInfomation_minimumPrice__not_eq?: number | null;
  productInfomation_minimumPrice__lte?: number | null;
  productInfomation_minimumPrice__gte?: number | null;
  productInfomation_maxMember__eq?: string | null;
  productInfomation_maxMember__not_eq?: string | null;
  productInfomation_maxMember__gte?: string | null;
  productInfomation_maxMember__lte?: string | null;
  productInfomation_minMember__eq?: string | null;
  productInfomation_minMember__not_eq?: string | null;
  productInfomation_minMember__gte?: string | null;
  productInfomation_minMember__lte?: string | null;
  productInfomation_rangeDay__eq?: string | null;
  productInfomation_rangeDay__not_eq?: string | null;
  productInfomation_rangeDay__gte?: string | null;
  productInfomation_rangeDay__lte?: string | null;
  productInfomation_guideName__eq?: string | null;
  productInfomation_guideName__not_eq?: string | null;
  productInfomation_guideName__contains?: string | null;
  productInfomation_guideNickName__eq?: string | null;
  productInfomation_guideNickName__not_eq?: string | null;
  productInfomation_guideNickName__contains?: string | null;
  productInfomation_guideId__eq?: any | null;
  productInfomation_guideId__not_eq?: any | null;
  productInfomation_status__eq?: ProductStatus | null;
  productInfomation_status__not_eq?: ProductStatus | null;
  productInfomation_address_ko__eq?: string | null;
  productInfomation_address_ko__not_eq?: string | null;
  productInfomation_address_ko__contains?: string | null;
  productInfomation_address_en__eq?: string | null;
  productInfomation_address_en__not_eq?: string | null;
  productInfomation_address_en__contains?: string | null;
  productInfomation_address_ja__eq?: string | null;
  productInfomation_address_ja__not_eq?: string | null;
  productInfomation_address_ja__contains?: string | null;
  productInfomation_address_chi__eq?: string | null;
  productInfomation_address_chi__not_eq?: string | null;
  productInfomation_address_chi__contains?: string | null;
  productInfomation_address_ot__eq?: string | null;
  productInfomation_address_ot__not_eq?: string | null;
  productInfomation_address_ot__contains?: string | null;
  productInfomation_rating__eq?: number | null;
  productInfomation_rating__not_eq?: number | null;
  productInfomation_rating__gte?: number | null;
  productInfomation_rating__lte?: number | null;
  productInfomation_reviewCount__eq?: number | null;
  productInfomation_reviewCount__not_eq?: number | null;
  productInfomation_reviewCount__gte?: number | null;
  productInfomation_reviewCount__lte?: number | null;
  productInfomation_code__eq?: string | null;
  productInfomation_code__not_eq?: string | null;
  productInfomation_code__gte?: string | null;
  productInfomation_code__lte?: string | null;
  productInfomation_position__eq?: ProductPosition[] | null;
  productInfomation_position__not_eq?: ProductPosition[] | null;
  productInfomation_tourDates__eq?: any | null;
  productInfomation_tourDates__not_eq?: any | null;
  productInfomation_tourDates__gte?: any | null;
  productInfomation_tourDates__lte?: any | null;
  productInfomation_nextClose__eq?: any | null;
  productInfomation_nextClose__not_eq?: any | null;
  productInfomation_nextClose__gte?: any | null;
  productInfomation_nextClose__lte?: any | null;
  productInfomation_masterConfirmed__eq?: boolean | null;
  productInfomation_masterConfirmed__not_eq?: boolean | null;
  startDate__eq?: any | null;
  startDate__not_eq?: any | null;
  startDate__gte?: any | null;
  startDate__lte?: any | null;
  endDate__eq?: any | null;
  endDate__not_eq?: any | null;
  endDate__gte?: any | null;
  endDate__lte?: any | null;
  representive__eq?: any | null;
  representive__not_eq?: any | null;
  remain__eq?: string | null;
  remain__not_eq?: string | null;
  remain__gte?: string | null;
  remain__lte?: string | null;
  productIsDeleted__eq?: string | null;
  productIsDeleted__not_eq?: string | null;
  code__eq?: string | null;
  code__not_eq?: string | null;
  number__eq?: string | null;
  number__not_eq?: string | null;
  settlementStatus__eq?: SettlementStatus | null;
  settlementStatus__not_eq?: SettlementStatus | null;
  settlementId__eq?: Status | null;
  settlementId__not_eq?: Status | null;
  tourStatus__eq?: TourStatus | null;
  tourStatus__not_eq?: TourStatus | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  isDeleted__eq?: boolean | null;
  isDeleted__not_eq?: boolean | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface categoryInput {
  _id: any;
  createdAt: any;
  updatedAt: any;
  label: LangInput;
  type: CategoryType;
  order: number;
  hyper?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
