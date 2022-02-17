import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

import {
    follow, requestUsers,
    setCurrentPage,
    unfollow,
    UserType
} from "../../redux/users-reducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
} from "../../redux/users-selectors";


type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalItemsCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[] | []
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (pageNumber: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

let mapStateToProps = (state: AppStateType): { followingInProgress: string[] | []; totalUsersCount: number; pageSize: any; isFetching: boolean; currentPage: number; users: UserType[]} => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

type UsersContainerPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    followingInProgress: string[] | []
    requestUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType, any> {

    constructor(props: UsersContainerPropsType) {
        super(props);
    }

    componentDidMount() {

        this.props.requestUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }


    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   currentPage={this.props.currentPage}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}



export default compose<React.ComponentType>(connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        requestUsers,
    } as MapDispatchToPropsType),
)(UsersContainer)