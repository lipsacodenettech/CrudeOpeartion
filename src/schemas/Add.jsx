import * as Yup from "yup";

export const Addschemas = Yup.object({
  // name: Yup.string().required(" "),
  name: Yup.string().required(" "),
  color: Yup.string().required("Please enter car color"),
  brand: Yup.string().required("Please enter car brand"),
  price: Yup.string().required("plz enter car price"),
});
