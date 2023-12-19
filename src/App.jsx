
import './App.css'
import {Route, Routes} from "react-router-dom";
import {LandingPage} from "./components/pages/landingPage/LandingPage.jsx";
import {Login} from "./components/auth/Login.jsx";
import {UserSignUpForm} from "./components/auth/UserSignUpForm.jsx";



function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login onAuth={user => setUser(user)}/>}/>
        <Route path="/user-signup" element={<UserSignUpForm/>}/>
      </Routes>
    </>
  )
}

export default App
