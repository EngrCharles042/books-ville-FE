import './App.css';
import {StatusCard} from "./utils/StatusCard.jsx";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {LandingPage} from "./components/pages/landing/LandingPage.jsx";
import {Login} from "./components/auth/login.jsx";
import {UserDashboardPage} from "./components/pages/userDashboard/UserDashboardPage.jsx";
import { ForgotPassword} from './components/auth/forgotPassword.jsx';
import { ResetPassword } from './components/auth/resetPassword.jsx';
import {SignUp} from "./components/auth/signUp.jsx";
import {AdminScreenOne} from "./components/pages/admin/AdminScreenOne.jsx";
import {UserCategoryPage} from "./components/pages/userCategory/UserCategoryPage.jsx";
import { UserSubscriptionPage } from './components/pages/userDashboard/UserSubscriptionPage';

import {PaymentOptions} from "./components/payment/PaymentOptions.jsx";
import {BookDetails} from "./components/pages/BookDetails.jsx";
import {OrderProcessing} from "./components/pages/admin/OrderProcessing.jsx";
import {ViewBook} from "./components/pages/admin/ViewBook.jsx";

function App() {
    const [status, setStatus] = useState("")
    const [statusTitle, setStatusTitle] = useState("Congratulations")
    const [statusMessage, setStatusMessage] = useState("Your registration was successful")
    const [statusColor, setStatusColor] = useState("bg-green-600")

    const handleStatus = () => {
        setStatus("slide-in")

        setTimeout(() => {
            setStatus("")
        }, 5000)
    }

  return (
        <div className="w-[100vw] min-h-[100vh]" style={{overflowX: "hidden"}}>
            <StatusCard
                statusStyle={status}
                statusTitle={statusTitle}
                message={statusMessage}
                statusColor={statusColor}
            />
            <Routes>
                <Route path="/" element={ <LandingPage/> }/>

                <Route path={"/login"} element={
                    <Login
                        handleStatus={handleStatus}
                        setStatusTitle={setStatusTitle}
                        setStatusMessage={setStatusMessage}
                        setStatusColor={setStatusColor}
                    />
                }/>

                <Route path={"/signup"} element={
                    <SignUp
                        handleStatus={handleStatus}
                        setStatusTitle={setStatusTitle}
                        setStatusMessage={setStatusMessage}
                        setStatusColor={setStatusColor}
                    />
                }/>

                <Route path={"/forgot-password"} element={
                    <ForgotPassword
                        handleStatus={handleStatus}
                        setStatusTitle={setStatusTitle}
                        setStatusMessage={setStatusMessage}
                        setStatusColor={setStatusColor}
                    />
                }/>

                <Route path={"/reset-password"} element={
                    <ResetPassword
                        handleStatus={handleStatus}
                        setStatusTitle={setStatusTitle}
                        setStatusMessage={setStatusMessage}
                        setStatusColor={setStatusColor}
                    />
                }/>

                <Route path={"/admin-dashboard"} element={
                    <AdminScreenOne/>
                }/>

                <Route path={"/user-dashboard"} element={<UserDashboardPage/>}>
                    <Route path={"/user-dashboard/categories"} element={<UserCategoryPage/>}/>
                </Route>

                <Route 
                    path={"/subscription"} 
                    element={<UserSubscriptionPage/>}
                />
                <Route path={"/flutterwave-payment"} element={
                    <PaymentOptions/>
                }/>

                <Route path={"/book-details"} element={
                    <BookDetails/>
                }/>

                <Route path={"/order-processing"} element={
                    <OrderProcessing/>
                }/>

                <Route path={"/view-book"} element={
                    <ViewBook/>
                }/>
            </Routes>
        </div>
  )
}

export default App
