import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { loginSuccess } from "../reducers/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSuccess = (user) => {
    const { name, email, photoUrl } = user;
    dispatch(loginSuccess({ name, email, photoUrl }));
    navigate("/");
  };

  const handleLoginFailure = (error) => {
    console.log("Google login error:", error);
  };

  return (
    <div className="section__login">
      <h1 className="section__login__titleGlow">Login</h1>
      <h1 className="section__login__titleStr">Login</h1>

      <h1 className="section__login__title">Login</h1>

      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
      />
    </div>
  );
}

export default Login;
