import axios from "axios"

export const habitsFetchRequest = (token) => {
    return axios.get("/api/habits", {headers:{authorization: token }} );
}

export const habitAddRequest = (token, payload) => {
    // return axios.post("/api/habits", {habit:payload}, {headers: {authorization: token}})
    return axios.post("/api/habits", {habit: payload},{ headers: { authorization: token }});
}