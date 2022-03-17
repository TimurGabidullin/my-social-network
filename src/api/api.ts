import axios from "axios";
import {ProfileType} from "../redux/profile-reducer";
import {InputsType} from "../components/Profile/ProfileDataForm";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'fc9ea6e0-1fb2-438a-8945-f3bcb731cc84'
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId: string|null) {
        console.warn('Obselete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string|null) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    },
    savePhoto(photoFile: File) {
        let formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile:InputsType) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email:string,password:string,rememberMe:boolean=false) {
        return instance.post(`auth/login`,{email,password,rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }


}
