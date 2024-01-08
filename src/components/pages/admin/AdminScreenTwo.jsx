

export const AdminScreenTwo = () => {
    return (
        <>

            <div className="bg-white flex  ml-[270px] p-5">
                <div className="mt-24  ">
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
                    <div className="shadow-lg bg-white w-[55vw] pl-5 pr-7 py-5 max-md:pr-5">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[79%] max-md:w-full max-md:ml-0">
                                <div className="flex grow items-stretch justify-between gap-2.5 max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        src="src/assets/images/adminImages/img10.png"
                                        className="aspect-[0.78] object-contain object-center w-[78px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                                    />
                                    <div className="items-stretch flex grow basis-[0%] flex-col self-start">
                                        <div className="text-slate-900 text-base font-semibold leading-6 whitespace-nowrap">
                                            The BOOK of UNSEEN WORLD
                                        </div>
                                        <div className="text-slate-600 text-sm leading-5 whitespace-nowrap mt-1">
                                            by Jamilla Francis
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex ml-5 max-md:w-full max-md:ml-0">
                                <div className="text-white text-sm leading-5 whitespace-nowrap items-stretch bg-green-500 justify-center w-full my-auto px-7 py-3 rounded-md max-md:mt-10 max-md:px-5">
                                    VIEW BOOK
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};