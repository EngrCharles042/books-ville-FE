import restless from "../../../assets/images/userCatImages/restless.png";
import muslim from "../../../assets/images/userCatImages/bad muslim.svg";
import { Link } from "react-router-dom";
import { DownloadBookModal } from "./DownloadBookModal.jsx";
import { useState } from "react";
import Modal from "react-modal";

export const PurchasedBooks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white flex flex-col items-stretch mt-10 pr-2 pb-12">
      <span className="self-start flex w-full max-w-[1010px] flex-col mt-5 ml-20 mb-40 max-md:max-w-full max-md:mb-10">
        <span className="items-stretch flex gap-2 self-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d7dd83f57cf0f0d55ac4589528b86a4f6e45a046fbd6c7d18b6110dd0c11edb?"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <Link
            to={"/user-dashboard"}
            className="text-gray-900 text-base font-semibold leading-6 tracking-normal grow whitespace-nowrap self-start"
          >
            Go back
          </Link>
        </span>
        <div className="text-black text-2xl font-semibold leading-8 self-stretch mt-3 max-md:max-w-full">
          MY PURCHASED BOOKS
        </div>
        <div className="self-stretch mt-6 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
              <div className="justify-center items-center shadow-lg bg-slate-50 flex grow flex-col w-full pr-9 max-md:mt-3.5 max-md:pr-5">
                <img
                  loading="lazy"
                  src={restless}
                  className="aspect-[0.73] object-contain object-center w-[202px] overflow-hidden"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col max-md:max-w-full max-md:mt-3.5">
                <div className="text-neutral-800 text-2xl font-semibold leading-8 self-stretch max-md:max-w-full">
                  We Were Restless Things
                </div>
                <div className="text-neutral-500 text-sm leading-5 self-stretch mt-2 max-md:max-w-full">
                  by Cole Magamatsu
                </div>
                <div className="text-black text-sm leading-5 self-stretch mt-2 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Eget hendrerit vitae
                  lectus duis nulla facilisis libero amet. Sed ac faucibus arcu
                  eget id eu. Egestas et quis tortor euismod lectus. Turpis ut
                  neque sit sit maecenas scelerisque.
                </div>
                <span className="items-stretch flex gap-3 mt-2 self-start">
                  <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                    Romance
                  </div>
                  <div className="text-neutral-500 text-sm leading-5">
                    Fiction
                  </div>
                  <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                    Fantasy
                  </div>
                </span>
                <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-2 max-md:max-w-full">
                  N 15000
                </div>
                <div className="flex gap-2.5 mt-6 self-start items-start max-md:max-w-full max-md:flex-wrap">
                  <span
                    className="hover:bg-green-600 hover:text-white cursor-pointer text-green-600 text-base font-medium leading-5 uppercase justify-center items-stretch bg-white grow px-8 py-5 rounded-md border-[1.145px] border-solid border-green-600 max-md:px-5"
                    onClick={handleDownloadClick}
                  >
                    DOWNLOAD now
                  </span>
                  <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    style={{
                      overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1000,
                      },
                      content: {
                        maxWidth: "500px",
                        margin: "auto",
                        background: "white",
                        borderRadius: "8px",
                        padding: "20px",
                      },
                    }}
                  >
                    <DownloadBookModal
                      onCancel={handleCloseModal}
                      onContinue={() => {
                        // Handle continue logic here
                        handleCloseModal();
                      }}
                    />
                  </Modal>
                  <span className="hover:bg-green-600 hover:text-white cursor-pointer text-green-600 text-base font-medium leading-5 uppercase justify-center items-stretch self-stretch grow px-12 py-5 rounded-md border-[1.174px] border-solid border-green-600 max-md:px-5">
                    READ ONLINE
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-6 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src={muslim}
                className="aspect-[0.73] object-contain object-center w-[202px] shadow-lg overflow-hidden shrink-0 max-w-full grow max-md:mt-3"
              />
            </div>
            <div className="flex flex-col items-stretch w-4/5 ml-5 pl-10 max-md:w-full max-md:ml-0">
              <span className="flex grow flex-col max-md:max-w-full max-md:mt-3">
                <div className="text-neutral-800 text-2xl font-semibold leading-8 self-stretch max-md:max-w-full">
                  The BAD MUSLIM DISCOUNT
                </div>
                <div className="text-neutral-500 text-sm leading-5 self-stretch mt-2 max-md:max-w-full">
                  by Syed M. Masood
                </div>
                <div className="text-black text-sm leading-5 self-stretch mt-2 max-md:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Eget hendrerit vitae
                  lectus duis nulla facilisis libero amet. Sed ac faucibus arcu
                  eget id eu. Egestas et quis tortor euismod lectus. Turpis ut
                  neque sit sit maecenas scelerisque.
                </div>
                <span className="items-stretch flex gap-3 mt-2 pr-9 self-start max-md:pr-5">
                  <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                    Religion
                  </div>
                  <div className="text-neutral-500 text-sm leading-5">
                    Fantasy
                  </div>
                  <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                    Fiction
                  </div>
                </span>
                <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-2 max-md:max-w-full">
                  N 5000
                </div>
                <div className="flex gap-2.5 mt-6 self-start items-start max-md:max-w-full max-md:flex-wrap">
                  <span
                    className="hover:bg-green-600 hover:text-white cursor-pointer text-green-600 text-base font-medium leading-5 uppercase justify-center items-stretch bg-white grow px-8 py-5 rounded-md border-[1.145px] border-solid border-green-600 max-md:px-5"
                    onClick={handleDownloadClick}
                  >
                    DOWNLOAD now
                  </span>
                  <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    style={{
                      overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1000,
                      },
                      content: {
                        maxWidth: "500px",
                        margin: "auto",
                        background: "white",
                        borderRadius: "8px",
                        padding: "20px",
                      },
                    }}
                  >
                    <DownloadBookModal
                      onCancel={handleCloseModal}
                      onContinue={() => {
                        // Handle continue logic here
                        handleCloseModal();
                      }}
                    />
                  </Modal>
                  <span className="hover:bg-green-600 hover:text-white cursor-pointer text-green-600 text-base font-medium leading-5 uppercase justify-center items-stretch self-stretch grow px-12 py-5 rounded-md border-[1.174px] border-solid border-green-600 max-md:px-5">
                    READ ONLINE
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};
