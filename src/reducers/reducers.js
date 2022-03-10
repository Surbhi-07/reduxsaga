import { USER_DATA_REQUEST, USER_DATA_SUCCESS, USER_DATA_ERROR } from "../actions";

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const userDataRequests = (state = initialState, action) => {
    switch (action.type) {
        case "USER_DATA_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "USER_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case "USER_DATA_ERROR":
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default: return {
            state
        }
    }

}
export default userDataRequests;