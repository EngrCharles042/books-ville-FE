import { useState, useCallback } from "react";
import {AdminSideBar} from "./AdminSideBar.jsx";
import {AdminHeader} from "./AdminHeader";
import {AdminScreenTwo} from "./AdminScreenTwo.jsx";

export const AdminScreenOne = () => {
    const [formData, setFormData] = useState({
        author: '',
        bookTitle: '',
        genre: '',
        description: '',
        price: ''
    })

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

                        { screen === 2 ?
                            <AdminScreenTwo/> :
                            screen === 1 ?
                            <div className="mt-10 flex flex-col items-stretch ml-[270px] max-md:w-full max-md:ml-0">
                                <form className="flex flex-col px-5 max-md:max-w-full">
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
                                    <label className="text-black text-2xl font-medium leading-8 mt-6 self-start max-md:max-w-full">
                                        Book Title
                                    </label>
                                    <input
                                        type="text"
                                        name="bookTitle"
                                        value={formData.bookTitle}
                                        placeholder="To Kill a Mocking bird"
                                        className="text-stone-300 text-xs font-medium leading-4 tracking-wide whitespace-nowrap border-[color:var(--Gray-600,#757575)] w-[933px] max-w-full justify-center mt-2 pl-5 pr-16 py-5 rounded-md border-[1.694px] border-solid self-start items-start max-md:pr-5"
                                    />

                                    <label className="text-black text-2xl font-medium leading-8 mt-6 self-start max-md:max-w-full">
                                        Book Author
                                    </label>
                                    <input
                                        type="text"
                                        name="author"
                                        value={formData.author}
                                        placeholder="Harper Lee"
                                        className="text-stone-300 text-xs font-medium leading-4 tracking-wide whitespace-nowrap border-[color:var(--Gray-600,#757575)] w-[933px] max-w-full justify-center mt-2 pl-5 pr-16 py-5 rounded-md border-[1.694px] border-solid self-start items-start max-md:pr-5"
                                    />

                                    <label className="text-black text-2xl font-medium leading-8 mt-6 self-start max-md:max-w-full">
                                        Book Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        placeholder="Book's description..."
                                        className="text-stone-300 text-xs font-medium leading-7 tracking-wide items-stretch border-[color:var(--Gray-600,#757575)] w-[933px] max-w-full mt-2 pl-5 pr-2 pt-1.5 pb-11 rounded-md border-[1.694px] border-solid self-start max-md:max-w-full"
                                    />
                                </form>
                            </div> : <></>
                        }
                    </div>
                </div>
        </>
    );
};

