import {SET_PIZZAS} from "../../constraints/constraints"
const pizzaReducer = (state = [], action) => {
    switch(action.type) {
        case SET_PIZZAS:
            const {pizzas} = action;
            console.log(pizzas);
            return {...state, pizzas};
        default:
            return state;
    }
}

export default pizzaReducer;