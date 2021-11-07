import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

import {
    follow, getUsers,
    setCurrentPage,
    unfollow,
    UserType
} from "../../redux/users-reducer";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[] | []
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
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
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    followingInProgress: string[] | []
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType, any> {

    constructor(props: UsersContainerPropsType) {
        super(props);
    }

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setTotalUsersCount(data.totalCount)
        //     this.props.setUsers(data.items)
        // })
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

// let withRedirect=withAuthRedirect(UsersContainer)

// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     getUsers,
// } as MapDispatchToPropsType)(withRedirect)


export default compose<React.ComponentType>(connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers,
    } as MapDispatchToPropsType),
    withAuthRedirect
)(UsersContainer)