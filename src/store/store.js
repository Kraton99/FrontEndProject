import {combineReducers, createStore, applyMiddleware} from 'redux'
import pizzasReducer from './reducers/pizzasReducer'
import createSagaMiddleware from '@redux-saga/core';
import { watcherPizza, watcherIngredients, watcherSauces } from '../sagas/rootSaga';
import ingredientsReducer from './reducers/ingredientsReducer';
import saucesReducer from './reducers/saucesReducer';
import loadingPizzasReducer from './reducers/loadingPizzasReducer';
import loadingIngredientsReducer from './reducers/loadingIngredientsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingSaucesReducer from './reducers/loadingSaucesReducer';

const rootReducer = combineReducers( {
    pizzasReducer: pizzasReducer,
    ingredientsReducer: ingredientsReducer,
    saucesReducer: saucesReducer,
    loadingPizzasReducer: loadingPizzasReducer,
    loadingIngredientsReducer: loadingIngredientsReducer,
    loadingSaucesReducer: loadingSaucesReducer
});

const saga = createSagaMiddleware();

const sagas = [saga];

const reduxStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(...sagas)));

saga.run(watcherPizza);
saga.run(watcherIngredients);
saga.run(watcherSauces);

export default reduxStore;