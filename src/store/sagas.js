import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import * as api from './api.js'
import * as acttions from './acttion'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getPosts(action) {
   try {
      const {data} = yield api.getPosts();
      console.log(data);
      yield put(acttions.getPostsSuccess(data));
   } catch (e) {
      yield put(acttions.getPostsFail('error',e));
   }
}


export function* mySaga() {
  yield takeLatest("GET_POST", getPosts);
}
  
  function* incrementAsync() {
    yield put({ type: 'INCREMENT' })
  }
  
  function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  }

  export default function* rootSaga() {
    yield all([
        mySaga(),
        incrementAsync(),
        watchIncrementAsync()
    ]);
 }