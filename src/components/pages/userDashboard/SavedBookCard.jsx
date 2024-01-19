export const SavedBookCard = ({
  image,
  author,
  title,
  genre,
  price,
  description,
}) => {
  return (
    <>
      <div className="self-stretch mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
            <div className="justify-center items-center shadow-lg bg-slate-50 flex grow flex-col w-full pr-9 max-md:mt-3.5 max-md:pr-5">
              <img
                loading="lazy"
                src={image}
                className="aspect-[0.73] object-contain object-center w-[202px] overflow-hidden"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
            <span className="flex flex-col max-md:max-w-full max-md:mt-3.5">
              <div className="text-neutral-800 text-2xl font-semibold leading-8 self-stretch max-md:max-w-full">
                {title}
              </div>
              <div className="text-neutral-500 text-sm leading-5 self-stretch mt-2 max-md:max-w-full">
                by {author}
              </div>
              <div className="text-black text-sm leading-5 self-stretch mt-2 max-md:max-w-full">
                {description}
              </div>
              <span className="items-stretch flex gap-3 mt-2 self-start">
                <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                  {genre}
                </div>
                <div className="text-neutral-500 text-sm leading-5">
                  {genre}
                </div>
                <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                  {genre}
                </div>
              </span>
              <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-2 max-md:max-w-full">
                {price}
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
    </>
  );
};
