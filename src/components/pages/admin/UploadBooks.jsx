import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const UploadBooks = () => {
    const navigate = useNavigate();

    const onIconclearClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const onButtonDefaultContainerClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <div className="relative flex flex-row items-start justify-start gap-[0.63rem] max-w-full max-h-full overflow-auto text-left text-[0.88rem] text-gray-9001 font-body-2-regular">
            <div className="relative shadow-[0px_4px_8px_-2px_rgba(33,_33,_33,_0.07),_0px_12px_16px_-4px_rgba(33,_33,_33,_0.1)] w-[22.63rem] h-[33.75rem] z-[0]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-base-white box-border border-[1px] border-solid border-gray-100" />
                <b className="absolute top-[1.5rem] left-[1.5rem] text-[1.5rem] leading-[150%] font-assistive-text-medium-12">
                    Upload Book
                </b>
                <img
                    className="absolute top-[1.88rem] right-[1.5rem] w-[1.5rem] h-[1.5rem] overflow-hidden object-cover hidden cursor-pointer"
                    alt=""
                    src="/iconclear@2x.png"
                    onClick={onIconclearClick}
                />
                <div className="absolute right-[1.5rem] bottom-[1.5rem] flex flex-row items-end justify-end gap-[1rem] text-main-primary-color">
                    <div
                        className="rounded-md overflow-hidden flex flex-row items-center justify-center py-[0.75rem] px-[1rem] gap-[0.5rem] cursor-pointer"
                        onClick={onButtonDefaultContainerClick}
                    >
                        <img
                            className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/iconadd@2x.png"
                        />
                        <div className="relative tracking-[2px] leading-[1.25rem] uppercase font-medium">
                            Cancel
                        </div>
                        <img
                            className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/iconadd@2x.png"
                        />
                    </div>
                    <div className="rounded-md bg-main-primary-color overflow-hidden flex flex-row items-center justify-center py-[0.75rem] px-[1rem] gap-[0.5rem] text-base-white border-[1px] border-solid border-main-primary-color">
                        <img
                            className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/iconadd@2x.png"
                        />
                        <div className="relative tracking-[2px] leading-[1.25rem] uppercase font-medium">
                            Continue
                        </div>
                        <img
                            className="relative w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0 object-cover hidden"
                            alt=""
                            src="/iconadd@2x.png"
                        />
                    </div>
                </div>
                <div className="absolute bottom-[2.25rem] left-[1.5rem] leading-[1.25rem] text-gray-7001 hidden">
                    Footer textrow for additional information
                </div>
                <div className="absolute w-[calc(100%_-_48px)] top-[5.75rem] left-[1.5rem] text-[1rem] leading-[150%] hidden">
                    Dialog body text
                </div>
            </div>
            <div className="my-0 mx-[!important] absolute top-[11.38rem] left-[7.31rem] shrink-0 flex flex-col items-center justify-start gap-[0.94rem] z-[1] text-center text-main-text font-assistive-text-medium-12">
                <img
                    className="relative w-[3rem] h-[3rem] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/filearrowupalt@2x.png"
                />
                <div className="relative leading-[1.25rem]">Upload file here</div>
                <div className="relative leading-[1.25rem]">{`or `}</div>
                <b className="relative leading-[140%] capitalize text-main-primary-color">
                    Browse files
                </b>
            </div>
        </div>
    );
};

