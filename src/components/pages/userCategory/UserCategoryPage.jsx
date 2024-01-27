import restless from "../../../assets/images/userCatImages/restless.png";
import summer from "../../../assets/images/userCatImages/summer.png";
import girl from "../../../assets/images/userCatImages/girl.png";
import ninth from "../../../assets/images/userCatImages/ninth.png";
import maybe from "../../../assets/images/userCatImages/maybe.png";
import { Filters } from "./Filters.jsx";
import {useEffect, useState} from "react";
import { BookDetails } from "../BookDetails.jsx";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios.jsx";
import {BookDisplayCard} from "./comps/BookDisplayCard.jsx";

export const UserCategoryPage = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
        const response = await axios.get("/book/books");

        setBooks(response.data.responseData.content);
    }

    loadBooks()
  }, []);

  const [details, setDetails] = useState(false);

  const handleDetails = () => {
    setDetails(!details);
  };

  return (
    <div className="bg-white flex flex-col items-stretch pb-12">
      {details && <BookDetails />}

      {!details && (
        <div className="flex w-full flex-col items-stretch mb-10 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="text-black text-6xl mt-[4.5rem] mb-[2rem] w-fit font-bold leading-[81.2px] tracking-tight max-md:text-4xl">
            Explore all Deals
          </div>
          <div className="mt-6 max-md:max-w-full">
            <div className="h-[100%] gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="h-fit flex flex-col items-stretch w-[22%] max-md:w-full max-md:ml-0">
                <Filters />
              </div>

              <div className="flex flex-col items-stretch w-[78%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col max-md:max-w-full max-md:mt-5">
                  <div className="items-stretch flex w-[66px] max-w-full gap-2 mr-28 self-end max-md:mr-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a201f9390a9c08c0bc5f61c075ba5ff03858958083aa5dd21ae172881481277c?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccdaccc5c0abec7567e5d2b41ef8ad8064ea019014d0bb446df45ca0ec70abc1?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                  </div>

                  <>
                    {books.map( book => (
                      <BookDisplayCard
                          bookCover={book.bookCover}
                          bookTitle={book.bookTitle}
                          bookAuthor={book.author}
                          genre={book.genre}
                          bookDescription={book.description}
                          handleDetails={handleDetails}
                      />
                    ))}
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
