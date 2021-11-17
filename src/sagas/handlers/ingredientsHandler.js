import {call, put} from "redux-saga/effects";
import { requestGetIngredients } from "../requests/ingredientsRequest";
import {setIngredients} from "../../store/actionCreator"


export function* handleGetIngredients(action) {
    try {
        const response = yield call(requestGetIngredients);
        const { data } = response;
        yield put(setIngredients(data));
    } catch (error) {
        console.log(error);
    }
}