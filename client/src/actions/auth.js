import { AUTH } from '../actionTypes/actionTypes'
import * as api from '../api.index.js'

export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.login(formData)

        dispatch({type: AUTH, data})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}