import React, { useEffect } from "react"
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "features/user";
import { SuggestedUsers, NavBar, UserSearch, SortBar } from "components";
import { NewPost, PostCard, getPosts } from "features/post";
import { sortByDate } from "utilities";

export const HomePage = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state)=> state.auth);
    const { users } = useSelector((state)=> state.user);
    const { posts, activeSort } = useSelector((state) => state.post);

    useEffect( () => {
        dispatch(getPosts());
        dispatch(getAllUsers());
    }, [dispatch]);

    const loggedInUser = users.find((dbUser) => dbUser.username === user.username);
    
      const followingUsers = loggedInUser?.following;
    
      const postOfFollowingUsers = posts.filter(
        (post) =>
          followingUsers?.some(
            (followingUser) => followingUser.username === post.username
          )       
        );
    
      const sortedPosts = sortByDate(postOfFollowingUsers, activeSort);

    return (
        <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] lg:w-[80%] xl:grid-cols-[13rem_1fr_18rem] w-[100%] mb-16 sm:m-auto">
            <NavBar />            
            
            <div className="sm:border-x border-darkGrey">
                <h1 className="text-bold p-4 sticky top-0 bg-[#25394D] backdrop-blur-sm z-20 border-b border-darkGrey flex items-center justify-between">
                    Home
                    <div className="block xl:hidden">
                        <UserSearch />
                    </div>
                </h1>

                <div>
                    <NewPost />

                    <SortBar />

                    <div>
                        {sortedPosts?.length ? (
                        [...sortedPosts]
                            .reverse()
                            .map((post) => <PostCard post={post} key={post._id} />)
                        ) : (
                        <div className="p-4 text-center">No posts</div>
                        )
                        }
                    </div>
                </div>
            </div>

            <div className="hidden xl:block">
                <UserSearch />
                <SuggestedUsers /> 
            </div>
                
        </div>
    )
}