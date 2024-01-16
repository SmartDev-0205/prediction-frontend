import axios from "axios"
// const backendUrl = "https://ubsvr.xyz/v2/api"
const backendUrl = "http://127.0.0.1:5005/v2/api"

const axiosPost = async (url, data) => {
    try {
        return await axios.post(backendUrl + url, data)

    } catch (error) {
        console.log(error)
        return;
    }
}
const axiosGet = async (url, data) => {
    try {
        return await axios.get(backendUrl + url, data)

    } catch (error) {
        console.log(error)
        return;
    }
}

export const signIn = async (data) => {
    return await axiosPost("/signIn", data)
}

export const upload = async (data) => {
    return await axiosPost("/upload", data);
}


export const updateProfile = async (data) => {
    return await axiosPost("/updateProfile", data)
}
