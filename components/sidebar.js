import React, { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/sidebar.module.css";
const menuList = ["Home", "Discover", "Playlist", "Album", "Artist"];
class Sidebar extends Component {
  state = { currentIndex: 0 };
  handleClick = (index) => {
    this.setState({ currentIndex: index });
  };
  render() {
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
                <Link href={`/${item}`} key={item}>
                  <li
                    className={styles.menuList}
                    onClick={() => {
                      this.handleClick(index);
                    }}
                  >
                    <img src={`/icons/${item}.svg`} alt="" />
                    <span className={styles.menuText}>{item}</span>
                    {index === this.state.currentIndex ? (
                      <div className={styles.menuSelector}></div>
                    ) : null}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
