import { clearUserData, setUserData } from "../../helpers/util.js";
import { post,get } from "./request.js";



const endpoints = {
    login: 'loginPath',
    register: 'registerPath',
    logout: 'logoutPath'
}



// Adapt user profile to exam reqs (identity,extra,properties,etc.)
export async function login(email, password) {
    const result = await post(endpoints.login,{ email, password })
    setUserData(result)
}
// Adapt user profile to exam reqs (identity,extra,properties,etc.)

export async function register(email, password) {
    const result = await post(endpoints.register,{ email, password })
    setUserData(result)
}

export async function logout(){
    const promise = get(endpoints.logout)
    clearUserData()
    await promise
}

