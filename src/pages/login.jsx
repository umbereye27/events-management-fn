import React, { useState } from "react"
import Header from "../components/header";
import instance from "../utils/axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


export default function Login({ setAuthState, setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      toast.error('Please enter both email and password');
      return;
    }
    instance.post('/auth/login',{username,password})
      .then((response) => {
        console.log(response)
        if(response.data){
          toast.success(`Login successfully`)
          localStorage.setItem('Token',response.data.token)
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        toast.error(`${error}`)
        setError(error.message);
      });
  };

  return (
    <>
      <Header />
      <div className="flex w-full h-80 ">
        <div className="w-full flex items-center justify-center lg:w-1/2 pt-96">
          <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl  border-2 border-gray-100">
            <h1 className="text-5xl font-semibold px-40 mb-5 text-pink-700">Login</h1>
            <p className="font-medium text-lg text-gray-500 mt-4 px-20">
              Welcome back! Please enter your details.
            </p>
            <div className="mt-8">
              <div className="flex flex-col">
                <label className="text-lg font-medium">User Name</label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="inputs"
                  placeholder="Enter your password"
                  type={"username"}
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-lg font-medium">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="inputs"
                  placeholder="Enter your password"
                  type={"password"}
                />
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <div className="mt-8 flex justify-between items-center">
                <div>
                  <input type="checkbox" id="remember" />
                  <label
                    className="ml-2 font-medium text-base"
                    htmlFor="remember"
                  >
                    Remember for 30 days
                  </label>
                </div>
                <button className="font-medium text-base text-violet-500">
                  Forgot password
                </button>
              </div>
              <div className="mt-8 flex flex-col gap-y-4">
                <button
                  onClick={handleLogin}
                  className="btn"
                >
                  Sign in
                </button>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <p className="font-medium text-base">
                  Don't have an account?
                </p>
                <button
                  onClick={() => setAuthState("register")}
                  className="ml-2 font-medium text-base text-violet-500"
                >
                  <a href="/register"> Sign up</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden relative w-1/2 lg:flex items-center justify-center bg-white h-200 mt-96 ">
          <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-spin" />
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
        </div>
      </div>
    </>
  );
}
