import axios from "axios";

export const loginRequest = (loginInput) => {
  return axios.post("/api/auth/login", loginInput);
};

export const signupRequest = (signUpInput) => {
  return axios.post("/api/auth/signup", signUpInput);
};
