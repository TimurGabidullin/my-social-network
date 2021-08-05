import React from 'react';
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../redux/store";
import MyPostsContainer from "./Profile/MyPosts/MyPostsContainer";



type ProfilePropsType = {
    profilePage:ProfilePageType
    dispatch: (action: ActionsType) => void

}

const Profile: React.FC<ProfilePropsType> = (props) => {
    let {posts} = props.profilePage;
    let {newPostText} = props.profilePage;
    let {dispatch} = props;



    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer posts={posts}
                     newPostText={newPostText}
                     dispatch={dispatch}/>
        </div>
    )
}

export default Profile;