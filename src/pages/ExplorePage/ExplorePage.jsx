import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar, SuggestedUsers, UserSearch } from "components";
import { getPosts, PostCard } from "features/post";
import { getAllUsers } from "features/user";
import { sortByDate } from "utilities";

export const ExplorePage = () => {
  const dispatch = useDispatch();
  let { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  const latestPosts = sortByDate(posts, "Latest");

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] xl:grid-cols-[13rem_1fr_18rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto">
      <NavBar />

      <div className="sm:border-x border-darkGrey">
        <h1 className="text-bold p-4 sticky top-0 bg-[#25394D] backdrop-blur-sm z-10 border-b border-darkGrey flex items-center justify-between">
          Explore
          <div className="block xl:hidden">
            <UserSearch />
          </div>
        </h1>

        <div>
          { latestPosts.length ? (
            [...latestPosts]
              .reverse()
              .map((post) => <PostCard post={post} key={post._id} />)
          ) : (
            <div className="p-4 text-center">No posts</div>
          )}
        </div>
      </div>

      <div className="hidden xl:block">
        <UserSearch />
        <SuggestedUsers />
      </div>
    </div>
  );
};
