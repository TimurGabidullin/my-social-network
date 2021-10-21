import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    pageSize:number
    totalUsersCount: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    currentPage:number
    onPageChanged:(pageNumber:number)=>void
    toggleFollowingProgress: (isFetching: boolean,userId:string) => void
    followingInProgress:string[]|[]
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
        toggleFollowingProgress,
        followingInProgress,
    } = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(p => {
                    let onPageChangedHandler = () => {
                        onPageChanged(p)
                    }
                    return <span className={currentPage === p ? styles.selectedPage : ''}
                                 onClick={onPageChangedHandler}>{p}</span>
                }
            )}
        </div>
        {
            users.map(u => <div key={u.id}>
                <div>

                    <NavLink to={'/profile/' + u.id}><img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                                          className={styles.userPhoto}/></NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {

                            toggleFollowingProgress(true, u.id)


                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": 'fc9ea6e0-1fb2-438a-8945-f3bcb731cc84'
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        unfollow(u.id)
                                    }
                                    toggleFollowingProgress(false, u.id)
                                })

                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {

                            toggleFollowingProgress(true, u.id)


                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": 'fc9ea6e0-1fb2-438a-8945-f3bcb731cc84'
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        follow(u.id)
                                    }
                                    toggleFollowingProgress(false, u.id)
                                })
                        }}>Follow</button>}
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>

            </div>)
        }

    </div>
}
export default Users