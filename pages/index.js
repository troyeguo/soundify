import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { get } from "lodash/object";
import Link from "next/link";
import Router from "next/router";
import withAuthUser from "../utils/pageWrappers/withAuthUser";
import withAuthUserInfo from "../utils/pageWrappers/withAuthUserInfo";
import logout from "../utils/auth/logout";
import styles from "../styles/index.module.css";
import FirebaseAuth from "../components/FirebaseAuth";
const Index = (props) => {
  const { AuthUserInfo, data } = props;
  const AuthUser = get(AuthUserInfo, "AuthUser", null);
  const { favoriteFood } = data;

  return (
    <div>
      <img
        src="/images/background.png"
        alt=""
        className="background"
        style={{ width: "calc(100% - 320px)", float: "left" }}
      />
      <div className={styles.logo}>
        <Link href="/">
          <div>
            <img className={styles.logoImg} src="/icons/logo.png" alt="" />
            <span className={styles.logoText}>Soundify</span>
          </div>
        </Link>
      </div>
      <div className={styles.enterContainer}>
        {!AuthUser ? (
          <div>
            <p className={styles.enterTitle}>Enter Soundify</p>
            <div>
              <FirebaseAuth />
            </div>
          </div>
        ) : (
          <div>
            <p className={styles.welcomeTitle}>Welcome Back</p>
            <img
              className={styles.welcomeAvatar}
              src="/images/avatar.jpeg"
              alt=""
            />
            <p className={styles.welcomeName}>Troye Guo</p>
            <div
              className={styles.welcomeButton}
              onClick={async () => {
                Router.push("/home");
              }}
            >
              Enter Soudify
            </div>
            <p
              onClick={async () => {
                try {
                  await logout();
                  // Router.push("/");
                } catch (e) {
                  console.error(e);
                }
              }}
              className={styles.signOutText}
            >
              Sign out
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Just an example.
const mockFetchData = async (userId) => ({
  user: {
    ...(userId && {
      id: userId,
    }),
  },
  favoriteFood: "pizza",
});

Index.getInitialProps = async (ctx) => {
  // Get the AuthUserInfo object. This is set in `withAuthUser.js`.
  // The AuthUserInfo object is available on both the server and client.
  const AuthUserInfo = get(ctx, "myCustomData.AuthUserInfo", null);
  const AuthUser = get(AuthUserInfo, "AuthUser", null);

  // You can also get the token (e.g., to authorize a request when fetching data)
  // const AuthUserToken = get(AuthUserInfo, 'token', null)

  // You can fetch data here.
  const data = await mockFetchData(get(AuthUser, "id"));

  return {
    data,
  };
};

Index.displayName = "Index";

Index.propTypes = {
  AuthUserInfo: PropTypes.shape({
    AuthUser: PropTypes.shape({
      id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      emailVerified: PropTypes.bool.isRequired,
    }),
    token: PropTypes.string,
  }),
  data: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
    favoriteFood: PropTypes.string.isRequired,
  }).isRequired,
};

Index.defaultProps = {
  AuthUserInfo: null,
};

// Use `withAuthUser` to get the authed user server-side, which
// disables static rendering.
// Use `withAuthUserInfo` to include the authed user as a prop
// to your component.
export default withAuthUser(withAuthUserInfo(Index));
