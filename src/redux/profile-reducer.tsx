import React from 'react';
import {ActionsType, PostType, ProfilePageType} from "./state";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = 'ADD-POST'

const profileReducer = (state:ProfilePageType, action:ActionsType) => {
    if (action.type === ADD_POST) {
        const newPost: PostType = {
            id: 3,
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }

    return state
}

export default profileReducer


