import React from 'react';
import MyPosts from "./MyPosts"
import {ActionsType, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


//
type MyPostsPropsType = {
    posts:Array<PostType>
    dispatch: (action: ActionsType) => void
    newPostText:string
}




const MyPostsContainer: React.FC<MyPostsPropsType> = ({posts,newPostText,dispatch}) => {


    // let {posts} = props
    // let {newPostText} = props
    // let {dispatch} = props


    const addPostHandler = () => {
        dispatch(addPostActionCreator())
    }

    let onPostChange = (text:string) => {
        if (text) {
            dispatch(updateNewPostTextActionCreator(text))
        }

    }


        return (
            <MyPosts addPost={addPostHandler}
                     updateNewPostText={onPostChange}
                     posts={posts}
                     newPostText={newPostText}/>
        )
    }



export default MyPostsContainer