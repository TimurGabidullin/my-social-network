import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "../ProfileDataForm";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (string: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    const {profile, status, updateStatus, isOwner, savePhoto} = props

    const [editMode, setEditMode] = useState(false)


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

                {editMode
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}/>
                }

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}

            <div>
                <b>Full name:</b>{profile ? profile.fullName : ''}
            </div>

            <div>
                <b>Looking for a job:</b>{profile ? profile.lookingForAJob ? 'yes' : 'no' : ''}
            </div>
            {
                profile && profile.lookingForAJob &&
                <div>
                    <b>My professional skills:</b>{profile ? profile.lookingForAJobDescription : ''}
                </div>
            }
            <div>
                <b>About me:</b>{profile ? profile.aboutMe : ''}
            </div>
            <div>
                <b>Contacts:</b>{
                Object.keys(profile ? profile.contacts : '').map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile ? profile.contacts[key] : ''}/>
                })}
            </div>
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string | null
}

export const Contact: React.FC<ContactPropsType> = (props) => {
    return <div className={s.contact}><b>{props.contactTitle}:</b>{props.contactValue}</div>
}

export default ProfileInfo;