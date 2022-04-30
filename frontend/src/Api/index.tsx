import axios from "axios"

const baseURL = "http://localhost:8080/"
 

const api = axios.create({
    baseURL: baseURL
})

export { api } 