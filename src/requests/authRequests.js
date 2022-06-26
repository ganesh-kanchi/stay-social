import axios from "axios"

const loginRequest = (loginCredentials) => {
  
  return axios.post("/api/auth/login", loginCredentials );
};

const signupRequest = (signupCredentials) => {
    return axios.post("/api/auth/signup", signupCredentials);
}

export { loginRequest, signupRequest };