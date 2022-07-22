import { useDispatch, useSelector } from "react-redux";
import { setSearchVal } from "../../features/user";
import { UserSearchModal } from "../index";
import { debounce } from "utilities";

export const UserSearch = () => {
  const { searchVal } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="sticky top-[15px] mr-4 xl:mr-0 z-40">
      <div className="relative mx-4 2xl:my-3 w-full rounded-full border border-darkGrey focus-within:border-primary bg-darkSecondary ">
        <input
          type="text"
          onChange={debounce(
            (e) => dispatch(setSearchVal(e.target.value)),
            400
          )}
          onFocus={debounce((e) => dispatch(setSearchVal(e.target.value)), 400)}
          placeholder="Search users..."
          className="bg-inherit text-sm xl:text-base py-2 px-4 w-[90%] outline-none rounded-full"
        />
        <i className="fa-solid fa-magnifying-glass ml-2 absolute right-4  top-2.5 xl:top-3"></i>
      </div>

      {searchVal.length ? (
        <div className="absolute top-15 w-full mx-4">
          <UserSearchModal />
        </div>
      ) : null}
    </div>
  );
};