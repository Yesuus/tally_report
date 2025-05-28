import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./template/Sidebar";
import Footer from "./template/Footer";
import type { RootState } from "../store/store";
function Index() {
  // const title = useSelector((state) => state.projectRedux.title);
  const userRole = useSelector((state: RootState) => state.auth.userRole);
  // const location = useLocation();
  // const dispatch = useDispatch();
  return (
    <div id="app">
      {userRole != null && <Sidebar />}
      <div id="main">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
export default Index;
