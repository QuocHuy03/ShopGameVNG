import * as types from "./Recharge.constants";

export const getBankListRequested = () => ({
  type: types.GET_BANK_REQUEST,
});

export const getBankListSuccess = (payload: any) => ({
  type: types.GET_BANK_SUCCESS,
  payload,
});

export const getBankListFailed = (payload: any) => ({
  type: types.GET_BANK_FAILURE,
  payload,
});

export const getListBankUserRequested = () => ({
  type: types.GET_LIST_BANK_USER_REQUEST,
});

export const getListBankUserSuccess = (payload: any) => ({
  type: types.GET_LIST_BANK_USER_SUCCESS,
  payload,
});

export const getListBankUserFailed = (payload: any) => ({
  type: types.GET_LIST_BANK_USER_FAILURE,
  payload,
});

