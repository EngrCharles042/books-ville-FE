export const UserDashboardHeader = () => {

    return (
        <div className="container mx-auto px-1 py-9">
            <div className="flex justify-between items-center">
                <div className="logo-container flex items-center">
                    <img
                        loading="lazy"
                        src="/src/assets/images/landingPageImages/image-1@2x.png"
                        className="aspect-square object-contain object-center w-[41px] mr-4 overflow-hidden shrink-0 max-w-full"
                        alt="Logo"
                    />
                    <div className="text-green-500 text-xl font-semibold leading-7 self-center grow whitespace-nowrap m1-auto">
                        <span className="text-black">Books</span>
                        <span className="text-green-500">Ville</span>
                    </div>
                </div>
                <div className="items-stretch bg-white flex grow basis-[0%] flex-col justify-center px-4 py-2">
                    <div className="relative border border-[color:var(--Gray-2,#4F4F4F)] rounded-lg">
                        {/*className="border border-[color:var(--Gray-2,#4F4F4F)] shadow-sm bg-white flex justify-between gap-5 pl-3 pr-20 rounded-lg border-solid items-start max-md:pr-5"*/}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/691300b616dcd4f3e9fde758ec214a4b93dc83db358279b76ea7d765eaa2fb2e?"
                            className="aspect-square absolute object-contain top-[0.9rem] left-4 object-center justify-center items-center overflow-hidden shrink-0 max-w-full"
                            alt="Magnifying Glass"
                        />
                        <input
                            type="search"
                            name="search"
                            className="text-zinc-400 pl-[3rem] pr-[1rem] focus:outline-none border-solid py-3 rounded-lg w-full text-sm tracking-normal self-stretch grow whitespace-nowrap"
                        />
                    </div>
                </div>
                {/* Navigation links */}
                <div className="navigation-links flex items-center gap-5">
                    {/* Replace the below divs with your actual navigation links */}
                    <div className="cursor-pointer text-green-500 text-base font-medium leading-7 grow whitespace-nowrap">
                        Home
                    </div>
                    <div className="cursor-pointer text-black text-base font-medium leading-7">
                        Categories
                    </div>
                    <div className="cursor-pointer text-black text-base font-medium leading-7">
                        Cart
                    </div>
                    <div className="cursor-pointer text-black text-base font-medium leading-7 grow whitespace-nowrap">
                        Services
                    </div>

                    <div className="items-center self-stretch flex justify-between gap-5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/de8748853204c57af9b965d18aa3df461909511ddbaaebc25badf2582f492eff?"
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
            <div className="text-black text-6xl font-bold leading-[81.2px] tracking-tight max-w-[484px] max-md:text-4xl">
                Welcome Sandra,
            </div>
        </div>
    );
};
