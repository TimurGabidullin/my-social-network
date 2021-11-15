
import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile:ProfileType
}

const ProfileInfo:React.FC<ProfileInfoPropsType> = (props) => {

    const {profile}=props

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
                <ProfileStatus status={'Hello my friends'}/>
            </div>

        </div>
    )
}



export default ProfileInfo;