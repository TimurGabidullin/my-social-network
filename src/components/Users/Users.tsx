import React from 'react'
import {InitialStateType, UserType} from "../../redux/users-reducer";
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.png'


type UsersPropsType = {
    users: InitialStateType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}


const Users: React.FC<UsersPropsType> = (props) => {

    let {follow, unfollow, setUsers} = props
    let users = props.users.users

    let getUsers = () => {

        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                setUsers(response.data.items)
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            follow(u.id)
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