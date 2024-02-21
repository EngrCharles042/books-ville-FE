import { AdminProfilePopUp } from "../../../utils/AdminProfilePopUp.jsx";
import { useEffect, useState } from "react";

export const AdminHeader = ({ userData, setGeneralSearch, setQuery }) => {
  const [profileClick, setProfileCLick] = useState(false);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setQuery(search);

    setTimeout(() => {
      if (search.length < 1) {
        setGeneralSearch(false);
      } else if (search.length > 0) {
        setGeneralSearch(true);
      }
    }, 500);
  }, [search]);

  return (
    <>
      <div className="bg-white fixed top-0 left-0 right-0 shadow-sm flex justify-between py-2 pr-4 pl-3 text-sm text-gray-300 font-tt-norms-pro">
        <div className="flex-1 rounded-lg bg-base-white shadow-sm inset-y-0 left-0 flex items-center justify-start py-1 px-2 border border-gray-300">
          <img
            className="w-4 h-4 object-cover"
            alt=""
            src="/src/assets/images/adminImages/vuesaxlinearsearchnormal@2x.png"
          />
          <div className="flex items-start justify-start py-0.25 px-0.13">
            <img
              className="w-4 h-5 object-contain"
              alt=""
              src="/src/assets/images/adminImages/line-13@2x.png"
            />
            <input
              type="search"
              name="search"
              value={search}
              onChange={handleChange}
              className="text-black text-sm focus:outline-none tracking-normal self-stretch grow whitespace-nowrap w-40 sm:w-64"
              placeholder="Search by Author or Title or Series"
            />
          </div>
        </div>
        <div className="flex items-center justify-start gap-4 text-base-white">
          <div className="w-4 h-4">
            <img
              className="w-4 h-4 object-cover"
              alt=""
              src="/src/assets/images/adminImages/iconoutlinebell@2x.png"
            />
          </div>
          <img
            className="rounded-full w-6 h-6 object-cover cursor-pointer"
            alt="profile picture"
            srcSet={userData?.profilePicture}
            onClick={() => setProfileCLick(!profileClick)}
          />
        </div>
      </div>

      {profileClick && (
        <div className="absolute right-4 top-10 shadow-2xl">
          <AdminProfilePopUp
            handleProfilePop={() => setProfileCLick(!profileClick)}
          />
        </div>
      )}
    </>
  );
};
