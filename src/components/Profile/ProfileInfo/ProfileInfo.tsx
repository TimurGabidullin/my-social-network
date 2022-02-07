
import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile:ProfileType
    status:string
    updateStatus:(string:string)=>void
}

const ProfileInfo:React.FC<ProfileInfoPropsType> = (props) => {

    const {profile,status,updateStatus,}=props

    if(!profile){
        return <Preloader/>
    }


    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}



export default ProfileInfo;