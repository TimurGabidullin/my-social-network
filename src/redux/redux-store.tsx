import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers);


export type ActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof sendMessageActionCreator>


export type StoreType = {
    _state: AppStateType
    _rerenderEntireTree:()=>void
    subscribe: (observer: () => void) => void
    getState: () => AppStateType
    dispatch:(action:ActionsType)=>void
}



export default store