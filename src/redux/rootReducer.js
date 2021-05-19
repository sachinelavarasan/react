import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";
import itemReducer from "./items/ItemsReducers";
import taskReducer from "./tasks/tasksReducers";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
  items: itemReducer,
  tasks: taskReducer,
});

export default rootReducer;
