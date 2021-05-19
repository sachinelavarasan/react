import axios from "axios";
import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "./ItemsActionTypes";

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        
        dispatch(fetchItemsSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchItemsFailure(error.message));
      });
  };
};




export const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_REQUEST,
  };
};

export const fetchItemsSuccess = (users) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: users,
  };
};

export const fetchItemsFailure = (error) => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: error,
  };
};
