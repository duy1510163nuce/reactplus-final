import * as Yup from "yup";
let yup = require("yup");

export const ValidationRegister = Yup.object().shape({
  name: Yup.string().required("name not require"),
  password: Yup.string().required("password not require"),
  email: Yup.string()
    .required("email not require")
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "email not  validate"),
});

export const ValidationLogin = Yup.object().shape({
  password: Yup.string().required("passWord not require"),
  email: Yup.string()
    .required("valid require")
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "email validate"),
});
