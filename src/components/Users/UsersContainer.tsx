import React from 'react'
import Users from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";



type MapStateToPropsType = {
    users: InitialStateType
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) =>void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)