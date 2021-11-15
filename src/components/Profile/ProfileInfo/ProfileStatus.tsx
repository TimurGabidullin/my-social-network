import React, {FC} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";


type ProfileStatusPropsType = {
    status: string
    // state:{editMode:boolean}
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
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
                    <input autoFocus={true} value={this.props.status} onBlur={this.deactivateEditMode}/>
                </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;