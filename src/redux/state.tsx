
const UPDATE_NEW_POST_TEXT ="UPDATE-NEW-POST-TEXT"
const ADD_POST ='ADD-POST'
const UPDATE_NEW_MESSAGE_BODY ="UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE ="SEND-MESSAGE"





export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody:string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof sendMessageActionCreator>

export type StoreType = {
    _state: RootStateType
    _rerenderEntireTree:()=>void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch:(action:ActionsType)=>void
}

const store:StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: `It's my first post`, likesCount: 11}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
            ],
            newMessageBody:''
        },
        sidebar: {}
    },

    _rerenderEntireTree () {
        console.log('state was changed')
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._rerenderEntireTree()
        } else if (action.type === SEND_MESSAGE) {
            const newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageBody = ''
            this._rerenderEntireTree()
        }




    }
}

export const addPostActionCreator = () => (
    {
        type: ADD_POST
    } as const
)

export const updateNewPostTextActionCreator = (newText: string) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
)

export const updateNewMessageBodyActionCreator = (newBody: string) => (
    {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: newBody
    } as const
)

export const sendMessageActionCreator = () => (
    {
        type: SEND_MESSAGE,
    } as const
)

export default store