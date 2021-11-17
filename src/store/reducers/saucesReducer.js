import {SET_SAUCES} from "../../constraints/constraints"
const sauceReducer = (state = [], action) => {
    switch(action.type) {
        case SET_SAUCES:
            const {sauces} = action;
            console.log(sauces);
            return {...state, sauces};
        default:
            return state;
    }
}

export default sauceReducer;