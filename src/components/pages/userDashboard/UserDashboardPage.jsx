import {UserDashboardHeader} from "./UserDashboardHeader.jsx";
import {MyBooks} from "./MyBooks.jsx";
import {Route, Routes} from "react-router-dom";
import {UserCategoryPage} from "../userCategory/UserCategoryPage.jsx";
import {Subscriptions} from "./Subscriptions.jsx";
import {PurchasedBooks} from "./PurchasedBooks.jsx";

export const UserDashboardPage = () => {

    return (
    <>
        <div className="m-auto pb-[5rem]">
            <div className="fixed w-[100vw] bg-white" style={{boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.04)", zIndex: "100"}}>
                <UserDashboardHeader />
            </div>

            <div className="pt-[3rem]">
                <Routes>
                    <Route
                        path={"/"}
                        element={<MyBooks />}
                    />

                    <Route
                        path={"/categories"}
                        element={<UserCategoryPage />}
                    />

                    <Route
                        path={"/subscriptions"}
                        element={<Subscriptions />}
                    />

                    <Route
                        path={"/purchased-books"}
                        element={<PurchasedBooks />}
                    />
                </Routes>
            </div>
        </div>
    </>
    )
}
