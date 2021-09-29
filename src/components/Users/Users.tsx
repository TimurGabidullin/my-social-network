import React from 'react'
import userPhoto from "../../assets/images/user.png";
import styles from "./users.module.css";
import {InitialStateType, UserType} from "../../redux/users-reducer";
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    pageSize:number
    totalUsersCount: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    currentPage:number
    setCurrentPage:(pageNumber:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
}

class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <div>
            <div>
                {pages.map(p => <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                                      onClick={() => this.onPageChanged(p)}>{p}</span>)}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
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