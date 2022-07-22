import axios from "axios";

const getAllPostsRequest = () => {
  return axios.get("/api/posts");
};

const getSinglePostRequest = (postId) => {
  return axios.get(`/api/posts/${postId}`);
};

const createPostRequest = ({ input, image, imageAlt, token, user }) => {
  return axios.post(
    "/api/posts",
    {
      postData: {
        content: input,
        image,
        imageAlt,
        fullName: user.fullName,
      },
    },
    {
      headers: { authorization: token },
    }
  );
};

const editPostRequest = ({ token, image, imageAlt, post, input }) => {
  return axios.post(
    `/api/posts/edit/${post._id}`,
    { postData: { content: input, image, imageAlt } },
    {
      headers: { authorization: token },
    }
  );
};

const deletePostRequest = ({ _id, token }) => {
  return axios.delete(`/api/posts/${_id}`, {
    headers: { authorization: token },
  });
};

const likePostRequest = ({ _id, token }) => {
  return axios.post(
    `/api/posts/like/${_id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const dislikePostRequest = ({ _id, token }) => {
  return axios.post(
    `/api/posts/dislike/${_id}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

const addCommentRequest = ({ postId, commentData, token }) => {
  return axios.post(
    `/api/comments/add/${postId}`,
    { commentData },
    {
      headers: { authorization: token },
    }
  );
};

const editCommentRequest = ({ token, commentData, postId, commentId }) => {
  return axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    {
      headers: { authorization: token },
    }
  );
};

const deleteCommentRequest = ({ token, postId, commentId }) => {
  return axios.post(
    `/api/comments/delete/${postId}/${commentId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export {
  getAllPostsRequest,
  getSinglePostRequest,
  createPostRequest,
  editPostRequest,
  deletePostRequest,
  likePostRequest,
  dislikePostRequest,
  addCommentRequest,
  editCommentRequest,
  deleteCommentRequest,
};
