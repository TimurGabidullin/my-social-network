import React from "react";
import {ProfileType, saveProfile} from "../../redux/profile-reducer";
import s from './ProfileInfo/ProfileInfo.module.css'
import {useForm, SubmitHandler} from "react-hook-form";
import {useDispatch} from "react-redux";

type ProfileDataFormPropsType = {
    profile: ProfileType
    isOwner?: boolean
    goToEditMode?: () => void
    setEditMode:(mode:boolean)=>void
}

export type InputsType = {
    fullName: string | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string | null
    contacts: { [key: string]: string | null }
}

const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile,setEditMode}) => {

    const dispatch = useDispatch()

    const {register,setError, handleSubmit, formState: {errors}} = useForm<InputsType>(
        {
            defaultValues: {
                fullName: profile ? profile.fullName : '',
                lookingForAJob: profile ? profile.lookingForAJob : false,
                lookingForAJobDescription: profile ? profile.lookingForAJobDescription : '',
                aboutMe: profile ? profile.aboutMe : '',
                contacts: {
                    github: profile ? profile.contacts.github : '',
                    vk: profile ? profile.contacts.vk : '',
                    facebook: profile ? profile.contacts.facebook : '',
                    instagram: profile ? profile.contacts.instagram : '',
                    twitter: profile ? profile.contacts.twitter : '',
                    youtube: profile ? profile.contacts.youtube : '',
                    mainLink: profile ? profile.contacts.mainLink : '',
                }
            }
        }
    )

    const onSubmit: SubmitHandler<InputsType> = formData => {
       dispatch(saveProfile(formData,setError));

        // setError('contacts.vk', {
        //     type: "server",
        //     message: 'zur kutak',
        // });

        // setEditMode(false)

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <button>Save</button>
            </div>
            {errors.contacts && <span>{errors.contacts.vk.message}</span>}

            <div>
                <b>Full name:</b>
                <div><input placeholder="Full name" {...register("fullName", {
                    required: 'This field is required'
                })}/></div>
                {errors.fullName && <span>{errors.fullName.message}</span>}
            </div>

            <div>
                <b>Looking for a job:</b>
                <div><input type={'checkbox'}  {...register("lookingForAJob")}/></div>

            </div>

            <div>
                <b>My professional skills:</b>
                <div><textarea
                    placeholder="My professional skills" {...register("lookingForAJobDescription", {
                    required: 'This field is required'
                })}/>
                    {errors.lookingForAJobDescription && <span>{errors.lookingForAJobDescription.message}</span>}
                </div>
            </div>

            <div>
                <b>About me:</b>
                <div><textarea placeholder="About me" {...register("aboutMe", {
                    required: 'This field is required'
                })}/></div>
                {errors.aboutMe && <span>{errors.aboutMe.message}</span>}

            </div>

            <div>
                <b>Contacts:</b>{
                Object.keys(profile ? profile.contacts : '').map(key => {

                    return <div className={s.contact} key={key}>
                        <b>{key}:</b>
                        <div>
                            <input placeholder={key} {...register(`contacts.${key}`)}/>
                        </div>
                    </div>
                })}
            </div>
        </form>
    )
}


export default ProfileDataForm