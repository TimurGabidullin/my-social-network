import React from 'react';
import MyPosts from "./MyPosts"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/redux-store";




type MyPostsPropsType = {
    store:StoreType
}


const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {


    let {posts} = props.store.getState().profilePage
    let {newPostText} = props.store.getState().profilePage
    let {dispatch} = props.store


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