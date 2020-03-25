import axios from 'axios'
import {getAuthorization} from '../auth/AuthStore'

let baseUrl = 'http://localhost:8080'; // 這裡設定網站的 base-url

export const postRequest = (url, params) => {
    const userRequest = axios.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getAuthorization(),
        },
    });
    return userRequest.post(url, params)
};

export const uploadFileRequest = (url, params) => {
    const userRequest = axios.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': getAuthorization()
        },
    });
    return userRequest.post(url, params)
};

export const putRequest = (url, params) => {
    const userRequest = axios.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getAuthorization()
        },
    });
    return userRequest.put(url, params)
};

export const deleteRequest = (url) => {
    const userRequest = axios.create({
        baseURL: baseUrl,
        headers: {
            'Authorization': getAuthorization()
        },
    });
    return userRequest.delete(url)
};

export const getRequest = (url, params) => {
    const userRequest = axios.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getAuthorization(),
        },
    });
    return userRequest.get(url, params)
};