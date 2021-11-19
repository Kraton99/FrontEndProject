import {SET_SAUCES} from "../../constraints/constraints"

const saucesReducer = (state = [], action) => {
    switch(action.type) {
        case SET_SAUCES:
            const {sauces} = action;
            return {...state, sauces};
        default:
            return state;
    }
}

export default saucesReducer;