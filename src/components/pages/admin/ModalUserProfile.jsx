import { useCallback } from "react";

export const ModalUserProfile = () => {
    const onFrameContainer1Click = useCallback(() => {
        // Please sync "Log In" to the project
    }, []);

    return (
        <div className="relative bg-base-white shadow-[0px_110px_31px_rgba(168,_168,_168,_0),_0px_70px_28px_rgba(168,_168,_168,_0.01),_0px_40px_24px_rgba(168,_168,_168,_0.05),_0px_18px_18px_rgba(168,_168,_168,_0.09),_0px_4px_10px_rgba(168,_168,_168,_0.1)] flex flex-col items-start justify-center p-[1rem] box-border gap-[1rem] max-w-full max-h-full overflow-auto text-left text-[0.75rem] text-gray-700 font-bold-11">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[0.75rem]">
                <img
                    className="relative w-[1.04rem] h-[1.04rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/userpenalt1@2x.png"
                />
                <div className="relative leading-[1.22rem] font-medium">
                    Account Setting
                </div>
            </div>
            <div
                className="shrink-0 flex flex-row items-center justify-start gap-[0.75rem] cursor-pointer"
                onClick={onFrameContainer1Click}
            >
                <img
                    className="relative w-[1.04rem] h-[1.04rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/iconoutlinelogout@2x.png"
                />
                <div className="relative leading-[1.22rem] font-medium">Logout</div>
            </div>
        </div>
    );
};

