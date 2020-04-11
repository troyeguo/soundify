import { withRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducer";
import styles from "../styles/sidebar.module.css";
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
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <Link href="/">
            <div>
              <img className={styles.logoImg} src="/icons/logo.png" alt="" />
              <span className={styles.logoText}>Soundify</span>
            </div>
          </Link>
        </div>

        <ul className={styles.menu}>
          {menuList.map((item, index) => {
            return (
              <li key={item} className={styles.menuList}>
                <img src={`/icons/${item}.svg`} alt="" />
                <span className={styles.menuText}>{item}</span>
                {index === currentIndex ? (
                  <div className={styles.menuSelector}></div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
