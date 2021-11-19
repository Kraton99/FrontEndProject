import { GET_INGREDIENTS, SET_INGREDIENTS, GET_PIZZAS, SET_PIZZAS, SET_SAUCES,
     GET_SAUCES, SET_LOADING_PIZZAS, GET_LOADING_PIZZAS,
      SET_LOADING_INGREDIENTS, GET_LOADING_INGREDIENTS, GET_LOADING_SAUCES, SET_LOADING_SAUCES,
       ADD_TO_CART, REMOVE_FROM_CART, REMOVE_SAUCE_FROM_CART, ADD_SAUCE_TO_CART, INIT_CART, REMOVE_ALL_SAUCES_FROM_CART } from "../../constraints/constraints"
export const getIngredients = () => ({
    type: GET_INGREDIENTS
})

export const setIngredients = (ingredients) => ({
    type: SET_INGREDIENTS,
    ingredients
})

export const getPizzas = () => ({
    type: GET_PIZZAS
})

export const setPizzas = (pizzas) => ({
    type: SET_PIZZAS,
    pizzas
})

export const setSauces = (sauces) => ({
    type: SET_SAUCES,
    sauces
})

export const getSauces = () => ({
    type: GET_SAUCES
})

export const setLoadingPizzas = (loadingPizzas) => ({
    type: SET_LOADING_PIZZAS,
    loadingPizzas
})

export const getLoadingPizzas = () => ({
    type: GET_LOADING_PIZZAS
})

export const  setLoadingIngredients = (loadingIngredients) => ({
    type: SET_LOADING_INGREDIENTS,
    loadingIngredients
})


export const getLoadingIngredinets = () => ({
    type: GET_LOADING_INGREDIENTS
}) 

export const setLoadingSauces = (loadingSauces) => ({
    type: SET_LOADING_SAUCES,
    loadingSauces
})

export const getLoadingSauces = () => ({
    type: GET_LOADING_SAUCES
})

export const addToCart = (aPizza, aIngredients) => ({
    type: ADD_TO_CART,
    payload: {pizza: aPizza, ingredients: aIngredients}
})

export const removeFromCart = (idx) => ({
    type: REMOVE_FROM_CART,
    payload: idx
})

export const addSauce = (sauce) => ({
    type: ADD_SAUCE_TO_CART,
    sauce
})
export const removeSauce = (sauce) => ({
    type: REMOVE_SAUCE_FROM_CART,
    sauce
})

export const initCart = (cart) => ({
    type: INIT_CART,
    cart
})

export const removeAllSauces = () => ({
    type: REMOVE_ALL_SAUCES_FROM_CART
})
export * as actionCreator from '.';