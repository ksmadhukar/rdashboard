/**
 * Create the store with dynamic reducers
 */
import produce from "immer";

import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {all, fork} from 'redux-saga/effects'

export const createReducer = (cases = {}, defaultState = {}) => {
    return (state = defaultState, action) => {
        return produce(state, draft => {
            if (action && action.type && cases[action.type] instanceof Function) {
                cases[action.type](draft, action.payload);
            }
        });
    };
}

/**
 * Combine all reducers in this file and export the combined reducers.
 */
const injectedReducers = {};
const reducers = require.context('./containers', true, /reducer\.js$/);

reducers.keys().forEach(key => {
    Object.keys(reducers(key)).forEach(function (k) {
        injectedReducers[k] = reducers(key)[k];
    });
});


/**
 * Combine all sagas in this file and export the combined sagas.
 */

const injectedSagas = [];
const sagas = require.context('./containers', true, /sagas\.js$/);

sagas.keys().forEach(key => {
    injectedSagas.push(...Object.values(sagas(key)))
})

function* rootSaga() {
    yield all(injectedSagas.map(fork));
}

export default function configureStore(initialState) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // const middlewares = [sagaMiddleware];
    const sagaMiddleware = createSagaMiddleware();

    const enhancers = [applyMiddleware(sagaMiddleware)];

    let store = createStore(
        combineReducers({...injectedReducers}),
        initialState,
        composeEnhancers(...enhancers),
    );

    sagaMiddleware.run(rootSaga);

    return store;

}