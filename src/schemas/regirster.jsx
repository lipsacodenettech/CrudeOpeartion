import * as Yup from "yup";

export const registerSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  age:Yup.string().required("plz enter your age")
});
