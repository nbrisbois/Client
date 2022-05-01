import axios from "axios";
const api = axios.create({
    withCredentials: true
})

const VIDEO_API  = 'http://localhost:4000/api/video'


export const createComment = async (userId, videoID, comment) => {
    const response = await api.post(`${VIDEO_API}/${videoID}/comment/${userId}`, comment)
    return response.data
}

export const findComments = async () => {
    const response = await api.post(`${VIDEO_API}`)
    return response.data
}

export const updateComment = async (comment, id) => {
    const response = await api.post(`${VIDEO_API}/like/${id}`, comment)
    return response
}


export const deleteComment = async (comment) => {
    const reponse = await api.post(`${VIDEO_API}/delete`, comment)
    return reponse
}