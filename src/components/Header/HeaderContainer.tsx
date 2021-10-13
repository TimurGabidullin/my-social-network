import React from 'react';
import Header from "./Header";
import axios from "axios";
import { connect } from 'react-redux';
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";




type MapStateToPropsType = {
    isAuth:boolean
    login:string|null
}

type MapDispatchToPropsType = {
    setAuthUserData:(id: string | null, email: string | null, login: string | null)=>void

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }

            })
    }

    render() {

        return <Header {...this.props}/>
    }
}

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);