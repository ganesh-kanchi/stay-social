import axios from "axios";

export const getAllUserRequest = () => {
  return axios.get("/api/users");
};

export const updateProfileRequest = ({ editInput, token }) => {
  return axios.post(
    "/api/users/edit",
    { userData: editInput },
    { headers: { authorization: token } }
  );
};

export const getBookmarkRequest = (token) => {
  return axios.get("/api/users/bookmark", {
    headers: { authorization: token },
  });
};

export const addBookmarkRequest = ({ token, _id }) => {
  return axios.post(
    `/api/users/bookmark/${_id}`,
    {},
    { headers: { authorization: token } }
  );
};

export const removeBookmarkRequest = ({ token, _id }) => {
  return axios.post(
    `/api/users/remove-bookmark/${_id}`,
    {},
    { headers: { authorization: token } }
  );
};

export const followUserRequest = ({ token, followUserId }) => {
  return axios.post(
    `/api/users/follow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );
};

export const unfollowUserRequest = ({ token, followUserId }) => {
  return axios.post(
    `/api/users/unfollow/${followUserId}`,
    {},
    { headers: { authorization: token } }
  );
};
