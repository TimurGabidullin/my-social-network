
import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"
import {PostType, ProfilePageType} from "../../../redux/state";

//
type MyPostsPropsType = {
    posts:Array<PostType>
    addPost: () => void
    updateMewPostText:(message:string)=>void
    newPostText:string
}



const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    let {posts} = props
    let {newPostText} = props
    let {addPost} = props
    let {updateMewPostText} = props

    let postsElements = posts.map(p => (<Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>))
    let newPostElement=React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
            addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            updateMewPostText(newPostElement.current.value)
        }
        // updateMewPostText(newPostElement.current.value)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={newPostText} onChange={onPostChange}/>
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