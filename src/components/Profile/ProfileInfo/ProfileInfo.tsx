
import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

type ProfileInfoPropsType = {
    profile:ProfileType
    status:string
    updateStatus:(string:string)=>void
    isOwner:boolean
    savePhoto:(photo:File)=>void
}


const ProfileInfo:React.FC<ProfileInfoPropsType> = (props) => {

    const {profile, status, updateStatus, isOwner,savePhoto} = props

    if (!profile) {
        return <Preloader/>
    }


    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }


    return (

        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}



export default ProfileInfo;