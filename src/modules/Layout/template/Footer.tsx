import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer clearfix mb-0 text-muted">
          <div className="float-start">
            <p>2025 &copy; Tally Report</p>
          </div>
          <div className="float-end">
            <p>
              Crafted with{" "}
              <span className="text-danger">
                <i className="bi bi-heart"></i>
              </span>{" "}
              by <Link to="http://ahmadsaugi.com/">A. Saugi</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
