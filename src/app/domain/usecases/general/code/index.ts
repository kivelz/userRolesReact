import axios from 'axios';
import { config } from "../../../../../config"

const baseUrl = config.BASE_URL;

export const getAllCodes = () => {
    return axios.get(baseUrl + '/code', {auth: {username: 'demo_administrator', password: 'avGO4bCqQ9ME'}})
    .then(response => response.data)
    .catch(error => error);
 
}