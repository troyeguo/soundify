import { withRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducer";
const menuList = ["Home", "Playlist", "Album", "Artist", "Search"];
const Sidebar = ({ children, router }) => {
  const { query: { query = "" } = {} } = router;
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [search, setSearch] = useState(query);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnSearch = () => {
    router.push(`/search?query=${search}`);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const UserDropDown = (
    <div>
      <div onClick={handleLogout}>登出</div>
    </div>
  );

  return (
    <div>
      <div className="sidebar">
        <div className="logo">
          <Link href="/">
            <div>
              <img className="logo-img" src="/logo.png" alt="" />
              <span className="logo-text">Soundify</span>
            </div>
          </Link>
        </div>

        <ul className="menu">
          {menuList.map((item, index) => {
            return (
              <li key={item} className="menu-list">
                <img src={`/${item}.svg`} alt="" />
                <span className="menu-text">{item}</span>
                {index === currentIndex ? (
                  <div className="menu-selector"></div>
                ) : null}
              </li>
            );
          })}
        </ul>
        <style jsx>
          {`
            .sidebar {
              position: absolute;
              left: 0;
              top: 0;
              width: 169px;
              height: 100%;
              background-color: #4b4fd3;
              color: white;
            }
            .logo {
              width: 100%;
              padding: 33px 0px 45px;
              display: flex;
              justify-content: center;
              cursor: pointer;
            }
            .logo-img {
              width: 42px;
              height: 42px;
            }
            .logo-text {
              font-size: 20px;
              margin-left: 10px;
              position: relative;
              bottom: 10px;
            }
            .menu-list {
              height: 62px;
              position: relative;
              cursor: pointer;
              padding-left: 40px;
            }
            .menu-text {
              font-size: 17px;
              margin-left: 10px;
              position: relative;
              bottom: 3px;
            }
            .menu-selector {
              width: 150px;
              height: 44px;
              background: rgba(255, 255, 255, 1);
              opacity: 0.15;
              border-radius: 12px;
              position: absolute;
              right: 10px;
              bottom: 28px;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
