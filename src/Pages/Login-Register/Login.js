import React, { useState } from "react";
import { FiFacebook } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { ImUser } from "react-icons/im";
import LoginVactor from "../../images/loginvector.png";
import "./Login.css";
import { useFormik } from "formik";
import { loginSchema, singupSchema } from "../../Schemas";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToaster } from "../../Context/ReactToaster";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const INITIAL__VALUES__FOR__SIGNUP = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const INITIAL__VALUES__FOR__LOGIN = {
  email: "",
  password: "",
};

const Login = () => {
  const [showSingup, setShowSingUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { showToastMessage, userRegister, userWarning } = useToaster();

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: INITIAL__VALUES__FOR__SIGNUP,
    validationSchema: singupSchema,
    onSubmit: (userData, action) => {
      (async () => {
        try {
          const response = await axios.post(`/api/auth/signup`, {
            ...userData,
          });
          if (response.status === 201) {
            userRegister("User Registered Successfully");
            localStorage.setItem("user", response?.data?.user);
            userWarning("Please Login to Continue! don't forget to login");
          }
        } catch (err) {
          showToastMessage(`Error: User Not Registered please try again....`);
          showToastMessage(err.message);
        }
      })();
      action.resetForm();
    },
  });

  const login = useFormik({
    initialValues: INITIAL__VALUES__FOR__LOGIN,
    validationSchema: loginSchema,
    onSubmit: (userData, action) => {
      console.log("🚀 ~ file: Login.js:65 ~ Login ~ userData:", userData);
      (async () => {
        try {
          const response = await axios.post(`/api/auth/login`, {
            ...userData,
          });
          console.log("🚀 ~ file: Login.js:71 ~ response:", response);
          localStorage.setItem("user", response?.data?.user);
          if (response.status === 200) {
            localStorage.setItem("token", response.data.encodedToken);
            userRegister("User Logged in Successfully");
            navigate(location.state?.from ? location.state.from : "/");
          }
        } catch (err) {
          showToastMessage(`Error: User Not Logged in please try again....`);
          showToastMessage(err.message);
        }
      })();
      action.resetForm();
    },
  });

  const handleSingUpUser = () => {
    if (errors) {
      showToastMessage(errors?.firstName);
      showToastMessage(errors?.lastName);
      showToastMessage(errors?.email);
      showToastMessage(errors?.password);
      showToastMessage(errors?.confirmPassword);
      return;
    }
  };

  const handleLogin = () => {
    if (login.errors) {
      showToastMessage(login.errors?.email);
      showToastMessage(login.errors?.password);
      return;
    }
  };

  const handleGuestLogin = async () => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: "admin@gmail.com",
        password: "admin@1234",
      });
      localStorage.setItem("user", response?.data?.user);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        userRegister("User Logged in Successfully");
        navigate(location.state?.from ? location.state.from : "/");
      }
    } catch (err) {
      showToastMessage(`Error: User Not Logged in please try again....`);
      showToastMessage(err.message);
    }
  };

  return (
    <>
      <div
        className={
          showSingup ? "login__container sign-up-mode" : "login__container"
        }
      >
        <div className="forms-container">
          <div className="signin-signup">
            <form
              action="#"
              onSubmit={login.handleSubmit}
              className="sign-in-form"
            >
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <MdEmail className="react__icons" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  value={login.values.email}
                  onBlur={login.handleBlur}
                  onChange={login.handleChange}
                />
              </div>
              <div className="input-field">
                <FcLock className="react__icons" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={login.values.password}
                  onBlur={login.handleBlur}
                  onChange={login.handleChange}
                />
                {showPassword ? (
                  <AiOutlineEyeInvisible
                    className="react__icons"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                ) : (
                  <MdVisibility
                    className="react__icons"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                )}
              </div>
              <input
                type="submit"
                onClick={handleLogin}
                value="Login"
                className="btn solid"
              />
              <input
                type="submit"
                onClick={handleGuestLogin}
                value="Login as guest"
                className="btn solid"
              />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <FiFacebook className="react__icons" />
                </a>
                <a href="/" className="social-icon">
                  <FcGoogle className="react__icons" />
                </a>
              </div>
            </form>
            <form action="#" onSubmit={handleSubmit} className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <ImUser className="react__icons" />
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  id="firstName"
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <ImUser className="react__icons" />
                <input
                  type="text"
                  placeholder="second Name"
                  name="lastName"
                  id="lastName"
                  value={values.lastName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <MdEmail className="react__icons" />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <FcLock className="react__icons" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {setShowPassword ? (
                  <AiOutlineEyeInvisible
                    className="react__icons"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                ) : (
                  <MdVisibility
                    className="react__icons"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                )}
              </div>
              <div className="input-field">
                <FcLock className="react__icons" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm_password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {setShowPassword ? (
                  <AiOutlineEyeInvisible
                    className="react__icons"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                ) : (
                  <MdVisibility
                    className="react__icons"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                )}
              </div>
              <input
                type="submit"
                onClick={handleSingUpUser}
                className="btn"
                value="Sign up"
              />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <FiFacebook className="react__icons" />
                </a>
                <a href="/" className="social-icon">
                  <FcGoogle className="react__icons" />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Welcome to our statue website. Our collection includes
                everything
              </p>
              <p>Login and Elevate Your Space With Timeless Artistry</p>
              <button
                onClick={() => setShowSingUp(true)}
                className="btn transparent"
                id="sign-up-btn"
              >
                Sign up
              </button>
            </div>
            <img src={LoginVactor} className="image" alt="brand__login" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Welcome back to our community. Step into a world of artistry and
                inspiration with our statue website. Our collection includes
                everything from towering monuments to delicate figurines, each
                one a testament to human creativity.
              </p>
              <button
                onClick={() => setShowSingUp(false)}
                className="btn transparent"
                id="sign-in-btn"
              >
                Sign in
              </button>
            </div>
            <img src={LoginVactor} className="image" alt="brand__login" />
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Login;
