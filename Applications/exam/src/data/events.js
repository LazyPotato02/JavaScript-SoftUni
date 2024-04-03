import { get, post, del, put } from "./request.js";

const endpoints = {
    dashboard: '/data/cyberpunk?sortBy=_createdOn%20desc',
    item: '/data/cyberpunk'
}

export async function getAllEvents() {
    return await get(endpoints.dashboard)
}

export async function getEventById(id) {
    return await get(endpoints.item + '/' + id)
}

export async function createEvent(data) {
    return await post(endpoints.item, data)
}


export async function updateEvent(id, data) {
    return await put(endpoints.item + '/' + id, data)
}


export async function deleteEvent(id) {
    return await del(endpoints.item + '/' + id)
}