import { AnyAction } from "redux";
import * as types from "./Recharge.constants";

interface RechargeState {
  loading: boolean;
  banks: null | any;
  bank_autos: null | any;
  error: null | any;
}

const initialState: RechargeState = {
  loading: false,
  banks: null,
  bank_autos: null,
  error: null,
};

export const rechargeReducer = (
  state: RechargeState = initialState,
  action: AnyAction
): RechargeState => {
  switch (action.type) {
    case types.GET_BANK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.GET_BANK_SUCCESS:
      return {
        ...state,
        loading: false,
        banks: action.payload.result,
        error: null,
      };

    case types.GET_BANK_FAILURE:
      return {
        ...state,
        loading: false,
        banks: null,
        error: action.payload,
      };

    case types.GET_LIST_BANK_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.GET_LIST_BANK_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        bank_autos: action.payload.result,
        error: null,
      };

    case types.GET_LIST_BANK_USER_FAILURE:
      return {
        ...state,
        loading: false,
        bank_autos: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
