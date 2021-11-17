import {combineReducers, createStore, applyMiddleware} from 'redux'
import pizzasReducer from './reducers/pizzasReducer'
import createSagaMiddleware from '@redux-saga/core';
import { watcherPizza, watcherIngredients, watcherSauces } from '../sagas/rootSaga';
import ingredientsReducer from './reducers/ingredientsReducer';

const rootReducer = combineReducers( {
    pizzasReducer: pizzasReducer,
    ingredientsReducer: ingredientsReducer
});

const saga = createSagaMiddleware();

const sagas = [saga];

const reduxStore = createStore(rootReducer, {}, applyMiddleware(...sagas));

saga.run(watcherPizza);
saga.run(watcherIngredients);
saga.run(watcherSauces);

export default reduxStore;