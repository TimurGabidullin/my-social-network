import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../redux/state";





const Post:React.FC<PostType> = (props) => {
    const{message,likesCount}=props;
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9wd1vdvmXNs9AobWt-l-fJi2o1CQpyJRqQ&usqp=CAU'}
                    alt={''}/>
                {message}
                <div>
                    <span>like {likesCount}</span>
                </div>
            </div>
        </div>
    )
}


export default Post;