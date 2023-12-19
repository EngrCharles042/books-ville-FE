import {Link} from "react-router-dom";

export const Header = ({handleSignUp}) => {

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
                    <div className="border border-[color:var(--Gray-2,#4F4F4F)] shadow-sm bg-white flex justify-between gap-5 pl-3 pr-20 py-3 rounded-lg border-solid items-start max-md:pr-5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/691300b616dcd4f3e9fde758ec214a4b93dc83db358279b76ea7d765eaa2fb2e?"
                            className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                            alt="Magnifying Glass"
                        />
                        <div className="text-zinc-400 text-center text-sm tracking-normal self-stretch grow whitespace-nowrap">
                            Search by Author or Title or Series
                        </div>
                    </div>
                </div>
                {/* Navigation links */}
                <div className="navigation-links flex items-center gap-5 mr-20">
                    {/* Replace the below divs with your actual navigation links */}
                    <div className="text-green-500 text-base font-medium leading-7 grow whitespace-nowrap">
                        Home
                    </div>
                    <div className="text-black text-base font-medium leading-7">
                        Categories
                    </div>
                    <div className="text-black text-base font-medium leading-7">Cart</div>
                    <div className="text-black text-base font-medium leading-7 grow whitespace-nowrap">
                        Services
                    </div>
                </div>
                {/* Buttons */}
                <div className="buttons flex items-center gap-5">
                    {/* Replace the below divs with your actual buttons */}
                    <div onClick={handleSignUp} className="text-green-500 text-base font-semibold leading-7 whitespace-nowrap justify-center items-stretch border grow px-11 py-3.5 rounded-xl border-solid border-green-500">
                        Sign Up
                    </div>
                    <Link to="/login" className="text-white text-base font-semibold leading-7 whitespace-nowrap justify-center items-stretch bg-green-500 grow px-11 py-3.5 rounded-xl">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
};
