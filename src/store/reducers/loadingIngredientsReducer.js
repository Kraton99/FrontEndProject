import {SET_LOADING_INGREDIENTS} from "../../constraints/constraints"
const loadingIngredientsReducer = (state = true, action) => {
    switch(action.type) {
        case SET_LOADING_INGREDIENTS:
            const {loadingIngredients} = action
            return loadingIngredients;
        default:
            return state;
    }
}

export default loadingIngredientsReducer;