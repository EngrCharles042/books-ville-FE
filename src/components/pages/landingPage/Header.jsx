import {Link} from "react-router-dom";
import {useState} from "react";

export const Header = ({handleSignUp}) => {

    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)

    const handleRegister = () => {
        setRegister(!register);
        setLogin(false);
    }

    const handleLogin = () => {
        setLogin(!login);
        setRegister(false);
    }

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
                            placeholder="Search by Author or Title or Series"
                            className="text-zinc-400 pl-[3rem] pr-[1rem] focus:outline-none rounded-lg border-solid py-3 rounded-lg pl-10 w-full text-sm tracking-normal self-stretch grow whitespace-nowrap"
                        />
                    </div>
                </div>
                {/* Navigation links */}
                <div className="navigation-links flex items-center gap-5 mr-20">
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
                </div>
                {/* Buttons */}
                <div className="buttons flex items-center gap-5">
                    {/* Replace the below divs with your actual buttons */}
                    <div className="relative">
                        <div onClick={handleRegister} className="hover:bg-gray-200 transition cursor-pointer text-green-500 text-base font-semibold leading-7 whitespace-nowrap justify-center items-stretch border grow px-10 py-[1.1rem] rounded-xl border-solid border-green-500">
                            Sign Up
                        </div>

                        { register &&
                            <div className="absolute flex flex-col gap-2 mt-2">
                                <Link to={"/admin-signup"} className="hover:bg-gray-200 transition cursor-pointer text-green-500 text-base font-semibold leading-7 whitespace-nowrap justify-center items-stretch border grow px-11 py-3 rounded-xl border-solid border-green-500">
                                    Admin
                                </Link>
                                <Link to={"/user-signup"} className="hover:bg-gray-200 transition cursor-pointer text-green-500 text-base font-semibold leading-7 whitespace-nowrap justify-center items-stretch border grow px-11 py-3 rounded-xl border-solid border-green-500">
                                    Reader
                                </Link>
                            </div>
                        }
                    </div>


                    <div className="relative">
                        <div onClick={handleLogin} className="transition hover:bg-green-600 cursor-pointer text-white text-base font-semibold leading-7 whitespace-nowrap justify-center items-stretch bg-green-500 grow px-12 py-[1.2rem] rounded-xl">
                            Log In
                        </div>

                        { login &&
                            <div className="absolute flex flex-col gap-2 mt-2">
                                <Link to="/admin-login" className="transition hover:bg-green-600 cursor-pointer text-white text-base font-semibold leading-7 whitespace-nowrap justify-center items-stretch bg-green-500 grow px-11 py-3.5 rounded-xl">
                                    Admin
                                </Link>
                                <Link to="/login" className="transition hover:bg-green-600 cursor-pointer text-white text-base font-semibold leading-7 whitespace-nowrap justify-center items-stretch bg-green-500 grow px-11 py-3.5 rounded-xl">
                                    Reader
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
