import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    user: UserType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    followingInProgress: string[] | []
}


let User: React.FC<UsersPropsType> = (props) => {

    const {
        user,
        follow,
        unfollow,
        followingInProgress,
    } = props

    return <div className={styles.user}>
        <div>
            <NavLink to={'/profile/' + user.id}><img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                                     className={styles.userPhoto}/></NavLink>
        </div>


        <div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id)

                }}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id)
                }}>Follow</button>}
        </div>
        <div className={styles.userInfo}>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
        </div>
    </div>
}
export default User