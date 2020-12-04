import React, { useState } from "react";
import "./Login.css";
import {Link} from 'react-router-dom'

export const Login = () => {
  return (
    <div className="_login">
      <header className="register__header">
                <p>Happy Pet</p>
            </header>
    <div className="Login">

      <h2>Login</h2>

      <form>
        <input type="text" placeholder="Username"></input>
        <br />
        
        <input type="password" placeholder="Password"></input>
        <br />
        <div className="linkreg">
          <Link to="/Register">no tienes cuenta?</Link>
        </div>
        
        <button type="submit" className="enviar">
            Login
          </button> 
          
      </form>
    </div>
    </div>
  );
}

