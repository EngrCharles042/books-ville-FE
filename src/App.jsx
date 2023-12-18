import './App.css';
import {ResetPassword} from "./components/auth/ResetPassword.jsx";
import {StatusCard} from "./utils/StatusCard.jsx";
import {useState} from "react";

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
      <>
      </>
  )
}

// <div className="w-[100vw]">
    //     <StatusCard
    //         statusStyle={status}
    //         statusTitle={statusTitle}
    //         message={statusMessage}
    //         statusColor={statusColor}
    //     />
    //
    //     <ResetPassword
    //         handleStatus={handleStatus}
    //         setStatusTitle={setStatusTitle}
    //         setStatusMessage={setStatusMessage}
    //         setStatusColor={setStatusColor}
    //     />
    // </div>

export default App
