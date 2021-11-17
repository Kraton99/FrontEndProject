import axios from 'axios';
import { REQUEST_SAUCE } from '../../constraints/constraints';

export function requestGetSauces() {
    return axios.request( {
        method: 'GET',
        url: REQUEST_SAUCE
    });
}