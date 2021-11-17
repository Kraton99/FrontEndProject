import {takeLatest} from "redux-saga/effects";
import { handleGetPizzas } from "./handlers/pizzasHandler";
import {GET_INGREDIENTS, GET_PIZZAS, GET_SAUCES} from '../constraints/constraints'
import { handleGetIngredients } from "./handlers/ingredientsHandler";
import {handleGetSauces} from "./handlers/saucesHandler";

export function* watcherPizza() {
    yield takeLatest(GET_PIZZAS, handleGetPizzas);
}

export function* watcherIngredients() {
    yield takeLatest(GET_INGREDIENTS, handleGetIngredients);
}

export function* watcherSauces() {
    yield takeLatest(GET_SAUCES, handleGetSauces);
}