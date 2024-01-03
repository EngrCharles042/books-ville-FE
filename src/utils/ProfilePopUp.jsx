import Logout from "../components/auth/Logout.jsx";

export const ProfilePopUp = () => {

    return (
        <div className="justify-center items-stretch shadow-md bg-white flex max-w-[181px] flex-col p-4 w-[190px]">
            <div className="cursor-pointer items-center flex justify-between gap-3 ease-in-out duration-200 hover:gap-1">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9438b608d98cb7a01b9f8cd8ad145b7a20744f94f28b8f75e0df37c2737e72a3?"
                    className="aspect-[1.06] object-contain object-center w-[17px] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-zinc-700 text-xs font-medium leading-5 self-stretch grow whitespace-nowrap">
                    Account Setting
                </div>
            </div>
            <div className="cursor-pointer items-center flex justify-between gap-3 mt-4 ease-in-out duration-200 hover:gap-1">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e15da7184842f876612ef5685a90f7dc2086541ca5142a4cfe00d29b1d6467?"
                    className="aspect-[1.06] object-contain object-center w-[17px] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-zinc-700 text-xs font-medium leading-5 self-stretch grow whitespace-nowrap">
                    Subscriptions
                </div>
            </div>
            <div className="cursor-pointer items-center flex justify-between gap-3 mt-4 ease-in-out duration-200 hover:gap-1">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed369c9f34401fe4777810feadc14dcf36e449a5d211a0335285aaf134f3a865?"
                    className="aspect-[1.06] object-contain object-center w-[17px] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-zinc-700 text-xs font-medium leading-5 self-stretch grow whitespace-nowrap">
                    My Saved books
                </div>
            </div>
            <div className="cursor-pointer items-center flex justify-between gap-3 mt-4 ease-in-out duration-200 hover:gap-1">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/637c6eb5c0b2c131cc7caa0c975075fa70a7394ca3e4ec5790031d4281aba4ef?"
                    className="aspect-[1.06] object-contain object-center w-[17px] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-zinc-700 text-xs font-medium leading-5 self-stretch grow whitespace-nowrap">
                    My Purchased books
                </div>
            </div>
            <div className="cursor-pointer items-center flex justify-between gap-3 mt-4 ease-in-out duration-200 hover:gap-1">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c35c6703a14d0d8c1a01515987e330e99cb94ea04c429960bd0694d8b210919?"
                    className="aspect-[1.06] object-contain object-center w-[17px] overflow-hidden shrink-0 max-w-full my-auto"
                />
                <div className="text-zinc-700 text-xs font-medium leading-5 self-stretch grow whitespace-nowrap">
                    Payment History
                </div>
            </div>
            <div className="items-center flex justify-between gap-3 mt-4">
                <div className="text-zinc-700 text-xs font-medium leading-5">
                    <Logout/>
                </div>
            </div>
        </div>
    );
}