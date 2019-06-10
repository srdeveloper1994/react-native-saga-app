import { persistStore, persistReducer } from 'redux-persist';
import { createStore,applyMiddleware } from 'redux';
import AppReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import rootSaga from '../sagas/index';

export const initializeStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    const persistConfig = {
        key: 'root',
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, AppReducer);

    let store = createStore(
        persistedReducer,
        applyMiddleware(sagaMiddleware)
    );
    let persistor = persistStore(store);

    sagaMiddleware.run(rootSaga);

    return {store, persistor};
};
