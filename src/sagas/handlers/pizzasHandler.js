import {all, call, put} from "redux-saga/effects";
import { requestGetPizzas } from "../requests/pizzasRequest";
import {setLoadingPizzas, setPizzas} from "../../store/actionCreator"


export function* handleGetPizzas(action) {
    try {
        const response = yield call(requestGetPizzas);
        const { data } = response;
        yield all([
            put(setPizzas(data)),
            put(setLoadingPizzas(false))
        ]);
    } catch (error) {
        console.log(error);
    }
}