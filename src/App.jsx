import { useState } from "react";

import ForgotPassword from "./components/ForgotPassword"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"

function App() {
  const[step, setStep] = useState("signIn")

  return (
    <div className="container">
      {step==="signIn" && <SignIn />}
      {step==="signUp" && <SignUp />}
      {step==="forgotPassword" && <ForgotPassword />}
    </div>
  )
}

export default App;
