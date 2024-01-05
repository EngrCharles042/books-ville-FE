import {UserDashboardHeader} from "./UserDashboardHeader.jsx";
import {MyBooks} from "./MyBooks.jsx";

export const UserDashboard = () => {

    return (
    <>
        <div className="m-auto pb-[5rem]">
            <UserDashboardHeader />
            <MyBooks />
        </div>
    </>
    )
}
