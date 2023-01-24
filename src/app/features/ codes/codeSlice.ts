
import { config } from '../../../config'
import {encode as base64_encode} from 'base-64';

//using rtk createapi 
//your mother this is so much simplier than the old way
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const backendURL = config.BASE_URL

export const codeApi = createApi({
    reducerPath: 'codeApi',
    baseQuery: fetchBaseQuery({ baseUrl: backendURL }),
    tagTypes: ['Code'],
    endpoints: (builder) => ({
        getAllCodes: builder.query({
            query: (code) => ({
                headers: new Headers({
                    "Authorization": `Basic ${base64_encode(`${'demo_administrator'}:${'avGO4bCqQ9ME'}`)}`,
                  }),
                url: 'code',
                method: 'GET',  
                params: {builder}
                
            }),                    
        }),
        getAllCodesByParams: builder.query<any, {CodeType: string, Code: string, Name: string}>({
          query: (arg) => {
            let { CodeType, Code, Name } = arg;
            return {
              headers: new Headers({
                "Authorization": `Basic ${base64_encode(`${'demo_administrator'}:${'avGO4bCqQ9ME'}`)}`,
              }),
              url: `code?CodeType=${CodeType}&Code=${Code}&Name=${Name}`,
             
            };                   
          },
        }),
        addCodes: builder.mutation({
            query: (body) => ({
                headers: new Headers({
                    "Authorization": `Basic ${base64_encode(`${'demo_administrator'}:${'avGO4bCqQ9ME'}`)}`,
                  }),
                url: 'code',
                method: 'POST',   
                body: body,
          }),    
          invalidatesTags: ['Code'],
        }),
        editCodeById: builder.mutation({
            query: (body) => ({
                headers: new Headers({
                    "Authorization": `Basic ${base64_encode(`${'demo_administrator'}:${'avGO4bCqQ9ME'}`)}`,
                  }),
                url: `code/${body.id}`,
                method: 'PATCH',   
                body: body,
          }),
          invalidatesTags: ['Code'],
        }),
        deleteCodes: builder.mutation({
            query: (body) => ({
                headers: new Headers({
                    "Authorization": `Basic ${base64_encode(`${'demo_administrator'}:${'avGO4bCqQ9ME'}`)}`,
                  }),
                url: `code/${body.id}`,
                method: 'DELETE',   
                body: body,
          }), 
          invalidatesTags: ['Code'],
        }),
    }),
   
})

export const { useGetAllCodesQuery, useAddCodesMutation, useDeleteCodesMutation, useEditCodeByIdMutation, useLazyGetAllCodesQuery, useGetAllCodesByParamsQuery } = codeApi