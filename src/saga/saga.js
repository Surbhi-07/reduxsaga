import { takeEvery, call, put, all} from 'redux-saga/effects';
import axios from 'axios';
import { USER_DATA_REQUEST, userDataSuccess } from '../actions';

export function* userRequest(){
    try{
    const response=yield call (()=>axios.get('https://jsonplaceholder.typicode.com/users'))
    console.log(response)
    yield put (userDataSuccess(response.data))
    }
    catch(error){
        console.log(error)
    }
}
function* sagaRoot(){
    yield all([saga()])
}
export function* saga(){
    yield takeEvery("USER_DATA_REQUEST",userRequest)

}
export default sagaRoot;