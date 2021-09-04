/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
 import {Provider} from 'react-redux';
 import configureStore from './redux/stores/configureStore'

const AppRedux=()=>(
    <Provider store={configureStore()}>
        <App></App>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);
