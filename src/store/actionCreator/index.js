import { GET_INGREDIENTS, SET_INGREDIENTS, GET_PIZZAS, SET_PIZZAS, SET_SAUCES,
     GET_SAUCES, SET_LOADING_PIZZAS, GET_LOADING_PIZZAS,
      SET_LOADING_INGREDIENTS, GET_LOADING_INGREDIENTS, GET_LOADING_SAUCES, SET_LOADING_SAUCES } from "../../constraints/constraints"
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
export * as actionCreator from '.';