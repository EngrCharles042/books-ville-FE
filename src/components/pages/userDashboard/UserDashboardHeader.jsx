import profilePic from '../../../assets/images/userCatImages/profile.png';

export const UserDashboardHeader = () => {
    return (
        <div className="justify-between items-stretch bg-white flex gap-5 px-16 py-4 max-md:flex-wrap max-md:px-5">
            <div className="justify-between items-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-1.5">
                    <img
                        loading="lazy"
                        src="/src/assets/images/landingPageImages/image-1@2x.png"
                        className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
                        alt="logo"
                    />
                    <div className="text-green-500 text-xl font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
                        <span className="text-black">Books</span>
                        <span className="text-green-500">Ville</span>
                    </div>
                </div>
                <div className="border border-[color:var(--Gray-3,#828282)] shadow-sm bg-white flex justify-between gap-5 p-3 rounded-lg border-solid self-start items-start max-md:pr-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/91e96adef65dce60e36521d4289d5e7de1ab53737882b92f22f1bc074be117bf?"
                        className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                        alt="magnifying Glass"
                    />
                    <input
                        type="search"
                        name="search"
                        className="text-black text-left text-sm focus:outline-none tracking-normal self-stretch grow whitespace-nowrap w-[20rem]"
                        placeholder="Search by Author , Title , Series"
                    />
                </div>
            </div>
            <div className="items-center self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-5 my-auto">
                    <div className="text-black text-xl font-medium leading-7 grow whitespace-nowrap cursor-pointer hover:text-green-500">
                        Home
                    </div>
                    <div className="text-black text-xl font-medium leading-7 cursor-pointer hover:text-green-500">
                        Categories
                    </div>
                    <div className="text-black text-xl font-medium leading-7 cursor-pointer hover:text-green-500">
                        Cart
                    </div>
                    <div className="text-black text-xl font-medium leading-7 grow whitespace-nowrap cursor-pointer hover:text-green-500">
                        Services
                    </div>
                </div>
                <div className="items-center self-stretch flex justify-between gap-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/45865262ec10830d6ae94f082eeaa00c750af8e190a99765bfbb482648db65df?"
                        className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full my-auto"
                        alt="notification"
                    />
                    <img
                        loading="lazy"
                        srcSet={profilePic}
                        className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]"
                        alt="profile picture"
                    />
                </div>
            </div>
        </div>
    );
}



