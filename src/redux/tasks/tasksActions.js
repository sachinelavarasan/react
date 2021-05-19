import axios from "axios";
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
} from "./tasksActionTypes";

export const getAllTasks = () => {
  return (dispatch) => {
    dispatch(fetchTasksRequest());
    axios
      .get("http://localhost:4000/tasks/tasks")
      .then((response) => {
        // response.data is the users
        const Tasks = response.data;

        dispatch(fetchTasksSuccess(Tasks));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchTasksFailure(error.message));
      });
  };
};

export const fetchTasksRequest = () => {
  return {
    type: FETCH_TASKS_REQUEST,
  };
};

export const fetchTasksSuccess = (Tasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: Tasks,
  };
};

export const fetchTasksFailure = (error) => {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error,
  };
};
