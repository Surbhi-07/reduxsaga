export const USER_DATA_REQUEST='USER_DATA_REQUEST';
export const USER_DATA_SUCCESS='USER_DATA_SUCCESS';
export const USER_DATA_ERROR='USER_DATA_ERROR';
export const userDataRequest =()=>{
    return{
        type: "USER_DATA_REQUEST"
    }
}
export const userDataSuccess =(users)=>{
    return{
        type: "USER_DATA_SUCCESS",
        payload: users
    }
}
export const userDataError =(error)=>{
    return{
        type: "USER_DATA_ERROR",
        payload: error
    }
}