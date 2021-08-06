import React from 'react';
import MyPosts from "./MyPosts"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/redux-store";
import StoreContext from "../../../StoreContext";


type MyPostsContainerPropsType = {
    // store:StoreType
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let {posts} = store.getState().profilePage
                let {newPostText} = store.getState().profilePage
                let {dispatch} = store

                const addPostHandler = () => {
                    dispatch(addPostActionCreator())
                }

                let onPostChange = (text: string) => {
                    if (text) {
                        dispatch(updateNewPostTextActionCreator(text))
                    }

                }

                return <MyPosts addPost={addPostHandler}
                                updateNewPostText={onPostChange}
                                posts={posts}
                                newPostText={newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer