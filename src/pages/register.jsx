import React, { useState } from "react";

import Header from "../components/header";
import instance from "../utils/axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Register({ setAuthState, setUser }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUpHandle = () => {
    instance.post('/auth/signup',{username,email,password})
    .then((response) => {
      toast.success(`${response.message} Now navigate to login`)
    })
    .catch((error) => {
      console.log(error)
      toast.error(`${error.response.data.message}`)
      setError(error.message);
    });
  };

  return (
    < >
      <Header />

      <div className="flex justify-center">
        <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100 ">
          <h1 className="text-5xl font-semibold text-pink-700 px-44 mb-5">Register</h1>
          <p className="font-medium text-lg text-gray-500 mt-4 px-40">Welcome!! Please enter your details.</p>
          <div className="mt-8">
            <div className="flex flex-col">
              <label className="text-lg font-medium">User Name</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="inputs"
                placeholder="Enter your username"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="inputs"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="inputs"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div>
                <input type="checkbox" id="remember" />
                <label className="ml-2 font-medium text-base" htmlFor="remember">Remember for 30 days</label>
              </div>
            </div>
            <div>
              <button
                onClick={onSignUpHandle}
                className="btn">
                Register
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium text-base">I have an account?</p>
              <a href="/login">
                <button className="ml-2 font-medium text-base text-violet-500">Sign in</button>
              </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
