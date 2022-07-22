import "../styles.css";
import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { UserAvatar } from "components";
import { createPost, editPost, setLoadingId } from "features/post";
import { focusInput } from "utilities";
import { useOnClickOutside } from "customHooks/useOnClickOutside";

export const PostModal = ({ post, setShowNewPostModal, setShowOptions }) => {
  const [input, setInput] = useState(post || {});
  const [image, setImage] = useState(null);

  const { token, user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const newPostRef = useRef();
  const modalRef = useRef();

  const currentUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );

  const submitPost = async (e) => {
    e.preventDefault();

    if (post) {
      dispatch(setLoadingId(toast.loading("Updating post")));
      
        dispatch(
          editPost({
            input: input?.content,
            image: input?.image,
            imageAlt: input?.imageAlt,
            token,
            post,
          })
        );
      setShowOptions(false);
    } else {
      dispatch(setLoadingId(toast.loading("Adding post")));

      
        dispatch(
          createPost({
            input: input?.content,
            image: "",
            imageAlt: "",
            token,
            user,
          })
        );
      }

    setInput("");
    setImage(null);
    setShowNewPostModal(false);
    newPostRef.current.innerText = "";
  };

  useEffect(() => {
    if (post) newPostRef.current.innerText = post.content;
  }, [post]);

  useOnClickOutside(modalRef, setShowNewPostModal);

  return (
    <div
      className="grid grid-cols-[2rem_1fr] gap-2 items-start bg-darkSecondary text-sm  border-darkGrey px-4 py-3 cursor-text w-[90%] sm:w-1/2 shadow-dark shadow-lg rounded border"
      onClick={(e) => {
        e.stopPropagation();
        focusInput(newPostRef);
      }}
      ref={modalRef}
    >
      <UserAvatar user={currentUser} />

      <form className="flex flex-col gap-4" onSubmit={submitPost}>
        <div
          role="textbox"
          ref={newPostRef}
          contentEditable="true"
          placeholder="What's happening?"
          className="w-full break-all bg-inherit outline-none mt-1.5"
          onInput={(e) =>
            setInput((prev) => ({
              ...prev,
              content: e.target.textContent,
            }))
          }
        />

        {input?.image || image ? (
          <div className="relative">
            <img
              src={image ? URL.createObjectURL(image) : input?.image}
              className="w-full h-auto rounded-md"
              alt={input?.imageAlt || image.name.split(".")[0]}
            />
            <button
              type="button"
              className="absolute top-1 left-2 text-lg"
              onClick={() =>
                input?.image
                  ? setInput((prev) => ({ ...prev, image: null }))
                  : setImage(null)
              }
            >
              <i className="fa-solid fa-square-xmark"></i>
            </button>
          </div>
        ) : null}

        <div className="flex justify-between gap-2">

          <div className="flex gap-2">
            <button
              type="reset"
              className="border border-primary rounded-full py-1 px-3"
              onClick={() => {
                setShowNewPostModal(false);
                post && setShowOptions(false);
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-primary rounded-full py-1 px-3 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!input?.content?.trim() && !image}
            >
              {post ? "Save" : "Post"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
