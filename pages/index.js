import getConfig from "next/config";
import Router, { withRouter } from "next/router";
import { useSelector } from "react-redux";
import { request } from "../lib/api";
import initCache from "../lib/clientCache";
import Content from "../components/Content";
const { publicRuntimeConfig } = getConfig();

const { cache, useCache } = initCache();

const Index = ({ userRepos, starred, router }) => {
  const user = useSelector((store) => store.user);
  const tabKey = router.query.key || "1";

  useCache("cache", {
    userRepos,
    starred,
  });

  if (!user || !user.id) {
    return (
      <div className="root">
        <p>亲，您还没有登录哦</p>
        <a href={publicRuntimeConfig.OAUTH_URL}>点击登录</a>
      </div>
    );
  }

  const { avatar_url, login, name, bio, email } = user;

  return <Content />;
};

Index.getInitialProps = cache(async ({ ctx, reduxStore }) => {
  //判断用户是否登出
  const { user } = reduxStore.getState();
  if (!user || !user.id) {
    return {};
  }
});

export default withRouter(Index);
