import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"
import {InitialStateType} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    profilePage:InitialStateType
    addPost:()=>void
    updateNewPostText:(text:string)=>void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let state=props.profilePage
    let {addPost,updateNewPostText}=props

    let postsElements = state.posts.map(p => (<Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>))
    let newPostElement=React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        addPost()

    }

    let onPostChange = () => {
        if (newPostElement.current) {
            updateNewPostText(newPostElement.current.value)
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={state.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}



export default MyPosts