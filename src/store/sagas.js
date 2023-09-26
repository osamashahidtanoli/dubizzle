// store/sagas.js
import { all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getGistUser, getGistUserFailure, getGistUserSuccess, getSearchList } from './reducers';
import { Octokit } from '@octokit/rest';

// Create an instance of Octokit
const octokit = new Octokit();

// Define your sagas here
function* getGistUserSaga() {
  try {
    const response = yield octokit.gists.listPublic();

    // Dispatch a success action with the fetched data
    yield put(getGistUserSuccess(response.data))
  } catch (error) {
    // Dispatch a failure action if an error occurs
    yield put(getGistUserFailure(error.message));
  }
}

function* getGistUserSearchSaga(action) {
  const {payload = ''} = action;
  try {
    let response = [];
     if(payload) {
       response= yield octokit.gists.listForUser({
        username: payload,
      });
     }
     else {
       response = yield octokit.gists.listPublic();
     }

    // Dispatch a success action with the fetched data
    yield put(getGistUserSuccess(response.data))
  } catch (error) {
    // Dispatch a failure action if an error occurs
    yield put(getGistUserFailure(error.message));
  }
}

// Watcher Saga
function* gistUserSaga() {
  yield all([
    takeEvery(getGistUser, getGistUserSaga),
    takeLatest(getSearchList, getGistUserSearchSaga)
    // Add more sagas as needed
  ]);
}

export default gistUserSaga;
