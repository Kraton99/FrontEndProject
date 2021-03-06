import {SET_PIZZAS} from "../../constraints/constraints"
const pizzasReducer = (state = [], action) => {
    switch(action.type) {
        case SET_PIZZAS:
            const {pizzas} = action;
            return {...state, pizzas};
        default:
            return state;
    }
}

export default pizzasReducer;