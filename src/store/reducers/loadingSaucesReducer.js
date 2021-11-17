import { SET_LOADING_SAUCES} from "../../constraints/constraints"
const loadingSaucesReducer = (state = true, action) => {
    switch(action.type) {
        case SET_LOADING_SAUCES:
            const {loadingSauces} = action
            console.log(loadingSauces);
            return loadingSauces;
        default:
            return state
    }
}

export default loadingSaucesReducer;