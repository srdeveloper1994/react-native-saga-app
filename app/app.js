import React, {Component} from 'react';
import { Provider } from 'react-redux';
import MyApp from './navigation/appNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import {initializeStore} from './config/storeConfig';

let {store, persistor} = initializeStore();

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <MyApp />
                </PersistGate>
            </Provider>
        );
    }
}
