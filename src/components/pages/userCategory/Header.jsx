import React, { useState, useRef, useEffect } from 'react';
import Logo from '../../assets/Logo.png';
import profile from '../../assets/profile.png';
import Modal from 'react-modal';

function MyHeader(props) {
    const [activeHeader, setActiveHeader] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [profilePosition, setProfilePosition] = useState({ top: 0, left: 0 });
    const modalRef = useRef(null);

    const handleProfileClick = (event) => {
        event.preventDefault();
        const rect = event.target.getBoundingClientRect();
        setProfilePosition({ top: rect.bottom, left: rect.left });
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    const handleClick = (header) => {
        setActiveHeader(header);
    };

    useEffect(() => {
        if (isModalOpen) {
            // Calculate the left position to keep the modal fully visible
            const modalWidth = modalRef.current.offsetWidth;
            const windowWidth = window.innerWidth;
            const newLeft = Math.min(profilePosition.left, windowWidth - modalWidth);
            setProfilePosition((prev) => ({ ...prev, left: newLeft }));
        }
    }, [isModalOpen, profilePosition]);

    return (
        <div className="justify-between items-stretch shadow-sm bg-white flex w-full gap-5 px-20 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-1.5">
                    <img
                        alt="booksville logo"
                        src={Logo}
                        className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-green-500 text-xl font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
                        Books<span className="text-green-500">Ville</span>
                    </div>
                </div>
                <div className="border border-[color:var(--Gray-3,#828282)] shadow-sm bg-white flex justify-between gap-5 p-3 rounded-lg border-solid self-start items-start max-md:pr-5">
                    <a href="#">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91e96adef65dce60e36521d4289d5e7de1ab53737882b92f22f1bc074be117bf?"
                            className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                        />
                    </a>
                    <input
                        type="text"
                        placeholder="Search by Author, Title, Series"
                        className="text-zinc-500 text-sm tracking-normal flex-grow outline-none w-full md:w-96"
                    />
                </div>
            </div>
            <div className="items-center self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-5 my-auto">
                    <a href='#'
                       className={`text-xl font-medium leading-7 ${activeHeader === 'Home' ? 'text-green-500' : ''}`}
                       onClick={() => handleClick('Home')}
                    >
                        Home
                    </a>
                    <a href='#'
                       className={`text-xl font-medium leading-7 ${activeHeader === 'Categories' ? 'text-green-500' : ''}`}
                       onClick={() => handleClick('Categories')}
                    >
                        Categories
                    </a>
                    <a href='#'
                       className={`text-xl font-medium leading-7 ${activeHeader === 'Cart' ? 'text-green-500' : ''}`}
                       onClick={() => handleClick('Cart')}
                    >
                        Cart
                    </a>
                    <a href='#'
                       className={`text-xl font-medium leading-7 ${activeHeader === 'Services' ? 'text-green-500' : ''}`}
                       onClick={() => handleClick('Services')}
                    >
                        Services
                    </a>
                </div>
                <div className="items-center self-stretch flex justify-between gap-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/45865262ec10830d6ae94f082eeaa00c750af8e190a99765bfbb482648db65df?"
                        className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div style={{ position: 'relative' }}>
                        {/* Profile Picture */}
                        <a href='#' onClick={handleProfileClick}>
                            <img
                                alt="profile picture"
                                src={profile}
                                className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]"
                            />
                        </a>

                        {/* Modal */}
                        {isModalOpen && (
                            <div
                                className="fixed bg-black bg-opacity-50 flex items-center justify-center"
                                style={{ top: profilePosition.top, left: profilePosition.left }}
                            >
                                <div
                                    ref={modalRef}
                                    className="justify-center items-stretch shadow-md bg-white flex flex-col p-4"
                                >
                                    <div className="items-center flex justify-between gap-3">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9438b608d98cb7a01b9f8cd8ad145b7a20744f94f28b8f75e0df37c2737e72a3?"
                                            className="aspect-[1.06] object-contain object-center w-[17px] overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <div className="text-zinc-700 text-xs font-medium leading-5 self-stretch grow whitespace-nowrap">
                                            Account Setting
                                        </div>
                                    </div>
                                    <div className="items-center flex justify-between gap-3 mt-4">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e15da7184842f876612ef5685a90f7dc2086541ca5142a4cfe00d29b1d6467?"
                                            className="aspect-[1.06] object-contain object-center w-[17px] overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <div className="text-zinc-700 text-xs font-medium leading-5">
                                            Subscriptions
                                        </div>
                                    </div>
                                    <div className="items-center flex justify-between gap-3 mt-4">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed369c9f34401fe4777810feadc14dcf36e449a5d211a0335285aaf134f3a865?"
                                            className="aspect-[1.06] object-contain object-center w-[17px] overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <div className="text-zinc-700 text-xs font-medium leading-5 self-stretch grow whitespace-nowrap">
                                            My Saved books
                                        </div>
                                    </div>
                                    <div className="items-center flex justify-between gap-3 mt-4">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/637c6eb5c0b2c131cc7caa0c975075fa70a7394ca3e4ec5790031d4281aba4ef?"
                                            className="aspect-[1.06] object-contain object-center w-[17px] overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <div className="text-zinc-700 text-xs font-medium leading-5 self-stretch grow whitespace-nowrap">
                                            My Purchased books
                                        </div>
                                    </div>
                                    <div className="items-center flex justify-between gap-3 mt-4">
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
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ed3ca0c65c8a9681ee078f0a0f3034f924d4916054c5fbba961d7cd167936a?"
                                            className="aspect-[1.06] object-contain object-center w-[17px] overflow-hidden shrink-0 max-w-full my-auto"
                                        />
                                        <div className="text-zinc-700 text-xs font-medium leading-5">
                                            Logout
                                        </div>
                                    </div>
                                    <button className="mt-4 p-2 text-white bg-red-500" onClick={handleCloseModal}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyHeader;
