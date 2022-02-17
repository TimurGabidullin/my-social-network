import React from "react";
import {UserType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: string[] | []
}


let Users: React.FC<UsersPropsType> = (props) => {

    const {
        users,
        pageSize,
        totalUsersCount,
        follow,
        unfollow,
        currentPage,
        onPageChanged,
        followingInProgress,
    } = props

    return <div>
        <Paginator pageSize={pageSize} totalItemsCount={totalUsersCount} currentPage={currentPage}
                   onPageChanged={onPageChanged} portionSize={10}/>
        <div>
            {
                users.map(u => <User user={u} follow={follow} unfollow={unfollow}
                                     followingInProgress={followingInProgress}
                                     key={u.id}/>
                )
            }
        </div>
    </div>
}
export default Users