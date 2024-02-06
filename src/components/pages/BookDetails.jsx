import restless from "../../assets/images/userCatImages/restless.png";
import { useState } from "react";
import { PaymentOptions } from "../payment/PaymentOptions.jsx";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios.jsx";

export const BookDetails = ({ viewedBook, handleStatus, setStatusTitle, setStatusMessage, setStatusColor }) => {
  const enableStatus = (title, message, color) => {
    handleStatus();
    setStatusTitle(title);
    setStatusMessage(message);
    setStatusColor(color);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveBook = async () => {
    try {
      await axios.get(`/book/save/${viewedBook.id}`, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userData")).accessToken}`
        }
      }).then(
          response => {
            console.log(response.data.responseData);

            enableStatus(
                "Save Successful",
                "Book has been saved successfully",
                "bg-green-600",
            );
          }
      )
    } catch (error) {

      enableStatus(
          "Oops!",
          "Something went wrong please try again",
          "bg-red-600",
      );
    }
  }

  const handleAddToCart = async () => {
    try {
      await axios.get(`/cart/addToCart/${viewedBook.id}`, {
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userData")).accessToken}`
        }
      }).then(
          response => {
            console.log(response.data.responseData);

            enableStatus(
                "Save Successful",
                "Book has been saved successfully",
                "bg-green-600",
            );
          }
      )
    } catch (error) {

      enableStatus(
          "Oops!",
          "Something went wrong please try again",
          "bg-red-600",
      );
    }
  }

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
          content: {
            maxWidth: "592px",
            maxHeight: "500px",
            margin: "auto",
            background: "white",
            borderRadius: "8px",
            padding: "0px",
          },
        }}
      >
        <PaymentOptions
            book={viewedBook}
            handleStatus={handleStatus}
            setStatusTitle={setStatusTitle}
            setStatusMessage={setStatusMessage}
            setStatusColor={setStatusColor}
            handleBuy={handleCloseModal}
        />
      </Modal>

      <div className="bg-white flex flex-col items-stretch pb-12 mt-8">
        <span className="flex w-full flex-col mt-16 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <span className="items-stretch flex gap-1 self-start">
            <span className="text-black text-xl font-medium leading-7 whitespace-nowrap items-stretch aspect-[2.0357142857142856] justify-center">
              Home
            </span>
            <div className="text-black text-xl font-medium leading-7">/</div>
            <span className="text-black text-xl font-medium leading-7 whitespace-nowrap items-stretch aspect-[2.3214285714285716] justify-center">
              {viewedBook?.genre}
            </span>
            <div className="text-black text-xl font-medium leading-7">/</div>
            <span className="text-stone-300 text-xl font-medium leading-7 whitespace-nowrap items-stretch grow justify-center">
              {viewedBook?.bookTitle}
            </span>
          </span>

          <div className="self-stretch mt-5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
                <div className="justify-center shadow-sm bg-slate-50 flex grow flex-col w-fit items-start max-md:max-w-full max-md:mt-5 max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet={viewedBook?.bookCover}
                    className="aspect-[0.75] object-contain object-center w-[302px] overflow-hidden max-w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
                <span className="justify-center items-stretch flex grow flex-col mt-1.5 max-md:max-w-full max-md:mt-7">
                  <div className="text-neutral-800 text-3xl font-bold leading-10 max-md:max-w-full">
                    {viewedBook?.bookTitle}
                  </div>
                  <div className="text-black text-2xl leading-9 mt-6 max-md:max-w-full">
                    by <span className="text-black">{viewedBook?.author}</span>
                  </div>
                  <div className="text-black text-base font-light leading-7 mt-6 max-md:max-w-full">
                    {viewedBook?.description}
                  </div>
                  <div className="text-red-700 text-sm leading-7 max-md:max-w-full">
                    Read more
                  </div>
                  <div className="text-neutral-500 text-xl leading-7 mt-4">
                    {viewedBook?.genre}
                  </div>
                  <div className="text-black text-2xl font-bold leading-8 mt-4 max-md:max-w-full">
                    {viewedBook?.price === 0 ? "FREE" : viewedBook?.price}
                  </div>
                  <span className="flex gap-2 mt-4 items-start max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:pr-5">
                    <span
                      onClick={handleDownloadClick}
                      className="transition hover:bg-green-700 cursor-pointer max-w-[12.7rem] h-[3.8rem] text-center py-[1.2rem] text-white text-base font-medium leading-5 uppercase justify-center items-stretch bg-green-600 grow rounded-md border-[1.145px] border-solid border-green-600 max-md:px-5"
                    >
                      BUY NOW
                    </span>
                    <span className="hover:bg-gray-200 transition cursor-pointer  max-w-[12.7rem] h-[3.8rem] text-center py-[1.2rem] text-green-600 text-base font-medium leading-5 uppercase justify-center items-stretch self-stretch grow rounded-md border-[1.174px] border-solid border-green-600 max-md:px-5">
                      ADD TO CART
                    </span>
                    <div onClick={handleSaveBook} className="transition hover:border-solid hover:border-green-600 cursor-pointer max-w-[12.7rem] h-[3.8rem] text-center py-[1.2rem] text-rose-500 text-base font-medium leading-5 uppercase justify-center items-stretch self-stretch grow rounded-md max-md:px-5 border-[1.174px] border-white">
                      ADD TO SAVED
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="text-neutral-800 text-3xl font-bold leading-10 self-stretch mt-28 max-md:max-w-full max-md:mt-10">
            Reviews and Ratings
          </div>
          <div className="bg-gray-200 self-stretch w-full shrink-0 h-[3px] mt-3" />
          <div className="flex justify-between gap-3.5 ml-4 mt-5 self-start items-start max-md:max-w-full max-md:flex-wrap">
            <span className="items-stretch self-center flex basis-[0%] flex-col my-auto">
              <div className="text-neutral-800 text-base leading-6 whitespace-nowrap">
                Overall Rating
              </div>
              <div className="text-neutral-800 text-base leading-6 mt-6">
                4.5 out of 5
              </div>
              <div className="items-stretch flex gap-2 mt-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                  className="aspect-square object-contain object-center w-[18px] fill-green-500 overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                  className="aspect-square object-contain object-center w-[18px] fill-green-500 overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                  className="aspect-square object-contain object-center w-[18px] fill-green-500 overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                  className="aspect-square object-contain object-center w-[18px] fill-green-500 overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd98d2bf8104573bc035e923d99869fe2de600381a49d4dc1d8dc93c46167859?"
                  className="aspect-square object-contain object-center w-[18px] stroke-[1px] stroke-green-500 overflow-hidden shrink-0 max-w-full"
                />
              </div>
            </span>
            <div className="ml-5 bg-gray-200 w-px shrink-0 h-[157px]" />
            <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
              <span className="items-stretch flex gap-2">
                <div className="text-neutral-800 text-sm leading-5 whitespace-nowrap">
                  5 STARS
                </div>
                <div className="bg-zinc-300 self-center flex w-[235px] shrink-0 h-2.5 flex-col my-auto" />
                <div className="text-black text-xs leading-5 self-center whitespace-nowrap my-auto">
                  5
                </div>
              </span>
              <span className="items-stretch flex gap-2 mt-1.5">
                <div className="text-neutral-800 text-sm leading-5 whitespace-nowrap">
                  5 STARS
                </div>
                <div className="bg-zinc-300 self-center flex w-[235px] shrink-0 h-2.5 flex-col my-auto" />
                <div className="text-black text-xs leading-5 self-center whitespace-nowrap my-auto">
                  5
                </div>
              </span>
              <span className="items-stretch flex gap-2 mt-1.5">
                <div className="text-neutral-800 text-sm leading-5 whitespace-nowrap">
                  5 STARS
                </div>
                <div className="bg-zinc-300 self-center flex w-[235px] shrink-0 h-2.5 flex-col my-auto" />
                <div className="text-black text-xs leading-5 self-center whitespace-nowrap my-auto">
                  5
                </div>
              </span>
              <span className="items-stretch flex gap-2 mt-1.5">
                <div className="text-neutral-800 text-sm leading-5 whitespace-nowrap">
                  5 STARS
                </div>
                <div className="bg-zinc-300 self-center flex w-[235px] shrink-0 h-2.5 flex-col my-auto" />
                <div className="text-black text-xs leading-5 self-center whitespace-nowrap my-auto">
                  5
                </div>
              </span>
              <span className="items-stretch flex gap-2 mt-1.5">
                <div className="text-neutral-800 text-sm leading-5 whitespace-nowrap">
                  5 STARS
                </div>
                <div className="bg-zinc-300 self-center flex w-[235px] shrink-0 h-2.5 flex-col my-auto" />
                <div className="text-black text-xs leading-5 self-center whitespace-nowrap my-auto">
                  5
                </div>
              </span>
            </div>
            <div className="bg-gray-200 w-0.5 shrink-0 h-[157px]" />
            <span className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
              <div className="text-neutral-800 text-base leading-6 whitespace-nowrap">
                Share your thoughts here
              </div>
              <span className="transition hover:bg-green-700 cursor-pointer text-white text-base font-medium leading-5 uppercase whitespace-nowrap justify-center items-stretch bg-green-600 mt-2.5 px-4 py-5 rounded-md border-[1.11px] border-solid border-green-600">
                Write your Review
              </span>
            </span>
          </div>
          <div className="text-neutral-800 text-sm font-medium leading-5 self-stretch mt-12 max-md:max-w-full max-md:mt-10">
            All Book Reviews
          </div>
          <div className="bg-gray-200 self-stretch w-full shrink-0 h-1 mt-3.5" />
          <span className="items-start flex w-[858px] max-w-full flex-col mt-5 pr-4 py-4 rounded-2xl self-start">
            <div className="items-stretch flex w-[122px] max-w-full gap-2 self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd98d2bf8104573bc035e923d99869fe2de600381a49d4dc1d8dc93c46167859?"
                className="aspect-square object-contain object-center w-full stroke-[1px] stroke-green-500 overflow-hidden shrink-0 flex-1"
              />
            </div>
            <div className="self-stretch text-zinc-800 text-xs leading-4 tracking-wide mt-1 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Neque mauris eget vitae
              malesuada augue fringilla leo hac mattis. Turpis consectetur nunc
              ut posuere interdum cursus enim pretium nisi.
            </div>
            <div className="text-zinc-800 text-xs font-medium leading-4 tracking-tight whitespace-nowrap mt-1 self-start">
              Temitope Abosede
            </div>
            <div className="text-zinc-400 text-xs leading-4 tracking-tight mt-1 self-start">
              12 JUL 2023
            </div>
          </span>
          <div className="bg-gray-200 self-stretch w-full shrink-0 h-[5px] mt-5" />
          <span className="items-start self-stretch flex flex-col mt-5 pr-4 py-4 rounded-2xl max-md:max-w-full max-md:mr-1.5">
            <div className="items-stretch flex w-[122px] max-w-full gap-2 self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd98d2bf8104573bc035e923d99869fe2de600381a49d4dc1d8dc93c46167859?"
                className="aspect-square object-contain object-center w-full stroke-[1px] stroke-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd98d2bf8104573bc035e923d99869fe2de600381a49d4dc1d8dc93c46167859?"
                className="aspect-square object-contain object-center w-full stroke-[1px] stroke-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd98d2bf8104573bc035e923d99869fe2de600381a49d4dc1d8dc93c46167859?"
                className="aspect-square object-contain object-center w-full stroke-[1px] stroke-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd98d2bf8104573bc035e923d99869fe2de600381a49d4dc1d8dc93c46167859?"
                className="aspect-square object-contain object-center w-full stroke-[1px] stroke-green-500 overflow-hidden shrink-0 flex-1"
              />
            </div>
            <div className="self-stretch text-zinc-800 text-xs leading-4 tracking-wide mt-1 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Pulvinar ultricies turpis
              vitae netus urna orci tristique. Arcu ornare pharetra est libero
              semper. Non id dictum ut dui mi sagittis. Lacus purus integer a
              lobortis.
            </div>
            <div className="text-zinc-800 text-xs font-medium leading-4 tracking-tight whitespace-nowrap mt-1 self-start">
              Oyetunde Babamimo
            </div>
            <div className="text-zinc-400 text-xs leading-4 tracking-tight mt-1">
              12 JUL 2023
            </div>
          </span>
          <div className="bg-gray-200 self-stretch w-full shrink-0 h-[5px] mt-5" />
          <span className="items-start self-stretch flex flex-col mr-6 mt-5 pr-4 py-4 rounded-2xl max-md:max-w-full max-md:mr-2.5">
            <div className="items-stretch flex w-[122px] max-w-full gap-2 self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd98d2bf8104573bc035e923d99869fe2de600381a49d4dc1d8dc93c46167859?"
                className="aspect-square object-contain object-center w-full stroke-[1px] stroke-green-500 overflow-hidden shrink-0 flex-1"
              />
            </div>
            <div className="self-stretch text-zinc-800 text-xs leading-4 tracking-wide mt-1 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Auctor scelerisque viverra
              elit ut aliquam purus et. Sit facilisis pellentesque viverra
              faucibus aenean lorem.
            </div>
            <div className="text-zinc-800 text-xs font-medium leading-4 tracking-tight whitespace-nowrap mt-1 self-start">
              Temitope Abosede
            </div>
            <div className="text-zinc-400 text-xs leading-4 tracking-tight mt-1 self-start">
              12 JUL 2023
            </div>
          </span>
          <div className="bg-gray-200 self-stretch w-full shrink-0 h-[5px] mt-5" />
          <span className="items-stretch self-stretch flex flex-col mt-5 py-4 rounded-2xl max-md:max-w-full">
            <div className="items-stretch flex w-[122px] max-w-full gap-2 self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb928fddd1b0be301051b64841c3b0c17492ce68914bb57fc64a58c6acb6bb2?"
                className="aspect-square object-contain object-center w-full fill-green-500 overflow-hidden shrink-0 flex-1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd98d2bf8104573bc035e923d99869fe2de600381a49d4dc1d8dc93c46167859?"
                className="aspect-square object-contain object-center w-full stroke-[1px] stroke-green-500 overflow-hidden shrink-0 flex-1"
              />
            </div>
            <div className="text-zinc-800 text-xs leading-4 tracking-wide mt-1 max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. At sagittis vel
              ullamcorper eget volutpat odio pharetra nisl lectus. Cursus
              ultrices sit id congue aliquet leo aliquet ultricies felis.
            </div>
            <div className="text-zinc-800 text-xs font-medium leading-4 tracking-tight whitespace-nowrap mt-1 self-start">
              Temitope Abosede
            </div>
            <div className="text-zinc-400 text-xs leading-4 tracking-tight mt-1 self-start">
              12 JUL 2023
            </div>
            <div className="bg-gray-200 self-stretch w-full shrink-0 h-[5px] mt-7" />
          </span>
        </span>
      </div>
    </div>
  );
};
