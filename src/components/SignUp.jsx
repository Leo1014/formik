import React from "react";
import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import AuthContext from "./context/AuthContext";

import { SignUpSchema } from "./schemas/signUpSchema";

const SignUp = () => {
  let { setStep } = useContext(AuthContext);

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirm: "",
    framework: "",
    check: false,
  };

  const onSubmit = (values) => {
    // e.preventDefault();
    console.log(values);
  };

  return (
    <main>
      <h3>Welcome, Please Sign Up!</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={SignUpSchema}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="fullName">Full name</label>
              <Field name="fullName" id="fullName" type="text" autoFocus />

              {/* <input type='text' id='fullName'/> */}
              <ErrorMessage name="fullName" component="p" className="error-message" /> 
              {/* <p className="error-message">required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="email">email</label>
              <Field name="email" id="email" type="email" />
              <ErrorMessage name="email" component="p" className="error-message" /> 

              {/* <input type='email' id='email'/> */}
              {/* <p className="error">email is required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="password">password</label>
              <Field name="password" id="password" type="password" />
              <ErrorMessage name="password" component="p" className="error-message" /> 

              {/* <input type='password' id='password'/> */}
              {/* <p className="error">password is required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="confirm">confirm password</label>
              <Field name="confirm" id="confirm" type="password" />
              <ErrorMessage name="confirm" component="p" className="error-message" /> 
              {/* <input type='password' id='confirm'/> */}
              {/* <p className="error">confirm password</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="framework">Favorite Framework</label>
              {/* <select id='framework'>
                <option value="">Select your framework</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
                <option value="svelt">Svelt</option>
              </select> */}
              <Field name="framework" id="framework" as="select">
                <option value="">Select your framework</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
                <option value="svelt">Svelt</option>
              </Field>
              <ErrorMessage name="framework" component="p" className="error-message" /> 
              {/* <p className="error">choose framework is required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="check">
                <Field name="check" id="check" type="checkbox" /> Accept terms
                and conditions
                {/* <input type='checkbox' id='check'/> Accept terms and conditions */}
              </label>
              <ErrorMessage name="check" component="p" className=" error-message error-message-check" /> 
              {/* <p className="error error-check">check is required</p> */}
            </fieldset>
            <button type="submit">Register</button>
          </Form>
        </Formik>
      </div>
      <p>
        Do you have an count?{" "}
        <span onClick={() => setStep("signIn")}>Sign In</span>
      </p>
    </main>
  );
};

export default SignUp;
