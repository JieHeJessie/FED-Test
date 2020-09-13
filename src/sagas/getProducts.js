import { put, takeLatest } from "redux-saga/effects";
import * as ActionTypes from "redux/actions/actionTypes";
import * as actions from "redux/actions/actions";
import mockProducts from "./mock-products.json";

export function* getAllProductsSaga() {
  yield takeLatest(ActionTypes.GET_ALL_PRODUCTS, handleGetAllProduct);
}

function* handleGetAllProduct() {
  /**
   * mock api call to get prodct data from mock-products.json
   */
  yield put(actions.getAllProductsSuccess(mockProducts));
}
