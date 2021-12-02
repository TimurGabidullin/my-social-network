import React, {ChangeEvent, FC} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType, setStatus} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";


type ProfileStatusPropsType = {
    status: string
    // state:{editMode:boolean}
    updateStatus:(status:string)=>void
}

type ProfileStatusStateType = {
    editMode: boolean
    status:string
}



class ProfileStatus extends React.Component<ProfileStatusPropsType,ProfileStatusStateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

        this.setState({status: e.currentTarget.value})

    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusStateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }

    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onChange={this.onStatusChange} value={this.state.status}
                           onBlur={this.deactivateEditMode}/>
                </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;