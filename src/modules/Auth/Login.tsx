import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, logout } from "../store/storeSlice/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import apiCall from "../../utils/api";
import SweetAlert from "../../components/SweetAlert";
type loginForm = {
  email: string;
  password: string;
};
function Login() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const apiUrl = import.meta.env.VITE_API_URL;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<loginForm>({
    email: "",
    password: "",
  });
  const handleFormData = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await apiCall<formData[]>({
      url: `${apiUrl}`,
      method: "GET",
    });
    const token = JSON.stringify(formData);
    SweetAlert({
      title: "Login success",
      message: "Welcome to Dashboard",
      icon: "test",
    });
    dispatch(login({ user: "admin", token: "tokensssfs3434" }));
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
                  required={true}
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
                  required={true}
                />
                <div className="form-control-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
              </div>
              {/* <div className="form-check form-check-lg d-flex align-items-end">
                            <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault">
                            <label className="form-check-label text-gray-600" for="flexCheckDefault">
                                Keep me logged in
                            </label>
                        </div> */}
              <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                Log in
              </button>
            </form>
            <div className="text-center mt-5 text-lg fs-4">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/registration" className="font-bold">
                  Sign up
                </Link>
                .
              </p>
              <p>
                <Link className="font-bold" to="#">
                  Forgot password?
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
export default Login;
