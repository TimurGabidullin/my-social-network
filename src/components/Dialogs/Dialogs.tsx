import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {InitialStateType} from "../../redux/dialogs-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type DialogsPropsType = {
    dialogsPage: InitialStateType
    isAuth: boolean
    sendMessage: (newMessageBody:string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage
    let { sendMessage,} = props

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)


    const addNewMessage=(values:FormDataType)=>{
        sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


type FormDataType = {
    newMessageBody:string
}

const AddMessageForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {

    const {handleSubmit} = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'}/>

            </div>
            <div>
                <button >Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux=reduxForm<FormDataType>({form:'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;