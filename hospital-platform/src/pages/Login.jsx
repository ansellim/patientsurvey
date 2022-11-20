import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { loginUser } from "../api";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({ username, password });
    console.log(token);
    setToken(token);
  };

  return (
    <div>
      <h1>Please Log in</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>
            Username or Email
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </p>
        </label>
        <label>
          <p>
            Password
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
