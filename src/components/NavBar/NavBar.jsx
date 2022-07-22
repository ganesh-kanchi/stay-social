import React, {useState} from 'react';
import { HomeOutlined, Tag, BookmarkBorderOutlined, Add } from '@mui/icons-material';
import { NavLink,Link } from 'react-router-dom';
// import { ProfileCard } from '../ProfileCard/ProfileCard';
import { UserAvatar } from '../index';
import { useSelector } from 'react-redux';
import { PostModal } from 'features/post';
import "./NavBar.css";

const activeStyle = {
    backgroundColor: "#001e39",
    borderRadius: "9999px",
    padding: "0.75rem",
    width: "max-content",
    fontWeight: "bold",
  };

export const NavBar = () => {
    const { user } = useSelector((state) => state.auth);
    const { users } = useSelector((state) => state.user);

    const currentUser = users.find((dbUser) => dbUser.username === user.username);

    const [showNewPostModal, setShowNewPostModal] = useState(false);

    return (
        <aside className="sm:sticky bg-dark  flex sm:flex-col sm:justify-between sm:h-screen sm:top-0 sm:overflow-y-auto overflow-x-hidden fixed bottom-0 left-0 w-full items-center  sm:border-0 border-t-2 border-darkGrey sm:z-0 z-40">
      <ul className="flex items-center sm:items-start justify-around  sm:justify-start px-3 py-1 sm:py-4 sm:flex-col gap-3 sm:gap-6 tracking-wide grow">
        <li className="sm:pb-3 sm:px-3 hidden sm:block">
          <Link to="/" className="flex items-center">
            <span className="text-xl hidden lg:inline">Stay Social</span>
          </Link>
        </li>

        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="p-3 w-max hover:bg-darkSecondary hover:rounded-full"
          >
            <HomeOutlined />
            <span className="hidden lg:inline">Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/explore"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-3 w-max hover:bg-darkSecondary hover:rounded-full"
          >
            <Tag />
            <span className="hidden lg:inline">Explore</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/bookmarks"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-3 w-max hover:bg-darkSecondary hover:rounded-full"
          >
            <BookmarkBorderOutlined />
            <span className="hidden lg:inline">Bookmarks</span>
          </NavLink>
        </li>

        <li className="hidden sm:flex px-0 sm:px-1 lg:p-0 w-max lg:w-full">
          <button
            to="/bookmarks"
            className="bg-primary rounded-full w-max lg:w-full py-2 px-3 lg:px-3 bottom-20 right-4 fixed sm:static"
            onClick={() => setShowNewPostModal(true)}
          >
          <Add />
            <span className="hidden lg:inline">New Post</span>
          </button>
        </li>

        <li className="flex sm:hidden">
          <NavLink
            to={`/profile/${currentUser?.username}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-3 w-max hover:bg-darkSecondary hover:rounded-full"
          >
            <UserAvatar user={currentUser} />
          </NavLink>
        </li>
      </ul>

      <ul className="hidden sm:flex tracking-wide pr-2">
        <li>
          <NavLink
            to={`/profile/${currentUser?.username}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="p-3 w-max flex items-center justify-center gap-2 hover:bg-darkSecondary hover:rounded-full"
          >
            <UserAvatar user={currentUser} />

            <div className="text-sm hidden lg:inline">
              <p className="font-bold">{currentUser?.fullName}</p>
              <p className="text-lightGrey font-normal">
                @{currentUser?.username}
              </p>
            </div>
          </NavLink>
        </li>
      </ul>

      {showNewPostModal ? (
        <div
          className="bg-[#00000080] top-0 left-0 fixed w-full h-full z-40 flex justify-center items-center cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <PostModal setShowNewPostModal={setShowNewPostModal} />
        </div>
      ) : null}
    </aside>
    )
}