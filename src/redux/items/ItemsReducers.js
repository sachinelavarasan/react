import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "./ItemsActionTypes";

const initialState = {
  loading: false,
  items: [],
  error: "",
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        loading: false,
        items: action.payload,
        error: "",
      };
    case FETCH_ITEMS_FAILURE:
      return {
        loading: false,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
