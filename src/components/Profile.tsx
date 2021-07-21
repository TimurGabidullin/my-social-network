import React from 'react';
import MyPosts from "./Profile/MyPosts/MyPosts";
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../redux/state";



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
            <MyPosts posts={posts}
                     newPostText={newPostText}
                     dispatch={dispatch}/>
        </div>
    )
}

export default Profile;