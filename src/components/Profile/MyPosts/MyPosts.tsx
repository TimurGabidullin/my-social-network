
import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"
import {
    ActionsType, addPostActionCreator,
    PostType, updateNewPostTextActionCreator,

} from "../../../redux/state";


//
type MyPostsPropsType = {
    posts:Array<PostType>
    dispatch: (action: ActionsType) => void
    newPostText:string
}



const MyPosts: React.FC<MyPostsPropsType> = (props) => {


    let {posts} = props
    let {newPostText} = props
    let {dispatch} = props


    let postsElements = posts.map(p => (<Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>))
    let newPostElement=React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
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