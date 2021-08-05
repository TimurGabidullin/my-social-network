import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"





type MyPostsPropsType = {
    // posts:Array<PostType>
    posts:  {id: number, message: string, likesCount: number}[]
    newPostText:string
    addPost:()=>void
    updateNewPostText:(text:string)=>void
}

const MyPosts: React.FC<MyPostsPropsType> = ({posts,newPostText,addPost,updateNewPostText}) => {


    // let {posts} = props
    // let {newPostText} = props
    // let {dispatch} = props


    let postsElements = posts.map(p => (<Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>))
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