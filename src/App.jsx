import './App.css';
import {ResetPassword} from "./components/auth/ResetPassword.jsx";
import {StatusCard} from "./utils/StatusCard.jsx";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {ForgotPassword} from "./components/auth/ForgotPassword.jsx";
import {LandingPage} from "./components/pages/landingPage/LandingPage.jsx";
import {Login} from "./components/auth/Login.jsx";
import {UserSignUpForm} from "./components/auth/UserSignUpForm.jsx";
import {AdminLogin} from "./components/auth/AdminLogin.jsx";

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
        <div className="w-[100vw]" style={{overflowX: "hidden"}}>
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

                <Route path={"/admin-login"} element={
                    <AdminLogin
                        handleStatus={handleStatus}
                        setStatusTitle={setStatusTitle}
                        setStatusMessage={setStatusMessage}
                        setStatusColor={setStatusColor}
                    />
                }/>
            </Routes>

        </div>
  )
}

export default App
