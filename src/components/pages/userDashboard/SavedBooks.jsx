export const SavedBooks = () => {
  return (
    <>
      <div className="bg-white flex flex-col items-stretch pb-12">
        <div className="self-center flex w-full max-w-[1172px] flex-col mt-4 mb-40 items-start max-md:max-w-full max-md:mb-10">
          <span className="items-stretch flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/964a0ca6eaea42c2984fd675498e1e4ce7979dbd1ccfb608c850f55af1dfc074?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-gray-900 text-base font-semibold leading-6 tracking-normal grow whitespace-nowrap self-start">
              Go back
            </div>
          </span>
          <div className="self-stretch mt-4 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <span className="flex grow flex-col items-stretch">
                  <div className="text-black text-2xl font-semibold leading-8">
                    MY SAVED BOOKS
                  </div>
                  <div className="justify-center shadow-lg bg-slate-50 flex flex-col mt-6 pr-16 items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[0.73] object-contain object-center w-[202px] overflow-hidden max-w-full"
                    />
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
                <span className="flex flex-col mt-14 max-md:max-w-full max-md:mt-10">
                  <div className="text-neutral-800 text-2xl font-bold leading-8 self-stretch max-md:max-w-full">
                    We Were Restless Things
                  </div>
                  <div className="text-neutral-500 text-sm leading-5 self-stretch mt-2 max-md:max-w-full">
                    by Cole Magamatsu
                  </div>
                  <div className="text-black text-sm leading-5 self-stretch mt-2 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur. Eget hendrerit vitae
                    lectus duis nulla facilisis libero amet. Sed ac faucibus
                    arcu eget id eu. Egestas et quis tortor euismod lectus.
                    Turpis ut neque sit sit maecenas scelerisque.
                  </div>
                  <span className="items-stretch flex gap-3 mt-2 pr-20 self-start max-md:pr-5">
                    <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                      by Barbara Dee
                    </div>
                    <div className="text-neutral-500 text-sm leading-5">
                      by Barbara Dee
                    </div>
                    <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                      by Barbara Dee
                    </div>
                  </span>
                  <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-2 max-md:max-w-full">
                    N 15000
                  </div>
                  <span className="items-stretch flex justify-between gap-5 mt-6 self-start max-md:max-w-full max-md:flex-wrap">
                    <span className="text-white text-base font-medium leading-5 uppercase justify-center items-stretch bg-green-600 grow px-11 py-5 rounded-md border-[1.145px] border-solid border-green-600 max-md:px-5">
                      ADD TO CART
                    </span>
                    <div className="text-red-500 text-sm font-semibold leading-5 my-auto">
                      Remove From Wishlist
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-6 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-[0.73] object-contain object-center w-[202px] justify-center items-center shadow-lg overflow-hidden shrink-0 max-w-full grow max-md:mt-3"
                />
              </div>
              <div className="flex flex-col items-stretch w-[83%] ml-5 max-md:w-full max-md:ml-0">
                <span className="flex grow flex-col max-md:max-w-full max-md:mt-3">
                  <div className="text-neutral-800 text-2xl font-bold leading-8 self-stretch max-md:max-w-full">
                    The GIRL of INK & STARS
                  </div>
                  <div className="text-neutral-500 text-sm leading-5 self-stretch mt-2 max-md:max-w-full">
                    by Barbara Dee
                  </div>
                  <div className="text-black text-sm leading-5 self-stretch mt-2 max-md:max-w-full">
                    Lorem ipsum dolor sit amet consectetur. Eget hendrerit vitae
                    lectus duis nulla facilisis libero amet. Sed ac faucibus
                    arcu eget id eu. Egestas et quis tortor euismod lectus.
                    Turpis ut neque sit sit maecenas scelerisque.
                  </div>
                  <span className="items-stretch flex gap-3 mt-2 pr-20 self-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                    <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                      by Barbara Dee
                    </div>
                    <div className="text-neutral-500 text-sm leading-5">
                      by Barbara Dee
                    </div>
                    <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                      by Barbara Dee
                    </div>
                  </span>
                  <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-2 max-md:max-w-full">
                    N 5000
                  </div>
                  <span className="items-stretch content-center flex-wrap self-stretch flex justify-between gap-5 mt-6 max-md:max-w-full">
                    <span className="text-white text-base font-medium leading-5 uppercase justify-center items-stretch bg-green-600 grow px-11 py-5 rounded-md border-[1.145px] border-solid border-green-600 max-md:max-w-full max-md:px-5">
                      ADD TO CART
                    </span>
                    <div className="text-red-500 text-sm font-semibold leading-5 self-center grow shrink basis-auto my-auto">
                      Remove From Wishlist
                    </div>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
