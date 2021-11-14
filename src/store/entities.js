import {combineReducers} from "redux";
import tasksreducer from "./tasks";
import usersreducer from "./users";
import pinsreducer from "./pins";

export default combineReducers({
    tasks : tasksreducer,
    users: usersreducer,
    pins: pinsreducer,
})