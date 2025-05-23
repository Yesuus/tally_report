import { Fragment, useState } from "react";
import React from "react";
import Login from "./modules/Auth/Login";
import Register from "./modules/Auth/Register";
import Layout from "./modules/Layout/Index";
import PageNotFound from "./modules/NotFoundPage/index";
import { useRoutes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "./modules/Report/Index";
interface RouteDataProps {
  userRole: string;
  token: string;
}
function RouteData({ userRole, token }: RouteDataProps) {
  const elements = useRoutes([
    {
      path: "/",
      element: token != null ? <Layout /> : "",
      children: [
        { path: "/", element: token != null ? <Dashboard /> : <Login /> },
        { path: "/registration", element: <Register /> },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return elements;
}
function App() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const token = useSelector((state) => state.auth.token);
  const userRole = useSelector((state) => state.auth.userRole);
  return (
    <Fragment>
      <Helmet>
        <link rel="stylesheet" href={`${baseUrl}css/bootstrap.css`} />
        <link rel="stylesheet" href={`${baseUrl}css/bootstrap-icons.css`} />
        <link rel="stylesheet" href={`${baseUrl}css/bold.css`} />
        <link rel="stylesheet" href={`${baseUrl}css/perfect-scrollbar.css`} />
        <link rel="stylesheet" href={`${baseUrl}css/app.css`} />

        <script src={`${baseUrl}js/perfect-scrollbar.min.js`} defer></script>
        <script src={`${baseUrl}js/bootstrap.bundle.min.js`} defer></script>
        <script src={`${baseUrl}js/dashboard.js`} defer></script>
        <script src={`${baseUrl}js/main.js`} defer></script>
      </Helmet>
      <RouteData userRole={userRole} token={token} />
    </Fragment>
  );
}

export default App;
