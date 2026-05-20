import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
import "../styles/Header.css";

function Header({ openSidebar }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const getInitials = (email) => {
    if (!email) return "U";
    return email.charAt(0).toUpperCase();
  };

  return (
    <header className="header">
      <button className="header-menu-btn" onClick={openSidebar}>
        ☰
      </button>

      <div className="header-search">
        <input type="text" placeholder="🔍 Search..." />
      </div>

      <div className="header-profile">
        <div className="header-notification">🔔</div>
        <div className="header-user">
          <div className="header-avatar">{getInitials(user?.email)}</div>
          <div className="header-user-info">
            <p className="header-user-name">Admin</p>
            <p className="header-user-email">{user?.email}</p>
          </div>
        </div>
        <button className="header-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
