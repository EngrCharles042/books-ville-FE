import './App.css'
import {Route, Routes} from "react-router-dom";
import {LandingPage} from "./components/pages/landingPage/LandingPage.jsx";
import {useState} from "react";
import {BookCard} from "./components/pages/landingPage/BookCard.jsx";

function App() {
    const [user, setUser] = useState();

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </>
  )
}

export default App
