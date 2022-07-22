export const UserAvatar = ({ user }) => {
    const avatar = user?.profileAvatar;
    const userInitials = user?.fullName?.split("");
  
    const initialsArray = userInitials?.map((initial) =>{
      return initial[0].toUpperCase()
    });

    const fullnameInitials = initialsArray?.join();
  
    return (
      <span className="user-avatar cursor-pointer select-none">
        {avatar ? (
          <img
            src={avatar}
            alt={user.username}
            className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
          />
        ) : (
          <span className="h-8 w-8 text-sm text-light flex justify-center items-center rounded-full bg-primary">
            {fullnameInitials}
          </span>
        )}
      </span>
    );
  };
  