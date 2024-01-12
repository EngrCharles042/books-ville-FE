import React, {useState} from "react";
import Modal from 'react-modal';
import unseen from "../../../assets/images/adminImages/unseen.png";

export const OrderProcessing = () => {
    const [firstModalIsOpen, setFirstModalIsOpen] = useState(false);
    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);

    const openFirstModal = () => {
        setFirstModalIsOpen(true);
    };

    const closeFirstModal = () => {
        setFirstModalIsOpen(false);
    };

    const openSecondModal = () => {
        setSecondModalIsOpen(true);
    };

    const closeSecondModal = () => {
        setSecondModalIsOpen(false);
    };

    return (
        <div className="bg-white">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[18%] max-md:w-full max-md:ml-0">
                    <div className="bg-white shadow-[0px_6px_16px_rgba(0,0,0,0.1599999964237213)] flex w-full grow flex-col items-stretch mx-auto pl-4 pr-16 py-12 max-md:pr-5">
                        <a href="#">
                        <span className="items-stretch flex justify-between gap-3 mt-6">
              <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f63ff56b30946f937eb6a998e16e464ed8c7877ef71f20e71ee0169e425ddfbd?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-700 text-base font-medium leading-5 self-center grow whitespace-nowrap my-auto">
                Book Management
              </div>
            </span>
                        </a>

                        <a href="#">
                        <span className="items-stretch flex justify-between gap-5 mt-6">
              <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/07658fc3a720677a4d679f01dd383d470e48a4d04d7d8969a4fadc87521c2c60?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-green-600 text-base font-medium leading-5 self-center grow whitespace-nowrap my-auto">
                Order Processing
              </div>
            </span>
                        </a>

                        <a href="#">
                        <span className="flex items-stretch justify-between gap-1.5 mt-6 max-md:mr-1">
              <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb325e0abdc890911b35cc42831a26a3dd8257f2685755df6873a56a3959e52?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-700 text-base font-medium leading-5 my-auto">
                Settings
              </div>
            </span>
                        </a>

                        <a href="#">
                        <span className="flex items-stretch justify-between gap-1.5 mt-6 mb-[535px] max-md:mr-1 max-md:mb-10">
              <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b0f64bb3768851a0f3eb62907d28a48ad69b7e99ad44239cda8932bc0fdef2c?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-700 text-base font-medium leading-5 my-auto">
                Logout
              </div>
            </span>
                        </a>

                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[82%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-stretch max-md:max-w-full">
                        <div className="justify-between items-stretch shadow-sm bg-white flex w-full gap-5 pl-12 pr-16 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                        </div>
                        <span className="items-center flex gap-2 ml-8 mt-7 self-start max-md:ml-2.5">
              <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf4be3deae8d0d24f2a0336bc8a7a937de5df9ac4ac1e615aaa9d766e8d85e23?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className="text-zinc-900 text-2xl font-bold leading-8 self-stretch grow whitespace-nowrap">
                All Uploaded Books
              </div>
            </span>
                        <div className="shadow-lg bg-white flex w-[755px] max-w-full flex-col ml-8 mt-8 pl-5 pr-20 pt-4 pb-7 self-start items-start max-md:pr-5">
                            <div className="w-[609px] max-w-full">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
                                        <img
                                            alt="book"
                                            src={unseen}
                                            className="aspect-[0.78] object-contain object-center w-[129px] overflow-hidden shrink-0 max-w-full grow max-md:mt-2"
                                        />
                                    </div>
                                    <div className="flex flex-col items-stretch w-[79%] ml-5 max-md:w-full max-md:ml-0">
                    <span className="flex grow flex-col max-md:max-w-full max-md:mt-2">
                      <div className="self-stretch text-slate-900 text-base font-semibold leading-6 max-md:max-w-full">
                        The BOOK of UNSEEN WORLD
                      </div>
                      <div className="self-stretch text-slate-600 text-sm leading-5 mt-1 max-md:max-w-full">
                        by Jamilla Francis
                      </div>
                      <div className="text-slate-600 text-sm leading-5 self-stretch mt-2 max-md:max-w-full">
                        Lorem ipsum dolor sit amet consectetur. A ornare sem
                        consectetur tristique ultrices nulla arcu at. Rhoncus
                        ultrices fames dui donec sed mattis. In pulvinar
                        elementum aliquam netus. Pellentesque magna at purus
                        integer tempus.
                      </div>
                      <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d1ea423584557a106b458a9be2a68237f790d77d38a36a41a213fff22a2c672?"
                          className="aspect-[6.78] object-contain object-center w-[122px] overflow-hidden max-w-full mt-3.5 self-start"
                      />
                    </span>
                                    </div>
                                </div>
                            </div>
                            <span className="items-stretch self-center flex gap-2 mt-3 max-md:max-w-full max-md:flex-wrap ml-28">
                <div className="text-black text-sm leading-5 grow whitespace-nowrap">
                  Sandra Bloyd
                </div>
                <div className="text-black text-sm leading-5">N5000</div>
                <div className="text-black text-sm leading-5">
                  SandraBloys@gamial.com
                </div>
                <div className="text-black text-sm leading-5 grow whitespace-nowrap">
                  21st November, 2023
                </div>
              </span>
                            <div className="self-center flex items-stretch gap-4 mt-6">
                                <a href="#">
                <span
                    className="text-white text-sm leading-5 whitespace-nowrap items-stretch bg-red-600 grow justify-center px-7 py-3 rounded-md max-md:px-5"
                    onClick={openFirstModal}
                >
        Delete Book
      </span>
                                </a>
                                <Modal
                                    isOpen={firstModalIsOpen}
                                    ariaHideApp={false}
                                    className="absolute w-[30%] bg-transparent border-none top-[20%] left-[35%] justify-center items-center"
                                    onRequestClose={closeFirstModal}
                                >
                                    <div className="justify-center shadow-lg bg-white flex max-w-[400px] flex-col pt-2 pb-4 rounded-xl items-end">
                                        <a href="#">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81c2f27bcf96cd259caef0bbf69acd93889cc777b3fad5af7839f56613191486?"
                                                className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full mr-6"
                                                onClick={closeFirstModal}
                                            />
                                        </a>
                                        <span className="self-stretch flex w-full flex-col items-stretch mt-5 px-6">
        <div className="text-gray-900 text-lg font-medium leading-7 whitespace-nowrap">
          Do you want to delete Book?
        </div>
        <div className="text-gray-500 text-sm leading-5 mt-4">
          Are you sure you want to delete this book? This action cannot be
          undone.
        </div>
        <div className="items-stretch flex justify-between gap-3 mt-5">
            <a href="#">
          <span
              className="text-slate-700 text-base font-medium leading-6 whitespace-nowrap justify-center items-center border border-[color:var(--Gray-300,#D0D5DD)] shadow-sm bg-white grow px-16 py-2.5 rounded-lg border-solid"
              onClick={closeFirstModal}
          >
  No
</span>
                </a>
            <a href="#">
          <span
              className="text-white text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch border shadow-sm bg-red-600 grow px-16 py-2.5 rounded-lg border-solid border-red-600"
              onClick={() => {
                  closeFirstModal();
                  openSecondModal();
              }}
          >
          Delete
        </span>
                </a>
            <Modal
                isOpen={secondModalIsOpen}
                ariaHideApp={false}
                className="absolute w-[30%] bg-transparent border-none top-[20%] left-[35%] justify-center items-center"
                onRequestClose={closeSecondModal}
            >
        {/* Second modal content */}
                <div className="items-stretch bg-green-100 flex gap-3 p-4 rounded-lg max-md:flex-wrap">
          <div className="bg-green-600 flex w-[5px] shrink-0 h-10 flex-col rounded-sm" />
          <span className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
            <div className="text-neutral-800 text-sm font-bold leading-5 max-md:max-w-full">
              Congratulations
            </div>
            <div className="text-neutral-800 text-sm leading-5 max-md:max-w-full">
              Your Book has been deleted
            </div>
          </span>
        </div>
      </Modal>
        </div>
      </span>

                                    </div>
                                </Modal>
                                <a href="#">
                                <span className="text-white text-sm leading-5 whitespace-nowrap items-stretch bg-green-500 grow justify-center px-9 py-3 rounded-md max-md:px-5">
                  Hide Book
                </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


