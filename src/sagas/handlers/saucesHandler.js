import {call, put} from "redux-saga/effects";
import { requestGetSauces } from "../requests/sauceRequest.";
import {setSauces} from "../../store/actionCreator"


export function* handleGetSauces(action) {
    try {
        const response = yield call(requestGetSauces);
        const { data } = response;
        yield put(setSauces(data));
    } catch (error) {
        console.log(error);
    }
}