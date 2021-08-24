import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsContainerPropsType = {
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {


    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().dialogsPage
                let {dispatch} = store

                const onSendMessageClick = () => {
                    dispatch(sendMessageActionCreator());
                }

                const onNewMessageChange = (body: string) => {
                    dispatch(updateNewMessageBodyActionCreator(body))
                }
                return <Dialogs dialogsPage={state}
                                updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                />
            }
        }
        </StoreContext.Consumer>
    )
}


export default DialogsContainer;