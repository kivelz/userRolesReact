import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import axios from 'axios';

export const codeAPI = () => {
    return axios.get('http://localhost:8080/code', {auth: {
        username: 'admin',
        password: 'admin'
    }})
}