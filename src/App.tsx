import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionsType, RootStateType} from "./redux/store";
import {StoreType} from "./redux/redux-store";


type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
    store: any
}

const App:React.FC<AppPropsType> = (props) => {

    let {dialogs,messages,newMessageBody} = props.state.dialogsPage
    let {profilePage}=props.state
    let {dispatch}=props
    let {store}=props
    // let {updateMewPostText}=props

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs}
                                                              messages={messages}
                                                              newMessageBody={newMessageBody}
                                                              dispatch={dispatch}/>}/>
                <Route path='/profile' render={() => <Profile store={store}/>}
                />
            </div>
        </div>
    );
}

export default App;
