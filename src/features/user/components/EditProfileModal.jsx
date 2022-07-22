import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAvatar } from "components";
import { updateProfile } from "features/user";
import { useOnClickOutside } from "customHooks/useOnClickOutside";

export const EditProfileModal = ({ setEditModal }) => {
  const { token, user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const modalRef = useRef();

  const currentUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );

  const [editInput, setEditInput] = useState(currentUser);

  const editChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditInput(() => ({ ...editInput, [name]: value }));
  };

  const editFormHandler = (e) => {
    e.preventDefault();

      dispatch(
        updateProfile({ editInput: { ...currentUser, ...editInput }, token })
      );
    setEditModal(false);
  };

  useOnClickOutside(modalRef, setEditModal);

  return (
    <div
      className="bg-darkSecondary mx-4 text-sm border border-darkGrey p-4 w-80 rounded overflow-y-auto"
      ref={modalRef}
    >
      <form className="flex flex-col gap-2.5" onSubmit={editFormHandler}>
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <button
              className="hover:bg-dark h-min hover:rounded-full px-2 py-0.5 mr-2"
              type="button"
              onClick={() => setEditModal(false)}
            >
              <i className="fa-solid fa-times"></i>
            </button>
            <span className="text-lg">Edit Profile</span>
          </div>

          <button className="bg-primary py-1 px-4 rounded-full" type="submit">
            Save
          </button>
        </div>

        <label className="edit-profile relative w-max cursor-pointer mx-auto my-2">
          

          <UserAvatar
            user={currentUser}
          />

          
        </label>

        <div className="flex flex-col items-center py-1 px-2  rounded border-lightGrey border focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs text-grey">Name</div>
            <input
              className="bg-inherit w-full text-sm outline-none border-none"
              type="text"
              name="fullName"
              value={editInput.fullName}
              onChange={editChangeHandler}
            />
          </label>
        </div>
        <div className="flex flex-col items-center py-1 px-2  rounded border-lightGrey border focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs text-grey">Bio</div>
            <input
              className="bg-inherit w-full text-sm outline-none border-none"
              type="text"
              name="bio"
              value={editInput.bio}
              onChange={editChangeHandler}
            />
          </label>
        </div>
        <div className="flex flex-col items-center py-1 px-2  rounded border-lightGrey border focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs text-grey">Website</div>
            <input
              className="bg-inherit w-full text-sm outline-none border-none"
              type="text"
              name="website"
              value={editInput.website}
              onChange={editChangeHandler}
            />
          </label>
        </div>
      </form>
    </div>
  );
};
