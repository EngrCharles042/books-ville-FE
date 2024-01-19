export const Profile = () => {
  return (
    <div className="bg-white flex flex-col items-stretch pb-12">
      <div className="justify-between items-stretch shadow-sm bg-white flex w-full gap-5 px-20 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <span className="items-stretch flex justify-between gap-1.5">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-green-500 text-xl font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
              Books<span className="text-green-500">Ville</span>
            </div>
          </span>
          <span className="items-stretch border border-[color:var(--Gray-3,#828282)] shadow-sm bg-white flex gap-3 px-3 py-2.5 rounded-lg border-solid self-start max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9d550a01a0b92e3d7e71bbd76ed9b6344ede18129fe6d53a83c2e9836eaa39d?"
              className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba16c4d1578404ee548de207b0969ae061f61ec7befb35368cd4929342205051?"
              className="aspect-[0.05] object-contain object-center w-px stroke-[1px] stroke-zinc-500 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-zinc-500 text-center text-sm tracking-normal self-center grow whitespace-nowrap my-auto">
              Search by Author , Title , Series
            </div>
          </span>
        </div>
        <div className="items-center self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
          <span className="items-stretch flex justify-between gap-5 my-auto">
            <div className="text-black text-xl font-medium leading-7 grow whitespace-nowrap">
              Home
            </div>
            <div className="text-black text-xl font-medium leading-7">
              categories
            </div>
            <div className="text-black text-xl font-medium leading-7">cart</div>
            <div className="text-black text-xl font-medium leading-7 grow whitespace-nowrap">
              services
            </div>
          </span>
          <div className="items-center self-stretch flex justify-between gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7310c8722dc5cdf70636b3635cffd469b3852098076188b3c9b0a6a147dd6a0?"
              className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full my-auto"
            />
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]"
            />
          </div>
        </div>
      </div>
      <span className="self-center flex w-full max-w-[1141px] flex-col mt-5 mb-28 max-md:max-w-full max-md:mb-10">
        <span className="items-stretch flex gap-2 self-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05c93399f1248fc1de27bab921526a1825a15da2fa4d259f0e0f0ad954105612?"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-gray-900 text-base font-semibold leading-6 tracking-normal grow whitespace-nowrap self-start">
            Go back
          </div>
        </span>
        <div className="flex w-[397px] max-w-full items-stretch justify-between gap-5 ml-56 mt-2 self-start max-md:ml-2.5">
          <span className="items-stretch flex justify-between gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/68fe24cfc5b273be11cb96dca232382f498b45732e87c326b59f483095483127?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-green-500 text-base leading-6 tracking-normal grow whitespace-nowrap self-start">
              Edit Profile
            </div>
          </span>
          <span className="items-stretch flex justify-between gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa059d3b1c64ca3910c2cf358695ae049f2b6cab56d6f96dc57173c46bc8888e?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-gray-900 text-base leading-6 tracking-normal grow whitespace-nowrap self-start">
              Change Password
            </div>
          </span>
        </div>
        <div className="bg-zinc-100 flex w-[983px] max-w-full flex-col justify-center mt-3 pr-16 self-end items-start max-md:pr-5">
          <div className="bg-green-500 flex w-[253px] shrink-0 max-w-full h-0.5 flex-col" />
        </div>
        <div className="text-gray-900 text-2xl font-bold leading-8 mt-10 max-md:mt-10">
          Account
        </div>
        <div className="text-gray-500 text-sm leading-5 self-center whitespace-nowrap">
          Manage your Booksville account
        </div>
        <div className="flex-col justify-end overflow-hidden self-center relative flex aspect-square w-[100px] max-w-full ml-20 mt-10 pl-16 pt-12 pb-0.5 items-start max-md:pl-5">
          <img
            loading="lazy"
            srcSet="..."
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/68fc7dc94bfd300bbf2ecb7ce9c917c726fb967fbccf26dc88a79e4e873ff255?"
            className="aspect-square object-contain object-center w-full overflow-hidden ml-4 mt-6 max-md:ml-2.5"
          />
        </div>
        <div className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-center ml-20 mt-4 max-md:max-w-full">
          First Name
        </div>
        <span className="items-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-gray-200 self-center flex w-[436px] max-w-full justify-between gap-5 ml-20 mt-2 px-4 py-3 rounded-lg border-solid max-md:flex-wrap">
          <div className="text-gray-900 text-sm leading-5 grow shrink basis-auto">
            Sandra{" "}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4227aace2b02c354625d34b529b0c7dcf5504222140cf00bf95310754c1f3ef3?"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
        </span>
        <div className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-center ml-20 mt-4 max-md:max-w-full">
          Last Name
        </div>
        <span className="items-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-gray-200 self-center flex w-[436px] max-w-full justify-between gap-5 ml-20 mt-2 px-4 py-3 rounded-lg border-solid max-md:flex-wrap">
          <div className="text-gray-900 text-sm leading-5 grow shrink basis-auto">
            Bloyd
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4227aace2b02c354625d34b529b0c7dcf5504222140cf00bf95310754c1f3ef3?"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
        </span>
        <div className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-center ml-20 mt-4 max-md:max-w-full">
          Email Address
        </div>
        <span className="items-stretch border border-[color:var(--Grey-300,#D0D5DD)] bg-gray-200 self-center flex w-[436px] max-w-full justify-between gap-5 ml-20 mt-2 px-4 py-3 rounded-lg border-solid max-md:flex-wrap">
          <div className="text-gray-900 text-sm leading-5 grow shrink basis-auto">
            SandraBloyd@gmail.com
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4227aace2b02c354625d34b529b0c7dcf5504222140cf00bf95310754c1f3ef3?"
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
        </span>
        <div className="text-gray-900 text-base font-semibold leading-6 tracking-normal self-center ml-20 mt-4 max-md:max-w-full">
          Phone Number
        </div>
        <span className="text-gray-400 text-sm leading-5 whitespace-nowrap border border-[color:var(--Grey-300,#D0D5DD)] bg-white self-center w-[436px] max-w-full justify-center ml-20 mt-2 pl-4 pr-16 py-3 rounded-lg border-solid items-start max-md:pr-5">
          Enter phone number
        </span>
        <span className="text-white text-base font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-center bg-green-500 self-center w-[436px] max-w-full ml-20 mt-6 px-16 py-3 rounded-lg max-md:px-5">
          Save
        </span>
      </span>
    </div>
  );
};
