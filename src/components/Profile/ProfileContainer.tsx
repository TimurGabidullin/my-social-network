import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";


type MapStatePropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: null|string
    isAuth: boolean
}


type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId: any
    // userId: string
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.authorizedUserId
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/>

            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.FC>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);