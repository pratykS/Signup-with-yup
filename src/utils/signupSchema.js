import * as Yup from "yup";

export const SignUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please provide your name")
    .min(2, "Must be at least 2 chars"),
  email: Yup.string()
    .required("Please provide your email")
    .email("Email doesn't look right"),
  username: Yup.string().required().resolve(),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^.*((?=.*[0-9]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must be strong!, It must contain atleast one uppercase letter, one lower case letter and one number, e.g `Open1234`"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
