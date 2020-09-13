import * as ActionTypes from "redux/actions/actionTypes";
import update from "immutability-helper";

export const initialState = {
  products: [],
  currenFilterType: ""
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return update(state, {
        products: { $set: action.data }
      });
    case ActionTypes.FILTER_PRODUCTS:
      return update(state, {
        currenFilterType: { $set: action.data }
      });
    default: {
      return state;
    }
  }
};
