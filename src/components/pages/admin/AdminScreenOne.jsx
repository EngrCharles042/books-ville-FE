import { useState, useCallback } from "react";
import {UploadBooks} from "./UploadBooks";
import {PortalPopup} from "./PortalPopup";
import {AdminSideBar} from "./AdminSideBar.jsx";
import {AdminHeader} from "./AdminHeader";
import {AdminScreenTwo} from "./AdminScreenTwo.jsx";

export const AdminScreenOne = () => {
    const [screen, setScreen] = useState(1);

    const [isUploadBooksOpen, setUploadBooksOpen] = useState(false);

    const handleScreenOne = useCallback(() => {
        setScreen(1)
    }, []);

    const handleScreenTwo = useCallback(() => {
        setScreen(2)
    }, []);

    const openUploadBooks = useCallback(() => {
        setUploadBooksOpen(true);
    }, []);

    const closeUploadBooks = useCallback(() => {
        setUploadBooksOpen(false);
    }, []);

    return (
        <>

                <div className="bg-white gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
                    <div>
                        <AdminSideBar
                            handleScreenOne = {handleScreenOne}
                            handleScreenTwo = {handleScreenTwo}
                        />
                    </div>
                    <div>
                        <AdminHeader />
                        {isUploadBooksOpen && (
                            <PortalPopup
                                overlayColor="rgba(113, 113, 113, 0.3)"
                                placement="Centered"
                                onOutsideClick={closeUploadBooks}
                            >
                                <UploadBooks onClose={closeUploadBooks} />
                            </PortalPopup>
                        )}
                        { screen === 2 ?
                            <AdminScreenTwo/> :
                            screen === 1 ?
                            <div className="mt-10 flex flex-col items-stretch ml-[270px] max-md:w-full max-md:ml-0">
                                <div className="flex flex-col px-5 max-md:max-w-full">
                                    <div className="flex w-[939px] max-w-full justify-between gap-5 mt-24 self-start items-start max-md:flex-wrap max-md:mt-10">
                                        <div className="items-center flex gap-3.5">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/131f617ee75381711670702d2a71c474f260aa77af8fbd89ccc65b8026bd3890?"
                                                className="aspect-[0.98] object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full my-auto"
                                            />
                                            <div className="text-zinc-900 text-4xl font-bold leading-[57.4px] self-stretch grow whitespace-nowrap">
                                                Add New Book
                                            </div>
                                        </div>
                                        <div className="text-white text-sm leading-5 whitespace-nowrap items-stretch bg-green-500 self-stretch justify-center px-16 py-5 rounded-lg max-md:px-5">
                                            Add Book
                                        </div>
                                    </div>
                                    <div className="text-black text-2xl font-medium leading-8 mt-6 self-start max-md:max-w-full">
                                        Book Title
                                    </div>
                                    <div className="text-stone-300 text-xs font-medium leading-4 tracking-wide whitespace-nowrap border-[color:var(--Gray-600,#757575)] w-[933px] max-w-full justify-center mt-2 pl-5 pr-16 py-5 rounded-md border-[1.694px] border-solid self-start items-start max-md:pr-5">
                                        To Kill a Mocking bird
                                    </div>
                                    <div className="text-black text-2xl font-medium leading-8 mt-6 self-start max-md:max-w-full">
                                        Book Author
                                    </div>
                                    <div className="text-stone-300 text-xs font-medium leading-4 tracking-wide whitespace-nowrap border-[color:var(--Gray-600,#757575)] w-[933px] max-w-full justify-center mt-2 pl-5 pr-16 py-5 rounded-md border-[1.694px] border-solid self-start items-start max-md:pr-5">
                                        Harper Lee
                                    </div>
                                    <div className="text-black text-2xl font-medium leading-8 mt-6 self-start max-md:max-w-full">
                                        Book Description
                                    </div>
                                    <div className="text-stone-300 text-xl font-medium leading-7 tracking-wide items-stretch border-[color:var(--Gray-600,#757575)] w-[933px] max-w-full mt-2 pl-5 pr-2 pt-1.5 pb-11 rounded-md border-[1.694px] border-solid self-start max-md:max-w-full">
                                        Lorem ipsum dolor sit amet consectetur. Feugiat ac neque sed
                                        viverra vitae. Ut eget <br />
                                        malesuada ut vitae urna. Natoque sed eget faucibus sapien arcu
                                        sit. Integer gravida a<br />
                                        liquet maecenas est nulla fringilla ultrices non vitae. Vitae sed
                                        nulla id congue commodo
                                        <br /> massa ut at.
                                    </div>
                                </div>
                            </div> : <></>
                        }
                    </div>
                </div>
        </>
    );
};

