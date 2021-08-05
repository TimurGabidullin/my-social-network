import React from 'react';
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Profile/MyPosts/MyPostsContainer";
import {StoreType} from "../redux/redux-store";


type ProfilePropsType = {
    // profilePage: ProfilePageType
    // dispatch: (action: ActionsType) => void
    store: StoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    // let {posts} = props.profilePage;
    // let {newPostText} = props.profilePage;
    // let {dispatch} = props;
    let {store} = props;


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    )
}

export default Profile;