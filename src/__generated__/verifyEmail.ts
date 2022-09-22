/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verifyEmail
// ====================================================

export interface verifyEmail_verifyEmail_userInfo {
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

export interface verifyEmail_verifyEmail {
  __typename: "verifyEmailResult";
  ok: boolean;
  error: string | null;
  token: string | null;
  userInfo: verifyEmail_verifyEmail_userInfo | null;
  isConfirmed: boolean;
}

export interface verifyEmail {
  verifyEmail: verifyEmail_verifyEmail;
}

export interface verifyEmailVariables {
  CONFIRM_CODE: string;
}
