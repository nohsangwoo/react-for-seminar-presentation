/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserGoods
// ====================================================

export interface getUserGoods_getUserGoods_goods {
  __typename: "Goods";
  seqNo: number;
  userId: string | null;
  purchaseNo: number | null;
  parentNo: number | null;
  companyNo: number | null;
  typeFlag: string | null;
  grade: string | null;
  startDt: string | null;
  endDt: string | null;
  periodEndDt: string | null;
  hostCnt: number | null;
  smsCnt: number | null;
  smsUsedCnt: number | null;
  autoRenewal: string | null;
  isCancel: string | null;
  status: string | null;
  delFlag: string | null;
  cdateTime: any | null;
  udateTime: any | null;
  cancelDateTime: any | null;
}

export interface getUserGoods_getUserGoods {
  __typename: "getUserGoodsResult";
  ok: boolean;
  error: string | null;
  goods: (getUserGoods_getUserGoods_goods | null)[] | null;
}

export interface getUserGoods {
  getUserGoods: getUserGoods_getUserGoods | null;
}

export interface getUserGoodsVariables {
  userId: string;
}
