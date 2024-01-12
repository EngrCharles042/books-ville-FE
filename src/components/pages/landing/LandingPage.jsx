import {Footer} from "./Footer.jsx";
import {Header} from "./Header.jsx";
import {BuyAndReadBooks} from "./BuyAndReadBooks.jsx";
import {BestSellingAndPopularBooks} from "./BestSellingAndPopularBooks.jsx";
// import {SignUpSelect} from "./SignUpSelect.jsx";
import {useState} from "react";
import * as React from "react";


export const LandingPage = () => {
  const [signUp, setSignUp] = useState(false);

  const handleSignUp = () => {
    setSignUp(!signUp);
  }

  return (
      <>
        <div className="m-auto">
          <Header handleSignUp={handleSignUp} />
          <BuyAndReadBooks/>
          <BestSellingAndPopularBooks/>
          <Footer/>
        </div>
      </>
  )
}