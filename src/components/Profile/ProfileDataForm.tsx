import React from "react";
import {ProfileType} from "../../redux/profile-reducer";


type ProfileDataFormPropsType = {
    profile: ProfileType
    isOwner?: boolean
    goToEditMode?: () => void
}


const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile}) => {
    return (
        <form>
            <div>
                <button onClick={goToEditMode}>Save</button>
            </div>
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
        </form>
    )
}
export default ProfileDataForm