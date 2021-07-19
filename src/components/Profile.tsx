import React from 'react';
import MyPosts from "./Profile/MyPosts/MyPosts";
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../redux/state";



type ProfilePropsType = {
    profilePage:ProfilePageType
    // posts:Array<PostType>
    addPost: () => void
    updateMewPostText:(message:string)=>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    let {posts} = props.profilePage;
    let {newPostText} = props.profilePage;
    let {addPost} = props;
    let {updateMewPostText} = props


    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     addPost={addPost}
                     newPostText={newPostText}
                     updateMewPostText={updateMewPostText}/>
        </div>
    )
}

export default Profile;