import { baseUrl } from './baseUrl';
import { commonApi } from './commonApi';

export const userRegister = async (body) => {
    return await commonApi("POST", `${baseUrl}/user-register`, body)
}

export const userLogin = async (body) => {
    return await commonApi("POST", `${baseUrl}/user-login`, body)
}

export const addPost = async (body, header) => {
    return await commonApi("POST", `${baseUrl}/add-post`, body, header)
}

export const getAllPosts = async (searchKey) => {
    return await commonApi("GET", `${baseUrl}/get-posts?searchKey=${searchKey}`, {})
}

export const deletePost = async (id) => {
    return await commonApi("DELETE", `${baseUrl}/delete-post/${id}`, {})
}