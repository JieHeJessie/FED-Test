import { combineReducers } from "redux";
import * as products from "./productsReducer";

export const reducers = combineReducers({
  productsReducer: products.productsReducer
});
export const initialState = {
  productsReducer: products.initialState
};
