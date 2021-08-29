import React from 'react';
import {ActionsType} from "./redux-store";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = 'ADD-POST'

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type InitialStateType=typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: `It's my first post`, likesCount: 11}
    ],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state, posts: [...state.posts, {
                    id: 3,
                    message: state.newPostText,
                    likesCount: 0
                }], newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state, newPostText: action.newText
            }
        }
        default:
            return state
    }

}

export const addPostActionCreator = () => (
    {
        type: ADD_POST
    } as const
)

export const updateNewPostTextActionCreator = (newText: string) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
)



export default profileReducer


