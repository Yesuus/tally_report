import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateToken } from "../../store/storeSlice/projectSlice";

function Sidebar() {
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
    <>
      {userRole != "" && (
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
                    <li className="submenu-item ">
                      <Link to="component-badge.html">Badge</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="component-breadcrumb.html">Breadcrumb</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="component-button.html">Button</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="component-card.html">Card</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="component-carousel.html">Carousel</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="component-dropdown.html">Dropdown</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="component-list-group.html">List Group</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="component-modal.html">Modal</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="component-navs.html">Navs</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="component-pagination.html">Pagination</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="component-progress.html">Progress</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="component-spinner.html">Spinner</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="component-tooltip.html">Tooltip</Link>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-item  has-sub">
                  <Link to="#" className="sidebar-link">
                    <i className="bi bi-collection-fill"></i>
                    <span>Extra Components</span>
                  </Link>
                  <ul className="submenu ">
                    <li className="submenu-item ">
                      <Link to="extra-component-avatar.html">Avatar</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="extra-component-sweetalert.html">
                        Sweet Alert
                      </Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="extra-component-toastify.html">Toastify</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="extra-component-rating.html">Rating</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="extra-component-divider.html">Divider</Link>
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
                    <li className="submenu-item ">
                      <Link to="layout-vertical-1-column.html">1 Column</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="layout-vertical-navbar.html">
                        Vertical with Navbar
                      </Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="layout-horizontal.html">Horizontal Menu</Link>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-title">Forms &amp; Tables</li>

                <li className="sidebar-item  has-sub">
                  <Link to="#" className="sidebar-link">
                    <i className="bi bi-hexagon-fill"></i>
                    <span>Form Elements</span>
                  </Link>
                  <ul className="submenu ">
                    <li className="submenu-item ">
                      <Link to="form-element-input.html">Input</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="form-element-input-group.html">
                        Input Group
                      </Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="form-element-select.html">Select</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="form-element-radio.html">Radio</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="form-element-checkbox.html">Checkbox</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="form-element-textarea.html">Textarea</Link>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-item  ">
                  <Link to="form-layout.html" className="sidebar-link">
                    <i className="bi bi-file-earmark-medical-fill"></i>
                    <span>Form Layout</span>
                  </Link>
                </li>

                <li className="sidebar-item  has-sub">
                  <Link to="#" className="sidebar-link">
                    <i className="bi bi-pen-fill"></i>
                    <span>Form Editor</span>
                  </Link>
                  <ul className="submenu ">
                    <li className="submenu-item ">
                      <Link to="form-editor-quill.html">Quill</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="form-editor-ckeditor.html">CKEditor</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="form-editor-summernote.html">Summernote</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="form-editor-tinymce.html">TinyMCE</Link>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-item  ">
                  <Link to="table.html" className="sidebar-link">
                    <i className="bi bi-grid-1x2-fill"></i>
                    <span>Table</span>
                  </Link>
                </li>

                <li className="sidebar-item  ">
                  <Link to="table-datatable.html" className="sidebar-link">
                    <i className="bi bi-file-earmark-spreadsheet-fill"></i>
                    <span>Datatable</span>
                  </Link>
                </li>

                <li className="sidebar-title">Extra UI</li>

                <li className="sidebar-item  has-sub">
                  <Link to="#" className="sidebar-link">
                    <i className="bi bi-pentagon-fill"></i>
                    <span>Widgets</span>
                  </Link>
                  <ul className="submenu ">
                    <li className="submenu-item ">
                      <Link to="ui-widgets-chatbox.html">Chatbox</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="ui-widgets-pricing.html">Pricing</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="ui-widgets-todolist.html">To-do List</Link>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-item  has-sub">
                  <Link to="#" className="sidebar-link">
                    <i className="bi bi-egg-fill"></i>
                    <span>Icons</span>
                  </Link>
                  <ul className="submenu ">
                    <li className="submenu-item ">
                      <Link to="ui-icons-bootstrap-icons.html">
                        Bootstrap Icons{" "}
                      </Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="ui-icons-fontawesome.html">Fontawesome</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="ui-icons-dripicons.html">Dripicons</Link>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-item  has-sub">
                  <Link to="#" className="sidebar-link">
                    <i className="bi bi-bar-chart-fill"></i>
                    <span>Charts</span>
                  </Link>
                  <ul className="submenu ">
                    <li className="submenu-item ">
                      <Link to="ui-chart-chartjs.html">ChartJS</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="ui-chart-apexcharts.html">Apexcharts</Link>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-item  ">
                  <Link to="ui-file-uploader.html" className="sidebar-link">
                    <i className="bi bi-cloud-arrow-up-fill"></i>
                    <span>File Uploader</span>
                  </Link>
                </li>

                <li className="sidebar-item  has-sub">
                  <Link to="#" className="sidebar-link">
                    <i className="bi bi-map-fill"></i>
                    <span>Maps</span>
                  </Link>
                  <ul className="submenu ">
                    <li className="submenu-item ">
                      <Link to="ui-map-google-map.html">Google Map</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="ui-map-jsvectormap.html">JS Vector Map</Link>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-title">Pages</li>

                <li className="sidebar-item  ">
                  <Link to="application-email.html" className="sidebar-link">
                    <i className="bi bi-envelope-fill"></i>
                    <span>Email Application</span>
                  </Link>
                </li>

                <li className="sidebar-item  ">
                  <Link to="application-chat.html" className="sidebar-link">
                    <i className="bi bi-chat-dots-fill"></i>
                    <span>Chat Application</span>
                  </Link>
                </li>

                <li className="sidebar-item  ">
                  <Link to="application-gallery.html" className="sidebar-link">
                    <i className="bi bi-image-fill"></i>
                    <span>Photo Gallery</span>
                  </Link>
                </li>

                <li className="sidebar-item  ">
                  <Link to="application-checkout.html" className="sidebar-link">
                    <i className="bi bi-basket-fill"></i>
                    <span>Checkout Page</span>
                  </Link>
                </li>

                <li className="sidebar-item  has-sub">
                  <Link to="#" className="sidebar-link">
                    <i className="bi bi-person-badge-fill"></i>
                    <span>Authentication</span>
                  </Link>
                  <ul className="submenu ">
                    <li className="submenu-item ">
                      <Link to="auth-login.html">Login</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="auth-register.html">Register</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="auth-forgot-password.html">
                        Forgot Password
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-item  has-sub">
                  <Link to="#" className="sidebar-link">
                    <i className="bi bi-x-octagon-fill"></i>
                    <span>Errors</span>
                  </Link>
                  <ul className="submenu ">
                    <li className="submenu-item ">
                      <Link to="error-403.html">403</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="error-404.html">404</Link>
                    </li>
                    <li className="submenu-item ">
                      <Link to="error-500.html">500</Link>
                    </li>
                  </ul>
                </li>

                <li className="sidebar-title">Raise Support</li>

                <li className="sidebar-item  ">
                  <Link
                    to="https://zuramai.github.io/mazer/docs"
                    className="sidebar-link"
                  >
                    <i className="bi bi-life-preserver"></i>
                    <span>Documentation</span>
                  </Link>
                </li>

                <li className="sidebar-item  ">
                  <Link
                    to="https://github.com/zuramai/mazer/blob/main/CONTRIBUTING.md"
                    className="sidebar-link"
                  >
                    <i className="bi bi-puzzle"></i>
                    <span>Contribute</span>
                  </Link>
                </li>

                <li className="sidebar-item  ">
                  <Link
                    to="https://github.com/zuramai/mazer#donate"
                    className="sidebar-link"
                  >
                    <i className="bi bi-cash"></i>
                    <span>Donate</span>
                  </Link>
                </li>
              </ul>
            </div>
            <button className="sidebar-toggler btn x">
              <i data-feather="x"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Sidebar;
