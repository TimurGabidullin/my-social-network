import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus:(string:string)=>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    const {profile,status,updateStatus,} = props


    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;