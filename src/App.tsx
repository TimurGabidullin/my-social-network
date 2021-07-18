import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {RootStateType, updateMewPostText} from "./redux/state";


type AppPropsType = {
    state: RootStateType
    addPost:()=>void
    updateMewPostText:(message:string)=>void
}

const App:React.FC<AppPropsType> = (props) => {

    let {dialogs,messages} = props.state.dialogsPage
    let {profilePage}=props.state
    let {addPost}=props
    let {updateMewPostText}=props

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={profilePage}
                                                              addPost={addPost}
                                                              updateMewPostText={updateMewPostText}/>}/>
            </div>
        </div>
    );
}

export default App;
