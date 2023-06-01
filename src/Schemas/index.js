import * as YUP from "yup";

const singupSchema = YUP.object().shape({
  firstName: YUP.string().required("First Name is required"),
  lastName: YUP.string().required("Second Name is required"),
  email: YUP.string().email().required("Email is required"),
  password: YUP.string().min(8).required("Password is required"),
  confirmPassword: YUP.string()
    .oneOf([YUP.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const loginSchema = YUP.object().shape({
  email: YUP.string().email().required("Email is required"),
  password: YUP.string().min(8).required("Password is required"),
});

const addressSchema = YUP.object().shape({
  fullName: YUP.string().required("Full Name is required"),
  email: YUP.string().email().required("Email is required"),
  phone: YUP.string().required("Phone Number is required"),
  zip: YUP.string().required("Zip Code is required"),
  country: YUP.string().required("Country is required"),
  city: YUP.string().required("City is required"),
  landmark: YUP.string().required("Landmark is required"),
  address: YUP.string().required("Address is required"),
});

export { singupSchema, loginSchema, addressSchema };
