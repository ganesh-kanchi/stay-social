
export const sharePost = (postId) => {
  navigator.clipboard.writeText(
    `https://stay-social.netlify.app/post/${postId}`
  );
};
