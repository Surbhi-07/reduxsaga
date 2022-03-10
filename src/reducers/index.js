import { combineReducers } from "redux";
import userDataRequests from "./reducers";
const reducer=combineReducers(
    {
        userDataRequests,
    }
)
export default reducer;