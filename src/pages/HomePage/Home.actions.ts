import * as types from "./Home.constants";

export const createOrderRequested = () => ({
  type: types.CREATE_ORDER_REQUEST,
});

export const createOrderSuccess = (payload: any) => ({
  type: types.CREATE_ORDER_SUCCESS,
  payload,
});

export const createOrderFailed = (payload: any) => ({
  type: types.CREATE_ORDER_FAILURE,
  payload,
});
