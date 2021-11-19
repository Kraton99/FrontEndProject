import {SET_INGREDIENTS} from "../../constraints/constraints"
const ingredientsReducer = (state = [], action) => {
    switch(action.type) {
        case SET_INGREDIENTS:
            const {ingredients} = action;
            return {...state, ingredients};
        default:
            return state;
    }
}

export default ingredientsReducer;