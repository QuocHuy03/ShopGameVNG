import { AnyAction } from "redux";
import * as types from "./Home.constants";

interface HomeState {
  loading: boolean;
  success: boolean;
  data: null | any;
  error: null | any;
}

const initialState: HomeState = {
  loading: false,
  success: false,
  data: null,
  error: null,
};

export const homeReducer = (
  state: HomeState = initialState,
  action: AnyAction
): HomeState => {
  switch (action.type) {
    case types.CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,

        error: null,
      };

    case types.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
        error: null,
      };

    case types.CREATE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
