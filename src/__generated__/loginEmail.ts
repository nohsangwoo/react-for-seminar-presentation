/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: loginEmail
// ====================================================

export interface loginEmail_loginEmail_userInfo {
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

export interface loginEmail_loginEmail {
  __typename: "loginEmailResult";
  ok: boolean;
  token: string | null;
  error: string | null;
  isConfirmed: boolean | null;
  userInfo: loginEmail_loginEmail_userInfo | null;
}

export interface loginEmail {
  loginEmail: loginEmail_loginEmail;
}

export interface loginEmailVariables {
  email: string;
  passwd: string;
}
