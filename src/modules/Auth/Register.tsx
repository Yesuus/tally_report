import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
type loginForm = {
  email: string;
  password: string;
  userName: string;
  confirmPassword: string;
};
function Register() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<loginForm>({
    email: "",
    password: "",
    userName: "",
    confirmPassword: "",
  });
  useEffect(() => {
    //
  }, []);
  const handleFormData = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("form Data", formData);
    // const token = JSON.stringify(formData);
    // localStorage.setItem("token", "login done");
    // dispatch(updateUserRole("admin"));
    navigate("/");
  };
  return (
    <div id="auth">
      <Helmet>
        <link rel="stylesheet" href={`${baseUrl}css/auth.css`} />
      </Helmet>
      <div className="row h-100">
        <div className="col-lg-5 col-12">
          <div id="auth-left">
            <div className="auth-logo">
              <Link to="index.html">
                <img src="/images/logo.png" alt="Logo" />
              </Link>
            </div>
            <h1 className="auth-title">Log in.</h1>
            <p className="auth-subtitle mb-5">
              Log in with your data that you entered during registration.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="text"
                  name="email"
                  className="form-control form-control-xl"
                  placeholder="Username"
                  value={formData.email}
                  onChange={handleFormData}
                />
                <div className="form-control-icon">
                  <i className="bi bi-person"></i>
                </div>
              </div>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="text"
                  name="userName"
                  className="form-control form-control-xl"
                  placeholder="Username"
                  value={formData.userName}
                  onChange={handleFormData}
                />
                <div className="form-control-icon">
                  <i className="bi bi-person"></i>
                </div>
              </div>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="password"
                  name="password"
                  className="form-control form-control-xl"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleFormData}
                />
                <div className="form-control-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
              </div>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control form-control-xl"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleFormData}
                />
                <div className="form-control-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
              </div>
              <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                Log in
              </button>
            </form>
            <div className="text-center mt-5 text-lg fs-4">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/" className="font-bold">
                  Log in
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 d-none d-lg-block">
          <div id="auth-right"></div>
        </div>
      </div>
    </div>
  );
}
export default Register;
