import {ActionsType, AppStateType} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {InputsType} from "../components/Profile/ProfileDataForm";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

export type PostType = {
    id: number
    message: string
    likesCount: number
}


export type ProfileType = {
    aboutMe: string | null
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        // github : string|null
        // vk: string|null
        // facebook: string|null
        // instagram: string|null
        // twitter: string|null
        // youtube: string|null
        // mainLink: string|null
        [key: string]: string | null
    }
    photos: {
        small: string,
        large: string
    }
} | null


export type InitialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: `It's my first post`, likesCount: 11}
    ],
    profile: null as ProfileType,
    status: '',
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state, posts: [...state.posts, {
                    id: 3,
                    message: action.newPostText,
                    likesCount: 0
                }],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        }

        case SAVE_PHOTO_SUCCESS: {
            // return {...state, profile:{ ...state.profile,photos:action.photos}}

            if (state.profile) return {...state, profile: {...state.profile, photos: action.photos}}
            else return state
        }
        default:
            return state
    }

}

export const addPostActionCreator = (newPostText: string) => (
    {
        type: ADD_POST,
        newPostText
    } as const
)

export const setUserProfile = (profile: ProfileType) => (
    {
        type: SET_USER_PROFILE,
        profile
    } as const
)

export const setStatus = (status: string) => (
    {
        type: SET_STATUS,
        status
    } as const
)

export const savePhotoSuccess = (photos: {
    small: string,
    large: string
}) => (
    {
        type: SAVE_PHOTO_SUCCESS,
        photos
    } as const
)


export const deletePost = (postId: number) => (
    {
        type: DELETE_POST,
        postId
    } as const
)

export const getUserProfile = (userId: string | null) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: string) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch<ActionsType>) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: InputsType, setError: Function,setEditMode:Function) => async (dispatch: Dispatch<any>, getState: () => AppStateType) => {
    const userId = getState().auth.id
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
        setEditMode(false)

    } else {
        setError('error', {
            type: "server",
            message: response.data.messages[0],
        });
        // return Promise.resolve(response.data.messages[0])
    }
}


export default profileReducer


