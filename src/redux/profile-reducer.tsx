import React from 'react';
import {ActionsType} from "./redux-store";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = 'ADD-POST'


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: `It's my first post`, likesCount: 11}
    ],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state = initialState, action: ActionsType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
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


