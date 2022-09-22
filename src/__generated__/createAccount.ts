/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createAccount
// ====================================================

export interface createAccount_createAccount_userInfo {
  __typename: "User";
  seqNo: number;
  userId: string;
  accountType: string | null;
  serverLang: string | null;
  userName: string | null;
  email: string | null;
  telNo: string | null;
  grade: string | null;
  picture: string | null;
  locale: string | null;
  comment: string | null;
  status: string | null;
  receive_email: string | null;
  receive_webpush: string | null;
  resetFlag: string | null;
  delFlag: string | null;
  cdatetime: any | null;
  udatetime: any | null;
}

export interface createAccount_createAccount {
  __typename: "createAccountResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
  isLogin: boolean | null;
  userId: string | null;
  userInfo: createAccount_createAccount_userInfo | null;
}

export interface createAccount {
  createAccount: createAccount_createAccount;
}

export interface createAccountVariables {
  email: string;
  passwd: string;
  telNo: string;
  company: string;
  userName: string;
  marketing?: boolean | null;
}
