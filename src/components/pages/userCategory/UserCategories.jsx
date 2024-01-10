import React, {useState} from "react";
import restless from "../../../assets/images/userCatImages/restless.png";
import summer from "../../../assets/images/userCatImages/summer.png";
import girl from "../../../assets/images/userCatImages/girl.png";
import maybe from "../../../assets/images/userCatImages/maybe.png";
import ninth from "../../../assets/images/userCatImages/ninth.png";


export const UserCategories = () => {
    const [fantasyChecked, setFantasyChecked] = useState(false);
    const [romanceChecked, setRomanceChecked] = useState(false);
    const [lessThan5000Checked, setLessThan5000Checked] = useState(false);
    const [range15000to20000Checked, setRange15000to20000Checked] = useState(false);
    const [range20000to25000Checked, setRange20000to25000Checked] = useState(false);
    const [greaterThan500Checked, setGreaterThan500Checked] = useState(false);
    const [selectedRating, setSelectedRating] = useState(0);

    const handleRatingChange = (rating) => {
        setSelectedRating(rating === selectedRating ? 0 : rating);
    };

    const renderCircleCheckbox = (rating) => (
        <div
            className={`flex max-w-[22px] flex-col justify-center items-stretch cursor-pointer ${
                rating === selectedRating ? 'text-blue-500' : 'text-zinc-900'
            }`}
            onClick={() => handleRatingChange(rating)}
        >
            <div className="stroke-[2.697px] flex w-full flex-col justify-center items-stretch p-1 rounded-[50%]">
                <div className={`flex h-[21.58px] w-[21.58px] flex-col rounded-[50%] ${rating === selectedRating ? 'bg-blue-500' : 'bg-white'}`} />
            </div>
            <div className="text-ellipsis whitespace-nowrap text-xs self-stretch text-center">
                {rating} Star{rating !== 1 && 's'}
            </div>
        </div>
    );

    return (
        <div className="bg-white flex flex-col mt-8 items-stretch pb-12">
            <div className="flex w-full flex-col items-stretch mt-10 mb-10 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-black text-6xl font-bold leading-[81.2px] tracking-tight max-md:max-w-full max-md:text-4xl">
                    Explore all Deals
                </div>
                <div className="mt-6 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[22%] max-md:w-full max-md:ml-0">
                            <div className="justify-center items-stretch bg-white flex w-full flex-col mx-auto px-8 py-7 rounded-md max-md:mt-5 max-md:px-5">
                                <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-3xl font-bold">
                                    Filters
                                </div>
                                <div className="items-stretch flex justify-between gap-0 mt-11 max-md:mt-10">
                                    <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl font-semibold grow">
                                        Categories
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/55eece25be896457b90f51eb56ab16267501ff84aa63de453cae5b740cfe25b1?"
                                        className="aspect-square object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full self-start"
                                    />
                                </div>
                                <div className="items-center flex justify-between gap-4 mt-6">
                                    <div className="flex aspect-[1.0476190476190477] flex-col justify-center items-stretch my-auto">
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={fantasyChecked}
                                        onChange={() => setFantasyChecked(!fantasyChecked)}
                                    />
                                    <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl self-stretch grow">
                                        Fantasy
                                    </div>
                                </div>
                                <div className="items-center flex justify-between gap-4 mt-6">
                                    <div className="flex aspect-[1.0476190476190477] flex-col justify-center items-stretch my-auto">
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={romanceChecked}
                                        onChange={() => setRomanceChecked(!romanceChecked)}
                                    />
                                    <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl self-stretch grow">
                                        Romance
                                    </div>
                                </div>
                                <div className="flex justify-between gap-1.5 mt-6 pr-4 items-start">
                                    <div className="text-emerald-700 text-xl font-semibold">
                                        Show more
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d48398ad4121cb80f7750ede868e3621e9cd273fdff222f0d504ddfe13ca4b?"
                                        className="aspect-square object-contain object-center w-[27px] overflow-hidden self-stretch shrink-0 max-w-full"
                                    />
                                </div>
                                <div className="items-stretch flex justify-between gap-0 mt-11 max-md:mt-10">
                                    <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl font-[556] grow">
                                        Your Budget
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d4c08d8ad55fb934b39eda3ee58376800a7f986680956f14782b7f76c3f1d7?"
                                        className="aspect-square object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full self-start"
                                    />
                                </div>
                                <div className="items-center flex justify-between gap-4 mt-6">
                                    <div className="flex aspect-square flex-col justify-center items-stretch my-auto">
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={lessThan5000Checked}
                                        onChange={() => setLessThan5000Checked(!lessThan5000Checked)}
                                    />
                                    <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl self-stretch grow">
                                        Less than ₦5000
                                    </div>
                                </div>
                                <div className="items-center flex justify-between gap-4 mt-6">
                                    <div className="flex aspect-square flex-col justify-center items-stretch my-auto">
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={range15000to20000Checked}
                                        onChange={() => setRange15000to20000Checked(!range15000to20000Checked)}
                                    />
                                    <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl self-stretch grow">
                                        ₦15000 - ₦20000
                                    </div>
                                </div>
                                <div className="items-center flex justify-between gap-4 mt-5">
                                    <div className="flex aspect-square flex-col justify-center items-stretch my-auto">
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={range20000to25000Checked}
                                        onChange={() => setRange20000to25000Checked(!range20000to25000Checked)}
                                    />
                                    <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl self-stretch grow">
                                        ₦20000 - ₦25000
                                    </div>
                                </div>
                                <div className="items-center flex justify-between gap-4 mt-5">
                                    <div className="flex aspect-[1.0476190476190477] flex-col justify-center items-stretch my-auto">
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={greaterThan500Checked}
                                        onChange={() => setGreaterThan500Checked(!greaterThan500Checked)}
                                    />
                                    <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl self-stretch grow">
                                        Greater than $500
                                    </div>
                                </div>
                                <div className="flex justify-between gap-1.5 mt-6 pr-4 items-start">
                                    <div className="text-emerald-700 text-xl font-semibold">
                                        Show more
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4197910499d52782dc44b0a553bf1721e90ce574f2353ba8f9bda960049fad0f?"
                                        className="aspect-square object-contain object-center w-[27px] overflow-hidden self-stretch shrink-0 max-w-full"
                                    />
                                </div>
                                <div className="items-stretch flex justify-between gap-0 mt-11 max-md:mt-10">
                                    <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl font-semibold grow">
                                        Rating
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb4ce552aa08ccbebbf60768007b35db1a62e288eeea58edee23d713b9158c43?"
                                        className="aspect-[1.04] object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full self-start"
                                    />
                                </div>
                                <div>
                                    {[1, 2, 3, 4, 5].map((rating) => (
                                        <div key={rating} className="flex items-center gap-3 mt-6">
                                            {renderCircleCheckbox(rating)}
                                            <div className={`overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl self-stretch grow`}>
                                                {rating} Star{rating !== 1 && 's'}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between gap-1.5 mt-6 pr-4 items-start">
                                    <div className="text-emerald-700 text-xl font-semibold">
                                        Show more
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f59782dfb7b3830646a97617a75335d45d1417088b506885c1b4abac4752bc9?"
                                        className="aspect-square object-contain object-center w-[27px] overflow-hidden self-stretch shrink-0 max-w-full"
                                    />
                                </div>
                            </div>
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
                                <div className="justify-between content-start flex-wrap w-[867px] max-w-full ml-6 self-start">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                                            <div className="justify-center items-center bg-slate-50 flex grow flex-col w-full border-[0.652px] border-solid border-black max-md:mt-4">
                                                <div className="flex-col overflow-hidden relative flex aspect-[0.7345454545454545] w-[202px] justify-center items-stretch">
                                                    <img
                                                        loading="lazy"
                                                        srcSet="..."
                                                        className="absolute h-full w-full object-cover object-center inset-0"
                                                    />
                                                    <div className="relative justify-center items-center shadow-lg bg-slate-50 flex flex-col">
                                                        <img
                                                            alt="book1"
                                                            src={restless}
                                                            className="aspect-[0.73] object-contain object-center w-full overflow-hidden"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                                            <div className="flex grow flex-col max-md:max-w-full max-md:mt-4">
                                                <div className="text-neutral-800 text-2xl font-bold leading-8 self-stretch max-md:max-w-full">
                                                    We Were Restless Things
                                                </div>
                                                <div className="text-neutral-500 text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                                                    by Cole Magamatsu
                                                </div>
                                                <div className="text-black text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                                                    Lorem ipsum dolor sit amet consectetur. Eget hendrerit
                                                    vitae lectus duis nulla facilisis libero amet. Sed ac
                                                    faucibus arcu eget id eu. Egestas et quis tortor
                                                    euismod lectus. Turpis ut neque sit sit maecenas
                                                    scelerisque.
                                                </div>
                                                <div className="items-stretch flex gap-3 mt-3 self-start">
                                                    <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                                        by Barbara Dee
                                                    </div>
                                                    <div className="text-neutral-500 text-sm leading-5">
                                                        by Barbara Dee
                                                    </div>
                                                    <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                                        by Barbara Dee
                                                    </div>
                                                </div>
                                                <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-3 max-md:max-w-full">
                                                    N 15000
                                                </div>
                                                <div className="text-white text-sm font-medium leading-5 uppercase whitespace-nowrap justify-center items-stretch border bg-green-600 mt-6 px-10 py-4 rounded-md border-solid border-green-600 self-start max-md:px-5">
                                                    Add to cART
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-zinc-100 self-stretch flex shrink-0 h-px flex-col mt-5 max-md:max-w-full" />
                                <div className="flex w-[869px] max-w-full flex-col items-stretch ml-6 mt-11 self-start max-md:mt-10">
                                    <div className="z-[1] max-md:max-w-full">
                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                                                <img
                                                    alt="book2"
                                                    src={summer}
                                                    className="aspect-[0.73] object-contain object-center w-[202px] justify-center items-center shadow-lg overflow-hidden shrink-0 max-w-full grow max-md:mt-4"
                                                />
                                            </div>
                                            <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                                                <div className="flex flex-col max-md:max-w-full max-md:mt-4">
                                                    <div className="text-neutral-800 text-2xl font-bold leading-8 self-stretch max-md:max-w-full">
                                                        The Summer Of Impossible Things
                                                    </div>
                                                    <div className="text-neutral-500 text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                                                        by Cole Magamatsu
                                                    </div>
                                                    <div className="text-black text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                                                        Lorem ipsum dolor sit amet consectetur. Eget
                                                        hendrerit vitae lectus duis nulla facilisis libero
                                                        amet. Sed ac faucibus arcu eget id eu. Egestas et
                                                        quis tortor euismod lectus. Turpis ut neque sit sit
                                                        maecenas scelerisque.
                                                    </div>
                                                    <div className="items-stretch flex gap-3 mt-3 self-start">
                                                        <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                                            by Barbara Dee
                                                        </div>
                                                        <div className="text-neutral-500 text-sm leading-5">
                                                            by Barbara Dee
                                                        </div>
                                                        <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                                            by Barbara Dee
                                                        </div>
                                                    </div>
                                                    <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-3 max-md:max-w-full">
                                                        N 15000
                                                    </div>
                                                    <div className="text-white text-sm font-medium leading-5 uppercase whitespace-nowrap justify-center items-stretch border bg-green-600 mt-5 px-10 py-4 rounded-md border-solid border-green-600 self-start max-md:px-5">
                                                        Add to cART
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="bg-zinc-100 self-stretch flex shrink-0 h-px flex-col mt-6 max-md:max-w-full" />
                                <div className="w-[868px] max-w-full ml-6 mt-5 self-start">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                                            <div className="bg-slate-50 flex grow flex-col justify-center items-center w-full border-[0.652px] border-solid border-black max-md:mt-3">
                                                <img
                                                    alt="book3"
                                                    src={girl}
                                                    className="aspect-[0.73] object-contain object-center w-[202px] justify-center items-center shadow-lg overflow-hidden overflow-x-auto"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                                            <div className="flex grow flex-col max-md:max-w-full max-md:mt-3">
                                                <div className="text-neutral-800 text-2xl font-bold leading-9 self-stretch max-md:max-w-full">
                                                    The Girl Of INK&Stars
                                                </div>
                                                <div className="text-neutral-500 text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                                                    by Barbara Dee
                                                </div>
                                                <div className="text-black text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                                                    Lorem ipsum dolor sit amet consectetur. Eget hendrerit
                                                    vitae lectus duis nulla facilisis libero amet. Sed ac
                                                    faucibus arcu eget id eu. Egestas et quis tortor
                                                    euismod lectus. Turpis ut neque sit sit maecenas
                                                    scelerisque.
                                                </div>
                                                <div className="items-stretch flex gap-3 mt-3 px-px self-start">
                                                    <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                                        by Barbara Dee
                                                    </div>
                                                    <div className="text-neutral-500 text-sm leading-5">
                                                        by Barbara Dee
                                                    </div>
                                                    <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                                        by Barbara Dee
                                                    </div>
                                                </div>
                                                <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-3 max-md:max-w-full">
                                                    N 5000
                                                </div>
                                                <div className="text-white text-sm font-medium leading-5 uppercase whitespace-nowrap justify-center items-stretch border bg-green-600 mt-5 px-10 py-4 rounded-md border-solid border-green-600 self-start max-md:px-5">
                                                    Add to cART
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-zinc-100 self-stretch flex shrink-0 h-px flex-col mt-6 max-md:max-w-full" />
                                <div className="self-stretch flex flex-col items-stretch mt-6 max-md:max-w-full">
                                    <div className="max-md:max-w-full">
                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                                                <div className="justify-center items-center shadow-lg bg-slate-50 flex grow flex-col w-full pr-8 max-md:mt-3 max-md:pr-5">
                                                    <img
                                                        alt="book4"
                                                        src={ninth}
                                                        className="aspect-[0.73] object-contain object-center w-[202px] overflow-hidden"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                                                <div className="flex grow flex-col max-md:max-w-full max-md:mt-3">
                                                    <div className="text-neutral-800 text-2xl font-bold leading-9 self-stretch max-md:max-w-full">
                                                        The Ninth Life
                                                    </div>
                                                    <div className="text-neutral-500 text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                                                        by Barbara Dee
                                                    </div>
                                                    <div className="text-black text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                                                        Lorem ipsum dolor sit amet consectetur. Eget
                                                        hendrerit vitae lectus duis nulla facilisis libero
                                                        amet. Sed ac faucibus arcu eget id eu. Egestas et
                                                        quis tortor euismod lectus. Turpis ut neque sit sit
                                                        maecenas scelerisque.
                                                    </div>
                                                    <div className="items-stretch flex gap-3 mt-3 pr-12 self-start max-md:pr-5">
                                                        <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                                            by Barbara Dee
                                                        </div>
                                                        <div className="text-neutral-500 text-sm leading-5">
                                                            by Barbara Dee
                                                        </div>
                                                        <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                                            by Barbara Dee
                                                        </div>
                                                    </div>
                                                    <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-3 max-md:max-w-full">
                                                        N 5000
                                                    </div>
                                                    <div className="text-white text-sm font-medium leading-5 uppercase justify-center items-stretch border bg-green-600 mt-5 px-10 py-4 rounded-md border-solid border-green-600 self-start max-md:px-5">
                                                        Add to cART
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-7 max-md:max-w-full" />
                                    <div className="mt-2.5 max-md:max-w-full">
                                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                            <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
                                                <div className="justify-center items-center shadow-lg bg-slate-50 flex grow flex-col w-full pr-8 py-px max-md:mt-3 max-md:pr-5">
                                                    <img
                                                        alt="book5"
                                                        src={maybe}
                                                        className="aspect-[0.74] object-contain object-center w-[202px] overflow-hidden"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
                                                <div className="flex flex-col max-md:max-w-full max-md:mt-3">
                                                    <div className="text-neutral-800 text-2xl font-bold leading-9 self-stretch max-md:max-w-full">
                                                        Maybe He Just likes you
                                                    </div>
                                                    <div className="text-neutral-500 text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                                                        by Barbara Dee
                                                    </div>
                                                    <div className="text-black text-sm leading-5 self-stretch mt-3 max-md:max-w-full">
                                                        Lorem ipsum dolor sit amet consectetur. Eget
                                                        hendrerit vitae lectus duis nulla facilisis libero
                                                        amet. Sed ac faucibus arcu eget id eu. Egestas et
                                                        quis tortor euismod lectus. Turpis ut neque sit sit
                                                        maecenas scelerisque.
                                                    </div>
                                                    <div className="items-stretch flex gap-3 mt-3 pr-12 self-start max-md:pr-5">
                                                        <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                                            by Barbara Dee
                                                        </div>
                                                        <div className="text-neutral-500 text-sm leading-5">
                                                            by Barbara Dee
                                                        </div>
                                                        <div className="text-neutral-500 text-sm leading-5 grow whitespace-nowrap">
                                                            by Barbara Dee
                                                        </div>
                                                    </div>
                                                    <div className="text-neutral-800 text-base font-bold leading-6 self-stretch mt-3 max-md:max-w-full">
                                                        N 5000
                                                    </div>
                                                    <div className="text-white text-sm font-medium leading-5 uppercase justify-center items-stretch border bg-green-600 mt-2 px-10 py-4 rounded-md border-solid border-green-600 self-start max-md:px-5">
                                                        Add to cART
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

