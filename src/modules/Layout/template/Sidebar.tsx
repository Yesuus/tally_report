import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/storeSlice/authSlice";
import { useEffect } from "react";
// import type { RootState } from "../../store/store";
function Sidebar() {
  // const baseUrl = import.meta.env.VITE_BASE_URL;
  // const title = useSelector((state:RootState) => state.projectRedux.title);
  // const token = useSelector((state:RootState) => state.projectRedux.token);
  // const userRole = useSelector((state:RootState) => state.auth.userRole);
  // const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const sidebarItems = document.querySelectorAll(".sidebar-item.has-sub");
    sidebarItems.forEach((sidebarItem) => {
      const link = sidebarItem.querySelector(".sidebar-link");
      const submenu = sidebarItem.querySelector(".submenu");
      const clickHandler = (e: MouseEvent): void => {
        e.preventDefault();
        if (submenu) {
          const submenuElement = submenu as HTMLElement;
          if (submenuElement.style.display === "none") {
            submenuElement.classList.add("active");
            submenuElement.style.display = "block";
          } else {
            submenuElement.classList.remove("active");
            submenuElement.style.display = "none";
          }
        }
      };
      if (link) {
        const linkElement = link as HTMLElement;
        linkElement.addEventListener("click", clickHandler);
      }
      // Cleanup to prevent memory leaks
      return () => {
        if (link) {
          const linkElement = link as HTMLElement;
          linkElement.removeEventListener("click", clickHandler);
        }
      };
    });
  }, []);

  const signOut = () => {
    dispatch(logout());
  };
  return (
    <>
      <div id="sidebar" className="active">
        <div className="sidebar-wrapper active">
          <div className="sidebar-header">
            <div className="d-flex justify-content-between">
              <div className="logo">
                <Link to="/">
                  <img src="/images/logo.png" alt="Logo" />
                </Link>
              </div>
              <div className="toggler">
                <Link to="#" className="sidebar-hide d-xl-none d-block">
                  <i className="bi bi-x bi-middle"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              <li className="sidebar-title">Menu</li>

              <li className="sidebar-item active ">
                <Link to="/" className="sidebar-link">
                  <i className="bi bi-grid-fill"></i>
                  <span>Dashboard</span>
                </Link>
              </li>

              <li className="sidebar-item  has-sub">
                <Link to="#" className="sidebar-link">
                  <i className="bi bi-stack"></i>
                  <span>Components</span>
                </Link>
                <ul className="submenu ">
                  <li className="submenu-item ">
                    <Link to="component-alert.html">Alert</Link>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item  has-sub">
                <Link to="#" className="sidebar-link">
                  <i className="bi bi-grid-1x2-fill"></i>
                  <span>Layouts</span>
                </Link>
                <ul className="submenu ">
                  <li className="submenu-item ">
                    <Link to="layout-default.html">Default Layout</Link>
                  </li>
                </ul>
              </li>

              <li className="sidebar-title">Report Data</li>

              <li className="sidebar-item  has-sub">
                <Link to="#" className="sidebar-link">
                  <i className="bi bi-hexagon-fill"></i>
                  <span>Form Elements</span>
                </Link>
                <ul className="submenu ">
                  <li className="submenu-item ">
                    <Link to="form-element-input.html">Input</Link>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item  ">
                <Link to="form-layout.html" className="sidebar-link">
                  <i className="bi bi-file-earmark-medical-fill"></i>
                  <span>Form Layout</span>
                </Link>
              </li>

              <li className="sidebar-item  ">
                <Link
                  to="#"
                  onClick={() => {
                    signOut();
                  }}
                  className="sidebar-link"
                >
                  <i className="bi bi-fullscreen-exit"></i>
                  <span>Sign out</span>
                </Link>
              </li>
            </ul>
          </div>
          <button className="sidebar-toggler btn x">
            <i data-feather="x"></i>
          </button>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
