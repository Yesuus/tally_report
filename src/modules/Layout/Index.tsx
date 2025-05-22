import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateToken } from "../store/storeSlice/projectSlice";
import Sidebar from "./template/Sidebar";

function Index() {
  const title = useSelector((state) => state.projectRedux.title);
  const token = useSelector((state) => state.projectRedux.token);
  const userRole = useSelector((state) => state.projectRedux.userRole);
  const location = useLocation();
  const dispatch = useDispatch();
  console.log("userRole", userRole);
  const logout = () => {
    // console.log("logout done");
    localStorage.removeItem("token");
    dispatch(updateToken(""));
  };
  return (
    <div id="app">
      <Sidebar />
      <div id="main">
        <Outlet />
        <footer>
          <div className="footer clearfix mb-0 text-muted">
            <div className="float-start">
              <p>2021 &copy; Tally Report</p>
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
      </div>
    </div>
  );
}
export default Index;
