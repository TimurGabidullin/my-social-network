import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import {StoreType} from "./redux/redux-store";


type AppPropsType = {
    // store: StoreType
}

const App:React.FC<AppPropsType> = (props) => {

    // let {store}=props


    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path='/dialogs' render={() => <DialogsContainer/>}
                />
                <Route path='/profile' render={() => <Profile/>}
                />
            </div>
        </div>
    );
}

export default App;
