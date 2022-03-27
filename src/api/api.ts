import axios, {AxiosResponse} from "axios";
import {InputsType} from "../components/Profile/ProfileDataForm";
import {ProfileType} from "../redux/profile-reducer";
import {UserType} from "../redux/users-reducer";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'fc9ea6e0-1fb2-438a-8945-f3bcb731cc84'
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<{ currentPage: number, pageSize: number }, AxiosResponse<ResponseUsersType>>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(userId: string) {
        return instance.delete<{ userId: string }, AxiosResponse<ResponseType>>(`follow/${userId}`)
    },
    follow(userId: string) {
        return instance.post<{ userId: string }, AxiosResponse<ResponseType>>(`follow/${userId}`)
    },
    getProfile(userId: string | null) {
        console.warn('Obselete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string | null) {
        return instance.get<ProfileType>(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get<{ userId: string }, AxiosResponse<string>>(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<{ status: string }, AxiosResponse<ResponseType>>(`profile/status/`, {status})
    },
    savePhoto(photoFile: File) {
        let formData = new FormData();
        formData.append('image', photoFile);
        return instance.put<{ photoFile: File }, AxiosResponse<ResponseType<{
            photos: {
                small: string,
                large: string
            }
        }>>>(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: InputsType) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<AuthType>>(`auth/me`)
    },
    // login(email: string, password: string, rememberMe: boolean = false,captcha:any) {
    //     return instance.post<{
    //         email: string,
    //         password: string,
    //         rememberMe: boolean
    //         captcha:any
    //     }, AxiosResponse<ResponseType<{ userId: string }>>>(`auth/login`, {
    //         email,
    //         password,
    //         rememberMe,
    //         captcha
    //     })
    // },
    login(email: string, password: string, rememberMe: boolean = false,captcha:any) {
        return instance.post<any>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
    },



    logout() {
        return instance.delete<null, AxiosResponse<ResponseType>>(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return instance.get<null, AxiosResponse<{ url: string }>>(`security/get-captcha-url`)
    }
}


type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

type AuthType = {
    id: string
    email: string
    login: string
}


type ResponseUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}


