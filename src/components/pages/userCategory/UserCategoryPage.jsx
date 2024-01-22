import restless from "../../../assets/images/userCatImages/restless.png";
import summer from "../../../assets/images/userCatImages/summer.png";
import girl from "../../../assets/images/userCatImages/girl.png";
import ninth from "../../../assets/images/userCatImages/ninth.png";
import maybe from "../../../assets/images/userCatImages/maybe.png";
import { Filters } from "./Filters.jsx";
import { useState } from "react";
import { BookDetails } from "../BookDetails.jsx";
import { useNavigate } from "react-router-dom";

export const UserCategoryPage = () => {
  const [details, setDetails] = useState(false);

  const handleDetails = () => {
    setDetails(!details);
  };

  return (
    <div className="bg-white flex flex-col items-stretch pb-12">
      {details && <BookDetails />}

      {!details && (
        <div className="flex w-full flex-col items-stretch mb-10 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="text-black text-6xl mt-[4.5rem] mb-[2rem] w-fit font-bold leading-[81.2px] tracking-tight max-md:text-4xl">
            Explore all Deals
          </div>
          <div className="mt-6 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[22%] max-md:w-full max-md:ml-0">
                <Filters />
              </div>
              <div className="flex flex-col items-stretch w-[78%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col max-md:max-w-full max-md:mt-5">
                  <div className="items-stretch flex w-[66px] max-w-full gap-2 mr-28 self-end max-md:mr-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a201f9390a9c08c0bc5f61c075ba5ff03858958083aa5dd21ae172881481277c?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccdaccc5c0abec7567e5d2b41ef8ad8064ea019014d0bb446df45ca0ec70abc1?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                  </div>
                  <div className="justify-between content-start flex-wrap w-[867px] max-w-full self-start">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                        <div className="justify-center items-center bg-slate-50 flex grow flex-col w-full border-[0.652px] border-solid border-black max-md:mt-4">
                          <div className="flex-col overflow-hidden relative flex aspect-[0.7345454545454545] w-[202px] justify-center items-stretch">
                            <div className="relative justify-center items-center shadow-lg bg-slate-50 flex flex-col">
                              <img
                                alt="book1"
                                src={restless}
                                className="aspect-[0.73] object-contain object-center w-full overflow-hidden"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col max-md:max-w-full max-md:mt-4">
                          <div className="text-neutral-800 text-2xl font-bold leading-8 self-stretch max-md:max-w-full">
                            We Were Restless Things
                          </div>
                          <div className="text-neutral-500 text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                            by Cole Magamatsu
                          </div>
                          <div className="text-black text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                            Lorem ipsum dolor sit amet consectetur. Eget
                            hendrerit vitae lectus duis nulla facilisis libero
                            amet. Sed ac faucibus arcu eget id eu. Egestas et
                            quis tortor euismod lectus. Turpis ut neque sit sit
                            maecenas scelerisque.
                          </div>
                          <div className="items-stretch flex gap-3 mt-3 self-start">
                            <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                              Romance
                            </div>
                          </div>
                          <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-3 max-md:max-w-full">
                            ₦ 15,000
                          </div>
                          <div
                            onClick={handleDetails}
                            className="transition hover:bg-green-600 cursor-pointer text-center text-white text-sm font-medium leading-5 uppercase whitespace-nowrap border bg-green-500 mt-4 px-10 py-4 rounded-md border-solid border-green-600 self-start max-md:px-5"
                          >
                            ADD TO CART
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-zinc-100 self-stretch flex shrink-0 h-px flex-col mt-5 max-md:max-w-full" />
                  <div className="flex w-[869px] max-w-full flex-col items-stretch mt-4 self-start max-md:mt-10">
                    <div className="z-[1] max-md:max-w-full">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                          <img
                            alt="book2"
                            src={summer}
                            className="aspect-[0.73] object-contain object-center w-[202px] justify-center items-center shadow-lg overflow-hidden shrink-0 max-w-full grow max-md:mt-4"
                          />
                        </div>
                        <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                          <div className="flex flex-col max-md:max-w-full max-md:mt-4">
                            <div className="text-neutral-800 text-2xl font-bold leading-8 self-stretch max-md:max-w-full">
                              The Summer Of Impossible Things
                            </div>
                            <div className="text-neutral-500 text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                              by Cole Magamatsu
                            </div>
                            <div className="text-black text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                              Lorem ipsum dolor sit amet consectetur. Eget
                              hendrerit vitae lectus duis nulla facilisis libero
                              amet. Sed ac faucibus arcu eget id eu. Egestas et
                              quis tortor euismod lectus. Turpis ut neque sit
                              sit maecenas scelerisque.
                            </div>
                            <div className="items-stretch flex gap-3 mt-3 self-start">
                              <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                Fantasy
                              </div>
                            </div>
                            <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-3 max-md:max-w-full">
                              ₦ 15,000
                            </div>
                            <div className="transition hover:bg-green-600 cursor-pointer text-center text-white text-sm font-medium leading-5 uppercase whitespace-nowrap border bg-green-500 mt-4 px-10 py-4 rounded-md border-solid border-green-600 self-start max-md:px-5">
                              ADD TO CART
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-zinc-100 self-stretch flex shrink-0 h-px flex-col mt-6 max-md:max-w-full" />
                  <div className="w-[868px] max-w-full mt-4 self-start">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                        <div className="bg-slate-50 flex grow flex-col justify-center items-center w-full border-[0.652px] border-solid border-black max-md:mt-3">
                          <img
                            alt="book3"
                            src={girl}
                            className="aspect-[0.73] object-contain object-center w-[202px] justify-center items-center shadow-lg overflow-hidden overflow-x-auto"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col max-md:max-w-full max-md:mt-3">
                          <div className="text-neutral-800 text-2xl font-bold leading-9 self-stretch max-md:max-w-full">
                            The Girl Of INK&Stars
                          </div>
                          <div className="text-neutral-500 text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                            by Barbara Dee
                          </div>
                          <div className="text-black text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                            Lorem ipsum dolor sit amet consectetur. Eget
                            hendrerit vitae lectus duis nulla facilisis libero
                            amet. Sed ac faucibus arcu eget id eu. Egestas et
                            quis tortor euismod lectus. Turpis ut neque sit sit
                            maecenas scelerisque.
                          </div>
                          <div className="items-stretch flex gap-3 mt-3 px-px self-start">
                            <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                              Fantasy
                            </div>
                          </div>
                          <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-3 max-md:max-w-full">
                            ₦ 5,000
                          </div>
                          <div className="transition hover:bg-green-600 cursor-pointer text-center text-white text-sm font-medium leading-5 uppercase whitespace-nowrap border bg-green-500 mt-4 px-10 py-4 rounded-md border-solid border-green-600 self-start max-md:px-5">
                            ADD TO CART
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-zinc-100 self-stretch flex shrink-0 h-px flex-col mt-6 max-md:max-w-full" />
                  <div className="self-stretch flex flex-col items-stretch mt-6 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                          <div className="justify-center items-center shadow-lg bg-slate-50 flex grow flex-col w-full pr-8 max-md:mt-3 max-md:pr-5">
                            <img
                              alt="book4"
                              src={ninth}
                              className="aspect-[0.73] object-contain object-center w-[202px] overflow-hidden"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[76%] max-md:w-full max-md:ml-0">
                          <div className="flex grow flex-col max-md:max-w-full max-md:mt-3">
                            <div className="text-neutral-800 text-2xl font-bold leading-9 self-stretch max-md:max-w-full">
                              The Ninth Life
                            </div>
                            <div className="text-neutral-500 text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                              by Barbara Dee
                            </div>
                            <div className="text-black text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                              Lorem ipsum dolor sit amet consectetur. Eget
                              hendrerit vitae lectus duis nulla facilisis libero
                              amet. Sed ac faucibus arcu eget id eu. Egestas et
                              quis tortor euismod lectus. Turpis ut neque sit
                              sit maecenas scelerisque.
                            </div>
                            <div className="items-stretch flex gap-3 mt-3 pr-12 self-start max-md:pr-5">
                              <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                Romance
                              </div>
                            </div>
                            <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-3 max-md:max-w-full">
                              ₦ 5,000
                            </div>
                            <div className="transition hover:bg-green-600 cursor-pointer text-center text-white text-sm font-medium leading-5 uppercase whitespace-nowrap border bg-green-500 mt-4 px-10 py-4 rounded-md border-solid border-green-600 self-start max-md:px-5">
                              ADD TO CART
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-5 max-md:max-w-full" />
                    <div className="mt-4 max-md:max-w-full">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                          <div className="justify-center items-center shadow-lg bg-slate-50 flex grow flex-col w-full pr-8 py-px max-md:mt-3 max-md:pr-5">
                            <img
                              alt="book5"
                              src={maybe}
                              className="aspect-[0.74] object-contain object-center w-[202px] overflow-hidden"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                          <div className="flex flex-col max-md:max-w-full max-md:mt-3">
                            <div className="text-neutral-800 text-2xl font-bold leading-9 self-stretch max-md:max-w-full">
                              Maybe He Just likes you
                            </div>
                            <div className="text-neutral-500 text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                              by Barbara Dee
                            </div>
                            <div className="text-black text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                              Lorem ipsum dolor sit amet consectetur. Eget
                              hendrerit vitae lectus duis nulla facilisis libero
                              amet. Sed ac faucibus arcu eget id eu. Egestas et
                              quis tortor euismod lectus. Turpis ut neque sit
                              sit maecenas scelerisque.
                            </div>
                            <div className="items-stretch flex gap-3 mt-3 pr-12 self-start max-md:pr-5">
                              <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                Fantasy
                              </div>
                            </div>
                            <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-3 max-md:max-w-full">
                              ₦ 5,000
                            </div>
                            <div className="transition hover:bg-green-600 cursor-pointer text-center text-white text-sm font-medium leading-5 uppercase whitespace-nowrap border bg-green-500 mt-4 px-10 py-4 rounded-md border-solid border-green-600 self-start max-md:px-5">
                              ADD TO CART
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
