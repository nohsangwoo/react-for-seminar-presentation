/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: afterFirstPurchase
// ====================================================

export interface afterFirstPurchase_afterFirstPurchase {
  __typename: "afterFirstPurchaseResult";
  ok: boolean;
  error: string | null;
}

export interface afterFirstPurchase {
  afterFirstPurchase: afterFirstPurchase_afterFirstPurchase;
}

export interface afterFirstPurchaseVariables {
  userId: string;
  goodsId: number;
  endDt: string;
}
