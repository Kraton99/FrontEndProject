import {SET_LOADING_PIZZAS} from "../../constraints/constraints"
const loadingPizzasReducer = (state = true, action) => {
    switch(action.type) {
        case SET_LOADING_PIZZAS:
            const {loadingPizzas} = action
            return loadingPizzas;
        default:
            return state
    }
}

export default loadingPizzasReducer;