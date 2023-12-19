import * as React from "react";
import { Link } from "react-router-dom";
import {BookCard} from "./BookCard.jsx";

export const BestSellingAndPopularBooks = () => {
    const bestSelling = {
        image1: "/src/assets/images/landingPageImages/img.png",
        image2: "/src/assets/images/landingPageImages/img_1.png",
        image3: "/src/assets/images/landingPageImages/img_2.png",
        image4: "/src/assets/images/landingPageImages/img_3.png"
    }
    const fantasyBooks = {
        image1: "/src/assets/images/landingPageImages/img_4.png",
        image2: "/src/assets/images/landingPageImages/img_4.png",
        image3: "/src/assets/images/landingPageImages/img_5.png",
        image4: "/src/assets/images/landingPageImages/img_6.png"
    }
    const recentlyAdded = {
        image1: "/src/assets/images/landingPageImages/img_7.png",
        image2: "/src/assets/images/landingPageImages/img_8.png",
        image3: "/src/assets/images/landingPageImages/img_9.png",
        image4: "src/assets/images/landingPageImages/image-2@2x.png"
    }
    const nameBestSelling = {
        name1: "The Midnight Library",
        name2: "Not Here to be Liked",
        name3: "Click to Subscribe",
        name4: "The rules do not apply"
    }
    const nameFantasy = {
        name1: "Not Here to be Liked",
        name2: "Not Here to be Liked",
        name3: "Click to Subscribe",
        name4: "The rules do not apply"
    }
    const nameRecentlyAdded = {
        name1: "The Midnight Library",
        name2: "Not Here to be Liked",
        name3: "Click to Subscribe",
        name4: "The rules do not apply"
    }
    const authorBestSelling = {
        author1: "Matt Haig",
        author2: "Michelle Quach",
        author3: "G.L.Tomas",
        author4: "Ariel Levy"
    }
    const authorFantasy = {
        author1: "Michelle Quach",
        author2: "Michelle Quach",
        author3: "G.L.Tomas",
        author4: "Ariel Levy"
    }
    const authorRecentlyAdded = {
        author1: "Matt Haig",
        author2: "Michelle Quach",
        author3: "G.L.Tomas",
        author4: "Ariel Levy"
    }

    return (
        <div className="flex flex-col max-w-[1297px] mx-auto items-stretch">
            <div className="items-stretch flex w-full justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-black text-4xl font-medium leading-7 tracking-wider grow shrink basis-auto max-md:max-w-full">
                    BEST SELLING AND POPULAR BOOKS
                </div>
                <div className="text-black text-base font-bold leading-7">View all</div>
            </div>
            <div className="w-full mt-12 px-5 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <BookCard
                        image={bestSelling.image1}
                        name={nameBestSelling.name1}
                        author={authorBestSelling.author1}
                        price={5000}
                    />
                    <BookCard
                        image={bestSelling.image2}
                        name={nameBestSelling.name2}
                        author={authorBestSelling.author2}
                        price={5000}
                    />
                    <BookCard
                        image={bestSelling.image3}
                        name={nameBestSelling.name3}
                        author={authorBestSelling.author3}
                        price={5000}
                    />
                    <BookCard
                        image={bestSelling.image4}
                        name={nameBestSelling.name4}
                        author={authorBestSelling.author4}
                        price={5000}
                    />
                </div>
            </div>
            <div className="items-stretch flex w-full justify-between gap-5 mt-14 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="text-black text-4xl font-semibold leading-7 tracking-widest grow shrink basis-auto">
                    FANTASY BOOKS
                </div>
                <div className="text-black text-base font-semibold leading-7">
                    View All{" "}
                </div>
            </div>
            <div className="w-full mt-12 px-5 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <BookCard
                        image={fantasyBooks.image1}
                        name={nameFantasy.name1}
                        author={authorFantasy.author1}
                        price={5000}
                    />
                    <BookCard
                        image={fantasyBooks.image2}
                        name={nameFantasy.name2}
                        author={authorFantasy.author2}
                        price={5000}
                    />
                    <BookCard
                        image={fantasyBooks.image3}
                        name={nameFantasy.name3}
                        author={authorFantasy.author3}
                        price={5000}
                    />
                    <BookCard
                        image={fantasyBooks.image4}
                        name={nameFantasy.name4}
                        author={authorFantasy.author4}
                        price={5000}
                    />
                </div>
            </div>
            <div className="justify-between items-stretch flex w-full gap-5 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="text-black text-4xl font-semibold leading-7 tracking-widest grow shrink basis-auto">
                    RECENTLY ADDED
                </div>
                <div className="text-black text-base font-semibold leading-7">
                    Read More{" "}
                </div>
            </div>
            <div className="w-full mt-12 px-5 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <BookCard
                        image={recentlyAdded.image1}
                        name={nameRecentlyAdded.name1}
                        author={authorRecentlyAdded.author1}
                        price={5000}
                    />
                    <BookCard
                        image={recentlyAdded.image2}
                        name={nameRecentlyAdded.name2}
                        author={authorRecentlyAdded.author2}
                        price={5000}
                    />
                    <BookCard
                        image={recentlyAdded.image3}
                        name={nameRecentlyAdded.name3}
                        author={authorRecentlyAdded.author3}
                        price={5000}
                    />
                    <BookCard
                        image={recentlyAdded.image4}
                        name={nameRecentlyAdded.name4}
                        author={authorRecentlyAdded.author4}
                        price={5000}
                    />
                </div>
            </div>
        </div>
    );
}