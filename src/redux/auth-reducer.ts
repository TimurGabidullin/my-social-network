import {ActionsType} from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA"


export type InitialStateType = typeof initialState

let initialState = {
    id: null as string | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
}

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        default:
            return state
    }

}

export const setAuthUserData = (id: string | null, email: string | null, login: string | null,) => (
    {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login
        },
    } as const
)


export default authReducer


