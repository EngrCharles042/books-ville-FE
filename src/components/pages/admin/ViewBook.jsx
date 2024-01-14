import unseen from "../../../assets/images/adminImages/unseen.png";
import { Link } from "react-router-dom";
import { AdminHeader } from "./AdminHeader.jsx";
import { AdminSideBar } from "./AdminSideBar.jsx";

export const ViewBook = () => {
    return (
        <div className="bg-white">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[18%] max-md:w-full max-md:ml-0">

                    <AdminSideBar />

                </div>
                <div className="flex flex-col items-stretch w-[82%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-stretch max-md:max-w-full">

                        <AdminHeader />

                        <div className="mt-20">
                            <span className="items-center flex gap-2 ml-8 mt-7 self-start max-md:ml-2.5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf4be3deae8d0d24f2a0336bc8a7a937de5df9ac4ac1e615aaa9d766e8d85e23?"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                            />
                            <div className="text-zinc-900 text-2xl font-bold leading-8 self-stretch grow whitespace-nowrap">
                All Uploaded Books
              </div>
            </span>
                        <div className="shadow-lg bg-white w-[755px] max-w-full ml-7 mt-8 pl-5 pr-7 py-5 self-start max-md:pr-5">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch w-[79%] max-md:w-full max-md:ml-0">
                                    <div className="flex grow items-stretch justify-between gap-2.5 max-md:mt-10">
                                        <img
                                            alt="book"
                                            src={unseen}
                                            className="aspect-[0.78] object-contain object-center w-[78px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                        />
                                        <span className="items-stretch flex grow basis-[0%] flex-col self-start">
                      <div className="text-slate-900 text-base font-semibold leading-6 whitespace-nowrap">
                        The BOOK of UNSEEN WORLD
                      </div>
                      <div className="text-slate-600 text-sm leading-5 whitespace-nowrap mt-1">
                        by Jamilla Francis
                      </div>
                    </span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
                                    <Link to="/order-processing">
                    <span className="transition hover:bg-green-600 cursor-pointer text-center text-white text-sm font-medium leading-5 uppercase whitespace-nowrap border bg-green-500 mt-4 px-10 py-4 rounded-md border-solid border-green-600 self-start max-md:px-5">
                      VIEW BOOK
                    </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};