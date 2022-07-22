import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavBar, SuggestedUsers, UserSearch } from "components";
import { PostCard } from "features/post";
import { getBookmarks, getAllUsers } from "features/user";
import { sortByDate } from "utilities";

export const BookmarksPage = () => {
  const { token } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks(token));
    dispatch(getAllUsers());
  }, [dispatch, token]);

  const bookmarkedPosts = posts.filter((dbPost) =>
    bookmarks.find((bookmark) => bookmark === dbPost._id)
  );

  const latestBookmarks = sortByDate(bookmarkedPosts, "Latest");

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] xl:grid-cols-[13rem_1fr_18rem] w-[100%] lg:w-[80%] mb-16 sm:m-auto">
      <NavBar />

      <div className="sm:border-x border-darkGrey">
        <h1 className="text-bold p-4 sticky top-0 bg-[#25394D] backdrop-blur-sm z-10 border-b border-darkGrey flex items-center justify-between">
          Bookmarks
          <div className="block xl:hidden">
            <UserSearch />
          </div>
        </h1>

        <div>
          {latestBookmarks.length ? (
            [...latestBookmarks]
              .reverse()
              .map((bookmarkedPost) => (
                <PostCard post={bookmarkedPost} key={bookmarkedPost._id} />
              ))
          ) : (
            <div className="p-4 text-center">No bookmarks</div>
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
