import React from 'react'
import userPhoto from "../../assets/images/user.png";
import styles from "./users.module.css";
import {InitialStateType, UserType} from "../../redux/users-reducer";
import axios from "axios";


type UsersPropsType = {
    users: InitialStateType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })

    }

    render() {
        return <div>
            {
                this.props.users.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}


export default Users