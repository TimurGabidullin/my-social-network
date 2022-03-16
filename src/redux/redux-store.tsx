import {applyMiddleware, combineReducers, createStore,compose} from "redux";
import profileReducer, {
    addPostActionCreator, deletePost, savePhotoSuccess,
    setStatus,
    setUserProfile,
} from "./profile-reducer";
import dialogsReducer, {sendMessageActionCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess
} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer, {initializedSuccess} from "./app-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer,
})

export type AppStateType = ReturnType<typeof reducers>


 const composeEnhancers =(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type ActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof initializedSuccess>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>


// export type StoreType = {
//     subscribe: (observer: () => void) => void
//     getState: () => AppStateType
//     dispatch: (action: ActionsType) => void
// }
export type StoreType = typeof store

//@ts-ignore
window.store=store

export default store