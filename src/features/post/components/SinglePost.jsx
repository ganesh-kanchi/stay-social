import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  NavBar,
  SuggestedUsers,
  UserSearch,
  UserAvatar,
} from "components";
import {
  PostOptionsModal,
  likePost,
  dislikePost,
  getSinglePost,
  resetSinglePost,
  CommentCard,
  addComment,
} from "features/post";
import {
  addBookmark,
  removeBookmark,
  getAllUsers,
  FollowListModal,
} from "features/user";
import { useOnClickOutside } from "customHooks/useOnClickOutside";
import {
  likedByLoggedUser,
  postInBookmarks,
  focusInput,
  fetchPostDate,
  sharePost,
} from "utilities";

export const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { user, token } = useSelector((state) => state.auth);
  const {
    posts,
    singlePost: currentPost,
  } = useSelector((state) => state.post);
  const { users, bookmarks } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [showOptions, setShowOptions] = useState(false);
  const [comment, setComment] = useState("");
  const [showLikesModal, setShowLikesModal] = useState(false);

  const postRef = useRef();
  const newCommentRef = useRef();

  const currentUser = users?.find(
    (dbUser) => dbUser.username === currentPost?.username
  );

  const loggedInUser = users.find(
    (dbUser) => dbUser.username === user.username
  );

  useEffect(() => {
    dispatch(getSinglePost(postId));
    dispatch(getAllUsers());

    return () => dispatch(resetSinglePost());
  }, [posts, postId, dispatch]);

  useOnClickOutside(postRef, setShowOptions);

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] xl:grid-cols-[13rem_1fr_18rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto">
      <NavBar />

      <div className="sm:border-x border-darkGrey">
        <h1 className="text-bold p-4 sticky top-0 bg-[#001527d8] backdrop-blur-sm z-10">
          <i
            className="fa-solid fa-arrow-left mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          ></i>
          Post
        </h1>

        <div>
          {currentPost ? (
            <div
              className="flex flex-col gap-2 bg-darkSecondary text-sm border-b border-darkGrey px-4 py-3 break-all"
              ref={postRef}
            >
              <div className="grid grid-cols-[2rem_1fr] gap-2 ">
                <div
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/profile/${currentPost?.username}`);
                  }}
                >
                  <UserAvatar user={currentUser} />
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <div
                      className="flex gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/profile/${currentPost?.username}`);
                      }}
                    >
                      <div className="flex flex-col cursor-pointer">
                        <span className="font-bold tracking-wide">
                          {currentUser?.fullName}
                        </span>
                        <span className="text-lightGrey -mt-1">
                          @{currentPost?.username}
                        </span>
                      </div>
                      <span className="text-lightGrey">·</span>
                      <div className="text-lightGrey">
                        {fetchPostDate(currentPost?.createdAt)}
                      </div>
                    </div>

                    <div className="relative">
                      <i
                        className="fa-solid fa-ellipsis p-2 cursor-pointer hover:bg-dark hover:rounded-full"
                        onClick={(e) => {
                          setShowOptions((prev) => !prev);
                          e.stopPropagation();
                        }}
                      ></i>

                      {showOptions ? (
                        <PostOptionsModal
                          post={currentPost}
                          setShowOptions={setShowOptions}
                        />
                      ) : null}
                    </div>
                  </div>

                  <div>{currentPost?.content}</div>

                  {currentPost?.image ? (
                    <img
                      src={currentPost?.image}
                      alt={currentPost?.imageAlt}
                      className="w-full h-auto rounded-md"
                    ></img>
                  ) : null}
                </div>
              </div>

              {currentPost?.likes.likeCount > 0 ? (
                <button
                  className="border-t border-darkGrey text-left pt-2 mt-2 cursor-pointer hover:underline"
                  onClick={() => setShowLikesModal(true)}
                >
                  <span className="text-bold">
                    {currentPost?.likes.likeCount}
                  </span>{" "}
                  <span className="text-grey">Likes</span>
                </button>
              ) : null}

              <div className="flex justify-evenly gap-6 pt-1 mt-1 -mb-1 border-t border-darkGrey">
                <div>
                  <button
                    className="cursor-pointer hover:bg-dark hover:rounded-full"
                    onClick={() => {
                      likedByLoggedUser(currentPost, user)
                        ? dispatch(dislikePost({ token, _id: currentPost._id }))
                        : dispatch(likePost({ token, _id: currentPost._id }));
                    }}
                  >
                    <i
                      className={`fa-heart p-2 ${
                        likedByLoggedUser(currentPost, user)
                          ? "fa-solid text-red"
                          : "fa-regular"
                      }`}
                    ></i>
                  </button>
                  {currentPost?.likes.likeCount > 0 && (
                    <span className="ml-1">{currentPost?.likes.likeCount}</span>
                  )}
                </div>

                <div>
                  <button
                    className="cursor-pointer hover:bg-dark hover:rounded-full"
                    onClick={() => focusInput(newCommentRef)}
                  >
                    <i className="fa-regular fa-message p-2 "></i>
                  </button>
                  {currentPost?.comments.length > 0 && (
                    <span className="ml-1">{currentPost?.comments.length}</span>
                  )}
                </div>

                <div>
                  <button
                    className="cursor-pointer hover:bg-dark hover:rounded-full"
                    onClick={() => {
                      postInBookmarks(bookmarks, currentPost?._id)
                        ? dispatch(
                            removeBookmark({ token, _id: currentPost?._id })
                          )
                        : dispatch(
                            addBookmark({ token, _id: currentPost?._id })
                          );
                    }}
                  >
                    <i
                      className={`fa-bookmark p-2 ${
                        postInBookmarks(bookmarks, currentPost?._id)
                          ? "fa-solid text-primary"
                          : "fa-regular"
                      }`}
                    ></i>
                  </button>
                </div>

                <div>
                  <button
                    className="cursor-pointer hover:bg-dark hover:rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      sharePost(currentPost?.id);
                    }}
                  >
                    <i className="fa-solid fa-share-nodes p-2"></i>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-[2rem_1fr] gap-2 pt-3 border-t border-darkGrey">
                <UserAvatar user={loggedInUser} />

                <form
                  className="flex justify-between"
                  onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(
                      addComment({
                        token,
                        commentData: { comment },
                        postId: currentPost._id,
                      })
                    );
                    setComment("");
                  }}
                >
                  <input
                    type="text"
                    required
                    ref={newCommentRef}
                    placeholder="Post your reply"
                    className="outline-none bg-inherit w-full"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />

                  <button
                    className="bg-primary rounded-full py-1 px-3 ml-4 disabled:opacity-50 disabled:cursor-not-allowed w-[5.2rem]"
                    disabled={!comment.trim()}
                    type="submit"
                  >
                    Reply
                  </button>
                </form>
              </div>

              {currentPost?.comments.length > 0
                ? [...currentPost?.comments]
                    ?.reverse()
                    .map((comment) => (
                      <CommentCard
                        comment={comment}
                        key={comment._id}
                        postId={currentPost._id}
                      />
                    ))
                : null}
            </div>
          ) : (
            <p className="p-4 text-center">Post not found</p>
          )}
        </div>

        {showLikesModal ? (
          <div className="bg-[#00000080] top-0 left-0 fixed w-full h-full z-40 flex justify-center items-center">
            <FollowListModal
              followModal={{
                title: "Liked By",
                list: currentPost?.likes.likedBy,
              }}
              setFollowModal={setShowLikesModal}
            />
          </div>
        ) : null}
      </div>

      <div className="hidden xl:block">
        <UserSearch />
        <SuggestedUsers />
      </div>
    </div>
  );
};
