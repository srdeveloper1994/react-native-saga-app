import { fork } from 'redux-saga/effects';
import { watcherUserSaga } from './user.saga';

export default function* rootSaga () {
    yield [
        fork(watcherUserSaga)
    ];
}