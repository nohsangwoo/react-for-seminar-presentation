/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: checkPasswordToken
// ====================================================

export interface checkPasswordToken_checkPasswordToken {
  __typename: "checkPasswordTokenResult";
  ok: boolean;
  error: string | null;
  userId: string | null;
}

export interface checkPasswordToken {
  checkPasswordToken: checkPasswordToken_checkPasswordToken;
}

export interface checkPasswordTokenVariables {
  accessToken: string;
}
