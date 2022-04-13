import { combineReducers } from "redux";
import reducer from "./reducer";
import user from "./user"

const appReducer = combineReducers({
    reducer: reducer,
    user:user
})

export default appReducer