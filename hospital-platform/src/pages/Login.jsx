import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { loginUser } from "../api";
import { CiHospital1 } from "react-icons/ci";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({ username, password });
   // console.log(token);
    setToken(token);
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/*
        <div
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        */}
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Proceed to Log-in
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label for="email-address" class="sr-only">
                Email address or Username
              </label>
              <input
                id="email-address"
                onChange={(e) => setUsername(e.target.value)}
                name="email"
                type="text"
                autocomplete="email"
                required
                class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Username or Email address"
              ></input>
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
