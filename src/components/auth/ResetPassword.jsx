import {useState} from "react";
import axios from "../../api/axios.jsx";
import logo from "../../assets/images/booksvillelogo.png"
import {ClipLoader} from "react-spinners";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {PasswordResetSuccessCard} from "../../utils/PasswordResetSuccessCard.jsx";
export const ResetPassword = ({ handleStatus, setStatusTitle, setStatusMessage, setStatusColor }) => {
    const [successCard, setSuccessCard] = useState(false)

    const enableStatus = (title, message, color) => {
        handleStatus();
        setStatusTitle(title);
        setStatusMessage(message)
        setStatusColor(color)
    }

    const [clip, setClip] = useState(false);

    const [blur, setBlur] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setClip(true);
            setBlur("opacity-[0.2]");

            // Make API call to your Java backend to handle user registration
            await axios.post('', formData)
                .then(result => {
                    setClip(false);

                    enableStatus("Congratulations", "Password reset successfully", "bg-green-600")

                    setSuccessCard(true)

                    setTimeout(() => {
                        setBlur("");
                    }, 5000)

                    // Handle success (redirect, show message, etc.)
                    console.log(result.data);
                });

        } catch (error) {
            setClip(false);

            enableStatus("Oops!", "Something went wrong, please try again", "bg-red-600")

            setTimeout(() => {
                setBlur("");
            }, 5000)


            // Handle error (display error message, log, etc.)
            console.error('Registration failed:', error.message);
        }
    };

    return (
        <div className="justify-center items-center bg-emerald-200 flex flex-col px-16 py-12 h-[100vh] max-md:px-5">

            { successCard && <PasswordResetSuccessCard/> }
            { successCard &&
                <div className="absolute bg-black inset-[0] opacity-[0.8]">

                </div>
            }

            <div className={`${blur}`}>
                <form  onSubmit={handleSubmit} className="shadow-lg bg-white flex w-[35.25rem] max-w-full flex-col mt-[15vh] mb-11 px-11 pb-[6rem] pt-[4rem] rounded-xl max-md:my-10 max-md:px-5">
                    <div className="items-stretch self-center flex gap-1.5">
                        <img
                            loading="lazy"
                            srcSet={logo}
                            className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
                            alt=""/>
                        <div className="text-green-500 text-xl font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
                            <span className="text-black">Books</span>
                            <span className="text-green-500">Ville</span>
                        </div>
                    </div>

                    <div className="text-gray-900 text-2xl font-bold leading-8 self-center whitespace-nowrap mt-2.5">
                        Reset your password
                    </div>

                    <div className="text-neutral-800 text-sm flex flex-col font-medium leading-5 self-stretch mt-7 max-md:max-w-full">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            autoComplete="password"
                            className="text-neutral-500 text-base leading-6 whitespace-nowrap self-stretch rounded border border-[color:var(--Gray-3,#828282)] bg-white justify-center mt-1 pl-3 pr-16 py-3 border-solid items-start max-md:max-w-full max-md:pr-5"
                        />
                        <span className="password-toggle relative bottom-[2rem] left-[28rem] text-green-700" onClick={handleTogglePassword}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <div className="text-neutral-800 text-sm flex flex-col font-medium leading-5 self-stretch max-md:max-w-full">
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            autoComplete="confirm-password"
                            className="text-neutral-500 text-base leading-6 whitespace-nowrap self-stretch rounded border border-[color:var(--Gray-3,#828282)] bg-white justify-center mt-1 pl-3 pr-16 py-3 border-solid items-start max-md:max-w-full max-md:pr-5"
                        />
                        <span className="confirmPassword-toggle relative bottom-[2rem] left-[28rem] text-green-700" onClick={handleToggleConfirmPassword}>
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <div className="hover:bg-black text-gray-50 text-sm cursor-pointer transition font-semibold leading-4 whitespace-nowrap flex justify-center items-center bg-green-500 self-stretch mt-1.5 px-16 py-3 mt-[1.75rem] rounded-xl max-md:max-w-full max-md:px-5">
                        <button type="submit" className="cursor-pointer">
                            { !clip ? "Reset my Password" : <ClipLoader color="#FFFFFF" loading={true} size={20} /> }
                        </button>
                    </div>

                    <div className="text-green-500 text-sm leading-5 self-center whitespace-nowrap mt-2">
                        <span className=" text-gray-400">Go back to </span>
                        <span className="cursor-pointer font-semibold text-green-500 underline">Sign In</span>
                    </div>

                </form>
            </div>
        </div>
    );
}