import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsType,
    DialogType,
    MessageType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
    dispatch: (action:ActionsType) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let {dialogs, messages,newMessageBody,dispatch} = props

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = messages.map(m => <Message id={m.id} message={m.message}/>)


    const onSendMessageClick = () => {
        dispatch(sendMessageActionCreator());
    }

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        placeholder={'Enter your message'}
                        onChange={onNewMessageChange}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;