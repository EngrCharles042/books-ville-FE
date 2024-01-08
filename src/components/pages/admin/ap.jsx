import * as React from "react";

function MyComponent(props) {
    return (
        <div className="bg-white">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[18%] max-md:w-full max-md:ml-0">
                    <div className="flex-col fill-white overflow-hidden relative flex aspect-[0.25390625] grow items-stretch pl-4 pr-16 py-12 max-md:pr-5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf219089cfb82bb2be9d65b94302de1d075747ad9bbf93636d4a4b66ae4bb174?"
                            className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <div className="relative items-stretch flex justify-between gap-1.5 mt-2">
                            <img
                                loading="lazy"
                                srcSet="..."
                                className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-green-500 text-xl font-semibold leading-7 my-auto">
                                Books<span className="text-green-500">Ville</span>
                            </div>
                        </div>
                        <div className="relative items-stretch flex justify-between gap-3 mt-6">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/76583589b5bc81575ed692d66fb4d297ca504948ae38b8622ab17869025867fb?"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-green-500 text-base font-medium leading-5 self-center grow whitespace-nowrap my-auto">
                                Book Management
                            </div>
                        </div>
                        <div className="relative flex items-stretch justify-between gap-1.5 mt-6">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/45768402c325b0f1b75531f5c956eb5a7881ebd63c816897726a949b2e7cc170?"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-zinc-700 text-base font-medium leading-5 self-center grow whitespace-nowrap my-auto">
                                Order Processing
                            </div>
                        </div>
                        <div className="relative flex items-stretch justify-between gap-1.5 mt-6 max-md:mr-1">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb325e0abdc890911b35cc42831a26a3dd8257f2685755df6873a56a3959e52?"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-zinc-700 text-base font-medium leading-5 my-auto">
                                Settings
                            </div>
                        </div>
                        <div className="relative flex items-stretch justify-between gap-1.5 mt-6 mb-[535px] max-md:mr-1 max-md:mb-10">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b0f64bb3768851a0f3eb62907d28a48ad69b7e99ad44239cda8932bc0fdef2c?"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-zinc-700 text-base font-medium leading-5 my-auto">
                                Logout
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[82%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col px-5 max-md:max-w-full">
                        <div className="justify-between items-stretch shadow-sm bg-white self-stretch flex w-full gap-5 pl-12 pr-16 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                            <div className="border border-[color:var(--Gray-3,#828282)] shadow-sm bg-white flex justify-between gap-5 p-3 rounded-lg border-solid items-start max-md:pr-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/74cbb8707262811d455b071b494da5338c021efbc206acd9d105917c4afdcbe0?"
                                    className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                                />
                                <div className="text-zinc-500 text-center text-sm tracking-normal self-stretch grow whitespace-nowrap">
                                    Search by Author , Title , Series
                                </div>
                            </div>
                            <div className="items-center self-center flex justify-between gap-5 my-auto">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/05ff270e3adfa83ded27d978b14287b86725aceba725a85955fad4bc1a990f1c?"
                                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full my-auto"
                                />
                                <img
                                    loading="lazy"
                                    srcSet="..."
                                    className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]"
                                />
                            </div>
                        </div>
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
                </div>
            </div>
        </div>
    );
}


