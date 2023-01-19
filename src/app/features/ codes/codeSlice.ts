import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { config } from '../../../config'
import {decode as base64_decode, encode as base64_encode} from 'base-64';

//using rtk createapi 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const backendURL = config.BASE_URL

export const codeApi = createApi({
    reducerPath: 'codeApi',
    baseQuery: fetchBaseQuery({ baseUrl: backendURL }),
    endpoints: (builder) => ({
        getAllCodes: builder.query({
            query: (builder) => ({
                headers: new Headers({
                    "Authorization": `Basic ${base64_encode(`${'demo_administrator'}:${'avGO4bCqQ9ME'}`)}`,
                  }),
                url: 'code',
                method: 'GET',
                
            }),
            
        }),
    }),
})

export const { useGetAllCodesQuery } = codeApi