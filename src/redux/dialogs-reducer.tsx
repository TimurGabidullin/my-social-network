import React from 'react';
import {ActionsType, DialogsPageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY ="UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE ="SEND-MESSAGE"

const dialogsReducer=(state:DialogsPageType,action:ActionsType)=>{
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
    } else if (action.type === SEND_MESSAGE) {
        const newMessage = {
            id: 4,
            message: state.newMessageBody
        }
        state.messages.push(newMessage)
        state.newMessageBody = ''
    }

return state
}

export default dialogsReducer


