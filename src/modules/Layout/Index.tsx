import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./template/Sidebar";
function Index() {
  const title = useSelector((state) => state.projectRedux.title);
  const userRole = useSelector((state) => state.auth.userRole);
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <div id="app">
      {userRole != null && <Sidebar />}
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
