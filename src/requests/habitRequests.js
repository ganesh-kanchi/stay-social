import axios from "axios"

export const habitsFetchRequest = (token) => {
    return axios.get("/api/habits", {headers:{"authorization": token }} );
}
