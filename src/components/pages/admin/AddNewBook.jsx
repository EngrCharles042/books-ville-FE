import {useState} from "react";
import axios from "../../../api/axios.jsx";

// private  String author;
// private  String bookTitle;
// private Genre genre;
// private MultipartFile bookCover;
// private MultipartFile bookFile;
// private  String description;
// private  BigDecimal price;

export const AddNewBook = ({handleStatus, setStatusTitle, setStatusMessage, setStatusColor}) => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    const enableStatus = (title, message, color) => {
        handleStatus();
        setStatusTitle(title);
        setStatusMessage(message)
        setStatusColor(color)
    }

    const [formData, setFormData] = useState({
        author: '',
        bookTitle: '',
        genre: '',
        description: '',
        price: '',
        bookCover: '',
        bookFile: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("/book/add-book", formData, {
            headers: {
                'Authorization': `Bearer ${userData.accessToken}`
            }
        }).then(
            response => {
                console.log(response);
                enableStatus("Book Add", "Your book have been successfully added", "bg-green-600")
            }
        )
    };


    return (
        <>
            <div className="max-w-[950px] mt-10 flex flex-col items-stretch ml-[270px] max-md:w-full max-md:ml-0">
                <form className="flex flex-col px-5 w-full max-md:max-w-full" onSubmit={handleSubmit}>
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
                        <button type="submit" className="text-white text-sm leading-5 whitespace-nowrap items-stretch bg-green-500 self-stretch justify-center px-16 py-5 rounded-lg max-md:px-5">
                            Add Book
                        </button>
                    </div>
                    <label className="text-black text-2xl font-medium leading-8 mt-6 self-start max-md:max-w-full">
                        Book Title
                    </label>
                    <input
                        type="text"
                        name="bookTitle"
                        value={formData.bookTitle}
                        onChange={handleChange}
                        placeholder="To Kill a Mocking bird"
                        className="text-black text-xs font-medium leading-4 tracking-wide whitespace-nowrap border-[color:var(--Gray-600,#757575)] w-[933px] max-w-full justify-center mt-2 pl-5 pr-16 py-5 rounded-md border-[1.694px] border-solid self-start items-start max-md:pr-5"
                    />

                    <label className="text-black text-2xl font-medium leading-8 mt-6 self-start max-md:max-w-full">
                        Book Author
                    </label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Harper Lee"
                        className="text-black text-xs font-medium leading-4 tracking-wide whitespace-nowrap border-[color:var(--Gray-600,#757575)] w-[933px] max-w-full justify-center mt-2 pl-5 pr-16 py-5 rounded-md border-[1.694px] border-solid self-start items-start max-md:pr-5"
                    />

                    <div className="w-full flex gap-5 mt-6">
                        <div className="w-[50%]">
                            <div>
                                <label className="text-black text-2xl font-medium leading-8 mt-6 self-start max-md:max-w-full">
                                    Book Price
                                </label>
                            </div>

                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="1000"
                                className="text-black text-xs font-medium leading-4 tracking-wide whitespace-nowrap border-[color:var(--Gray-600,#757575)] w-full justify-center mt-2 pl-5 pr-16 py-5 rounded-md border-[1.694px] border-solid self-start items-start max-md:pr-5"
                            />
                        </div>

                        <div className="w-[50%]">
                            <div>
                                <label className="text-black text-2xl font-medium leading-8 mt-6 self-start max-md:max-w-full">
                                    Book Genre
                                </label>
                            </div>

                            <select
                                id="genre"
                                name="genre"
                                value={formData.genre}
                                onChange={handleChange}
                                className="text-black text-xs font-medium leading-4 tracking-wide whitespace-nowrap border-[color:var(--Gray-600,#757575)] w-full justify-center mt-2 pl-5 pr-16 py-5 rounded-md border-[1.694px] border-solid self-start items-start max-md:pr-5"
                            >
                                <option value="" selected disabled>Select a Genre</option>
                                <option value="FICTION">Fiction</option>
                                <option value="COMICS">Comics</option>
                                {/*<option value="BUILDING_AND_ARCHITECTURE">Building and Architecture</option>*/}
                                {/*<option value="CONSULTING_AND_STRATEGY">Consulting and Strategy</option>*/}
                                {/*<option value="CREATIVE_DESIGN">Creative Design</option>*/}
                            </select>
                        </div>
                    </div>

                    <label className="text-black text-2xl font-medium leading-8 mt-6 self-start max-md:max-w-full">
                        Book Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Book's description..."
                        className="text-black text-xs font-medium leading-7 tracking-wide items-stretch border-[color:var(--Gray-600,#757575)] w-[933px] max-w-full mt-2 pl-5 pr-2 pt-1.5 pb-11 rounded-md border-[1.694px] border-solid self-start max-md:max-w-full"
                    />
                </form>
            </div>
        </>
    );
}