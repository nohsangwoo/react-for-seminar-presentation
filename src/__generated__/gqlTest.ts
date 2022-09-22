/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: gqlTest
// ====================================================

export interface gqlTest_gqlTest {
  __typename: "gqlTestResult";
  ok: boolean | null;
  error: string | null;
}

export interface gqlTest {
  gqlTest: gqlTest_gqlTest | null;
}

export interface gqlTestVariables {
  testArgs: string;
}
