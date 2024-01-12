import './App.css';
import {ResetPassword} from "./components/auth/user/ResetPassword.jsx";
import {StatusCard} from "./utils/StatusCard.jsx";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {ForgotPassword} from "./components/auth/user/ForgotPassword.jsx";
import {LandingPage} from "./components/pages/landing/LandingPage.jsx";
import {Login} from "./components/auth/user/Login.jsx";
import {UserSignUpForm} from "./components/auth/user/UserSignUpForm.jsx";
import {AdminLogin} from "./components/auth/admin/AdminLogin.jsx";
import {UserDashboardPage} from "./components/pages/userDashboard/UserDashboardPage.jsx";
import { AdminForgotPassword} from './components/auth/admin/AdminForgotPassword';
import { AdminResetPassword } from './components/auth/admin/AdminResetPassword';
import {AdminSignUpForm} from "./components/auth/admin/AdminSignUpForm.jsx";
import {AdminScreenOne} from "./components/pages/admin/AdminScreenOne.jsx";
import {PaystackPayment} from "./components/payment/PaystackPayment.jsx";
import {UserCategoryPage} from "./components/pages/userCategory/UserCategoryPage.jsx";


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

                <Route path={"/user-signup"} element={
                    <UserSignUpForm
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

                <Route path={"/admin-signup"} element={
                    <AdminSignUpForm
                        handleStatus={handleStatus}
                        setStatusTitle={setStatusTitle}
                        setStatusMessage={setStatusMessage}
                        setStatusColor={setStatusColor}
                    />
                }/>

                <Route path={"/admin-login"} element={
                    <AdminLogin
                        handleStatus={handleStatus}
                        setStatusTitle={setStatusTitle}
                        setStatusMessage={setStatusMessage}
                        setStatusColor={setStatusColor}
                    />
                }/>

                <Route path={"/admin-reset-password"} element={
                    <AdminResetPassword
                        handleStatus={handleStatus}
                        setStatusTitle={setStatusTitle}
                        setStatusMessage={setStatusMessage}
                        setStatusColor={setStatusColor}
                    />
                }/>

                <Route path={"/admin-forgot-password"} element={
                    <AdminForgotPassword
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

                <Route path={"/paystack-payment"} element={
                    <PaystackPayment/>
                }/>
            </Routes>
        </div>
  )
}

export default App
