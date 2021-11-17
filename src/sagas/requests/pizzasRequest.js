import axios from 'axios';
import { REQUEST_PIZZA } from '../../constraints/constraints';

export function requestGetPizzas() {
    return axios.request( {
        method: 'GET',
        url: REQUEST_PIZZA
    });
}