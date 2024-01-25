import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios.jsx";
import { ClipLoader } from "react-spinners";

export const AccountSetting = ({
  setDep,
  handleStatus,
  setStatusTitle,
  setStatusMessage,
  setStatusColor,
}) => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [formData, setFormData] = useState({
    email: `${userData.email}`,
    firstName: `${userData.firstName}`,
    lastName: `${userData.lastName}`,
    phoneNumber: `${userData.phoneNumber}`,
  });

  const [display, setDisplay] = useState("profile");

  const handleProfile = () => {
    setDisplay("profile");
  };

  const handlePassword = () => {
    setDisplay("password");
  };

  const [clip, setClip] = useState(false);

  const navigate = useNavigate();

  const enableStatus = (title, message, color) => {
    handleStatus();
    setStatusTitle(title);
    setStatusMessage(message);
    setStatusColor(color);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setClip(true);

      await axios
        .put("/user/account-info", formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setClip(false);

          enableStatus(
            "Congratulations",
            "Update Successful",
            "Your contact information has been updated successfully",
          );
          console.log(response.data.data);
        });

      // Trigger the UseEffect in the User Component to effect user's details
      setDep();
    } catch (error) {
      setClip(false);

      enableStatus("error", "Oops!", "Something went wrong please try again");

      console.log(error.message);
    }
  };

  return (
    <>
      <div className="bg-white flex flex-col items-stretch mt-[3rem]">
        <span className="self-center flex w-full max-w-[1297px] flex-col mt-5 mb-28 max-md:max-w-full max-md:mb-10">
          <span
            onClick={handleGoBack}
            className="cursor-pointer transition hover:scale-105 items-stretch flex gap-2 self-start"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/05c93399f1248fc1de27bab921526a1825a15da2fa4d259f0e0f0ad954105612?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-gray-900 text-base font-semibold leading-6 tracking-normal grow whitespace-nowrap self-start">
              Go back
            </div>
          </span>
          <div className="flex max-w-full items-stretch ml-56 mt-2 self-start max-md:ml-2.5">
            <span
              onClick={handleProfile}
              className={`cursor-pointer border-b hover:border-green-500 ${display === "profile" ? "border-green-500" : ""} items-stretch flex gap-2 w-[15.9rem]`}
            >
              <div className="py-4 flex gap-2 mx-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/68fe24cfc5b273be11cb96dca232382f498b45732e87c326b59f483095483127?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div
                  className={`${display === "profile" ? "text-green-500" : "text-gray-900"}  text-base leading-6 tracking-normal grow whitespace-nowrap self-start`}
                >
                  Edit Profile
                </div>
              </div>
            </span>
            <span
              onClick={handlePassword}
              className={`cursor-pointer border-b hover:border-green-500 ${display === "password" ? "border-green-500" : ""} items-stretch flex justify-between gap-2 w-[57vw]`}
            >
              <div className="py-4 flex gap-2 pl-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa059d3b1c64ca3910c2cf358695ae049f2b6cab56d6f96dc57173c46bc8888e?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
                <div
                  className={`${display === "password" ? "text-green-500" : "text-gray-900"} text-base leading-6 tracking-normal grow whitespace-nowrap self-start`}
                >
                  Change Password
                </div>
              </div>
            </span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[436px] mx-auto"
          >
            <div className="text-gray-900 text-2xl font-bold leading-8 mt-10 max-md:mt-10">
              Account
            </div>
            <div className="text-gray-500 text-sm leading-5 whitespace-nowrap">
              Manage your Booksville account
            </div>

            <div className="w-fit mx-auto relative">
              <div className="flex-col justify-end overflow-hidden self-center relative flex aspect-square w-[100px] border border-black rounded-[50%] max-w-full mt-10 pl-16 pt-12 pb-0.5 items-start max-md:pl-5">
                <img
                  loading="lazy"
                  srcSet="https://res.cloudinary.com/dpfqbb9pl/image/upload/v1701612334/fkoby8jmumgdzfxcycrh.jpg"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />
              </div>

              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/68fc7dc94bfd300bbf2ecb7ce9c917c726fb967fbccf26dc88a79e4e873ff255?"
                className="cursor-pointer hover:scale-150 transition aspect-square absolute top-[5.5rem] right-0 object-contain object-center overflow-hidden ml-4 mt-6 max-md:ml-2.5"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-center mt-4 max-md:max-w-full"
              >
                Email Address
              </label>
              <span className="relative text-gray-600">
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  id="email"
                  autoComplete="email"
                  placeholder="SandraBloyd@gmail.com"
                  disabled
                  className="items-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-gray-200 self-center flex w-full max-w-full justify-between gap-5 mt-2 px-4 py-3 rounded-lg border-solid max-md:flex-wrap"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4227aace2b02c354625d34b529b0c7dcf5504222140cf00bf95310754c1f3ef3?"
                  className="absolute top-[2.7rem] right-4 aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
              </span>
            </div>

            <div className="mt-5">
              <label
                htmlFor="first-name"
                className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-center mt-4 max-md:max-w-full"
              >
                First Name
              </label>
              <span className="relative text-gray-600">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Sandra"
                  className="items-stretch border border-[color:var(--Grey-300,#D0D5DD)] self-center flex w-full max-w-full justify-between gap-5 mt-2 px-4 py-3 rounded-lg border-solid max-md:flex-wrap"
                />
                {/*<img*/}
                {/*  loading="lazy"*/}
                {/*  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4227aace2b02c354625d34b529b0c7dcf5504222140cf00bf95310754c1f3ef3?"*/}
                {/*  className="absolute top-[2.7rem] right-4 aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"*/}
                {/*/>*/}
              </span>
            </div>

            <div className="mt-5">
              <label
                htmlFor="last-name"
                className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-center mt-4 max-md:max-w-full"
              >
                Last Name
              </label>
              <span className="relative text-gray-600">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  id="last-name"
                  autoComplete="given-name"
                  placeholder="Bloyd"
                  className="items-stretch border border-[color:var(--Grey-300,#D0D5DD)] self-center flex w-full max-w-full justify-between gap-5 mt-2 px-4 py-3 rounded-lg border-solid max-md:flex-wrap"
                />
                {/*<img*/}
                {/*  loading="lazy"*/}
                {/*  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4227aace2b02c354625d34b529b0c7dcf5504222140cf00bf95310754c1f3ef3?"*/}
                {/*  className="absolute top-[2.7rem] right-4 aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"*/}
                {/*/>*/}
              </span>
            </div>

            <div className="mt-5">
              <label
                htmlFor="phone-number"
                className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-center mt-4 max-md:max-w-full"
              >
                Phone Number
              </label>
              <span className=" text-gray-600">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  id="phone-number"
                  autoComplete="phone-number"
                  placeholder={formData.phoneNumber}
                  className="items-stretch border border-[color:var(--Grey-300,#D0D5DD)] self-center flex w-full max-w-full justify-between gap-5 mt-2 px-4 py-3 rounded-lg border-solid max-md:flex-wrap"
                />
              </span>
            </div>

            <button
              style={!clip ? {} : { backgroundColor: "" }}
              type="submit"
              name="submit"
              value="Save Changes"
              className="cursor-pointer transition hover:bg-green-600 text-white text-center text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-center bg-green-500 self-center w-full max-w-full mt-6 px-16 py-3 rounded-lg max-md:px-5"
            >
              {!clip ? (
                "Save"
              ) : (
                <ClipLoader color="#FFFFFF" loading={true} size={20} />
              )}
            </button>
          </form>
        </span>
      </div>
    </>
  );
};
