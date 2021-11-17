import axios from 'axios';
import { REQUEST_INGREDIENTS } from '../../constraints/constraints';

export function requestGetIngredients() {
    return axios.request( {
        method: 'GET',
        url: REQUEST_INGREDIENTS
    });
}