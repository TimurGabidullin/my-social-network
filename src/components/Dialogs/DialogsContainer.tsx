import React, {ChangeEvent} from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../redux/redux-store";

type DialogsPropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    let {dialogs, messages,newMessageBody} =props.store.getState().dialogsPage
    let {dispatch} = props.store


    const onSendMessageClick = () => {
        dispatch(sendMessageActionCreator());
    }

    const onNewMessageChange = (body:string) => {
        dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
<Dialogs dialogs={dialogs}
         messages={messages}
         newMessageBody={newMessageBody}
         updateNewMessageBody={onNewMessageChange}
         sendMessage={onSendMessageClick}
/>
    )
}


export default DialogsContainer;