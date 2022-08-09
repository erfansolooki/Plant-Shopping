import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import Input from "../../Common/Input/Input";
import { Link } from "react-router-dom";
import { loginServices } from "../../Services/loginService";
import { useAuthActions } from "../../Context/AuthProvider";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Login.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

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
    <Container className="loginForm">
      <Row dir="rtl" className=" justify-content-center align-items-center">
        <Col xm={8} md={7} lg={6}>
          <div className="formContainer flex-column justify-content-center align-items-center">
            <div className="text-start">
              <p className="my-3 mx-0 title fw-bold">ورود</p>
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
                className="submitButton w-100 my-3 border-0 text-white py-2 px-3"
              >
                ورود
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
          </div>
          <div className="d-flex justify-content-center signUp">
            <p className="me-2">هنوز حساب کاربری ندارید؟</p>
            <Link to={`/SignUp`} className="fw-bold">
              ثبت نام
            </Link>
          </div>
        </Col>
        <Col lg={6} className="d-none d-lg-flex justify-content-center">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper m-3"
          >
            <SwiperSlide className="align-items-center">
              <Image src="https://s6.uupload.ir/files/pngtree-plant-sketch-le-ficus-elastica-png-image_2353829_1_noo.png" />
              <p className="slider-title text-white">خوش آمدید</p>
              <p className="slider-description text-white text-center">
                برای دسترسی به تمامی امکانات سایت اطلاعات کاربری خود را به صورت
                کامل وارد کنید
              </p>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
