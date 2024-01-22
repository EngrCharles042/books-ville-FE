import { UserDashboardHeader } from "./UserDashboardHeader.jsx";
import { MyBooks } from "./MyBooks.jsx";
import { Route, Routes } from "react-router-dom";
import { UserCategoryPage } from "../userCategory/UserCategoryPage.jsx";
import { Subscriptions } from "./Subscriptions.jsx";
import { PurchasedBooks } from "./PurchasedBooks.jsx";
import { SavedBooks } from "./SavedBooks.jsx";
import { AccountSetting } from "./AccountSetting.jsx";
import { Checkout } from "./Checkout.jsx";

export const UserDashboardPage = () => {
  return (
    <>
      <div className="m-auto pb-[5rem]">
        <div
          className="fixed w-[100vw] bg-white"
          style={{
            boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.04)",
            zIndex: "100",
          }}
        >
          <UserDashboardHeader />
        </div>

        <div className="pt-[3rem]">
          <Routes>
            <Route path={"/"} element={<MyBooks />} />

            <Route path={"/categories"} element={<UserCategoryPage />} />

            <Route path={"/subscription"} element={<Subscriptions />} />

            <Route path={"/purchased-books"} element={<PurchasedBooks />} />

            <Route path={"/saved-books"} element={<SavedBooks />} />

            <Route path={"/profile"} element={<AccountSetting />} />

            <Route path={"/cart"} element={<Checkout />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
