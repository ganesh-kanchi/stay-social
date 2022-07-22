import "../styles.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { UserAvatar } from "components";
import { createPost, setLoadingId } from "features/post";
import { focusInput } from "utilities";

export const NewPost = () => {
  const [input, setInput] = useState("");

  const { token, user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const newPostRef = useRef();

  const currentUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );

  const submitPost = async (e) => {
    e.preventDefault();

    dispatch(setLoadingId(toast.loading("Adding post")));

      dispatch(createPost({ input, image: "", imageAlt: "", token, user }));

    setInput("");
    newPostRef.current.innerText = "";
  };

  return (
    <div
      className="grid grid-cols-[2rem_1fr] gap-2 items-start bg-darkSecondary text-sm  border-b border-darkGrey px-4 py-3 cursor-text"
      onClick={(e) => {
        e.stopPropagation();
        focusInput(newPostRef);
      }}
    >
      <UserAvatar user={currentUser} />

      <form className="flex flex-col gap-4" onSubmit={submitPost}>
        <div
          role="textbox"
          ref={newPostRef}
          contentEditable="true"
          placeholder="What's happening?"
          className="w-full break-all bg-inherit outline-none mt-1.5"
          onInput={(e) => setInput(e.currentTarget.textContent)}
        />

        <div className="ml-auto flex items-center gap-4">
          

          <button
            type="submit"
            className="bg-primary rounded-full py-1 px-3 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!input.trim()}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};
