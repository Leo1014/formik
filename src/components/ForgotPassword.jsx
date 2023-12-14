import { useContext } from "react";
import { useFormik } from "formik";
import AuthContext from "./context/AuthContext";
import { ForgotPasswordSchema } from "./schemas/forgotPasswordSchema";


const ForgotPassword = () => {
  let { setStep } = useContext(AuthContext);
  
  const onSubmit = (e)=>{
    e.preventDefault;
    console.log("data sends...");
  }

  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema:ForgotPasswordSchema,
    onSubmit,
  });


  return (
    <main>
      <h3>forget your password</h3>
      <div className="card">
        <form onSubmit={handleSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              autoFocus
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </fieldset>
          <button type="submit">send</button>
        </form>
      </div>
      <p>
        Don&apos;t have an account?{" "}
        <span onClick={() => setStep("signUp")}>Sign Up</span>
      </p>
    </main>
  );
};

export default ForgotPassword;
