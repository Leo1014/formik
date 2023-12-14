import * as Yup from "yup";

export const SignUpSchema = Yup.object().shape({
  fullName: Yup.string("dont use numbers").required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must be numbers symbol, upper"
    )
    .required(),
  confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must be equals"
  ),
  framework: Yup.string()
    .oneOf(["react", "angular", "vue", "svelt"], "Must select a framework")
    .required(),
  check: Yup.bool().oneOf([true], "mark the field check")
});
