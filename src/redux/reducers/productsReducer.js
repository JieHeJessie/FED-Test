import * as ActionTypes from "redux/actions/actionTypes";
import update from "immutability-helper";

const initialState = {
  products: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return update(state, {
        products: { $set: action.data }
      });
    default: {
      return state;
    }
  }
};

export default productsReducer;
