import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    follow,
    InitialStateType,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer";

import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void

}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: string) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: string) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

type UsersContainerPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    isFetching: boolean
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    constructor(props: UsersContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setUsers(response.data.items)
            })
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
            />
        </>
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
} as MapDispatchToPropsType)(UsersContainer)