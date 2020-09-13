import * as ActionTypes from "redux/actions/actionTypes";

/**
 * Fetch products
 */
export const getAllProdcuts = () => ({
  type: ActionTypes.GET_ALL_PRODUCTS
});
export const getAllProductsSuccess = (data) => ({
  type: ActionTypes.GET_ALL_PRODUCTS_SUCCESS,
  data
});

/**
 * Filter products
 */
export const filterProducts = (data) => ({
  type: ActionTypes.FILTER_PRODUCTS,
  data
});
