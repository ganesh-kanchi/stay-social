import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavBar, Loader, SuggestedUsers, UserSearch } from "components";
import { ProfileDetails, getAllUsers } from "features/user";
import { getPosts, PostCard } from "features/post";

export const ProfilePage = () => {
    const { username } = useParams();
  const navigate = useNavigate();

  const { posts, isLoading } = useSelector((state) => state.post);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const currentUser = users?.find((user) => user.username === username);
  const currentUserPosts = posts?.filter((post) => post.username === username);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] xl:grid-cols-[13rem_1fr_18rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto">
      <NavBar />

      <div className="sm:border-x border-darkGrey">
        <h1 className="flex items-center px-4 py-2 sticky top-0 bg-[#001527d8] backdrop-blur-sm z-10 border-b border-darkGrey">
          <i
            className="fa-solid fa-arrow-left mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          ></i>
          <span>
            <p className="font-bold tracking-wide">{currentUser?.fullName}</p>
            <p className="text-sm text-lightGrey">
              {currentUserPosts?.length} posts
            </p>
          </span>
        </h1>

        {currentUser ? <ProfileDetails currentUser={currentUser} /> : null}

        {isLoading ? (
          <Loader />
        ) : !currentUser ? (
          <p className="p-4 text-center">User not found.</p>
        ) : currentUserPosts?.length ? (
          [...currentUserPosts]
            ?.reverse()
            .map((post) => <PostCard post={post} key={post._id} />)
        ) : (
          <p className="p-4 text-center">No posts to show.</p>
        )}
      </div>

      <div className="hidden xl:block">
        <UserSearch />
        <SuggestedUsers />
      </div>
    </div>
  );
}