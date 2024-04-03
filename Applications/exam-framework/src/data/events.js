import { get,post,del,put } from "./request.js";

const endpoints = {

}

// ADD ENDPOINTS
export async function getAllEvents(){
    return get(endpoints.endpoint)
}

export async function getEventById(id){
    return get(endpoints + id)
}

export async function createEvent(data){
    return post(endpoints,data)
}


export async function updateEvent(id,data){
    return put(endpoints + id,data)
}


export async function deleteEvent(id){
    return del(endpoints + id)
}