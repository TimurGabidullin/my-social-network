import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


type DialogsPropsType = {
    dialogs: {id: number, name: string}[]
    messages:  {id: number, message: string}[]
    newMessageBody: string
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=>void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let {dialogs, messages,newMessageBody,updateNewMessageBody,sendMessage} = props

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = messages.map(m => <Message id={m.id} message={m.message}/>)


    const onSendMessageClick = () => {
        sendMessage();
    }

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageBody(e.currentTarget.value)
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