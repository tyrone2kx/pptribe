import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import siteReducer from '../reducers/site';
import userReducer from '../reducers/user';


const middlewares = [thunk, createLogger()];

const persistConfig = {
    key: 'pptribeRoot',
    storage: AsyncStorage
}


const appReducer = combineReducers({
    user: userReducer,
    site: siteReducer
})


const rootReducer = (state, action) => {
    return appReducer(state, action)
}


const persistedReducer = persistReducer(persistConfig, rootReducer);


export default () => {
    let store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)))
    let persistor = persistStore(store);
    return { store, persistor }
}
