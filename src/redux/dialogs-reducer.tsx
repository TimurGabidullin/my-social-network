import React from 'react';
import {ActionsType} from "./redux-store";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type InitialStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ] as DialogType[],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
    ] as MessageType[],
    newMessageBody: ''
}

const dialogsReducer = (state:InitialStateType = initialState, action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const newMessage = {
                id: 4,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyActionCreator = (newBody: string) => (
    {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: newBody
    } as const
)

export const sendMessageActionCreator = () => (
    {
        type: SEND_MESSAGE,
    } as const
)




export default dialogsReducer


