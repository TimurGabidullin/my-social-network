import React from "react";
import styles from "../Paginator/Paginator.module.css";

type UsersPropsType = {
    pageSize:number
    totalUsersCount: number
    currentPage:number
    onPageChanged:(pageNumber:number)=>void
}

let Paginator: React.FC<UsersPropsType> = (props) => {

    const {
        pageSize,
        totalUsersCount,
        currentPage,
        onPageChanged,
    } = props

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
            {pages.map(p => {
                    let onPageChangedHandler = () => {
                        onPageChanged(p)
                    }
                    return <span className={currentPage === p ? styles.selectedPage : ''}
                                 onClick={onPageChangedHandler}>{p}</span>
                }
            )}
        </div>

}
export default Paginator