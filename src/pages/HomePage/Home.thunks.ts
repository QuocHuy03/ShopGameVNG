import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import * as actions from "./Home.actions";
import { RootState } from "../../reducers";

export const createOrderThunk =
  (payload: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    dispatch(actions.createOrderRequested());
    try {
      dispatch(actions.createOrderSuccess(payload));
      return true;
    } catch (err) {
      dispatch(actions.createOrderFailed(err));
      return Promise.reject(err);
    }
  };

