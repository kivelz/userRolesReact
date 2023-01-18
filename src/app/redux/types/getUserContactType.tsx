export const GET_ALL_USER_CONTACT = 'GET_ALL_USER_CONTACT';
export const SET_ALL_USER_CONTACT = 'SET_ALL_USER_CONTACT';

export const GET_ALL_CODE = 'GET_ALL_CODE';
export const SET_ALL_CODE = 'GET_ALL_CODE';

export const getAllCodes = (payload: any) => ({
    type: GET_ALL_CODE,
    payload
})
export const setAllCode = (payload: any) => ({
    type: SET_ALL_CODE,
    payload
})