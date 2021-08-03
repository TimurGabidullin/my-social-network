import React from 'react';
import {ActionsType, DialogsPageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY ="UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE ="SEND-MESSAGE"

const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {

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


