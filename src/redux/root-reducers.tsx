import { combineReducers } from "@reduxjs/toolkit";
import changeNumber from "../redux/reducers/counter.reducers";

const rootReducers = combineReducers({
  changeNumber,
});

export default rootReducers;
