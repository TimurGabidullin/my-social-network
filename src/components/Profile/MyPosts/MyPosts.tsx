import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post"
import {InitialStateType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm,} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";


type MyPostsPropsType = {
    profilePage: InitialStateType
    addPost: (newPostText: string) => void
}

const MyPosts = React.memo((props: MyPostsPropsType) => {

    let state = props.profilePage
    let {addPost} = props

    let postsElements = state.posts.map(p => (
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>))
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = (values: DataFormType) => {
        addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Post</h3>
            <MyPostFormRedux onSubmit={addPostHandler}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

type DataFormType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<DataFormType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={TextArea}
                       name={'newPostText'}
                       validate={[required, maxLength10]}
                       placeholder={'Post message'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}


const MyPostFormRedux = reduxForm<DataFormType>({form: 'profileAddNewPostForm'})(AddNewPostForm)


export default MyPosts