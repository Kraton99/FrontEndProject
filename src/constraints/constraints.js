//API CALLS
export const API_SERVER = "http://localhost:3333/api";
export const REQUEST_PIZZA = API_SERVER + "/pizza";
export const REQUEST_INGREDIENTS = API_SERVER + "/ingredient";
export const REQUEST_SAUCE = API_SERVER + "/sauce";

//REDUX ACTIONS
export const GET_INGREDIENTS = "Get ingredients";
export const SET_INGREDIENTS = "Set ingredients";
export const SET_PIZZAS = "Set pizzas";
export const GET_PIZZAS = "Get pizzas";
export const GET_SAUCES = "Get sauces";
export const SET_SAUCES = "Set sacues";
export const SET_LOADING_PIZZAS = "Set loading pizzas";
export const GET_LOADING_PIZZAS = "Get loading pizzas";
export const SET_LOADING_INGREDIENTS = "Set loading ingredients";
export const GET_LOADING_INGREDIENTS = "Get loading ingredients";
export const SET_LOADING_SAUCES = "Set loading sauces";
export const GET_LOADING_SAUCES = "Get loading sauces";
export const ADD_TO_CART = "Add to cart";
export const REMOVE_FROM_CART = "Remove from cart";
export const ADD_SAUCE_TO_CART = "Add sauce to cart";
export const REMOVE_SAUCE_FROM_CART = "Remove sauce from cart";
export const INIT_CART = "Init cart";


//COOKIES
export const CART_COOKIE = "cart cookie";