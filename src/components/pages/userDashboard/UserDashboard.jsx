import {UserDashboardHeader} from "./UserDashboardHeader.jsx";
import {MyBooks} from "./MyBooks.jsx";
import {Route, Routes} from "react-router-dom";
import {UserCategories} from "../userCategory/UserCategories.jsx";

export const UserDashboard = () => {

    return (
    <>
        <div className="m-auto pb-[5rem]">
            <div style={{boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.04)", zIndex: "100"}}>
                <UserDashboardHeader />
            </div>

            <Routes>
                <Route
                    path={"/"}
                    element={<MyBooks />}
                />

                <Route
                    path={"/categories"}
                    element={<UserCategories/>}
                />
            </Routes>
        </div>
    </>
    )
}
