import {ActionsType} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string,
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
                ...state, posts: state.posts.filter(p=>p.id!=action.postId)
            }
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

export const deletePost = (postId:number) => (
    {
        type: DELETE_POST,
        postId
    } as const
)

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}


export default profileReducer


