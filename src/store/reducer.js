import {combineReducers} from "redux";
import entitiesreducer from "./entities";

export default combineReducers({
    entities: entitiesreducer,
})