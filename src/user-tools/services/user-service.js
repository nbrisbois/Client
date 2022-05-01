import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;

const TUITS_API = `${API_BASE}/users`;
const api = axios.create({withCredentials: true})

export const register = async (name, username, email, password) => {
    const response = await api.post(`${API_BASE}/register`, {name, username, email, password})
    return response.data
}

export const login = async (username, password) => {
    const response = await api.post(`${API_BASE}/login`, {username, password})
    return response.data
}

export const update = async (avatar) => {
    const response = await api.post(`${API_BASE}/update`, {avatar})
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${API_BASE}/profile`)
    return response.data
}

export const logout = async () => {
    const response = await api.post('http://localhost:4000/api/signout')
    return response
}

export const findUser = async (id) => {
    const repsonse = await api.post(`${API_BASE}/user`, {id})
    return repsonse
}