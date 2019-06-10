import { put, call, takeLatest } from 'redux-saga/effects';
import {API_CALL_REQUEST,
    USER_DETAILS,
    API_CALL_FAILURE} from '../actions/types';
import axios from 'axios';

import APIConstant from '../api/apiConstant';

export function* watcherUserSaga() {
    yield takeLatest(API_CALL_REQUEST, workerSaga);
}

function fetchUser() {
    return axios({
        method: 'get',
        url: APIConstant.baseUrl+APIConstant.users
    });
}

function* workerSaga() {
    try {
        const response = yield call(fetchUser);
        // dispatch a success action to the store with the new dog
        yield put({ type: USER_DETAILS, payload: response.data });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: API_CALL_FAILURE, payload: error });
    }
}