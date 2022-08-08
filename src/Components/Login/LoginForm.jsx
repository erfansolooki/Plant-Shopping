import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Input from "../../Common/Input/Input";
import { Link } from "react-router-dom";
import { loginServices } from "../../Services/loginService";
import { useAuthActions } from "../../Context/AuthProvider";
import { Container, Row, Col } from "react-bootstrap";
import "./Login.css";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [error, setError] = useState("");
  const setAuth = useAuthActions();
  const onSubmit = async (values) => {
    try {
      const { data } = await loginServices(values);

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
      <Row dir="rtl">
        <Col lg={6}>
          <div className="formContainer flex-column justify-content-center align-items-center">
            <div className="text-start">
              <p className="ms-3 my-3 title fw-bold">ورود</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <Input
                formik={formik}
                name="email"
                label="ایمیل"
                type="email"
                placeholder={"ایمیل خود را وارد کنید"}
              />
              <Input
                formik={formik}
                name="password"
                label="رمز عبور"
                type="password"
                placeholder={"رمز عبور خود را وارد کنید"}
              />
              <button
                type="submit"
                disabled={!formik.isValid}
                className="submitButton w-100"
              >
                Login
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
          <div style={{ textAlign: "center" }}>
            <p>Don't have an account ?</p>
            <Link to={`/SignUp`}>SignUp</Link>
          </div>
        </Col>
        <Col lg={6} className="d-none d-lg-block"></Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
