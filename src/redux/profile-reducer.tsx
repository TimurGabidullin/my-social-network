import React from 'react';
import {ActionsType, PostType, ProfilePageType} from "./state";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = 'ADD-POST'

const profileReducer = (state:ProfilePageType, action:ActionsType) => {

    switch (action.type){
        case ADD_POST:
            const newPost: PostType = {
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


