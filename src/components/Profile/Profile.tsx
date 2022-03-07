import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus:(string:string)=>void
    savePhoto: (photo: File) => void
    isOwner:boolean
}

const Profile: React.FC<ProfilePropsType> = (props) => {

    const {profile,status,updateStatus,isOwner,savePhoto} = props


    return (
        <div>
            <ProfileInfo profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus} savePhoto={savePhoto}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;