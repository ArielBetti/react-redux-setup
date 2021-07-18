import {
  GET_USER, LOAD_USER_ERROR,
  LOAD_USER_SUCCESS,
} from '../contants/test'

export const getUser = data => ({ type: GET_USER, data });
export const userError = error => ({ type: LOAD_USER_ERROR, error });
export const userSuccess = data => ({ type: LOAD_USER_SUCCESS, data})
