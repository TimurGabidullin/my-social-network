import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";



const Dialogs: React.FC<DialogsPageType> = (props) => {

        let {dialogs, messages} = props

        let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
        let messagesElements = messages.map(m => (<Message id={m.id} message={m.message}/>))

        return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;