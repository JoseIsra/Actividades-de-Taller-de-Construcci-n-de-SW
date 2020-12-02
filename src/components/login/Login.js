import React, { useState } from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="_login">
    <div className="Login">

      <h2>Login</h2>

      <form>
        <input type="text" placeholder="Username"></input>
        <br />
        <br />
        <input type="password" placeholder="Password"></input>
        <br />
        <button type="submit" className="enviar">
            Login
          </button> 
      </form>
    </div>
    </div>
  );
}

