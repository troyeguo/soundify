import React, { Component } from "react";
import styles from "../styles/login.module.css";
const displayText = [
  {
    title: "Stream your music with Soundify",
    subtitle: "A third party client for spotify",
    slogan: "Get Started",
    href: "http://localhost:3000/login",
  },
  {
    title: "Proudly made with Next.js",
    subtitle: "A server-side-render React framework",
    slogan: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    title: "Amazing tool from Troye Guo",
    subtitle: "Looking for a good job",
    slogan: "About Me",
    href: "http://102410.xyz",
  },
];
class Login extends Component {
  state = { currentIndex: 0 };
  handleClick = (index) => {
    this.setState({ currentIndex: index });
  };
  render() {
    const renderText = (index) => {
      return (
        <div>
          <div className={styles.subtitle}>{displayText[index].subtitle}</div>
          <div className={styles.title}>{displayText[index].title}</div>
          <a href={displayText[index].href}>
            <div
              className={styles.button}
              style={
                this.state.currentIndex === 0
                  ? {}
                  : {
                      borderColor: "rgba(88,88,88,1)",
                      color: "rgba(88,88,88,1)",
                    }
              }
            >
              <div>{displayText[index].slogan}</div>
            </div>
          </a>
        </div>
      );
    };
    const renderDot = () => {
      return [0, 1, 2].map((item, index) => {
        return (
          <div
            key={item}
            onClick={() => {
              this.setState({ currentIndex: item });
            }}
            className={styles.dot}
            style={
              this.state.currentIndex === index
                ? { opacity: 1 }
                : this.state.currentIndex === 0
                ? {}
                : {
                    backgroundColor: "rgba(88,88,88,1)",
                  }
            }
          ></div>
        );
      });
    };
    return (
      <div className={styles.root}>
        <div className={styles.infoContainer}>
          {this.state.currentIndex === 0 ? (
            <div className={styles.firstScreen}>{renderText(0)}</div>
          ) : this.state.currentIndex === 1 ? (
            <div className={styles.secondScreen}>{renderText(1)}</div>
          ) : (
            <div className={styles.thirdScreen}>{renderText(2)}</div>
          )}
          <div className={styles.dotContainer}>{renderDot()}</div>
        </div>
        <div
          className={styles.image}
          style={
            this.state.currentIndex !== 2
              ? {}
              : {
                  backgroundColor: "#E9EAE4",
                }
          }
        >
          <div className={styles.logo}>
            <div>
              <img
                className={styles.logoImg}
                src={
                  this.state.currentIndex === 0
                    ? "/icons/logo.png"
                    : "/icons/dark-logo.svg"
                }
                alt=""
              />
              <span
                className={styles.logoText}
                style={
                  this.state.currentIndex === 0
                    ? {}
                    : { color: "rgba(88,88,88,1)" }
                }
              >
                Soundify
              </span>
            </div>
          </div>
          {this.state.currentIndex === 0 ? (
            <img src="/images/bg0.png" alt="" className={styles.bg0} />
          ) : this.state.currentIndex === 1 ? (
            <img src="/images/bg1.jpg" alt="" className={styles.bg1} />
          ) : (
            <img src="/images/bg2.jpg" alt="" className={styles.bg2} />
          )}
        </div>
      </div>
    );
  }
}

export default Login;
