import {ActionsType} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export type UserType = {
    id: string
    photos: {small: string, large: string}
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
}

export type InitialStateType = typeof initialState

let initialState = {
    users: [] as UserType[],
    newPostText: 'it-kamasutra'
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:

                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    })
                }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }

}

export const followAC = (userId: string) => (
    {
        type: FOLLOW,
        userId
    } as const
)

export const unfollowAC = (userId: string) => (
    {
        type: UNFOLLOW,
        userId
    } as const
)

export const setUsersAC = (users:UserType[]) => (
    {
        type: SET_USERS,
        users
    } as const
)


export default usersReducer


