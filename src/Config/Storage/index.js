import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from 'redux-persist/lib/storage';
import Reducers from './Reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: [],
// };
export const objectType = {};

// const persistedReducer = persistReducer(persistConfig, Reducers);
export const persistedReducer = Reducers;

export const store = createStore(
    persistedReducer,
    composeEnhancer(
        applyMiddleware(thunk)
    ),
);

// export const persistore = persistStore(store);