import { ClipLoader } from "react-spinners";
import { useState } from "react";
import axios from "../../../api/axios.jsx";
import { useDropzone } from "react-dropzone";

export const ImageUploadModal = ({
  onCancel,
  handleStatus,
  setStatusTitle,
  setStatusMessage,
  setStatusColor,
}) => {
  const [clip, setClip] = useState(false);

  const enableStatus = (title, message, color) => {
    handleStatus();
    setStatusTitle(title);
    setStatusMessage(message);
    setStatusColor(color);
  };

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
    },
  });

  const uploadSingleFile = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePic");

    const token = localStorage.getItem("token");

    try {
      setClip(true);

      await axios
        .post("/user/profile-pic", formData, {
          headers: {
            Authorization: `Bearer ${formData.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setClip(false);

          enableStatus(
            "Congratulations",
            "Your picture have been successfully added",
            "bg-green-600",
          );

          setTimeout(() => {
            onCancel();
          }, 2000);
        });
    } catch (error) {
      setClip(false);

      enableStatus(
        "Oops!",
        "Something went wrong, Picture Upload failed",
        "bg-red-600",
      );
    }
  };

  return (
    <div className="items-stretch bg-white flex max-w-[399px] flex-col p-8 rounded-lg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          uploadSingleFile(uploadedFiles[0]);
        }}
      >
        <div className="items-center flex flex-col px-14 py-0.5">
          <div className="text-gray-900 text-center text-base font-semibold tracking-normal w-full">
            Upload your Image
          </div>
          <div className="text-gray-900 text-center text-sm tracking-normal self-stretch mt-1.5">
            PNG, JPG and GIF file are allowed
          </div>
        </div>
        <div className="items-stretch border border-[color:var(--Gray-200,#E5E7EB)] bg-white flex w-full flex-col mt-8 p-12 rounded-lg border-dashed">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e97cc01fb14e8a911a049a88e861fed731df96bab189e261a33bc1e2641cac5f?"
            className="aspect-[1.56] object-contain object-center w-[70px] overflow-hidden self-center max-w-full"
          />
          <div className="justify-between items-stretch flex gap-1.5 mt-5">
            <div className="text-gray-800 text-base font-medium leading-6 tracking-normal grow whitespace-nowrap">
              Drop your files here or
            </div>
            <div className="text-blue-500 text-center text-base font-semibold leading-6 tracking-normal whitespace-nowrap">
              browse
            </div>
          </div>
          <div className="text-gray-400 text-center text-sm font-medium leading-5 tracking-normal self-center whitespace-nowrap mt-1.5">
            Maximum size: 50MB
          </div>
        </div>

        <span className="justify-between items-center flex gap-5 mt-10 self-center">
          <div
            onClick={onCancel}
            className="hover:bg-red-600 hover:text-white cursor-pointer text-center text-red-500 text-sm font-medium leading-5 tracking-[2px] uppercase whitespace-nowrap justify-center items-stretch border self-stretch grow px-4 py-3 rounded-md border-solid border-red-600"
          >
            Cancel
          </div>
          <button
            style={!clip ? {} : { backgroundColor: "" }}
            type="submit"
            className={`hover:bg-green-600 hover:text-white cursor-pointer ${!clip ? "" : "bg-green-500"} ${!clip ? "text-green-500" : "text-white"} text-sm font-medium leading-5 tracking-[2px] uppercase whitespace-nowrap justify-center items-stretch border self-stretch grow px-4 py-3 rounded-md border-solid border-green-600`}
          >
            {!clip ? (
              "Upload"
            ) : (
              <ClipLoader color="#FFFFFF" loading={true} size={20} />
            )}
          </button>
        </span>
      </form>
    </div>
  );
};
