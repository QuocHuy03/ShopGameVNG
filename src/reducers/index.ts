import { combineReducers } from "redux";
import { AnyAction } from "redux";
import { homeReducer } from "../pages/HomePage/Home.reducer";
import { rechargeReducer } from "../pages/RechargePage/Recharge.reducer";

export interface RootState {
  recharge: any;
  home: any;
}
export type RootAction = AnyAction;
const rootReducer = combineReducers({
  home: homeReducer,
  recharge: rechargeReducer,
});

export default rootReducer;
