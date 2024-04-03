import { clearUserData, setUserData, updateNav } from "../util.js";
import { post,get } from "./request.js";



const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}



// Adapt user profile to exam reqs (identity,extra,properties,etc.)
export async function login(email, password) {
    const result = await post(endpoints.login,{ email, password })
    setUserData(result)
    updateNav()
    page.redirect('/')
}
// Adapt user profile to exam reqs (identity,extra,properties,etc.)

export async function register(email, password) {
    const result = await post(endpoints.register,{ email, password })
    setUserData(result)
    updateNav()
    page.redirect('/')
}

export async function logout(){
    const promise = get(endpoints.logout)
    clearUserData()
    await promise
    updateNav()
    page.redirect('/')
}

