import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'fc9ea6e0-1fb2-438a-8945-f3bcb731cc84'
    },


})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        })
            .then(response => response.data)
    }

}



// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
//     return axios.get(`follow?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true,
//     })
//         .then(response => response.data)
// }