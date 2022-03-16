import React from "react";
import {ProfileType, saveProfile} from "../../redux/profile-reducer";
import s from './ProfileInfo/ProfileInfo.module.css'
import {useForm, SubmitHandler} from "react-hook-form";
import {useDispatch} from "react-redux";

type ProfileDataFormPropsType = {
    profile: ProfileType
    isOwner?: boolean
    goToEditMode?: () => void
}

export type InputsType = {
    fullName: string
    lookingForAJob: any
    lookingForAJobDescription: string
    aboutMe: string
    contacts:{ [key: string]: string | null}
};


const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile}) => {

    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors}} = useForm<InputsType>(
        {
            defaultValues: {
                fullName: "tttttttttttttttttttttt",
                lookingForAJob:'5',
                lookingForAJobDescription:'',
                aboutMe:'',
                contacts: {
                    github: '',
                    vk: '',
                    facebook: '',
                    instagram: '',
                    twitter: '',
                    youtube: '',
                    mainLink: '',
                }
            }
        }
    );

    const onSubmit: SubmitHandler<InputsType> = formData => {
        dispatch(saveProfile(formData));
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <button>Save</button>
            </div>

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
                    placeholder="My professional skills" {...register("lookingForAJobDescription")}/>
                </div>
            </div>

            <div>
                <b>About me:</b>
                <div><textarea placeholder="About me" {...register("aboutMe")}/></div>
            </div>

            <div>
                <b>Contacts:</b>{
                Object.keys(profile ? profile.contacts : '').map(key => {

                    return <div className={s.contact}>
                        <b>{key}:</b>
                        <div>
                            <input placeholder={key} {...register( `contacts.${key}`)}/>
                        </div>
                    </div>
                })}
            </div>
        </form>
    )
}


export default ProfileDataForm