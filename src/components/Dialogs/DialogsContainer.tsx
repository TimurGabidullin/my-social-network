import React, {ChangeEvent} from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../redux/redux-store";
import StoreContext from "../../StoreContext";

type DialogsContainerPropsType = {
    // store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {


    return (
        <StoreContext.Consumer>{
            (store) => {
                let {dialogs, messages, newMessageBody} = store.getState().dialogsPage
                let {dispatch} = store

                const onSendMessageClick = () => {
                    dispatch(sendMessageActionCreator());
                }

                const onNewMessageChange = (body: string) => {
                    dispatch(updateNewMessageBodyActionCreator(body))
                }
                return <Dialogs dialogs={dialogs}
                                messages={messages}
                                newMessageBody={newMessageBody}
                                updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                />
            }
        }
        </StoreContext.Consumer>
    )
}


export default DialogsContainer;