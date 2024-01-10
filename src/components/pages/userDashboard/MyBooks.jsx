import {MyBookCard} from "./MyBookCard.jsx";
import {BookCard} from "../landingPage/BookCard.jsx";

export const MyBooks = () => {
    const purchased = {
        image1: "/src/assets/images/landingPageImages/img.png",
        image2: "/src/assets/images/landingPageImages/img_1.png",
        image3: "/src/assets/images/landingPageImages/img_2.png",
        image4: "/src/assets/images/landingPageImages/img_3.png"
    }
    const savedBooks = {
        image1: "/src/assets/images/landingPageImages/img_4.png",
        image2: "/src/assets/images/landingPageImages/img_4.png",
        image3: "/src/assets/images/landingPageImages/img_5.png",
        image4: "/src/assets/images/landingPageImages/img_6.png"
    }
    const recommended = {
        image1: "/src/assets/images/landingPageImages/img_7.png",
        image2: "/src/assets/images/landingPageImages/img_8.png",
        image3: "/src/assets/images/landingPageImages/img_9.png",
        image4: "src/assets/images/landingPageImages/image-2@2x.png"
    }
    const namePurchased = {
        name1: "The Midnight Library",
        name2: "Not Here to be Liked",
        name3: "Click to Subscribe",
        name4: "The rules do not apply"
    }
    const nameSavedBooks = {
        name1: "Not Here to be Liked",
        name2: "Not Here to be Liked",
        name3: "Click to Subscribe",
        name4: "The rules do not apply"
    }
    const nameRecommended = {
        name1: "The Midnight Library",
        name2: "Not Here to be Liked",
        name3: "Click to Subscribe",
        name4: "The rules do not apply"
    }
    const authorPurchased = {
        author1: "Matt Haig",
        author2: "Michelle Quach",
        author3: "G.L.Tomas",
        author4: "Ariel Levy"
    }
    const authorSavedBooks = {
        author1: "Michelle Quach",
        author2: "Michelle Quach",
        author3: "G.L.Tomas",
        author4: "Ariel Levy"
    }
    const authorRecommended = {
        author1: "Matt Haig",
        author2: "Michelle Quach",
        author3: "G.L.Tomas",
        author4: "Ariel Levy"
    }

    return (
        <div className="flex flex-col max-w-[1297px] mx-auto items-stretch">
            <div className="text-black text-6xl mt-[4.5rem] mb-[2rem] w-fit font-bold leading-[81.2px] tracking-tight max-md:text-4xl">
                Welcome {localStorage.getItem("firstName")},
            </div>
            <div className="items-stretch flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-4xl font-medium leading-7 tracking-wider grow shrink basis-auto max-md:max-w-full">
                    Your Purchased Books
                </div>
                <div className="text-black text-base font-bold leading-7">View all</div>
            </div>
            <div className="w-full mt-12 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <MyBookCard
                        image={purchased.image1}
                        name={namePurchased.name1}
                        author={authorPurchased.author1}
                        price={5000}
                    />
                    <MyBookCard
                        image={purchased.image2}
                        name={namePurchased.name2}
                        author={authorPurchased.author2}
                        price={5000}
                    />
                    <MyBookCard
                        image={purchased.image3}
                        name={namePurchased.name3}
                        author={authorPurchased.author3}
                        price={5000}
                    />
                    <MyBookCard
                        image={purchased.image4}
                        name={namePurchased.name4}
                        author={authorPurchased.author4}
                        price={5000}
                    />
                </div>
            </div>
            <div className="items-stretch flex w-full justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="text-black text-4xl font-semibold leading-7 tracking-widest grow shrink basis-auto">
                    Your Saved Books
                </div>
                <div className="text-black text-base font-semibold leading-7">
                    View All{" "}
                </div>
            </div>
            <div className="w-full mt-12 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <BookCard
                        image={savedBooks.image1}
                        name={nameSavedBooks.name1}
                        author={authorSavedBooks.author1}
                        price={5000}
                    />
                    <BookCard
                        image={savedBooks.image2}
                        name={nameSavedBooks.name2}
                        author={authorSavedBooks.author2}
                        price={5000}
                    />
                    <BookCard
                        image={savedBooks.image3}
                        name={nameSavedBooks.name3}
                        author={authorSavedBooks.author3}
                        price={5000}
                    />
                    <BookCard
                        image={savedBooks.image4}
                        name={nameSavedBooks.name4}
                        author={authorSavedBooks.author4}
                        price={5000}
                    />
                </div>
            </div>
            <div className="justify-between items-stretch flex w-full gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="text-black text-4xl font-semibold leading-7 tracking-widest grow shrink basis-auto">
                    Recommended Books
                </div>
                <div className="text-black text-base font-semibold leading-7">
                    Read More{" "}
                </div>
            </div>
            <div className="w-full mt-12 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <BookCard
                        image={recommended.image1}
                        name={nameRecommended.name1}
                        author={authorRecommended.author1}
                        price={5000}
                    />
                    <BookCard
                        image={recommended.image2}
                        name={nameRecommended.name2}
                        author={authorRecommended.author2}
                        price={5000}
                    />
                    <BookCard
                        image={recommended.image3}
                        name={nameRecommended.name3}
                        author={authorRecommended.author3}
                        price={5000}
                    />
                    <BookCard
                        image={recommended.image4}
                        name={nameRecommended.name4}
                        author={authorRecommended.author4}
                        price={5000}
                    />
                </div>
            </div>
        </div>
    );
}