import { useContext, useState } from "react";

import AuthContext from "./context/AuthContext";

// import InputPassword from "./InputPassword";

const SignIn = () => {
  let { setStep } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //focus de los inputs
  const[emailFocused, setEmailFocused] = useState(false)
  const[passwordFocused, setPasswordFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("send information to the backend");
  };

  return (
    <main>
      <h3>Sign In</h3>
      <div className="card">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              onBlur={()=>setEmailFocused(true)}
              data-focused={emailFocused}
              required
            />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              onBlur={()=>setPasswordFocused(true)}
              data-focused={passwordFocused}
              required
            />
            <p className="error">password must be long</p>
          </fieldset>
          <button type="submit">Login</button>
          <div className="forgot" onClick={() => setStep("forgotPassword")}>
            forgot password?
          </div>
        </form>
        {/* <InputPassword className="password"/> */}
      </div>
      <p>
        Don&apos;t have an account?{" "}
        <span onClick={() => setStep("signUp")}>Sign Up</span>
      </p>
    </main>
  );
};

export default SignIn;
