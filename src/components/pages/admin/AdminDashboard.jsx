import {AdminSideBar} from "./AdminSideBar.jsx";
import {AdminHeader} from "./AdminHeader";
import {Route, Routes} from "react-router-dom";
import {AddNewBook} from "./AddNewBook.jsx";
import {ViewBooks} from "./ViewBooks.jsx";
import {OrderProcessing} from "./OrderProcessing.jsx";

export const AdminDashboard = () => {

    return (
        <>
            <div className="bg-white gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
                <div>

                    <AdminSideBar />

                </div>
                <div>

                    <AdminHeader />

                </div>

                <div>
                    <Routes>
                        <Route
                            path={"/book-management"}
                            element={<AddNewBook />}
                        />

                        <Route
                            path={"/view-books"}
                            element={<ViewBooks />}
                        />

                        <Route
                            path={"/view-books/order-processing"}
                            element={<OrderProcessing />}
                        />
                    </Routes>
                </div>

            </div>
        </>
    );
};

