import {call, put} from "redux-saga/effects";
import { requestGetPizzas } from "../requests/pizzasRequest";
import {setPizzas} from "../../store/actionCreator"


export function* handleGetPizzas(action) {
    try {
        const response = yield call(requestGetPizzas);
        const { data } = response;
        yield put(setPizzas(data));
    } catch (error) {
        console.log(error);
    }
}