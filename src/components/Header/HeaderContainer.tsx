import React from 'react';
import Header from "./Header";

import { connect } from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";




type MapStateToPropsType = {
    isAuth:boolean
    login:string|null
}

type MapDispatchToPropsType = {
    getAuthUserData:()=>void

}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        login: state.auth.login,
    }
}

type HeaderContainerPropsType = MapStateToPropsType&MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType, any> {


    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer);