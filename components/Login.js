import React, { Component } from "react";
import styles from "../styles/login.module.css";
import Fade from "react-reveal/Fade";
console.log(process.env.NODE_ENV, "process.env.NODE_ENV");
const displayText = [
  {
    title: "Stream your music with Soundify",
    subtitle: "A third party client for spotify",
    slogan: "Get Started",
    href:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/login"
        : "https://soundify.960960.xyz/api/login",
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
    href: "http://960960.xyz",
  },
];
class Login extends Component {
  state = { currentIndex: 0 };
  handleClick = (index) => {
    this.setState({ currentIndex: index });
  };
  componentDidMount() {
    let isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;
    let doc = document;
    if (isFirefox)
      doc.addEventListener("DOMMouseScroll", this.mouseFirefox, false);
    else {
      doc.addEventListener("mousewheel", this.mouseChrome, false);
      // doc.addEventListener("mousewheel", recordCfi, false);
    }
  }

  mouseFirefox = (event) => {
    event.preventDefault();

    if (event.detail < 0) {
      if (this.state.currentIndex > 0) {
        this.setState({ currentIndex: this.state.currentIndex - 1 });

        return false;
      }
    }

    if (event.detail > 0) {
      if (this.state.currentIndex < 2) {
        this.setState({ currentIndex: this.state.currentIndex + 1 });

        return false;
      }
    }
  };

  mouseChrome = (event) => {
    event.preventDefault();
    // console.log("wheel moving");

    if (event.wheelDelta > 0) {
      if (this.state.currentIndex > 0) {
        this.setState({ currentIndex: this.state.currentIndex - 1 });

        return false;
      }
    }

    if (event.wheelDelta < 0) {
      if (this.state.currentIndex < 2) {
        this.setState({ currentIndex: this.state.currentIndex + 1 });

        return false;
      }
    }
  };
  render() {
    const renderText = (index) => {
      return (
        <div>
          <Fade down>
            <div className={styles.subtitle}>{displayText[index].subtitle}</div>
          </Fade>
          <div className={styles.title}>{displayText[index].title}</div>
          <a href={displayText[index].href} target="_blank">
            <div className={styles.button}>
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
            style={this.state.currentIndex === index ? { opacity: 1 } : {}}
          ></div>
        );
      });
    };
    return (
      <div className={styles.root}>
        <div className={styles.infoContainer}>
          {this.state.currentIndex === 0 ? (
            <div className={styles.firstScreen}>{renderText(0)}</div>
          ) : null}
          {this.state.currentIndex === 1 ? (
            <div className={styles.secondScreen}>{renderText(1)}</div>
          ) : null}
          {this.state.currentIndex === 2 ? (
            <div className={styles.thirdScreen}>{renderText(2)}</div>
          ) : null}

          <div className={styles.dotContainer}>{renderDot()}</div>
        </div>
        <div
          className={styles.image}
          style={
            this.state.currentIndex === 1
              ? { backgroundColor: "#E5E2DD" }
              : this.state.currentIndex === 2
              ? { backgroundColor: "#EAE9E5" }
              : {}
          }
        >
          <div className={styles.logo}>
            <div>
              <img
                className={styles.logoImg}
                src="/icons/dark-logo.svg"
                alt=""
              />
              <span className={styles.logoText}>Soundify</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="/images/bg0.png"
              alt=""
              className={styles.bg0}
              style={this.state.currentIndex === 0 ? {} : { display: "none" }}
            />
            <img
              src="/images/bg1.png"
              alt=""
              className={styles.bg1}
              style={this.state.currentIndex === 1 ? {} : { display: "none" }}
            />
            <img
              src="/images/bg2.png"
              alt=""
              className={styles.bg2}
              style={this.state.currentIndex === 2 ? {} : { display: "none" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
