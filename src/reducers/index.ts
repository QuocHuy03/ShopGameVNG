import { combineReducers } from "redux";
import { AnyAction } from "redux";
import { homeReducer } from "../pages/HomePage/Home.reducer";

export interface RootState {
  home: any;
}
export type RootAction = AnyAction;
const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
