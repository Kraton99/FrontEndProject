import { GET_INGREDIENTS, SET_INGREDIENTS, GET_PIZZAS, SET_PIZZAS, SET_SAUCES, GET_SAUCES } from "../../constraints/constraints"
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

export * as actionCreator from '.';