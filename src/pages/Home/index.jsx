import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { loadUser } from "../../redux-flow/logics/test";
import "./style.css";

function Home({ user, dispatch, loading, error, errorMessage }) {
  const [gitUser, setGitUser] = useState("");

  const onLoadUser = () => {
    dispatch(loadUser(gitUser));
  };

  return (
    <div className="container">
      <span className="app-span">Test the integration with github.</span>
      <div className="container-search">
        <input
          className="input-user"
          placeholder="Search GitHub user name"
          onChange={(event) => setGitUser(event.target.value)}
          type="text"
        />
        <button className="button-submit" onClick={onLoadUser}>
          Search
        </button>
      </div>
      <div className="response-container">
        {loading && <span className="app-span">loading...</span>}
        {!user.name && !error && !loading && (
          <span className="app-span">awaiting user</span>
        )}
        {user && user.name && !loading && (
          <div className="container-user">
            <img
              className="user-profile"
              src={user.avatar_url}
              alt="User profile"
            />
            <div className="user-info">
              <h2 className="heading3">{user.name}</h2>
              <a className="button-submit marginbottom-10" href={user.html_url}>
                Go to GitHub
              </a>
              <span className="app-span">Repos: {user.public_repos}</span>
              <span className="app-span">Followers: {user.followers}</span>
              <span className="app-span">Following: {user.following}</span>
              <span className="app-span">Company: {user.company}</span>
            </div>
          </div>
        )}
        {error && errorMessage && <span className="app-span">{errorMessage}</span>}
      </div>
    </div>
  );
}

export default connect((state) => ({
  user: state.test.user,
  loading: state.test.loading,
  error: state.test.error,
  errorMessage: state.test.errorMessage,
}))(Home);

Home.propTypes = {
  user: PropTypes.shape({}),
  error: PropTypes.bool,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
  loadUser: PropTypes.func,
};

Home.defaultProps = {
  user: {},
  errorMessage: "",
  error: false,
  loading: false,
  loadUser: () => {},
};
