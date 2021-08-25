import React from 'react';
import MyPosts from "./MyPosts"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";


type MyPostsContainerPropsType = {}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().profilePage
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
                                profilePage={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}


export default MyPostsContainer