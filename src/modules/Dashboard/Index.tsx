import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SummaryReport from "./template/SummaryReport";

function Index() {
  return (
    <>
      <header className="mb-3">
        <a href="#" className="burger-btn d-block d-xl-none">
          <i className="bi bi-justify fs-3"></i>
        </a>
      </header>
      <div className="page-heading">
        <h3>Welcome to Dashboard</h3>
      </div>
      <div className="page-content">
        <section className="row">
          <div className="col-12 col-lg-12">
            <div className="row">
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-3 py-4-5">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="stats-icon purple">
                          <i className="iconly-boldShow"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">
                          Profile Views
                        </h6>
                        <h6 className="font-extrabold mb-0">112.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-3 py-4-5">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="stats-icon blue">
                          <i className="iconly-boldProfile"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">Followers</h6>
                        <h6 className="font-extrabold mb-0">183.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-3 py-4-5">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="stats-icon green">
                          <i className="iconly-boldAdd-User"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">Following</h6>
                        <h6 className="font-extrabold mb-0">80.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                  <div className="card-body px-3 py-4-5">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="stats-icon red">
                          <i className="iconly-boldBookmark"></i>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">Saved Post</h6>
                        <h6 className="font-extrabold mb-0">112</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SummaryReport />
      </div>
    </>
  );
}
export default Index;
