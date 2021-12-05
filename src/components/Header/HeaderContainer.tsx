import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";





type MapStateToPropsType = {
    isAuth:boolean
    login:string|null
}

type MapDispatchToPropsType = {
    getAuthUserData:()=>void
    logout:()=>void

}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        login: state.auth.login,
    }
}

type HeaderContainerPropsType = MapStateToPropsType&MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {


    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

export default connect(mapStateToProps,{getAuthUserData,logout})(HeaderContainer);