import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CommentModal } from "./CommentModal";
import { deleteComment } from "features/post";
import { followUser, unfollowUser } from "features/user";

export const CommentOptionsModal = ({ comment, setShowOptions, postId }) => {
  const [showCommentModal, setShowCommentModal] = useState(false);

  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);

  const userToFollow = users.find(
    (dbUser) => dbUser.username === comment?.username
  );

  const userAlreadyFollowing = userToFollow?.followers.find(
    (follower) => follower.username === user.username
  );

  return (
    <div className="flex flex-col  bg-dark absolute right-1.5 w-max rounded shadow-dark shadow-lg border border-darkGrey">
      {comment?.username === user.username ? (
        <>
          <button
            className="py-2 px-4 text-left cursor-pointer hover:bg-[#001e396b]"
            onClick={(e) => {
              e.stopPropagation();
              setShowCommentModal(true);
            }}
          >
            <i className="fa-solid fa-pen-to-square mr-2"></i>Edit
          </button>
          <button
            className="py-2 px-4 text-left cursor-pointer text-red hover:bg-[#001e396b]"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(
                deleteComment({ token, commentId: comment._id, postId })
              );
            }}
          >
            <i className="fa-solid fa-trash mr-2"></i>Delete
          </button>
        </>
      ) : (
        <button
          className="py-2 px-4 text-left cursor-pointer hover:bg-[#001e396b]"
          onClick={(e) => {
            e.stopPropagation();
            userAlreadyFollowing
              ? dispatch(
                  unfollowUser({ token, followUserId: userToFollow?._id })
                )
              : dispatch(
                  followUser({ token, followUserId: userToFollow?._id })
                );
            setShowOptions(false);
          }}
        >
          <i
            className={`mr-2 fa-solid fa-user-${
              userAlreadyFollowing ? "xmark" : "plus"
            } `}
          ></i>
          {userAlreadyFollowing ? "Unfollow" : "Follow"}
        </button>
      )}

      {showCommentModal ? (
        <div
          className="bg-[#00000080] top-0 left-0 fixed w-full h-full z-30 flex justify-center items-center cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <CommentModal
            commentExists={comment}
            postId={postId}
            setShowCommentModal={setShowCommentModal}
          />
        </div>
      ) : null}
    </div>
  );
};
