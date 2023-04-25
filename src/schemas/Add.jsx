import * as Yup from "yup";

export const Addschemas = Yup.object({
  name: Yup.string().min(5).max(10).required("Please enter car name"),
  color: Yup.string().required("Please enter car color"),
  brand: Yup.string().required("Please enter car brand"),
  price: Yup.string().required("plz enter car price"),
});
