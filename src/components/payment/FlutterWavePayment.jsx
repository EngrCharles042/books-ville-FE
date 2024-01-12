import {useEffect, useState} from "react";
import logo from "../../assets/images/landingPageImages/booksvillelogo.png"
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

export const FlutterWavePayment = () => {
    const [countries, setCountries] = useState([]);

    const userData = JSON.parse(localStorage.getItem("userData"));

    const flutterWavePublicKey = import.meta.env.VITE_FLUTTER_PUBLIC_KEY

    useEffect(() => {
        // Fetch countries from the endpoint
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {

                // Extract country names from the response
                const countryNames = data.map(country => country.name.common);

                setCountries(countryNames.sort());
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);


    const config = {
        public_key: "FLWPUBK_TEST-4b2a6d18bd7de477b11f2ec1ce5d2c1e-X",
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: "card",
        customer: {
            // email: `${userData.email}`,
            // phone_number: '070********',
            // name: `${userData.firstName} ${userData.lastName}`,
            email: 'emmanuelibenwankwo@gmail.com',
            phone_number: '08062331156',
            name: 'Emmanuel Ibenwankwo',
        },
        customizations: {
            title: 'BooksVille',
            description: 'Payment for items in cart',
            logo: logo,
        },
    };

    // const fwConfig = {
    //     ...config,
    //     text: 'SAVE AND PAY!',
    //     callback: (response) => {
    //         console.log(response);
    //         closePaymentModal() // this will close the modal programmatically
    //     },
    //     onClose: () => {},
    // };

    const handleFlutterPayment = useFlutterwave(config);

    const handleSubmit = (e) => {
        e.preventDefault()

        handleFlutterPayment({
            callback: (response) => {
                console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
        });
    }


    return (
        <form onSubmit={handleSubmit} className="bg-white mt-[3.5vh] shadow-lg mx-auto flex max-w-[592px] flex-col px-10 py-11 rounded-xl max-md:px-5">
            <div className="text-black text-2xl font-semibold leading-8 self-stretch max-md:max-w-full">
                PAYMENT INFORMATION
            </div>

            <div className="text-neutral-800 text-sm font-medium leading-5 self-stretch mt-7 max-md:max-w-full">
                Country
            </div>

            <select
                id="country"
                name="country"
                autoComplete="country-name"
                required
                className="items-stretch self-stretch rounded border border-[color:var(--Gray-400,#BDBDBD)] bg-white flex justify-between gap-5 mt-1 pl-3 pr-6 py-3 border-solid max-md:max-w-full max-md:flex-wrap max-md:pr-5"
            >
                <option value="" disabled> Select a country</option>

                {countries.map(country => (
                    <option key={country} value={country} style={{backgroundColor: "white"}}>
                        {country}
                    </option>
                ))}
            </select>

            <input
                type="text"
                name="promoCode"
                placeholder="Add Promo Code"
                className="text-neutral-500 text-base leading-6 whitespace-nowrap self-stretch rounded border border-[color:var(--Gray-400,#BDBDBD)] bg-white justify-center mt-5 pl-3 pr-16 py-3 border-solid items-start max-md:max-w-full max-md:pr-5"
            />

            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/12bc719acd6d291c2a446ee3671512b088686388838af91a7d7ab43f1606d366?"
                className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden max-w-full mt-9 self-start max-md:ml-2.5"
                style={{borderRadius: "50%"}}
            />

            <div
                className="self-stretch text-gray-900 text-lg font-medium leading-7 mt-5 max-md:max-w-full max-md:mr-1.5">
                Add payment method
            </div>

            <div className="self-stretch text-gray-500 text-sm leading-5 mt-2 max-md:max-w-full max-md:mr-1.5">
                Add your card details.
            </div>

            <div className="items-stretch self-stretch flex justify-between gap-4 mt-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1.5">
                <span className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-slate-700 text-sm font-medium leading-5">
                    Name on card
                  </div>
                  <input
                      type="text"
                      name="fullName"
                      placeholder="Sandra Bloyd"
                      className="text-gray-900 text-base leading-6 whitespace-nowrap items-stretch border border-[color:var(--Gray-300,#D0D5DD)] shadow-sm bg-white justify-center mt-1.5 px-3.5 py-2.5 rounded-lg border-solid"
                  />
                </span>
                <span className="items-stretch flex basis-[0%] flex-col">
                  <div className="text-slate-700 text-sm font-medium leading-5">
                    Expiry
                  </div>

                  <input
                      type="text"
                      placeholder="06/2024"
                      className="text-base w-[6.19rem] leading-6 whitespace-nowrap items-stretch border border-[color:var(--Gray-300,#D0D5DD)] shadow-sm bg-white justify-center mt-1.5 px-3.5 py-2.5 rounded-lg border-solid"
                  />
                </span>
            </div>

            <div className="items-stretch self-stretch flex justify-between gap-4 mt-4 max-md:max-w-full max-md:flex-wrap max-md:mr-1.5">
                <span className="items-stretch flex grow basis-[0%] flex-col">
                  <div className="text-slate-700 text-sm font-medium leading-5">
                    Card number
                  </div>

                    <div className="relative">
                        <div className="absolute top-[1rem] left-3">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2533b07c1a151fdc534a40f1336c78ec19bd7d9c009afc15e8689a0924243909?"
                                className="aspect-[1.42] object-contain object-center w-[34px] fill-white stroke-[1px] stroke-gray-100 overflow-hidden shrink-0 max-w-full"
                            />
                        </div>
                          <input
                              type="text"
                              placeholder="1234 1234 1234 1234"
                              className="pl-[3.5rem] items-stretch border border-[color:var(--Gray-300,#D0D5DD)] shadow-sm bg-white flex w-full flex-col justify-center mt-1.5 px-3 py-2.5 rounded-lg border-solid"
                          />
                    </div>
                </span>

                <span className="items-stretch flex basis-[0%] flex-col">
                  <div className="text-slate-700 text-sm font-medium leading-5">
                    CVV
                  </div>
                  <input
                      type="password"
                      placeholder="•••"
                      className="text-gray-900 text-base w-[6.19rem] leading-6 whitespace-nowrap items-stretch border border-[color:var(--Gray-300,#D0D5DD)] shadow-sm bg-white justify-center mt-1.5 px-3.5 py-2.5 rounded-lg border-solid"
                  />
                </span>
            </div>

            <input
                type="submit"
                name="submit"
                value="SAVE AND CONTINUE"
                className="cursor-pointer hover:bg-green-600 transition text-center text-white text-sm font-semibold leading-5 whitespace-nowrap justify-center items-center bg-green-500 w-[376px] max-w-full mt-12 px-16 py-3 rounded-xl self-start max-md:ml-2.5 max-md:mt-10 max-md:px-5"
            />

            <div className="text-gray-500 text-sm leading-5 whitespace-nowrap mt-2 self-start max-md:ml-2.5">
                We’ll save your payment information for future purchases
            </div>
        </form>
    );
}