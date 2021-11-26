
import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


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
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg"*/}
            {/*        alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}



export default ProfileInfo;