import { REMOVE_FROM_CART, ADD_TO_CART, ADD_SAUCE_TO_CART, REMOVE_SAUCE_FROM_CART, INIT_CART, CART_COOKIE, REMOVE_ALL_SAUCES_FROM_CART} from "../../constraints/constraints";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();
const cartReducer = (aState = {pizzas: [], sauces: []}, aAction) => {
    switch(aAction.type) {
        case ADD_TO_CART:
            const cartEntry = {pizza: aAction.payload.pizza, ingredients: aAction.payload.ingredients};
            aState.pizzas = [...aState.pizzas, cartEntry];
            cookies.set(CART_COOKIE, aState)
            return aState;
        case REMOVE_FROM_CART:
            const copy = [...aState.pizzas];
            copy.splice(aAction.payload, 1);
            aState.pizzas = copy;
            cookies.set(CART_COOKIE, aState)
            return aState;
        case ADD_SAUCE_TO_CART:
            const sauceEntry = aAction.sauce;
            aState.sauces = [...aState.sauces, sauceEntry];
            cookies.set(CART_COOKIE, aState)
            return aState;
        case REMOVE_SAUCE_FROM_CART:
            const id = aState.sauces.findIndex(sauce => sauce.id === aAction.sauce.id);
            const cp = [...aState.sauces];
            cp.splice(id, 1);
            aState.sauces = cp;
            cookies.set(CART_COOKIE, aState)
            return aState
        case INIT_CART:
            const {cart} = aAction;
            return cart;
        case REMOVE_ALL_SAUCES_FROM_CART:
            aState.sauces = [];
            cookies.set(CART_COOKIE, aState)
            return aState;
        default:
            return aState;
    }
}
export default cartReducer;