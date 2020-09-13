import * as ActionTypes from "redux/actions/actionTypes";

export const getAllProdcuts = () => ({
  type: ActionTypes.GET_ALL_PRODUCTS
});
export const getAllProductsSuccess = (data) => ({
  type: ActionTypes.GET_ALL_PRODUCTS_SUCCESS,
  data
});
