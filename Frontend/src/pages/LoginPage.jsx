import React, { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendURL } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;

      if (currentState === "SignUp") {
        response = await axios.post(backendURL + "/api/user/register", {
          name,
          email,
          password,
        });
      } else {
        response = await axios.post(backendURL + "/api/user/login", {
          email,
          password,
        });
      }

      if (response?.data?.token) {
        const token = response.data.token;
        setToken(token);
        localStorage.setItem("token", token);
        navigate("/");
      } else if (response?.data && response?.data?.success === false) {
        toast.error(response.data.message || "Authentication failed");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      const message = error?.response?.data?.message || "Authentication error";
      toast.error(message);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Enter your name"
          required
        />
      )}
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Enter your email"
        required
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Enter your password"
        required
      />
      <div className="w-full flex justify-between text-sm -mt-2">
        <p>Forget your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("SignUp")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4 w-full">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default LoginPage;
