import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import * as actions from "./Recharge.actions";
import { RootState } from "../../reducers";
import { bankService } from "../../services/bank.services";

export const getBankListThunk =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    dispatch(actions.getBankListRequested());
    try {
      const response = await bankService.getBankList();
      if (response.status) {
        dispatch(actions.getBankListSuccess(response));
        return Promise.resolve(response);
      } else {
        dispatch(actions.getBankListFailed(response));
        return Promise.reject(response);
      }
    } catch (err) {
      dispatch(actions.getBankListFailed(err));
      return Promise.reject(err);
    }
  };

export const getListBankUserThunk =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    dispatch(actions.getListBankUserRequested());
    try {
      const response = await bankService.getListBankUserAuto();
      if (response.status) {
        dispatch(actions.getListBankUserSuccess(response));
        return Promise.resolve(response);
      } else {
        dispatch(actions.getListBankUserFailed(response));
        return Promise.reject(response);
      }
    } catch (err) {
      dispatch(actions.getListBankUserFailed(err));
      return Promise.reject(err);
    }
  };
