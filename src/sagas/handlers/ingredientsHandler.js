import {all, call, put} from "redux-saga/effects";
import { requestGetIngredients } from "../requests/ingredientsRequest";
import {setIngredients, setLoadingIngredients} from "../../store/actionCreator"


export function* handleGetIngredients(action) {
    try {
        const response = yield call(requestGetIngredients);
        const { data } = response;
        yield all ([
            put(setIngredients(data)),
            put(setLoadingIngredients(false))
        ]);
    } catch (error) {
        console.log(error);
    }
}