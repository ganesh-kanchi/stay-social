import { userSlice } from "./userSlice";

export {
  getAllUsers,
  updateProfile,
  getBookmarks,
  addBookmark,
  removeBookmark,
  followUser,
  unfollowUser,
} from "./userSlice";

export { ProfileDetails } from "./components/ProfileDetails";
export { EditProfileModal } from "./components/EditProfileModal";
export { FollowListModal } from "./components/FollowListModal";

export const { setLoading, setSearchVal } = userSlice.actions;
export default userSlice.reducer;
