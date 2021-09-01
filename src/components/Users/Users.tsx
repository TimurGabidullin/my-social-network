import React from 'react'
import {InitialStateType, UserType} from "../../redux/users-reducer";
import styles from './users.module.css'


type UsersPropsType = {
    users: InitialStateType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}


const Users: React.FC<UsersPropsType> = (props) => {

    let {follow, unfollow, setUsers} = props
    let users = props.users.users
    if (users.length === 0) {
        setUsers([
            {
                id: "1",
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxE8MSljWBpK6-oUjbvc9kL59gnyYJ_7FCjg&usqp=CAU',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            } as UserType,
            {
                id: "2",
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxE8MSljWBpK6-oUjbvc9kL59gnyYJ_7FCjg&usqp=CAU',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            } as UserType,
            {
                id: "3",
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxE8MSljWBpK6-oUjbvc9kL59gnyYJ_7FCjg&usqp=CAU',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            } as UserType
        ])
    }
    return <div>
        {
            users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
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
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>

            </div>)
        }
    </div>
}

export default Users