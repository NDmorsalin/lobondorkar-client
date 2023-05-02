import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useAuth } from "../../provider/Auth/AuthProvider";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container px-8 mx-auto">
      <div className="navbar bg-slate-800 rounded-b-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "btn btn-primary" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/parent"
                  className={({ isActive }) =>
                    isActive ? "btn btn-primary" : ""
                  }
                >
                  Parent
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "btn btn-primary" : ""
                  }
                  to="/"
                >
                  Item 3
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to='/' className="btn btn-ghost normal-case text-xl">
            LobonDorkan
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-primary" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-primary" : ""
                }
                to="/parent"
              >
                Parent
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-primary" : ""
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <FaHeart />
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <NavLink
                        to="/favorite"
                        className="btn btn-primary btn-block"
                      >
                        View cart
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink
                      to="/profile"
                      className={({ isActive }) =>
                        `${isActive ? "btn btn-primary" : ""} justify-between`
                      }
                    >
                      Profile
                      <span className="badge">New</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "btn btn-primary" : ""
                      }
                      to="/settings"
                    >
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "btn btn-primary" : ""
                      }
                      to="/logout"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
              <button type="button" onClick={logout} className="btn btn-warning  ">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-primary" : ""
                }
                to="/auth/login"
              >
                Login
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive ? "btn btn-primary" : ""
                }
                to="/auth/register"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
