import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";
import { Redirect } from "react-router-dom";



type DialogsPropsType = {
    dialogsPage:InitialStateType
    isAuth: boolean
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage
    let {updateNewMessageBody, sendMessage, isAuth} = props

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


    const onSendMessageClick = () => {
        sendMessage();
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageBody(e.currentTarget.value)
    }


    if (!isAuth ) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={state.newMessageBody}
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