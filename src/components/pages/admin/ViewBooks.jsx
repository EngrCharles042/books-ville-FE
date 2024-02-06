import {Link} from "react-router-dom";
import unseen from "../../../assets/images/adminImages/unseen.png";
import {useEffect, useState} from "react";
import axios from "../../../api/axios.jsx";

export const ViewBooks = () => {
    const [page, setPage] = useState(0)

    const [bookPage, setBookPage] = useState()

    const [uploadedBooks, setUploadedBooks] = useState([]);

    useEffect(() => {
        const getAllUploadedBooks = async () => {
            await axios.get(`/book/books?pageNo=${page}`, {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("userData")).accessToken}`
                }
            }).then(
                response => {
                    setBookPage(response.data.responseDate)
                    setUploadedBooks(response.data.responseData.content)
                }
            );
        }

        getAllUploadedBooks()
    }, [page]);

    const nextPage = () => {
        if (!bookPage.last) {
            setPage(bookPage + 1)
        }
    }

    const prevPage = () => {
        if (bookPage > 0) {
            setPage(bookPage - 1)
        }
    }

    return (
        <>
            <div className="bg-white flex ml-60 p-5">
                <div className="mt-24">
                    <div className=" items-center flex gap-2 ">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a48afe66de2c87c0cfa6c9ea7b196061ca6484055bd38c52c40141936e312f0?"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                        />
                        <div className="text-zinc-900 text-2xl font-bold leading-8 whitespace-nowrap">
                            All Uploaded Books
                        </div>
                    </div>


                        {
                            uploadedBooks?.map(
                                book => (
                                    <div className="shadow-lg bg-white w-[55vw] pl-5 pr-7 py-5 mt-5 max-md:pr-5">
                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-[79%] max-md:w-full max-md:ml-0">
                                                <div className="flex grow items-stretch justify-between gap-2.5 max-md:mt-10">
                                                    <img
                                                        loading="lazy"
                                                        src={book?.bookCover}
                                                        className="aspect-[0.78] object-contain object-center w-[78px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                                    />
                                                    <div className="items-stretch flex grow basis-[0%] flex-col self-start">
                                                        <div className="text-slate-900 text-base font-semibold leading-6 whitespace-nowrap">
                                                            {book?.bookTitle}
                                                        </div>
                                                        <div className="text-slate-600 text-sm leading-5 whitespace-nowrap mt-1">
                                                            by {book?.author}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex ml-5 max-md:w-full max-md:ml-0">
                                                <Link to={"/admin-dashboard/view-books/order-processing"} className="text-white text-sm leading-5 whitespace-nowrap items-stretch bg-green-500 justify-center w-full my-auto px-7 py-3 rounded-md max-md:mt-10 max-md:px-5">
                                                    VIEW BOOK
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }

                        {uploadedBooks.length > 0 &&
                            <div className="flex gap-4 justify-end mt-10">
                                <button onClick={prevPage} className="flex hover:bg-red-500 py-1 w-[8rem] transition items-center gap-2 border border-black rounded-lg px-4 justify-center">
                                    <div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d7dd83f57cf0f0d55ac4589528b86a4f6e45a046fbd6c7d18b6110dd0c11edb?"
                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                        />
                                    </div>
                                    <p>
                                        Back
                                    </p>
                                </button>

                                <button onClick={nextPage} className="flex items-center hover:bg-green-500 py-1 w-[8rem] transition gap-2 border border-black rounded-lg px-4 justify-center">
                                    <p>
                                        Next
                                    </p>
                                    <div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d7dd83f57cf0f0d55ac4589528b86a4f6e45a046fbd6c7d18b6110dd0c11edb?"
                                            className="aspect-square object-contain rotate-180 object-center w-6 overflow-hidden shrink-0 max-w-full"
                                        />
                                    </div>
                                </button>
                            </div>
                        }
                </div>
            </div>
        </>
    );
};