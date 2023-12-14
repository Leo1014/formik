import * as Yup from "yup";

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("incorrect format email!").required("email is required"),
});
