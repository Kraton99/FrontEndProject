import {all, call, put} from "redux-saga/effects";
import { requestGetSauces } from "../requests/sauceRequest.";
import {setLoadingSauces, setSauces} from "../../store/actionCreator"


export function* handleGetSauces(action) {
    try {
        const response = yield call(requestGetSauces);
        const { data } = response;
        yield all([
            put(setSauces(data)),
            put(setLoadingSauces(false))
        ]);
    } catch (error) {
        console.log(error);
    }
}