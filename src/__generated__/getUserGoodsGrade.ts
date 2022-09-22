/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserGoodsGrade
// ====================================================

export interface getUserGoodsGrade_getUserGoodsGrade {
  __typename: "getUserGoodsGradeResult";
  ok: boolean;
  error: string | null;
  grade: string | null;
}

export interface getUserGoodsGrade {
  getUserGoodsGrade: getUserGoodsGrade_getUserGoodsGrade | null;
}

export interface getUserGoodsGradeVariables {
  userId: string;
}
