/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: resetPassword
// ====================================================

export interface resetPassword_resetPassword {
  __typename: "resetPasswordResult";
  ok: boolean;
  error: string | null;
}

export interface resetPassword {
  resetPassword: resetPassword_resetPassword;
}

export interface resetPasswordVariables {
  accessToken: string;
  userId: string;
  passwd: string;
  isFindPwd: boolean;
}
