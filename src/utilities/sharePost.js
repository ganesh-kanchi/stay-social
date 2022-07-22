import toast from "react-hot-toast";

export const sharePost = (postId) => {
  navigator.clipboard.writeText(
    `https://stay-social.netlify.app/post/${postId}`
  );
  toast.success("Link copied to clipboard");
};
