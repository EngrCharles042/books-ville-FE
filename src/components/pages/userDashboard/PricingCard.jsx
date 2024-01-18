export const PricingCard = ({ title, price, description, headerColor, redirectUrl, imageSrc, headerText }) => {
  const cardHeaderColor = headerColor || 'bg-black';
  const borderColorClass = `border-6 border-${cardHeaderColor}`; // Adjusted this line

  return (
    <div className={`${borderColorClass} shadow-lg bg-white flex w-full grow flex-col items-stretch max-w-[350px] rounded-md border-solid max-md:px-6 hover:scale-105 duration-200`}>
      <span className={`text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap ${cardHeaderColor} flex justify-center items-center px-24 py-2 rounded-t-md max-md:px-5 border-b border-[color:var(--Gray-6,#F2F2F2)]`}>
        {headerText && (
          <div className="font-inter text-base font-semibold leading-6 tracking-wide text-left">
            {headerText}
          </div>
        )}
      </span>

      <span className={`flex flex-col mt-6 px-8 py-7 max-md:mt-10 max-md:px-5`}>
        <div>
          <h3 className="text-black text-2xl font-semibold leading-8 mt-6 max-md:mt-4">
            {title}
          </h3>
          <span className="items-stretch flex gap-px mt-2 pr-20 max-md:pr-5">
            <div className="text-black text-sm font-semibold leading-5 self-center whitespace-nowrap my-auto">
              N
            </div>
            <div className="text-black text-3xl font-bold leading-10 tracking-wide">
              {price}
            </div>
            <span className="items-stretch self-center flex gap-0.5 my-auto">
              <div className="text-black text-base font-semibold leading-6 tracking-normal whitespace-nowrap">
                /
              </div>
              <div className="text-black text-sm font-semibold leading-5 grow whitespace-nowrap self-start">
                Month
              </div>
            </span>
          </span>
          <div className="text-black text-xs leading-4 tracking-wide mt-2">
            {description}
          </div>
        </div>
        <div>
          <a href={redirectUrl} target="_blank" rel="noopener noreferrer">
            <div className={`text-white font-semibold leading-4 whitespace-nowrap justify-center items-center border mt-20 px-16 py-4 rounded-md border-solid max-md:mt-10 max-md:px-5 cursor-pointer ${cardHeaderColor} hover:bg-white hover:text-black transition duration-200 text-${cardHeaderColor}`}>
              Free 14-days Trial
            </div>
          </a>
          <div className="text-green-500 text-base font-semibold leading-6 tracking-normal whitespace-nowrap mt-11 self-start max-md:mt-10">
            Core Features
          </div>
          {Array.from({ length: 6 }).map((_, index) => (
            <span key={index} className="items-stretch flex justify-between gap-1.5 mt-3">
              <img
                loading="lazy"
                src={imageSrc} // Use the dynamic image source here
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-xs font-semibold leading-5 self-center grow shrink basis-auto my-auto">
                Rich Member Profile
              </div>
            </span>
          ))}
        </div>
      </span>
    </div>
  );
};
