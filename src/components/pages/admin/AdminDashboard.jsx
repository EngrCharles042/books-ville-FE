import { AdminSideBar } from "./AdminSideBar.jsx";
import { AdminHeader } from "./AdminHeader";
import { Route, Routes } from "react-router-dom";
import { AddNewBook } from "./AddNewBook.jsx";
import { ViewBooks } from "./ViewBooks.jsx";

export const AdminDashboard = ({
  handleStatus,
  setStatusTitle,
  setStatusMessage,
  setStatusColor,
}) => {
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
              path={"/"}
              element={
                <AddNewBook
                  handleStatus={handleStatus}
                  setStatusTitle={setStatusTitle}
                  setStatusMessage={setStatusMessage}
                  setStatusColor={setStatusColor}
                />
              }
            />

            <Route
              path={"/view-books"}
              element={
                <ViewBooks
                  handleStatus={handleStatus}
                  setStatusTitle={setStatusTitle}
                  setStatusMessage={setStatusMessage}
                  setStatusColor={setStatusColor}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
