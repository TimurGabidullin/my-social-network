import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS"

export type InitialStateType = typeof initialState

let initialState = {
    id: null as string | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case GET_CAPTCHA_URL_SUCCESS:
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }


        default:
            return state
    }

}

export const setAuthUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => (
    {
        type: SET_USER_DATA,
        payload: {
            id,
            email,
            login,
            isAuth,
        },
    } as const
)

export const getCaptchaUrlSuccess = (captchaUrl: null | string) => (
    {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {
            captchaUrl
        },
    } as const
)

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}


export const loginWithHook = (email: string, password: string, rememberMe: boolean,captcha:any,setError:Function) => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.login(email, password, rememberMe,captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
        console.log(response.data.resultCode)

    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaURL())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        // debugger
        setError('error', {
            type: "server",
            message: message,
        });

    }
    console.log(response.data.resultCode)

}

export const login = (email: string, password: string, rememberMe: boolean,captcha:any) => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.login(email, password, rememberMe,captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaURL())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaURL = () => async (dispatch: Dispatch<any>) => {
    let response = await securityAPI.getCaptchaURL()
    const captcha = response.data.url
    dispatch(getCaptchaUrlSuccess(captcha))
}


export default authReducer