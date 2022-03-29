import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

export type InitialStateType = typeof initialState

let initialState = {
    initialized: false as boolean,
}

const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

export const initializedSuccess = () => (
    {
        type: INITIALIZED_SUCCESS,
    } as const
)

export const initializeApp = () => {
    return (dispatch: Dispatch<any>) => {
        let promise = dispatch<any>(getAuthUserData())
        Promise.all([promise]).then(() => {
                dispatch(initializedSuccess())
            })
    }
}

export default appReducer