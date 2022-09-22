/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: firstPurchase
// ====================================================

export interface firstPurchase_firstPurchase {
  __typename: "firstPurchaseResult";
  ok: boolean;
  error: string | null;
}

export interface firstPurchase {
  firstPurchase: firstPurchase_firstPurchase;
}

export interface firstPurchaseVariables {
  userId: string;
  typeFlag: string;
  product: string;
  smsCnt: number;
  hostCnt: number;
  startDt: string;
  endDt: string;
  periodenddt: string;
}
