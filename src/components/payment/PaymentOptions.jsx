import { useEffect, useState } from "react";
import logo from "../../assets/images/landingPageImages/booksvillelogo.png";
import fLogo from "../../assets/images/payment/flutterwaveLogo.png";
import pLogo from "../../assets/images/payment/paystackLogo.png";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import PayStackPop from "@paystack/inline-js";
import { Link } from "react-router-dom";
import axios from "../../api/axios.jsx";

// eslint-disable-next-line react/prop-types
export const PaymentOptions = ({ handleBuy }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [formData, setFormData] = useState({
    amount: "",
    status: "",
    referenceId: "",
    bookEntityId: "",
  });

  const setData = (transaction) => {
    setFormData({
      amount: 1000,
      status: "COMPLETED",
      referenceId: transaction.trxref,
      bookEntityId: 1,
    });
  };

  const handleSuccessfulPayment = async (e, transaction) => {
    e.preventDefault();

    alert("continue" + `Bearer ${userData.accessToken}`);

    try {
      await axios
        .post("/transaction/pay", transaction, {
          headers: {
            Authorization: `Bearer ${userData.accessToken}`,
          },
        })
        .then((response) => alert(response.data));
    } catch (error) {
      alert(error.message);
    }
  };

  const flutterWavePublicKey = import.meta.env.VITE_FLUTTER_PUBLIC_KEY;
  const payStackPublicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const payWithPaystack = (e) => {
    e.preventDefault();

    const payStack = new PayStackPop();

    payStack.newTransaction({
      key: payStackPublicKey,
      amount: 10000,
      email: `${userData.email}`,
      firstname: `${userData.firstname}`,
      lastname: `${userData.lastName}`,
      onSuccess(transaction) {
        alert(transaction.reference);

        handleSuccessfulPayment(e, transaction)

        // setData(transaction);

        setTimeout(() => {
          console.log(formData);
        }, 1000);

        // handleSuccessfulPayment(e);

        console.log(transaction);
      },
      onCancel() {
        alert("You have canceled the transaction");
      },
    });
  };

  const config = {
    public_key: flutterWavePublicKey,
    tx_ref: Date.now(),
    amount: 1000,
    currency: "NGN",
    payment_options: "card, mobilemoney, ussd",
    customer: {
      email: userData.email,
      phone_number: userData.phoneNumber,
      name: `${userData.firstName} ${userData.lastName}`,
    },
    customizations: {
      title: "BooksVille",
      description: "Payment for items in cart",
      logo: logo,
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const payWithFlutter = () => {
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);

        setFormData({
          amount: 1000,
          status: "COMPLETED",
          referenceId: response.flw_ref,
          bookEntityId: 1,
        });

        handleSuccessfulPayment();

        alert("success");

        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {
        alert("payment terminated");
      },
    });
  };

  return (
    <>
      <div className="bg-white shadow-lg mx-auto flex max-w-[592px] flex-col px-10 py-11 rounded-xl max-md:px-5">
        <div className="text-center text-black text-2xl font-semibold leading-8 self-stretch max-md:max-w-full">
          PAYMENT OPTION
        </div>

        <div className="text-neutral-500 text-sm font-medium leading-5 self-stretch mt-7 max-md:max-w-full">
          Enter a promo code for discounts
        </div>

        <input
          type="text"
          name="promoCode"
          placeholder="Add Promo Code"
          className="text-neutral-500 text-base leading-6 whitespace-nowrap self-stretch rounded border border-[color:var(--Gray-400,#BDBDBD)] bg-white justify-center mt-2 pl-3 pr-16 py-3 border-solid items-start max-md:max-w-full max-md:pr-5"
        />

        <div className="text-neutral-500 text-sm font-medium leading-5 self-stretch mt-10 max-md:max-w-full">
          Please select your preferred payment option
        </div>

        <div>
          <button
            onClick={payWithFlutter}
            className="cursor-pointer hover:bg-green-600 transition text-center text-white text-sm font-semibold leading-5 whitespace-nowrap justify-center items-center bg-green-500 w-full max-w-full mt-2 px-16 py-3 rounded-xl self-start max-md:ml-2.5 max-md:mt-10 max-md:px-5"
          >
            <div className="flex gap-5 items-center justify-between mx-auto max-w-[12rem]">
              <img
                alt="paystack logo"
                src={fLogo}
                className="w-[3rem]"
                style={{ borderRadius: "10%" }}
              />
              <>Pay with FlutterWave</>
            </div>
          </button>
        </div>

        <div>
          <button
            onClick={payWithPaystack}
            className="cursor-pointer hover:bg-green-600 transition text-center text-white text-sm font-semibold leading-5 whitespace-nowrap justify-center items-center bg-green-500 w-full max-w-full mt-6 px-16 py-3 rounded-xl self-start max-md:ml-2.5 max-md:mt-10 max-md:px-5"
          >
            <div className="flex gap-5 items-center justify-between mx-auto max-w-[12rem]">
              <img
                alt="paystack logo"
                src={pLogo}
                className="w-[3rem]"
                style={{ borderRadius: "10%" }}
              />
              <>Pay with PayStack</>
            </div>
          </button>
        </div>

        <div
          onClick={handleBuy}
          className="text-green-500 text-sm leading-5 self-center whitespace-nowrap mt-4"
        >
          <span className="cursor-pointer font-semibold text-green-500 underline">
            Go back to
          </span>
        </div>
      </div>
    </>
  );
};
