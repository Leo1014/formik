import { useState } from "react";

import AuthContext from "./components/context/AuthContext";

import ForgotPassword from "./components/ForgotPassword"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"

function App() {
  const[step, setStep] = useState("signUp")

  return (
    <AuthContext.Provider value={{step, setStep}}>
      <div className="container">
        {step==="signIn" && <SignIn />}
        {step==="signUp" && <SignUp />}
        {step==="forgotPassword" && <ForgotPassword />}
      </div>
    </AuthContext.Provider>
  )
}

export default App;
