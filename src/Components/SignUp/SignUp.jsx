import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../Common/Input/Input";
// import "./Signup.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signUpService } from "../../Services/SignUpServices";
import { useState } from "react";
import { useAuthActions } from "../../Context/AuthProvider";
import { Container, Row, Col } from "react-bootstrap";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .max(8, "Name must be 8 characters or less")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone Number Name is required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password Confirmation is required"),
});

const SignUpForm = () => {
  const [error, setError] = useState("");
  const setAuth = useAuthActions();

  const history = useNavigate();

  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = {
      name,
      email,
      password,
      phoneNumber,
    };

    try {
      const { data } = await signUpService(userData);
      setAuth(data);
      localStorage.setItem("authState", JSON.stringify(data));
      setError(null);
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };
  //   const [formValues, setFormValues] = useState(null);
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Container>
      <Row dir="rtl" className=" justify-content-center align-items-center">
        <Col xm={8} md={7} lg={6}>
          <div className="formContainer flex-column justify-content-center align-items-center">
            <div className="text-start">
              <p className="my-3 mx-0 title fw-bold">ثبت نام</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <Input
                formik={formik}
                name="name"
                label="نام کاربری"
                placeholder={"نام کاربری خود را وارد کنید"}
              />
              <Input
                formik={formik}
                name="email"
                label="ایمیل"
                type="email"
                placeholder={"ایمیل خود را وارد کنید"}
              />
              <Input
                formik={formik}
                name="phoneNumber"
                label="شماره موبایل"
                type="tel"
                placeholder={"شماره موبایل خود را وارد کنید"}
              />
              <Input
                formik={formik}
                name="password"
                label="عبور"
                type="password"
                placeholder={"رمز عبور خود را وارد کنید"}
              />
              <Input
                formik={formik}
                name="passwordConfirmation"
                label="تکرار رمز عبور"
                type="password"
                placeholder={"رمز عبور خود را دوباره وارد کنید"}
              />
              <button
                style={{ width: "100%" }}
                type="submit"
                disabled={!formik.isValid}
                className="submitButton w-100 my-3 border-0 text-white py-2 px-3"
              >
                ثبت نام
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
          <div className="d-flex justify-content-center signUp">
            <p className="me-2">از قبل حساب کاربری دارید ؟</p>
            <Link to="/Login" className="fw-bold">
              ورود
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
