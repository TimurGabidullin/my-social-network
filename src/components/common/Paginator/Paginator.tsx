import React, {useState} from "react";
import styles from "../Paginator/Paginator.module.css";

type UsersPropsType = {
    pageSize:number
    portionSize:number
    totalItemsCount: number
    currentPage:number
    onPageChanged:(pageNumber:number)=>void
}

let Paginator: React.FC<UsersPropsType> = (props) => {

    const {
        pageSize,
        totalItemsCount,
        currentPage,
        onPageChanged,
        portionSize,
    } = props

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize - 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}

        {pages
            .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                    let onPageChangedHandler = () => {
                        onPageChanged(p)
                    }
                    return <span className={currentPage === p ? styles.selectedPage : ''}
                                 onClick={onPageChangedHandler} key={p}>{p}</span>
                }
            )}

        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}

    </div>

}
export default Paginator