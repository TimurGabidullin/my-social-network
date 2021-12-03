import React from 'react';
import MyPosts from "./MyPosts"
import {addPostActionCreator, InitialStateType,} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    profilePage: InitialStateType
}

type MapDispatchToPropsType = {
    addPost: (newPostText:string) => void

}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText))
        },
    }
}

const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer